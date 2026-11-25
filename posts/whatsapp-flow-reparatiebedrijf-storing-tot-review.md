---
title: "WhatsApp-flow reparatiebedrijf: van storing tot review"
slug: whatsapp-flow-reparatiebedrijf-storing-tot-review
date: "2026-11-25"
excerpt: "Melding, herinnering en reviewverzoek in een WhatsApp-flow: zo bouwt je reparatiebedrijf de keten, met de gegevens die tussen elke stap meereizen."
image: "/images/blog/whatsapp-flow-reparatiebedrijf-storing-tot-review.jpg"
authorSlug: "tim-van-der-lee"
tags: ["WhatsApp", "Herinneringen"]
cluster: "chatbot"
---

Bij de meeste reparatiebedrijven bestaan de losse stukjes al. Er is een WhatsApp-nummer waar storingen binnenkomen, soms een herinnering de dag voor de afspraak, en af en toe een reviewverzoek als je er na een drukke dag nog aan denkt. Het probleem zit tussen die stukjes. De herinnering weet niet welk apparaat het is, het reviewverzoek gaat ook naar de klant wiens onderdeel nog onderweg is, en de klant krijgt 3 berichten die niets van elkaar weten.

Een WhatsApp-flow maakt van die losse berichten één keten: 1 gesprek, 1 klantkaart, en elke schakel weet wat de vorige heeft gedaan. Die keten heeft 3 schakels, 5 gegevens die van schakel naar schakel meereizen en 4 momenten waarop de flow stopt of wacht.

## Waarom één keten beter werkt dan 3 losse berichten

Losse automatiseringen werken elk op zichzelf, maar ze praten niet met elkaar. Neem een klant die op maandag een storing meldt, op woensdag een afspraak heeft en op vrijdag pas zijn apparaat terug heeft omdat er een onderdeel besteld moest worden. In een losse opzet gaat het op 4 plekken mis:

- De herinnering noemt geen apparaat of tijdvak, omdat die gegevens in een ander systeem staan
- Een verzette afspraak krijgt alsnog de herinnering voor de oude dag
- Het reviewverzoek gaat op woensdag uit, terwijl de klus pas vrijdag af is
- De klant krijgt berichten van 2 verschillende nummers en weet niet meer bij wie hij moet zijn

In een keten hangt alles aan 1 klantkaart in je [crm voor reparatiebedrijven](/crm), en elke schakel leest en schrijft op die kaart. De [ai chatbot voor reparatiebedrijven](/chatbot) is de voordeur van die keten: hij neemt de melding aan en zet de gegevens klaar voor de volgende schakel. Daarna nemen herinnering en reviewverzoek het over, in hetzelfde gesprek.

## Schakel 1: de melding komt binnen

De keten begint met de storingsmelding. Hoe je meldingen buiten kantooruren opvangt, lees je in [het stuk over avondstoringen via WhatsApp](/blog/whatsapp-chatbot-reparatiebedrijf-avondstoringen). Hier gaat het om wat er direct ná die intake gebeurt, zodat de melding klaar is voor schakel 2.

Na de intake doet de flow 3 dingen:

1. Hij bevestigt binnen 1 minuut met een korte samenvatting
2. Hij maakt een nieuwe klantkaart aan of vindt de bestaande
3. Hij biedt 3 tijdvakken aan, of zet de melding op jouw lijst als er eerst een vraag beantwoord moet worden

Voorbeeld van de bevestiging:

> Dank je, [voornaam]. Genoteerd: [apparaat], [klacht]. Kies een tijdvak: 1 = dinsdag 8 tot 12 uur, 2 = dinsdag 13 tot 17 uur, 3 = woensdag 8 tot 12 uur.

Dit bericht valt binnen het klantenservicevenster van 24 uur dat volgens Meta start zodra de klant zelf schrijft. Binnen dat venster mag je vrij antwoorden. Daarbuiten mag je alleen nog een vooraf goedgekeurd templatebericht sturen, en dat bepaalt hoe je schakel 2 en 3 schrijft.

## Schakel 2: de herinnering vooraf

Tussen melding en afspraak zitten vaak 2 tot 5 dagen. Dan is het venster van 24 uur allang dicht, dus de herinnering is een templatebericht. Meta deelt templates in 3 categorieën in: marketing, utility en authenticatie. Een afspraakherinnering is informatie over een afspraak die de klant zelf maakte, geen aanbieding. Schrijf hem ook zo: zakelijk, kort en zonder actie of korting.

De herinnering kent 2 momenten:

- **De dag ervoor om 17 uur:** tijdvak, apparaat en de vraag of het apparaat vrij bereikbaar staat
- **Op de dag zelf, 30 minuten voor aankomst:** een kort bericht dat je onderweg bent

Voorbeeld van de herinnering:

> Hoi [voornaam], morgen tussen 8 en 12 uur kom ik voor je [apparaat]. Klopt dat nog? Antwoord 1 = ja, 2 = verzetten.

Het verschil met een losse herinnering zit in antwoord 2. In een keten zet verzetten de flow terug naar schakel 1: de klant krijgt 3 nieuwe tijdvakken en de oude herinnering vervalt. Hoe je de tekst van zo'n herinnering zelf opbouwt, staat uitgewerkt in [herinneringen via WhatsApp voor reparatieafspraken](/blog/whatsapp-herinneringen-reparatie-afspraken).

## Schakel 3: het reviewverzoek achteraf

De laatste schakel start niet op een datum, maar op een status: klus afgerond. Zolang er een onderdeel besteld staat of er een tweede bezoek nodig is, wacht de flow. Pas als jij of je monteur de klus op afgerond zet, telt de flow 24 uur af en stuurt hij het verzoek.

Voorbeeld van het reviewverzoek:

> Hoi [voornaam], je [apparaat] draait weer. Was je tevreden? Dan helpt een korte review ons echt: [link]. Was er iets niet goed, laat het me dan hier weten.

De laatste zin is de rem. Wie niet tevreden is, antwoordt in het gesprek in plaats van op Google, en jij kunt het nog oplossen. Wil je het review-deel verder uitbouwen, met een vaste timing of met kaarten op de werkbon, kijk dan bij [review management voor reparatiebedrijven](/reviews).

## De overdracht tussen de schakels

![De overdracht tussen de schakels](/images/blog/whatsapp-flow-reparatiebedrijf-storing-tot-review-2.jpg)

De kracht van de keten zit niet in de berichten, maar in wat er tussen de berichten gebeurt. Elke schakel geeft gegevens door aan de volgende.

### De 5 velden die meereizen

1. Naam en telefoonnummer
2. Apparaat en merk
3. De klacht in de woorden van de klant
4. Afspraakdatum en tijdvak
5. De status van de klus

| Schakel | Start bij | Velden |
|---|---|---|
| Melding | Bericht klant | 1, 2, 3 |
| Herinnering | Afspraak gepland | 1, 2, 4 |
| Reviewverzoek | Klus afgerond | 1, 2, 5 |

Ontbreekt veld 2, dan kan de herinnering het apparaat niet noemen. Ontbreekt veld 5, dan weet het reviewverzoek niet wanneer het mag. Maak de velden daarom verplicht in de intake.

### Wanneer de flow stopt of wacht

- **De klant stuurt stop:** alle schakels stoppen, ook die nog moeten komen
- **De klant annuleert:** de herinnering vervalt, het reviewverzoek gaat niet uit
- **De klus wordt een offerte:** de flow wacht tot de klant de offerte goedkeurt
- **Er staat een klacht open:** geen reviewverzoek tot de klacht is afgehandeld

Deze regels bouw je 1 keer in met [workflow automatisering voor reparateurs](/automatisering). Daarna gelden ze voor elke klus, ook als je met 3 monteurs werkt en niemand eraan hoeft te denken.

## Rekenvoorbeeld: wat de keten scheelt

Rekenvoorbeeld: stel, je doet 60 klussen per maand. Zonder herinnering staan er 4 keer per maand mensen niet thuis; met de herinnering uit schakel 2 is dat er nog 1. Kost een vergeefse rit je €45 aan tijd en brandstof, dan scheelt dat elke maand 3 ritten van €45, samen €135. Neem daarbij aan dat 15% van de klanten op het reviewverzoek reageert met een review: dat zijn 9 nieuwe reviews per maand, zonder dat je er 1 zelf hoeft te vragen.

Daar komt tijd bij. Bij 60 klussen en 2 minuten per belletje om een afspraak te bevestigen, is dat 120 minuten per maand die je nu aan de telefoon zit in plaats van aan de werkbank.

## Veelgestelde vragen

### Kan ik met 1 schakel beginnen?

Ja. Begin met schakel 2, de herinnering, omdat die het snelst vergeefse ritten scheelt. Voeg in week 2 het reviewverzoek toe en koppel daarna pas de melding.

### Moet de klant iets installeren?

Nee. De klant gebruikt gewoon zijn eigen WhatsApp. Hij ziet 1 gesprek met jouw bedrijf, van melding tot review.

### Wat als de klant liever belt?

Dan blijven de velden gewoon op de klantkaart staan. Jij of je [ai telefonist voor reparatiebedrijven](/voice-ai) vult ze aan tijdens het gesprek, en de herinnering en het reviewverzoek gaan daarna via WhatsApp verder.

## Zo bouw je de keten in 3 weken

- **Week 1:** leg de 5 velden vast in je klantkaart en zet de bevestiging van schakel 1 op
- **Week 2:** schrijf het herinneringstemplate, laat het goedkeuren en koppel het aan je agenda
- **Week 3:** zet het reviewverzoek op de status klus afgerond, met 24 uur wachttijd

Na 3 weken draait de hele keten en hoef je alleen nog te reageren op de klanten die iets vragen. Wil je de keten laten beginnen op een site die meldingen ook echt binnenhaalt? Bekijk dan de [gratis website voor reparatiebedrijven](/gratis-website). Klanten weten wanneer hun apparaat klaar is, automatisch.
