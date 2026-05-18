/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
                    { source: '/blog/spelconsole-reparatie-ps5-xbox-switch-hdmi-joycon-specialisme', destination: '/', permanent: true },
            { source: '/blog/laptop-reparatie-motherboard-scherm-batterij-reparateur-specialisme', destination: '/', permanent: true },
            { source: '/blog/vaatwasser-reparatie-pomp-verwarming-sensor-reparateur-specialisme', destination: '/', permanent: true },
            { source: '/blog/stofzuiger-dyson-reparatie-specialisme', destination: '/', permanent: true },
            { source: '/blog/tv-reparatie-oled-led-panel-powerboard-specialisme', destination: '/', permanent: true },
            { source: '/blog/tablet-reparatie-reparatiebedrijf-ipad-samsung-specialisme', destination: '/', permanent: true },
            { source: '/blog/koelkast-diepvries-reparatie-specialisme-2026', destination: '/', permanent: true },
            { source: '/blog/reparatiebedrijf-opschalen-meer-technici', destination: '/', permanent: true },
            { source: '/blog/robot-repareert-wasmachine', destination: '/', permanent: true },
        ];
    },
};

export default nextConfig;
