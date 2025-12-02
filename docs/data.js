// Data for the tech political shift timeline
// Only includes figures who were vocal Democrats or had clear progressive positions before switching
// switchDate: The defining moment of public political shift
// switchRank: Order of switching (1 = first, higher = later) - determines Y position

const timelineData = [
    {
        id: "elon-musk",
        name: "Elon Musk",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Elon_Musk_-_54820081119_%28cropped%29.jpg/440px-Elon_Musk_-_54820081119_%28cropped%29.jpg",
        role: "Tesla/SpaceX/X CEO",
        type: "ceo",
        switchDate: "2022-05-18",
        switchRank: 1,
        switchEvent: "Announced he would vote Republican, began political shift accelerating through Twitter acquisition",
        company: "Tesla, SpaceX, X (Twitter)",
        bio: "Obama donor turned MAGA megaphone. Built Tesla on green subsidies, praised by Democrats as climate champion. COVID restrictions triggered shift. Bought Twitter, made it MAGA platform. Spent $100M+ on Trump 2024. Now runs DOGE.",
        timeline: [
            { date: "2012-01-01", event: "Donates to Obama campaign", type: "action" },
            { date: "2015-12-12", event: "Paris Climate Agreement praised, Tesla positioned as climate solution", type: "action" },
            { date: "2020-03-19", event: "Tweets 'coronavirus panic is dumb'", type: "tweet" },
            { date: "2020-05-11", event: "Defies Alameda County lockdown, reopens Tesla factory", type: "action" },
            { date: "2021-12-22", event: "Moves Tesla HQ from California to Texas", type: "action" },
            { date: "2022-04-14", event: "Offers to buy Twitter for $44B", type: "action" },
            { date: "2022-05-18", event: "Announces he will vote Republican", type: "endorsement" },
            { date: "2022-10-27", event: "Completes Twitter acquisition, fires executives", type: "action" },
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
        id: "marc-andreessen",
        name: "Marc Andreessen",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Marc_Andreessen-9_%28cropped%29.jpg/440px-Marc_Andreessen-9_%28cropped%29.jpg",
        role: "a16z Co-Founder",
        type: "vc",
        switchDate: "2023-10-16",
        switchRank: 2,
        switchEvent: "Published 'Techno-Optimist Manifesto' explicitly naming DEI, ESG as enemies",
        company: "Andreessen Horowitz (a16z)",
        bio: "Former Democratic donor turned anti-woke ideologist. Netscape founder, longtime progressive tech figure. His firm donated to Obama. Manifesto declared war on 'woke'. 'Little Tech Agenda' called Harris unrealized gains tax 'the death of startups'.",
        timeline: [
            { date: "2008-01-01", event: "Andreessen Horowitz donates to Democratic campaigns", type: "action" },
            { date: "2021-06-04", event: "Tweets against 'woke capitalism' trend", type: "tweet" },
            { date: "2023-06-06", event: "AI blog post criticizes 'doomers' and regulation", type: "article" },
            { date: "2023-10-16", event: "Publishes Techno-Optimist Manifesto", type: "article" },
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
                title: "Explaining Harris's 'unrealized' capital gains tax that billionaires hate",
                url: "https://fortune.com/2024/08/31/kamala-unrealized-capital-gains-tax-meaning-proposal-explained/",
                source: "Fortune"
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
        switchRank: 3,
        switchEvent: "Co-endorsed Trump with Andreessen, despite historical Democratic donations",
        company: "Andreessen Horowitz (a16z)",
        bio: "The reluctant convert. Longtime Democratic donor who explicitly acknowledged his past support. Co-authored 'Little Tech Agenda' warning Harris tax would 'kill startups'. Framed Trump support as policy necessity, not ideology.",
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
        switchRank: 4,
        switchEvent: "Letter to Jim Jordan regretting COVID 'censorship', signaling major policy shift",
        company: "Meta (Facebook, Instagram, WhatsApp)",
        bio: "The complete transformation. Built Facebook as progressive tech darling. Donated to Democratic causes. Banned Trump after Jan 6. Then: Mar-a-Lago dinner, killed DEI and fact-checking, 'masculine energy' comments, $1M inaugural donation.",
        timeline: [
            { date: "2017-01-01", event: "Chan Zuckerberg Initiative pledges billions to progressive causes", type: "action" },
            { date: "2021-01-07", event: "Bans Trump from Facebook indefinitely after Jan 6", type: "action" },
            { date: "2023-01-25", event: "Reinstates Trump's Facebook account", type: "action" },
            { date: "2024-08-26", event: "Letter to Congress regretting COVID content moderation", type: "article" },
            { date: "2024-11-13", event: "Has dinner with Trump at Mar-a-Lago", type: "action" },
            { date: "2025-01-07", event: "Ends fact-checking, announces 'masculine energy' focus", type: "action" }
        ],
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
        switchRank: 5,
        switchEvent: "Blocked Washington Post from endorsing Kamala Harris, breaking tradition",
        company: "Amazon, Blue Origin, Washington Post",
        bio: "The pragmatist. Owned the newspaper Trump called 'fake news'. Climate Pledge, progressive philanthropy, Democratic donor. Then blocked his own paper's Harris endorsement. Staff revolted, 250k subscribers canceled. Attended inauguration.",
        timeline: [
            { date: "2013-08-05", event: "Buys Washington Post for $250M", type: "action" },
            { date: "2019-09-19", event: "Announces Climate Pledge, Amazon to be carbon neutral by 2040", type: "action" },
            { date: "2024-10-25", event: "Blocks WaPo Harris endorsement, staff revolt", type: "action" },
            { date: "2024-10-28", event: "Defends decision in op-ed about media trust", type: "article" },
            { date: "2025-01-20", event: "Attends Trump inauguration", type: "action" }
        ],
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
        id: "sam-altman",
        name: "Sam Altman",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29.jpg/440px-Sam_Altman_TechCrunch_SF_2019_Day_2_Oct_3_%28cropped%29.jpg",
        role: "OpenAI CEO",
        type: "ceo",
        switchDate: "2025-01-20",
        switchRank: 6,
        switchEvent: "Donated $1M personally to Trump inauguration fund, attended ceremony",
        company: "OpenAI",
        bio: "Y Combinator progressive turned AI power broker. Built YC's inclusive culture, supported Democratic causes. Now: $1M personal inauguration donation despite OpenAI's nonprofit origins. Needs regulatory favor for AGI ambitions.",
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
    }
];

// Timeline configuration
const timelineConfig = {
    startYear: 2020,
    endYear: 2025,
    minDate: new Date("2020-01-01"),
    maxDate: new Date("2025-12-31")
};

// Major events shown below the timeline
const majorEvents = [
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
