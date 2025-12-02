// Data for the tech political shift timeline
// switchDate: The defining moment of public political shift
// switchRank: Order of switching (1 = first, higher = later) - determines Y position

const timelineData = [
    {
        id: "peter-thiel",
        name: "Peter Thiel",
        emoji: "🏛️",
        role: "Palantir Founder, Investor",
        type: "vc",
        switchDate: "2016-07-21",
        switchRank: 1,
        switchEvent: "RNC convention speech endorsing Trump - only major tech figure to support him",
        company: "Palantir, Founders Fund",
        bio: "The original. Anti-DEI since 1995's 'Diversity Myth'. Funded JD Vance (now VP). Never wavered from contrarian right position.",
        articles: [
            {
                title: "Peter Thiel's RNC Speech",
                url: "https://www.nytimes.com/2016/07/22/us/politics/peter-thiel-republican-convention-speech.html",
                source: "NY Times"
            },
            {
                title: "How Peter Thiel Became the Most Powerful Man in Politics",
                url: "https://www.vanityfair.com/news/2024/11/peter-thiel-most-powerful-man-in-politics",
                source: "Vanity Fair"
            }
        ]
    },
    {
        id: "palmer-luckey",
        name: "Palmer Luckey",
        emoji: "🥽",
        role: "Oculus Founder, Anduril CEO",
        type: "ceo",
        switchDate: "2016-09-22",
        switchRank: 2,
        switchEvent: "Funded pro-Trump 'Nimble America' meme group, left Facebook shortly after",
        company: "Oculus (sold to FB), Anduril",
        bio: "Early VR pioneer who secretly funded Trump memes. Now runs defense tech company Anduril. Left Facebook after controversy.",
        articles: [
            {
                title: "Palmer Luckey: The Facebook Near-Billionaire Secretly Funding Trump's Meme Machine",
                url: "https://www.thedailybeast.com/palmer-luckey-the-facebook-near-billionaire-secretly-funding-trumps-meme-machine",
                source: "Daily Beast"
            }
        ]
    },
    {
        id: "elon-musk",
        name: "Elon Musk",
        emoji: "🚀",
        role: "Tesla/SpaceX/X CEO",
        type: "ceo",
        switchDate: "2022-05-18",
        switchRank: 3,
        switchEvent: "Announced he would vote Republican, began political shift accelerating through Twitter acquisition",
        company: "Tesla, SpaceX, X (Twitter)",
        bio: "The megaphone. COVID restrictions triggered shift. Bought Twitter, made it MAGA platform. Spent $100M+ on Trump 2024. Now runs DOGE.",
        articles: [
            {
                title: "Elon Musk says he'll vote Republican",
                url: "https://www.reuters.com/world/us/elon-musk-says-hell-vote-republican-2022-05-18/",
                source: "Reuters"
            },
            {
                title: "How Elon Musk Became a Leading Voice for MAGA",
                url: "https://www.nytimes.com/2024/10/15/us/politics/elon-musk-trump.html",
                source: "NY Times"
            }
        ]
    },
    {
        id: "david-sacks",
        name: "David Sacks",
        emoji: "🎙️",
        role: "Craft Ventures, All-In Pod",
        type: "vc",
        switchDate: "2022-06-01",
        switchRank: 4,
        switchEvent: "All-In podcast became increasingly political, anti-Democratic positioning",
        company: "Craft Ventures, PayPal (former)",
        bio: "Co-authored 'The Diversity Myth' with Thiel in 1995. All-In podcast political vehicle. Hosted Trump fundraiser. Now 'AI/Crypto Czar'.",
        articles: [
            {
                title: "David Sacks to Host Trump Fundraiser in San Francisco",
                url: "https://www.nytimes.com/2024/06/06/us/politics/david-sacks-trump-fundraiser-san-francisco.html",
                source: "NY Times"
            }
        ]
    },
    {
        id: "marc-andreessen",
        name: "Marc Andreessen",
        emoji: "💰",
        role: "a16z Co-Founder",
        type: "vc",
        switchDate: "2023-10-16",
        switchRank: 5,
        switchEvent: "Published 'Techno-Optimist Manifesto' explicitly naming DEI, ESG as enemies",
        company: "Andreessen Horowitz (a16z)",
        bio: "The ideologist. Netscape founder. Manifesto declared war on 'woke'. 'Little Tech Agenda' in 2024. Explicit Trump endorsement.",
        articles: [
            {
                title: "The Techno-Optimist Manifesto",
                url: "https://a16z.com/the-techno-optimist-manifesto/",
                source: "a16z"
            },
            {
                title: "Why Andreessen Horowitz Is Betting on Trump",
                url: "https://www.wired.com/story/andreessen-horowitz-trump-crypto/",
                source: "Wired"
            }
        ]
    },
    {
        id: "chamath",
        name: "Chamath Palihapitiya",
        emoji: "🎤",
        role: "Social Capital, All-In Pod",
        type: "vc",
        switchDate: "2024-01-15",
        switchRank: 6,
        switchEvent: "Increasingly right-wing podcast positions, Vivek Ramaswamy alliance",
        company: "Social Capital",
        bio: "The provocateur. Former Facebook exec who criticized it. SPAC disasters. 'Nobody cares about Uyghurs' comments. All-In radicalization.",
        articles: [
            {
                title: "Chamath Palihapitiya Says 'Nobody Cares' About Uyghurs",
                url: "https://www.nbcnews.com/news/us-news/investor-chamath-palihapitiya-says-nobody-cares-about-uyghurs-draws-ba-rcna11769",
                source: "NBC News"
            }
        ]
    },
    {
        id: "ben-horowitz",
        name: "Ben Horowitz",
        emoji: "📈",
        role: "a16z Co-Founder",
        type: "vc",
        switchDate: "2024-07-16",
        switchRank: 7,
        switchEvent: "Co-endorsed Trump with Andreessen, despite historical Democratic donations",
        company: "Andreessen Horowitz (a16z)",
        bio: "The reluctant convert. Previously donated to Democrats. Framed Trump support as narrow crypto policy issue. 'Little Tech Agenda' co-author.",
        articles: [
            {
                title: "Ben Horowitz Explains Why He's Supporting Trump",
                url: "https://www.youtube.com/watch?v=OXVGqcRLNnE",
                source: "a16z YouTube"
            }
        ]
    },
    {
        id: "mark-zuckerberg",
        name: "Mark Zuckerberg",
        emoji: "👤",
        role: "Meta CEO",
        type: "ceo",
        switchDate: "2024-08-26",
        switchRank: 8,
        switchEvent: "Letter to Jim Jordan regretting COVID 'censorship', signaling major policy shift",
        company: "Meta (Facebook, Instagram, WhatsApp)",
        bio: "The transformation. From Trump ban to Mar-a-Lago dinner. Killed DEI, fact-checking. 'Masculine energy' comments. $1M inaugural donation.",
        articles: [
            {
                title: "Zuckerberg Says White House Pressured Facebook on Covid Posts",
                url: "https://www.nytimes.com/2024/08/26/business/media/zuckerberg-meta-white-house-covid.html",
                source: "NY Times"
            },
            {
                title: "Zuckerberg Has Dinner With Trump at Mar-a-Lago",
                url: "https://www.nytimes.com/2024/11/13/technology/zuckerberg-trump-mar-a-lago-dinner.html",
                source: "NY Times"
            },
            {
                title: "Meta Ends Fact-Checking Program",
                url: "https://www.bbc.com/news/articles/c0kvl13xnggo",
                source: "BBC"
            }
        ]
    },
    {
        id: "jeff-bezos",
        name: "Jeff Bezos",
        emoji: "📦",
        role: "Amazon Founder, WaPo Owner",
        type: "ceo",
        switchDate: "2024-10-25",
        switchRank: 9,
        switchEvent: "Blocked Washington Post from endorsing Kamala Harris, breaking tradition",
        company: "Amazon, Blue Origin, Washington Post",
        bio: "The pragmatist. Blocked his own newspaper's endorsement. Attended inauguration. AWS government contracts a factor.",
        articles: [
            {
                title: "Washington Post Won't Endorse in Presidential Race",
                url: "https://www.washingtonpost.com/style/media/2024/10/25/washington-post-endorsement-presidential-race/",
                source: "Washington Post"
            },
            {
                title: "Jeff Bezos Defends Decision to Block Harris Endorsement",
                url: "https://www.nytimes.com/2024/10/28/business/media/jeff-bezos-washington-post-endorsement.html",
                source: "NY Times"
            }
        ]
    },
    {
        id: "sundar-pichai",
        name: "Sundar Pichai",
        emoji: "🔍",
        role: "Alphabet/Google CEO",
        type: "ceo",
        switchDate: "2024-12-12",
        switchRank: 10,
        switchEvent: "Met with Trump at Mar-a-Lago as part of tech CEO outreach",
        company: "Alphabet (Google, YouTube)",
        bio: "The quiet pivot. From employee walkout days to firing Palestine protesters. Lost antitrust case, needs Trump DOJ leniency.",
        articles: [
            {
                title: "Google CEO Sundar Pichai Meets With Trump",
                url: "https://www.reuters.com/technology/google-ceo-pichai-meets-with-trump-transition-team-2024-12-13/",
                source: "Reuters"
            }
        ]
    },
    {
        id: "tim-cook",
        name: "Tim Cook",
        emoji: "🍎",
        role: "Apple CEO",
        type: "ceo",
        switchDate: "2025-01-20",
        switchRank: 11,
        switchEvent: "Attended Trump inauguration in prominent position",
        company: "Apple",
        bio: "The survivor. Has worked with every administration. Inauguration attendance despite privacy/values marketing. China business priority.",
        articles: [
            {
                title: "Tim Cook Among Tech CEOs at Trump Inauguration",
                url: "https://www.cnbc.com/2025/01/20/tech-ceos-attend-trump-inauguration.html",
                source: "CNBC"
            }
        ]
    },
    {
        id: "satya-nadella",
        name: "Satya Nadella",
        emoji: "🪟",
        role: "Microsoft CEO",
        type: "ceo",
        switchDate: "2025-01-20",
        switchRank: 12,
        switchEvent: "Attended Trump inauguration",
        company: "Microsoft",
        bio: "The pragmatist. Less dramatic than others. Azure government contracts matter. Quiet alignment over confrontation.",
        articles: [
            {
                title: "Tech Billionaires at Trump Inauguration",
                url: "https://www.bbc.com/news/articles/c62505z45g5o",
                source: "BBC"
            }
        ]
    }
];

// Timeline configuration
const timelineConfig = {
    startYear: 2016,
    endYear: 2025,
    minDate: new Date("2016-01-01"),
    maxDate: new Date("2025-12-31")
};
