"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BsCheck2Circle,
  BsArrowRight,
  BsWhatsapp,
  BsCalendar3,
  BsChatDots,
  BsGlobe,
  BsLightning,
  BsPeople,
  BsClockHistory,
  BsQuestionCircle,
  BsXCircle,
} from "react-icons/bs";
import { siteDetails } from "@/data/siteDetails";

const niche = siteDetails.niche?.toLowerCase() || "bedrijven";
const nicheSingular = niche.endsWith("s") ? niche.slice(0, -1) : niche;
const brand = siteDetails.siteName;

const features = [
  {
    icon: BsChatDots,
    title: "Storings-intake die doorvraagt",
    desc: `Welk apparaat, welk merk en type, wat doet het wel of niet, sinds wanneer. De chatbot vraagt door tot er een melding staat waar je op kunt plannen, met een foto van het typeplaatje als de klant die heeft.`,
  },
  {
    icon: BsQuestionCircle,
    title: "\"Is mijn apparaat al klaar?\"",
    desc: `De statusvraag over een lopende reparatie krijgt een antwoord zonder dat jij je soldeerbout neerlegt. Houd je je werkorders digitaal bij, dan leest de chatbot de status daar.`,
  },
  {
    icon: BsCheck2Circle,
    title: "Garantievragen voorbereid",
    desc: `Datum van de reparatie, het apparaat, het huidige probleem en de bon of het ordernummer staan klaar. Of iets onder garantie valt, beslis jij.`,
  },
  {
    icon: BsCalendar3,
    title: "Brengmoment of monteursbezoek",
    desc: `De klant kiest meteen wanneer hij de wasmachine, laptop of koffiemachine brengt, of wanneer de monteur langskomt. Het gesprek is in één keer rond.`,
  },
  {
    icon: BsWhatsapp,
    title: "Overdracht via WhatsApp",
    desc: `Jij of je monteur krijgt geen chatlog van veertig regels, maar één bericht: apparaat, klacht, foto, contactgegevens en hoe dringend het is.`,
  },
  {
    icon: BsGlobe,
    title: "Ook op zondagavond, ook in het Engels",
    desc: `Een vaatwasser gaat niet kapot tijdens openingstijden. De chatbot antwoordt 's avonds en in het weekend, in goed Nederlands en in de taal van je klant.`,
  },
];

const steps = [
  {
    number: "01",
    title: "Wij zetten jouw werkplaats erin",
    desc: `Welke apparaten je repareert en welke niet, je onderzoekskosten, brengtijden, ophaalregels en garantievoorwaarden. Daarop bouwen wij de vragen van de chatbot.`,
  },
  {
    number: "02",
    title: "De chatbot komt op je website",
    desc: `Hij staat op je website en vangt de eerste storingsmelding, statusvraag of garantievraag op, ook als de werkplaats dicht is.`,
  },
  {
    number: "03",
    title: "Jij krijgt een complete melding",
    desc: `Elke intake landt als één overzichtelijk bericht in je WhatsApp. Jij kiest welke klus je eerst oppakt.`,
  },
];

const painPoints = [
  {
    icon: BsXCircle,
    title: "De telefoon gaat met je handen in een machine",
    desc: `Je hebt de lagers van een wasmachine eruit liggen en de telefoon gaat voor de derde keer. Niet opnemen voelt als een klant wegsturen, wel opnemen kost je het karwei.`,
  },
  {
    icon: BsClockHistory,
    title: "Statusbellers die je dag opeten",
    desc: `"Is mijn apparaat al klaar?" is een vraag waar geen monteur voor nodig is, maar die je wel elke dag opnieuw beantwoordt, tussen twee reparaties door.`,
  },
  {
    icon: BsQuestionCircle,
    title: "\"Mijn wasmachine doet raar\"",
    desc: `Een contactformulier levert meldingen op waar je niets mee kunt. Dus bel je terug om te vragen welk merk, welk type en wat er precies mis is.`,
  },
];

const faqs = [
  {
    q: "Wat vraagt de chatbot uit bij een storingsmelding?",
    a: "Het soort apparaat, merk en type, wat het apparaat doet of juist niet doet, sinds wanneer, wat de klant al heeft geprobeerd en of er een foto van het typeplaatje of het defect is. Welke vragen het precies zijn, stemmen we af op de apparaten die jij repareert.",
  },
  {
    q: "Kan de chatbot vragen over de status van een reparatie beantwoorden?",
    a: "Ja. Houd je je werkorders bij in een reparatiesysteem of planning die we kunnen koppelen, dan zoekt de chatbot de status daar op: in behandeling, wacht op onderdeel of klaar om op te halen. Zonder koppeling noteert hij de vraag en zet hij hem voor je klaar.",
  },
  {
    q: "Beslist de chatbot over garantie of reparatiekosten?",
    a: "Nee. Hij verzamelt de gegevens, legt de klant de vervolgstap uit en zet het gesprek klaar voor jou. Jij beslist en jij blijft verantwoordelijk voor wat de chatbot namens jouw reparatiebedrijf zegt en verstuurt.",
  },
  {
    q: "Hoe snel staat de chatbot op mijn website?",
    a: "Binnen 1-2 werkdagen staat de chatbot met jouw apparaatsoorten en intakevragen op je website. Een koppeling met je werkorders hangt af van het systeem dat je gebruikt; dat bekijken we samen in het gesprek.",
  },
  {
    q: `Wat kost een AI chatbot bij ${brand}?`,
    a: `Een AI chatbot zit inbegrepen in ons maandelijkse pakket vanaf €79/maand. Geen opstartkosten, geen verborgen kosten. Bekijk onze tarieven voor alle details.`,
  },
];

const reading = [
  { href: "/blog/wat-moet-reparatiebedrijf-chatbot-kunnen", title: "Wat moet een reparatiebedrijf-chatbot kunnen? De checklist" },
  { href: "/blog/whatsapp-chatbot-reparatiebedrijf-avondstoringen", title: "WhatsApp chatbot voor reparatiebedrijven: avondstoringen" },
  { href: "/blog/chatbot-vs-faq-pagina-reparatiebedrijf-modelvragen", title: "FAQ-pagina of chatbot: welke reparatievraag hoort waar?" },
  { href: "/blog/live-chat-of-ai-chatbot-reparatiebedrijf", title: "Live chat of AI chatbot voor je reparatiebedrijf?" },
  { href: "/blog/chatbot-trainen-reparatiebedrijf-data", title: "AI chatbot trainen op je reparatiebedrijf-data: 4 manieren" },
];

export default function ChatbotContent() {
  return (
    <main className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 sl-reveal"
          >
            AI Chatbot
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 sl-reveal sl-reveal-1"
          >
            AI Chatbot voor {siteDetails.niche}: 24/7 Klanten Opvangen
          </motion.h1>
          <motion.p
            className="text-lg text-foreground-accent max-w-2xl mx-auto mb-8 sl-reveal sl-reveal-1"
          >
            De chatbot neemt de storingsmelding op, beantwoordt de vraag of
            het apparaat al klaar is en plant het brengmoment in, terwijl jij
            aan de werkbank staat. Jij repareert, wij regelen de rest.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center sl-reveal sl-reveal-2"
          >
            <a
              href="https://cal.com/studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              <BsCalendar3 /> Plan een Gratis Gesprek
            </a>
            <a
              href="https://wa.me/31611594862"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-green-500/30 text-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-500/10 transition-all"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </motion.div>
        </div>
        <motion.div
          className="max-w-5xl mx-auto mt-12 px-4 sl-reveal sl-reveal-2"
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-2xl">
            <Image
              src="/images/services/chatbot-hero.jpg"
              alt="AI chatbot voor reparatiebedrijven neemt een storingsmelding op via de chat"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </motion.div>

      </section>

      {/* Wat is een AI Chatbot? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Wat doet een AI chatbot voor een reparatiebedrijf?
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              De meeste chatbots zijn gebouwd voor webshops en kantoren: ze
              noemen je openingstijden en sturen bij elke moeilijkere vraag een
              e-mailadres terug. Bij een reparatiebedrijf zijn de vragen anders.
              Er komt iemand met een koffiemachine die lekt, een trommel die
              schuurt of een laptop die niet meer oplaadt, en die wil weten of
              je het kunt maken, wat het ongeveer kost en wanneer hij langs kan
              komen.
            </p>
            <p>
              Een AI chatbot voor reparatiebedrijven voert dat gesprek zoals jij
              het aan de balie zou doen. Hij werkt drie stromen af: nieuwe
              storingen, lopende reparaties en garantie. Bij een nieuwe storing
              vraagt hij door tot je weet of het een klus is en welke onderdelen
              je misschien alvast bestelt. Bij een lopende reparatie geeft hij de
              status. Bij een garantievraag zet hij de feiten op een rij. Wat hij
              niet zeker weet, legt hij bij jou neer in plaats van te gokken.
            </p>
          </div>
        </div>
      </section>

      {/* Herken je dit? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Herken je dit?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Drie momenten waarop een werkplaats klanten en uren verliest.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="text-red-600 dark:text-red-400" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                <p className="text-foreground-accent text-sm">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hoe het werkt */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Hoe het werkt</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Van jouw apparaatsoorten en garantieregels naar een chatbot die storingen voor je uitvraagt.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-200 dark:bg-neutral-700" />
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4 border-4 border-white dark:border-neutral-900 relative z-10">
                  <span className="text-xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-foreground-accent text-sm max-w-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 max-w-5xl mx-auto"
          >
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-xl">
              <Image
                src="/images/services/chatbot-workflow.jpg"
                alt="Klant meldt een storing in de chat, het reparatiebedrijf krijgt de complete intake binnen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <p className="text-center text-sm text-foreground-accent mt-3 max-w-2xl mx-auto">
              Een vaatwasser begeeft het op zondagavond: de chatbot neemt de storing op, jij leest maandagochtend de complete melding.
            </p>
          </motion.div>

      </section>

      {/* Wat krijg je? */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Wat krijg je?</h2>
          <p className="text-foreground-accent text-center mb-10 max-w-xl mx-auto">
            Wat de chatbot voor jouw werkplaats doet, inbegrepen in je pakket.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={20} />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground-accent text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom kiezen voor een chatbot? */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Waarom reparatiebedrijven een chatbot inzetten
          </h2>
          <div className="text-foreground-accent space-y-4 text-base leading-relaxed">
            <p>
              Wie een kapot apparaat heeft, zoekt meteen een oplossing, vaak
              &apos;s avonds als de werkplaats dicht is. Krijgt die klant dan direct
              een concreet antwoord en kan hij meteen een brengmoment kiezen, dan
              ligt de reparatie de volgende ochtend bij jou op de werkbank in
              plaats van bij een ander.
            </p>
            <p>
              Overdag wint de chatbot tijd terug. De vragen die geen monteur
              nodig hebben, zoals de status van een reparatie, je openingstijden
              of wat je onderzoek kost, beantwoordt hij zelf. Een nieuwe storing
              komt binnen als een intake die je in één keer leest, met merk,
              type en klacht erbij. Zo besteed je je uren aan repareren en niet
              aan terugbellen om te vragen wat er precies kapot is.
            </p>
          </div>
        </div>
      </section>

      {/* Bureau Vergelijking */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Traditioneel bureau vs. {brand}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 md:p-8 text-white text-center mb-8"
          >
            <p className="text-sm text-gray-400 mb-2">Traditioneel bureau voor {niche}</p>
            <p className="text-2xl md:text-3xl font-bold mb-2">
              <span className="line-through text-gray-500">€1.500 – €3.000/mnd</span>
            </p>
            <p className="text-sm text-gray-400 mb-4">Chatbot als losse add-on, beperkte support, strategie apart betaald</p>
            <div className="w-16 h-px bg-gray-600 mx-auto mb-4"></div>
            <p className="text-primary font-semibold text-lg">{brand}</p>
            <p className="text-3xl md:text-4xl font-bold">€79/maand — alles inbegrepen</p>
            <p className="text-sm text-gray-300 mt-2">AI chatbot standaard inbegrepen. Inclusief strategie & consulting.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditioneel bureau */}
            <div className="border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)]">
              <h3 className="text-lg font-bold mb-4">Traditioneel Bureau</h3>
              <ul className="space-y-3">
                {[
                  "€1.500 - €3.000 per maand",
                  "Wekenlange oplevering",
                  "Chatbot als losse add-on (meerprijs)",
                  "Beperkte support buiten kantooruren",
                  "Strategie is apart betaald",
                  "Geen AI-kennis in huis",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <BsXCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-accent">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Brand */}
            <div className="border-2 border-primary rounded-2xl p-6 bg-[var(--card-background)] relative">
              <span className="absolute -top-3 left-6 px-3 py-1 rounded-full text-xs font-bold bg-primary text-black">
                Aanbevolen
              </span>
              <h3 className="text-lg font-bold mb-4 mt-1">{brand}</h3>
              <ul className="space-y-3">
                {[
                  "€79 per maand — alles inbegrepen",
                  "Live binnen 1-2 werkdagen",
                  "AI chatbot standaard inbegrepen",
                  "24/7 systeem, altijd bereikbaar",
                  "Strategie & consulting inbegrepen",
                  "Gebouwd met de nieuwste AI-technologie",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <BsCheck2Circle className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      {/* Section image + cross-links */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[var(--card-border)] shadow-xl"
            >
              <Image
                src="/images/services/chatbot-section.jpg"
                alt="Laptop met de chatbot op de website van een reparatiebedrijf"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ingericht op witgoed, elektronica en apparaten</h2>
              <p className="text-foreground-accent leading-relaxed">Een wasmachine die niet afpompt vraagt om andere vragen dan een telefoon met een gebarsten scherm. Wij zetten per apparaatsoort de vragen erin die jij aan de balie zou stellen, en de chatbot herkent wanneer een melding spoed is, zoals een lekkende vaatwasser, zodat jij die als eerste ziet.</p>
            </motion.div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-center mb-6">Combineer met andere AI-tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/voice-ai" className="group border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-all">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Voice AI Telefonist</h3>
                <p className="text-foreground-accent text-sm mb-3">Vangt oproepen op als de klant liever belt — zelfde info, zelfde flow.</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">Bekijk <BsArrowRight size={14} /></span>
              </Link>
              <Link href="/automatisering" className="group border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-all">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Workflow Automatisering</h3>
                <p className="text-foreground-accent text-sm mb-3">Herinneringen, status-updates en review-verzoeken automatisch na elk chatbot-gesprek.</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">Bekijk <BsArrowRight size={14} /></span>
              </Link>
              <Link href="/crm" className="group border border-[var(--card-border)] rounded-2xl p-6 bg-[var(--card-background)] hover:border-primary/40 transition-all">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">CRM voor Reparateurs</h3>
                <p className="text-foreground-accent text-sm mb-3">Elke chatbot-conversatie landt automatisch in het klantprofiel met geschiedenis.</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">Bekijk <BsArrowRight size={14} /></span>
              </Link>
          </div>
        </div>
      </section>

      {/* Verder lezen: the chatbot cluster of the blog */}
      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Verder lezen over chatbots voor reparatiebedrijven</h2>
          <ul className="space-y-3">
            {reading.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
                  <BsArrowRight size={14} /> {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-[var(--card-background)]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Veelgestelde Vragen</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-[var(--card-border)] rounded-xl">
                <summary className="cursor-pointer p-5 font-semibold text-lg flex justify-between items-center">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <div className="px-5 pb-5 text-foreground-accent">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om 24/7 klanten op te vangen?</h2>
          <p className="text-foreground-accent mb-8">
            Plan een gratis gesprek. We laten zien hoe de chatbot een storingsmelding,
            een statusvraag en een garantievraag voor jouw reparatiebedrijf afhandelt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/gratis-scan"
              className="bg-primary text-black px-8 py-3 rounded-xl font-semibold hover:bg-primary-accent transition-all"
            >
              Gratis AI Scan
            </a>
            <a
              href="https://cal.com/studiolee"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-foreground/20 px-8 py-3 rounded-xl font-semibold hover:bg-foreground/5 transition-all inline-flex items-center justify-center gap-2"
            >
              <BsCalendar3 /> Plan een Gesprek
            </a>
            <a
              href="https://wa.me/31611594862"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-green-500/30 text-green-500 px-8 py-3 rounded-xl font-semibold hover:bg-green-500/10 transition-all inline-flex items-center justify-center gap-2"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </div>
          <p className="text-sm text-foreground-accent mt-6">
            Of bekijk eerst onze{" "}
            <a href="/tarieven" className="text-primary hover:underline">tarieven</a>
          </p>
        </div>
      </section>

      {/* Schema.org FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
