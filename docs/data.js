// Data for the tech political shift timeline
// switchDate: The defining moment of public political shift
// switchRank: Order of switching (1 = first, higher = later) - determines Y position

const timelineData = [
    {
        id: "peter-thiel",
        name: "Peter Thiel",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Peter_Thiel_by_Gage_Skidmore.jpg/440px-Peter_Thiel_by_Gage_Skidmore.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Palmer_Luckey_Stage_Microphone.png/440px-Palmer_Luckey_Stage_Microphone.png",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/440px-Elon_Musk_-_54820081119_%28cropped%29.jpg",
        role: "Tesla/SpaceX/X CEO",
        type: "ceo",
        switchDate: "2022-05-18",
        switchRank: 4,
        switchEvent: "Announced he would vote Republican, began political shift accelerating through Twitter acquisition",
        company: "Tesla, SpaceX, X (Twitter)",
        bio: "The megaphone. COVID restrictions triggered shift. Bought Twitter, made it MAGA platform. Spent $100M+ on Trump 2024. Faced largest potential unrealized gains tax bill of any American. Now runs DOGE.",
        timeline: [
            { date: "2020-03-19", event: "Tweets 'coronavirus panic is dumb'", type: "tweet" },
            { date: "2020-05-11", event: "Defies Alameda County lockdown, reopens Tesla factory", type: "action" },
            { date: "2021-12-22", event: "Moves Tesla HQ from California to Texas", type: "action" },
            { date: "2022-04-14", event: "Offers to buy Twitter for $44B", type: "action" },
            { date: "2022-10-27", event: "Completes Twitter acquisition, fires executives", type: "action" },
            { date: "2023-11-17", event: "Endorses antisemitic tweet, advertisers flee", type: "tweet" },
            { date: "2024-07-13", event: "Formally endorses Trump after assassination attempt", type: "endorsement" },
            { date: "2024-10-19", event: "$1M daily giveaway to swing state voters begins", type: "action" }
        ],
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
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/David_Sacks_in_March_2025.jpg",
        role: "Craft Ventures, All-In Pod",
        type: "vc",
        switchDate: "2022-06-01",
        switchRank: 5,
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Marc_Andreessen-9_%28cropped%29.jpg/440px-Marc_Andreessen-9_%28cropped%29.jpg",
        role: "a16z Co-Founder",
        type: "vc",
        switchDate: "2023-10-16",
        switchRank: 6,
        switchEvent: "Published 'Techno-Optimist Manifesto' explicitly naming DEI, ESG as enemies",
        company: "Andreessen Horowitz (a16z)",
        bio: "The ideologist. Netscape founder. Manifesto declared war on 'woke'. 'Little Tech Agenda' called Harris unrealized gains tax 'the death of startups'. Explicit Trump endorsement.",
        timeline: [
            { date: "2021-06-04", event: "Tweets against 'woke capitalism' trend", type: "tweet" },
            { date: "2023-06-06", event: "AI blog post criticizes 'doomers' and regulation", type: "article" },
            { date: "2024-07-15", event: "Publishes 'Little Tech Agenda' attacking Harris tax plan", type: "article" },
            { date: "2024-07-16", event: "Officially endorses Trump with Ben Horowitz", type: "endorsement" }
        ],
        articles: [
            {
                title: "The Techno-Optimist Manifesto",
                url: "https://a16z.com/the-techno-optimist-manifesto/",
                source: "a16z"
            },
            {
                title: "The Little Tech Agenda",
                url: "https://a16z.com/the-little-tech-agenda/",
                source: "a16z"
            },
            {
                title: "Why Andreessen Horowitz Is Betting on Trump",
                url: "https://www.wired.com/story/andreessen-horowitz-trump-crypto/",
                source: "Wired"
            },
            {
                title: "Explaining Harris's 'unrealized' capital gains tax that billionaires hate",
                url: "https://fortune.com/2024/08/31/kamala-unrealized-capital-gains-tax-meaning-proposal-explained/",
                source: "Fortune"
            }
        ]
    },
    {
        id: "chamath",
        name: "Chamath Palihapitiya",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Chamath_Palihapitiya_in_2025.jpg/440px-Chamath_Palihapitiya_in_2025.jpg",
        role: "Social Capital, All-In Pod",
        type: "vc",
        switchDate: "2024-01-15",
        switchRank: 7,
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/TechCrunch_Disrupt_San_Francisco_2018_-_day_2_%2842713740520%29_%28cropped%29.jpg/440px-TechCrunch_Disrupt_San_Francisco_2018_-_day_2_%2842713740520%29_%28cropped%29.jpg",
        role: "a16z Co-Founder",
        type: "vc",
        switchDate: "2024-07-16",
        switchRank: 8,
        switchEvent: "Co-endorsed Trump with Andreessen, despite historical Democratic donations",
        company: "Andreessen Horowitz (a16z)",
        bio: "The reluctant convert. Previously donated to Democrats. Co-authored 'Little Tech Agenda' warning Harris tax would 'kill startups'. Framed Trump support as policy necessity.",
        articles: [
            {
                title: "Ben Horowitz Explains Why He's Supporting Trump",
                url: "https://www.youtube.com/watch?v=OXVGqcRLNnE",
                source: "a16z YouTube"
            },
            {
                title: "The Little Tech Agenda",
                url: "https://a16z.com/the-little-tech-agenda/",
                source: "a16z"
            }
        ]
    },
    {
        id: "mark-zuckerberg",
        name: "Mark Zuckerberg",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/F20250904AH-2824_%2854778373111%29_%28cropped%29.jpg",
        role: "Meta CEO",
        type: "ceo",
        switchDate: "2024-08-26",
        switchRank: 9,
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg/440px-Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg",
        role: "Amazon Founder, WaPo Owner",
        type: "ceo",
        switchDate: "2024-10-25",
        switchRank: 10,
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg/440px-Sundar_Pichai_-_2023_%28cropped%29.jpg",
        role: "Alphabet/Google CEO",
        type: "ceo",
        switchDate: "2024-12-12",
        switchRank: 11,
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/P20250806MR-0248_President_Donald_Trump_delivers_investment_remarks_alongside_Apple_CEO_Tim_Cook_%28cropped%29.jpg/440px-P20250806MR-0248_President_Donald_Trump_delivers_investment_remarks_alongside_Apple_CEO_Tim_Cook_%28cropped%29.jpg",
        role: "Apple CEO",
        type: "ceo",
        switchDate: "2025-01-20",
        switchRank: 12,
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/440px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg",
        role: "Microsoft CEO",
        type: "ceo",
        switchDate: "2025-01-20",
        switchRank: 13,
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
    },
    {
        id: "sam-altman",
        name: "Sam Altman",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29.jpg/440px-Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29.jpg",
        role: "OpenAI CEO",
        type: "ceo",
        switchDate: "2025-01-20",
        switchRank: 14,
        switchEvent: "Donated $1M personally to Trump inauguration fund, attended ceremony",
        company: "OpenAI",
        bio: "The AI kingmaker. Built ChatGPT empire. Personal $1M inauguration donation despite OpenAI's nonprofit origins. Needs regulatory favor for AGI ambitions.",
        articles: [
            {
                title: "Sam Altman Donates $1M to Trump Inauguration",
                url: "https://www.npr.org/2024/12/13/nx-s1-5227874/trump-bezos-zuckerberg-amazon-facebook-open-ai-meta-inauguration-fund",
                source: "NPR"
            },
            {
                title: "Tech CEOs at Trump Inauguration",
                url: "https://www.cbsnews.com/news/trump-inauguration-who-is-invited-attending/",
                source: "CBS News"
            }
        ]
    },
    {
        id: "shou-chew",
        name: "Shou Zi Chew",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/TikTok_CEO_Shou_Zi_Chew.jpg/440px-TikTok_CEO_Shou_Zi_Chew.jpg",
        role: "TikTok CEO",
        type: "ceo",
        switchDate: "2025-01-20",
        switchRank: 15,
        switchEvent: "Attended Trump inauguration days before potential TikTok ban, seated prominently",
        company: "TikTok (ByteDance)",
        bio: "The desperate diplomat. Singaporean CEO fighting US ban. Testified to Congress twice. Trump inauguration seat was survival politics—ban delayed 75 days after.",
        articles: [
            {
                title: "TikTok CEO at Trump Inauguration",
                url: "https://abcnews.go.com/Politics/mike-pence-joe-rogan-tech-ceos-attend-trumps/story?id=117888260",
                source: "ABC News"
            },
            {
                title: "Who Is TikTok CEO Shou Zi Chew",
                url: "https://www.biography.com/business-leaders/a43412047/shou-zi-chew-tiktok-hearing",
                source: "Biography"
            }
        ]
    },
    {
        id: "joe-lonsdale",
        name: "Joe Lonsdale",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Joe_Lonsdale.jpg/440px-Joe_Lonsdale.jpg",
        role: "8VC, Palantir Co-Founder",
        type: "vc",
        switchDate: "2020-06-01",
        switchRank: 3,
        switchEvent: "Announced move from Silicon Valley to Austin, citing political climate",
        company: "8VC, Palantir (co-founder), Cicero Institute",
        bio: "The exile. Palantir co-founder who left SF for Austin. Stanford Review editor (like Thiel). Founded conservative Cicero Institute. Major Trump fundraiser.",
        articles: [
            {
                title: "Why Palantir Co-Founder Joe Lonsdale Is Leaving Silicon Valley",
                url: "https://www.cnbc.com/2020/11/06/palantir-co-founder-joe-lonsdale-leaving-silicon-valley.html",
                source: "CNBC"
            },
            {
                title: "Who's Who in Trump's Silicon Valley Entourage",
                url: "https://www.siliconvalley.com/2024/12/23/whos-who-in-trumps-new-silicon-valley-entourage/",
                source: "Silicon Valley"
            }
        ]
    },
    {
        id: "dara-khosrowshahi",
        name: "Dara Khosrowshahi",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/CEO_of_Uber_Technologies_Dara_Khosrowshahi_in_New_York_-_2019_%28cropped%29.jpg/440px-CEO_of_Uber_Technologies_Dara_Khosrowshahi_in_New_York_-_2019_%28cropped%29.jpg",
        role: "Uber CEO",
        type: "ceo",
        switchDate: "2025-01-20",
        switchRank: 16,
        switchEvent: "Attended Trump inauguration",
        company: "Uber",
        bio: "The pragmatic immigrant. Iranian-American CEO. Quietly attended inauguration despite Trump's past immigration policies. Gig economy regulation stakes.",
        articles: [
            {
                title: "Tech CEOs Attend Trump Inauguration",
                url: "https://www.entrepreneur.com/business-news/tech-business-leaders-attending-trumps-inauguration-list/485804",
                source: "Entrepreneur"
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

// Major events shown as vertical lines across the timeline
const majorEvents = [
    { date: "2016-11-08", label: "Trump elected", color: "#dc2626" },
    { date: "2020-03-13", label: "COVID emergency", color: "#f59e0b" },
    { date: "2020-11-03", label: "Biden elected", color: "#3b82f6" },
    { date: "2021-01-06", label: "Jan 6 Capitol riot", color: "#dc2626" },
    { date: "2022-10-27", label: "Musk buys Twitter", color: "#8b5cf6" },
    { date: "2024-07-13", label: "Trump assassination attempt", color: "#dc2626" },
    { date: "2024-08-22", label: "Harris nominated", color: "#3b82f6" },
    { date: "2024-08-28", label: "Harris unrealized gains tax proposal", color: "#f59e0b" },
    { date: "2024-11-05", label: "Trump wins 2024", color: "#dc2626" },
    { date: "2025-01-20", label: "Trump inaugurated", color: "#dc2626" }
];
