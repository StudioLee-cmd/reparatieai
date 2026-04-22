import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Reparatiebedrijven", url: "/chatbot" },
            { text: "Voice AI voor Reparatiebedrijven", url: "/voice-ai" },
            { text: "SEO voor Reparatiebedrijven", url: "/seo" },
            { text: "Social Media voor Reparatiebedrijven", url: "/social-media" },
            { text: "Reviews voor Reparatiebedrijven", url: "/reviews" },
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
