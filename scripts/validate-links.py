#!/usr/bin/env python3
"""
Pre-commit hook to validate all image URLs and article links in data.js
"""

import re
import sys
import urllib.request
import urllib.error
import ssl
import json
from concurrent.futures import ThreadPoolExecutor, as_completed

# Create SSL context that doesn't verify certificates (for checking if URLs exist)
ssl_context = ssl.create_default_context()
ssl_context.check_hostname = False
ssl_context.verify_mode = ssl.CERT_NONE

def extract_urls_from_datajs(filepath):
    """Extract all URLs from data.js file"""
    with open(filepath, 'r') as f:
        content = f.read()

    # Find all URLs (image and article URLs)
    url_pattern = r'https?://[^\s\'"<>]+'
    urls = re.findall(url_pattern, content)

    # Clean up URLs (remove trailing commas, quotes, etc.)
    cleaned_urls = []
    for url in urls:
        url = url.rstrip('",\'})')
        if url and not url.endswith('.'):
            cleaned_urls.append(url)

    return list(set(cleaned_urls))

def check_url(url, timeout=10):
    """Check if a URL is accessible. Returns (url, status, error)"""
    try:
        req = urllib.request.Request(
            url,
            headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'}
        )
        response = urllib.request.urlopen(req, timeout=timeout, context=ssl_context)
        return (url, response.status, None)
    except urllib.error.HTTPError as e:
        return (url, e.code, str(e))
    except urllib.error.URLError as e:
        return (url, None, str(e.reason))
    except Exception as e:
        return (url, None, str(e))

def main():
    datajs_path = 'docs/data.js'

    print(f"Validating links in {datajs_path}...")

    try:
        urls = extract_urls_from_datajs(datajs_path)
    except FileNotFoundError:
        print(f"Error: {datajs_path} not found")
        sys.exit(1)

    print(f"Found {len(urls)} unique URLs to check")

    failed_urls = []
    passed = 0

    # Check URLs in parallel
    with ThreadPoolExecutor(max_workers=10) as executor:
        futures = {executor.submit(check_url, url): url for url in urls}

        for future in as_completed(futures):
            url, status, error = future.result()
            if status and 200 <= status < 400:
                passed += 1
                print(f"  OK: {url[:60]}...")
            else:
                failed_urls.append((url, status, error))
                print(f"  FAIL ({status}): {url[:60]}... - {error}")

    print(f"\n{'='*60}")
    print(f"Results: {passed} passed, {len(failed_urls)} failed")

    if failed_urls:
        print(f"\nFailed URLs:")
        for url, status, error in failed_urls:
            print(f"  - {url}")
            print(f"    Status: {status}, Error: {error}")
        print(f"\nPlease fix the broken links before committing.")
        sys.exit(1)
    else:
        print("All links are valid!")
        sys.exit(0)

if __name__ == '__main__':
    main()
