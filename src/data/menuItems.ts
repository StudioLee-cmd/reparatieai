import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Reparatiebedrijven", url: "/chatbot-voor-reparatiebedrijven" },
            { text: "Voice AI voor Reparatiebedrijven", url: "/voice-ai-voor-reparatiebedrijven" },
            { text: "SEO voor Reparatiebedrijven", url: "/seo-voor-reparatiebedrijven" },
            { text: "Social Media voor Reparatiebedrijven", url: "/social-media-voor-reparatiebedrijven" },
            { text: "Reviews voor Reparatiebedrijven", url: "/reviews-voor-reparatiebedrijven" },
            { text: "Review Pakket", url: "/review-pakket" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/gratis-scan"
    },
    {
        text: "Gratis Website",
        url: "/gratis-website"
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
