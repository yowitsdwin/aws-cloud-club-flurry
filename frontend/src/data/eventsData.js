export const ALL_EVENTS = [
    {
        id: 1,
        title: "Next.js 15 Deep Dive Workshop",
        description:
            "Master the latest features of Next.js 15 including App Router, Server Actions, and Partial Prerendering.",
        date: "2025-06-14",
        category: "Workshop",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
        upcoming: true,
        seats: 24,
    },
    {
        id: 2,
        title: "AI-Powered Products Webinar",
        description:
            "Learn how to ship AI features responsibly with LLMs, safety, and UX design.",
        date: "2025-06-20",
        category: "Webinar",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
        upcoming: true,
        seats: 200,
    },
    {
        id: 3,
        title: "48-Hour Climate Hackathon",
        description:
            "Build climate solutions in 48 hours with global teams.",
        date: "2025-07-05",
        category: "Hackathon",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
        upcoming: true,
        seats: 80,
    },
    {
        id: 4,
        title: "UI/UX Design Systems Seminar",
        description:
            "Learn scalable design systems and UI architecture.",
        date: "2025-07-18",
        category: "Seminar",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
        upcoming: true,
        seats: 60,
    },

    {
        id: 5,
        title: "INTO THE CLOUDS | Github fundamentals with AWS Networking & Security",
        description:
            "A deep dive into GitHub fundamentals paired with AWS Networking and Security concepts for cloud-ready developers.",
        date: "2026-03-22",
        category: "Webinar",
        image: "/images/event3.png",
        upcoming: false,
        time: "1:00 PM - 5:00 PM",
    },
    {
        id: 6,
        title: "INTO THE CLOUDS | Building & Deploying Web Apps with AWS Amplify and S3",
        description:
            "Hands-on workshop covering how to build and deploy modern web applications using AWS Amplify and S3.",
        date: "2026-02-27",
        category: "Workshop",
        image: "/images/event2.jpg",
        upcoming: false,
        time: "9:00 AM - 12:00 PM",
    },
    {
        id: 7,
        title: "INTO THE CLOUDS | First Step in AWS",
        description:
            "An introductory webinar for beginners taking their first step into the AWS cloud ecosystem.",
        date: "2026-01-11",
        category: "Webinar",
        image: "/images/event1.png",
        upcoming: false,
        time: "7:00 PM - 9:00 PM",
    },
];

export const CATEGORIES = [
    "All",
    "Workshop",
    "Webinar",
    "Hackathon",
    "Seminar",
];

export const CATEGORY_COLORS = {
    Workshop: { bg: "bg-sky-500/15", text: "text-sky-400", dot: "bg-sky-400" },
    Webinar: { bg: "bg-violet-500/15", text: "text-violet-400", dot: "bg-violet-400" },
    Hackathon: { bg: "bg-orange-500/15", text: "text-orange-400", dot: "bg-orange-400" },
    Seminar: { bg: "bg-teal-500/15", text: "text-teal-400", dot: "bg-teal-400" },
};