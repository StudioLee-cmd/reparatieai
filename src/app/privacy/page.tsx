
import { publicContacts } from "@/data/publicContacts";
import React from "react";
import Container from "@/components/Container";
import { siteDetails } from "@/data/siteDetails";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: `Privacyverklaring | ${siteDetails.siteName}`,
    description: `Hoe ${siteDetails.siteName} omgaat met de gegevens van ${siteDetails.niche.toLowerCase()}: wat we bewaren, waarvoor we het gebruiken en welke rechten je hebt volgens de AVG.`,
    alternates: { canonical: `${siteDetails.siteUrl}privacy` },
};

const PrivacyPage: React.FC = () => {
    return (
        <Container>
            <div className="py-20 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Privacyverklaring {siteDetails.siteName}</h1>
                <div className="prose prose-lg text-foreground-accent">
                    <p className="mb-4">
                        <em>Laatst bijgewerkt: 14 november 2026</em>
                    </p>

                    <p>
                        {siteDetails.siteName} is een handelsnaam van DigitalStudioLee, De Donge 9, 3448CJ Woerden, KvK 98933353, btw NL005362803B09. Wij zijn verantwoordelijk voor de verwerking van je persoonsgegevens zoals hieronder beschreven. Vragen of verzoeken: <a href={("mailto:" + publicContacts.primary.email)} className="text-primary hover:underline">{publicContacts.primary.email}</a>.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Welke gegevens en waarvoor</h2>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><em>Gratis scan, gratis website en proefperiode.</em> Je naam, bedrijfsnaam, e-mailadres, telefoonnummer en het adres van je website, om je aanvraag uit te voeren en je de uitkomst te mailen. Grondslag: het uitvoeren van wat je aanvraagt (precontractueel, AVG art. 6 lid 1 b).</li>
                        <li><em>Nieuws en aanbiedingen.</em> Alleen als je daar in het formulier apart voor kiest. Grondslag: toestemming (art. 6 lid 1 a), die je altijd kunt intrekken via de link in elke mail of via <a href={("mailto:" + publicContacts.primary.email)} className="text-primary hover:underline">{publicContacts.primary.email}</a>.</li>
                        <li><em>Betalen.</em> Kies je een abonnement, dan reken je af via een betaallink van Stripe. Stripe verwerkt daarvoor je naam, e-mailadres en betaalgegevens; wij ontvangen geen kaartgegevens. Grondslag: de overeenkomst (art. 6 lid 1 b).</li>
                        <li><em>Klanten.</em> Gegevens die nodig zijn om de dienst te leveren en te factureren. Grondslag: de overeenkomst (art. 6 lid 1 b) en de wettelijke bewaarplicht (art. 6 lid 1 c).</li>
                        <li><em>Gesprekken met onze AI-diensten.</em> Als je klant bent, verwerkt de AI de gesprekken van jouw klanten om antwoord te geven en afspraken in te plannen; daarvoor zijn wij jouw verwerker en sluiten we een verwerkersovereenkomst met je.</li>
                        <li><em>Websitebezoek.</em> Wij meten het aantal bezoeken zonder cookies en zonder je te herkennen (Vercel Web Analytics). Grondslag: ons gerechtvaardigd belang om de site te verbeteren (art. 6 lid 1 f).</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. AI en je gegevens</h2>
                    <p>
                        Voor de gratis scan lezen we de openbare website van je bedrijf en laten we een taalmodel (OpenAI) een analyse schrijven. Gevoelige gegevens zoals wachtwoorden delen we niet met een AI-dienst. Waar een leverancier dat toelaat, staat het gebruik van je gegevens voor het trainen van modellen uit.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Wie helpt ons (verwerkers)</h2>
                    <p>
                        Wij delen je gegevens nooit voor commerciële doeleinden. Deze leveranciers verwerken gegevens in onze opdracht: Vercel (hosting en bezoekmeting), Supabase (opslag van aanvragen, in de EU), Brevo (e-mail, EU), n8n op onze eigen server (het verwerken van formulieren), OpenAI, Firecrawl en Gamma (de gratis scan), HighLevel (de chat op de site, alleen na je toestemming) en Cal.com (het plannen van een gesprek). Betalingen lopen via Stripe en de uitlegvideo na de gratis scan komt van YouTube (Google); zij verwerken die gegevens ook onder hun eigen privacyverklaring. Waar een leverancier buiten de EU verwerkt, gebeurt dat op basis van het EU-VS Data Privacy Framework of de standaardcontractbepalingen van de Europese Commissie.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Hoe lang we gegevens bewaren</h2>
                    <p>
                        Een aanvraag zonder klantrelatie: 12 maanden na het laatste contact. Klantgegevens: zolang je klant bent en 2 jaar daarna. Facturen: 7 jaar, omdat de wet dat vraagt. Daarna verwijderen we de gegevens.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Beveiliging</h2>
                    <p>
                        We gebruiken versleutelde verbindingen (SSL) en geven alleen toegang aan wie die voor het werk nodig heeft.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Je rechten</h2>
                    <p>
                        Je mag je gegevens inzien, laten corrigeren of verwijderen, de verwerking laten beperken, bezwaar maken tegen verwerking op basis van gerechtvaardigd belang en je gegevens in een gangbaar formaat ontvangen. Mail daarvoor <a href={("mailto:" + publicContacts.primary.email)} className="text-primary hover:underline">{publicContacts.primary.email}</a>; we antwoorden binnen een maand. Ben je het niet eens met hoe wij met je gegevens omgaan, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Cookies</h2>
                    <p>
                        De site gebruikt alleen wat nodig is om te werken en onthoudt je keuze in de cookiebanner in je browser. De bezoekmeting werkt zonder cookies. De chat van HighLevel laadt pas als je in de banner op Accepteren klikt; kies je Weigeren, dan laadt hij niet. Na de gratis scan staat er een uitlegvideo van YouTube; die laadt pas als je op afspelen klikt, via youtube-nocookie.com, en pas dan ontvangt YouTube (Google) gegevens zoals je IP-adres.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Wijzigingen</h2>
                    <p>
                        Als deze verklaring verandert, passen we de datum bovenaan aan.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default PrivacyPage;
