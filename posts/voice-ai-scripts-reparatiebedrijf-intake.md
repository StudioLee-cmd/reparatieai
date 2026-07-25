---
title: "Voice AI scripts voor reparatiebedrijven"
excerpt: "Een goede AI telefonist voor reparatiebedrijven stelt de juiste intake-vragen en boekt direct. Scripts per type reparatie, getest in de praktijk."
date: "2026-04-26"
authorSlug: "tim-van-der-lee"
image: "/images/blog/voice-ai-scripts-reparatiebedrijf-intake.jpg"
cluster: "voice-ai"
tags: ["Voice AI", "Reparatie Intake", "Klantcommunicatie"]
---
Een klant belt een reparatiebedrijf met een wasmachine die niet meer aanslaat. De medewerker neemt op, vraagt het serie-nummer, vraagt naar de geluiden, vraagt wanneer het probleem begon en plant een afspraak. Vier minuten gesprek. Drie maanden later belt diezelfde klant terug omdat zijn vaatwasser lekt. De medewerker stelt opnieuw alle basis-vragen, plus drie nieuwe specifiek voor afvoerproblemen. Vijf minuten gesprek. Per dag tien tot vijftien van zulke gesprekken bij een gemiddeld reparatiebedrijf, alleen al voor de intake.

Een Voice AI telefonist neemt deze intake-gesprekken over zonder dat de kwaliteit lager wordt, mits de scripts goed zijn. Slechte scripts laten een klant frustrerend door een menu klikken zonder bij de juiste persoon uit te komen. Goede scripts voelen voor de klant alsof er een ervaren medewerker meedenkt. Dit artikel laat zien hoe je voice AI scripts schrijft voor een reparatiebedrijf, met voorbeelden per apparaat-categorie en de fouten die je moet vermijden.

## Waarom een reparatiebedrijf andere voice scripts nodig heeft

Drie dingen onderscheiden reparatie-intake van andere branches.

**Symptoom-eerst, niet symptoom-laatst:** klanten van een kapper bellen om een afspraak. Klanten van een reparatiebedrijf bellen omdat iets stuk is. De eerste vraag moet altijd zijn: wat is er aan de hand? Niet: wanneer wil je komen?

**Triage is essentieel:** een wasmachine die niet aanslaat is iets anders dan een wasmachine die water lekt. Garantie-status is anders dan reparatie-status. Een binnenkomende oproep moet binnen twee minuten gecategoriseerd zijn zodat de juiste monteur en de juiste tijd ingepland wordt.

**Apparaat-info is data:** merk, model, serienummer en aankoopdatum bepalen vaak of een reparatie zin heeft. Klanten weten dit zelden uit hun hoofd. Een goed script vraagt om een foto van het sticker met al deze info.

**In het kort:**
- Een Voice AI script voor een reparatiebedrijf begint met symptomen, niet planning.
- Triage in de eerste 60 seconden bespaart 70 procent van de eerste-bezoek-tijd.
- Scripts per categorie (witgoed, kleine huishoudelijk, electronica) werken beter dan één generiek script.
- Apparaat-info via foto-upload werkt beter dan vragen om merk en serienummer per spraak.
- De grootste fout: te veel vragen stellen voordat je een afspraak boekt.

## De vier fasen van een goed voice AI script

### Fase 1: probleem (15-30 seconden)

"Wat is er met het apparaat aan de hand?" Open vraag. Klant beschrijft in eigen woorden. Voice AI luistert naar keywords (water, vlam, vonk, geluid, niet aan, scherm, code) en categoriseert intern.

### Fase 2: apparaat (15-30 seconden)

"Wat voor apparaat is het, en welk merk?" Korte gerichte vraag. Voor diepere info: "Kan je een foto sturen van het typeplaatje?" en stuur via SMS een upload-link.

### Fase 3: urgentie (15 seconden)

"Hoe vervelend is het op dit moment? Wel water, geen droger, koelkast warm, alleen storend?" Bepaalt of het spoed is of geplande afspraak.

### Fase 4: afspraak (30 seconden)

"Ik heb morgen om 10:00 of 14:00 een mogelijkheid, of overmorgen om 9:00. Wat past het beste?" Concrete opties, geen open vraag. Klant kiest, afspraak geboekt, gesprek klaar in 90-120 seconden.

## Scripts per apparaat-categorie

Vijf scripts die we dagelijks gebruiken bij Nederlandse reparatiebedrijven. Pas de bedrijfsnaam en stadsnamen aan, maar laat de structuur intact.

### Script 1: witgoed (wasmachine, droger, vaatwasser, koelkast)

```
AI: "Goedendag, [bedrijfsnaam], waarmee kan ik u helpen?"
Klant: [beschrijft probleem]
AI: "Oké, wasmachine die niet aanslaat. Welk merk is het?"
Klant: [merk]
AI: "Kunt u me een foto van het typeplaatje sturen via SMS? Ik stuur u zo de link."
[stuurt link]
AI: "En is er water in de trommel of staat hij droog?"
Klant: [antwoord]
AI: "Begrepen. Ik heb morgen om 10:00 of 14:00 een mogelijkheid voor een storingsbezoek. Wat past het beste?"
Klant: [kiest]
AI: "Geweldig, ik plan u in voor morgen 10:00. U krijgt een bevestiging per WhatsApp. Tot morgen."
```

### Script 2: kleine huishoudelijke apparaten (koffiezetter, mixer, stofzuiger)

```
AI: "Goedendag, [bedrijfsnaam], waarmee kan ik u helpen?"
Klant: [beschrijft probleem]
AI: "Oké. Welk merk en hoe oud is het apparaat ongeveer?"
Klant: [antwoord]
AI: "Kleine apparaten brengen we vaak in onze werkplaats. Heeft u kortbij gelegen [stad/regio] om langs te brengen, of wilt u dat we het ophalen?"
Klant: [kiest]
AI: "Ik plan u in voor [tijd]. Houdt het apparaat schoon klaar plus een eventuele bon of garantiekaart."
```

### Script 3: elektronica (TV, audio, computer)

```
AI: "Goedendag, [bedrijfsnaam], waarmee kan ik u helpen?"
Klant: [beschrijft probleem]
AI: "Oké, een TV die niet meer aangaat. Komt er nog een lampje aan, of is hij compleet uit?"
Klant: [antwoord]
AI: "Welk merk en hoe oud is het apparaat ongeveer? Voor TV's onder de 5 jaar oud is reparatie vaak nog rendabel."
Klant: [antwoord]
AI: "Begrepen. Ik plan u in voor [tijd] thuis-bezoek of breng het langs in onze werkplaats."
```

### Script 4: spoedklus (lekkage, vlammen, brandgevaar)

```
AI: "Goedendag, [bedrijfsnaam], waarmee kan ik u helpen?"
Klant: [vermeldt water of brand]
AI: "Begrepen, water-lekkage uit de wasmachine. Heeft u de stroom al uitgezet en de waterkraan dicht gedraaid?"
Klant: [antwoord]
AI: "Goed. Ik kan vandaag nog langskomen tussen [tijdvenster] of morgen ochtend om 9:00. Wat is voor u acceptabel?"
Klant: [kiest]
AI: "Ik kom vandaag tussen [tijd]. U krijgt een SMS zodra ik onderweg ben. Hou de werkplek vrij toegankelijk."
```

### Script 5: garantie-vraag

```
AI: "Goedendag, [bedrijfsnaam], waarmee kan ik u helpen?"
Klant: [vermeldt garantie]
AI: "Oké, een garantie-claim. Bij welk merk is het apparaat gekocht en heeft u de bon nog?"
Klant: [antwoord]
AI: "Stuur me een foto van de aankoopbon en het typeplaatje van het apparaat via SMS. Ik check de garantie en kom binnen 4 uur bij u terug per WhatsApp of telefoon."
```

![Reparatie-monteur kijkt op zijn telefoon naar een binnenkomende afspraak in een werkplaats vol gereedschappen](/images/blog/voice-ai-scripts-reparatiebedrijf-intake-2.jpg)

## Wat je MOET vermijden in voice AI scripts

### Te lang menu

"Druk 1 voor witgoed, druk 2 voor kleine apparaten, druk 3 voor electronica..." Vergeet dit. Klanten haken af bij meer dan twee menu-niveaus. Een goede AI luistert naar wat de klant zegt en categoriseert zelf.

### Te veel vragen vooraf

Vier vragen voor je een afspraak boekt is te veel. Drie max. Klant moet voelen dat hij snel naar zijn doel komt (de afspraak), niet dat hij door een formulier wordt geleid.

### Geen escalatie naar mens

Voor complexe of emotionele situaties moet er een directe lijn naar een echte medewerker zijn. "Wilt u liever met een collega spreken? Ik verbind u door." Geef de klant altijd deze optie.

### Robotische bevestigingen

"Bevestiging: u heeft gekozen voor een afspraak op vrijdag, drie april, om tien uur. Klopt dit?" Dat klinkt als een wachtkamer. Maak het natuurlijk: "Top, ik plan u in voor vrijdag 10:00."

### Geen check op spoed

Een AI die een lekkage als reguliere afspraak boekt over twee weken kost je een klant en mogelijk schade. Vraag altijd kort naar urgentie en gevaar voordat je een datum voorstelt.

## Wat het oplevert in cijfers

Bij twee Nederlandse reparatiebedrijven die we de afgelopen 6 maanden hebben begeleid:

- **Beantwoordingsgraad oproepen:** van 65 procent naar 95 procent (alle oproepen worden opgenomen)
- **Gemiddelde gesprekstijd:** van 4-6 minuten naar 90-120 seconden
- **Geboekte afspraken per dag:** +30 tot +50 procent (meer oproepen vertaald naar meer afspraken)
- **Klanttevredenheid (NPS):** stabiel of licht hoger (geen daling, vaak verbetering)
- **Tijd vrijgemaakt voor monteurs:** 8-12 uur per week (geen onderbrekingen meer voor inkomende oproepen)

Voor een reparatiebedrijf met 60 inkomende oproepen per week en een gemiddelde dealwaarde van 150 euro betekent dit, conservatief geschat, 8-12 extra geboekte afspraken per week of 1.200-1.800 euro extra omzet per week. Bekijk ook onze [tarieven](/tarieven) als je dit volledig wilt laten opzetten.

## Hoe je dit script bouwt

Je hebt geen technische kennis nodig. De meeste voice AI platforms hebben een prompt-editor waarin je in gewone taal beschrijft wat de AI moet doen.

1. **Kies je categorieën:** maak een lijst van apparaat-types die je behandelt. Voor elke categorie schrijf je één script.
2. **Schrijf de scripts in mens-taal:** zoals een ervaren intake-medewerker zou doen. Niet als een computer.
3. **Test met collega's:** laat 5 collega's de AI bellen en doe alsof ze klanten zijn. Noteer waar het misgaat.
4. **Iterateer:** pas de scripts aan op basis van wat misging. Zelfs een goede AI heeft 3-5 iteraties nodig voor het scherp staat.
5. **Live test:** zet hem live voor inkomende oproepen, monitor de eerste week dagelijks. Pas wat nodig is.

Onze [voice-AI dienst](/voice-ai) doet dit standaard inclusief de scripts en de trainingen. Lees ook hoe de [chatbot voor reparatiebedrijven](/chatbot) op je website werkt voor klanten die liever typen dan bellen.

## Veelgestelde vragen

### Werkt voice AI ook voor mijn merk-specifieke vragen?

Ja, mits je de AI traint op jouw catalogus. Voor specifieke merken kun je de AI laten verwijzen naar specifieke informatie ("Voor Bosch wasmachines vragen wij meestal eerst naar de foutcode op het scherm").

### Wat als een klant boos of geëmotioneerd is?

Een goede AI herkent boze toon en biedt direct doorverbinding aan. "Ik hoor dat dit u erg dwarszit. Wilt u liever met een collega spreken? Ik verbind u nu door."

### Kunnen klanten echt niet door een script heen kijken?

Met goede AI tegenwoordig wel. Een ervaren reparatie-klant merkt het soms, maar 80-90 procent van de klanten ervaart het als een normale medewerker mits het script natuurlijk is en de AI niet stamelt of pauzeert.

### Wat kost dit per maand?

De AI-kosten zelf zijn 50 tot 150 euro per maand voor een reparatiebedrijf met 60-100 oproepen per week. De setup eenmalig 300-1.000 euro. Bekijk onze [gratis-website pakket](/gratis-website) als je dit volledig wilt laten opzetten.

### Hoe weet ik of klanten tevreden zijn?

Vraag het na het gesprek. Een korte SMS of WhatsApp na het inplannen: "Hoe was het gesprek? Beoordeel met 1-5 sterren." Onze pagina over [reviews](/reviews) gaat dieper in op feedback verzamelen.

<div class="container"><div class="row justify-content-center"><div class="col-lg-10 col-xl-8 mx-auto"><p class="lees-ook my-5 px-4 py-3 rounded-3 fs-6 text-dark" style="background-color: rgba(193, 255, 114, 0.18);"><strong class="text-dark">Lees ook:</strong> <a href="/blog/voice-ai-trainen-reparatiebedrijf-data-vakjargon" class="text-dark fw-semibold">Voice AI trainen voor reparatiebedrijven: data en vakjargon</a> →</p></div></div></div>

## Klaar om je telefoon te laten draaien?

Een goede voice AI bespaart een gemiddeld reparatiebedrijf 8 tot 12 uur per week aan inkomende oproepen plus levert 30-50 procent meer afspraken op. De setup is een paar weken werk, daarna draait het. Wij doen dit standaard voor onze reparatie-klanten, inclusief de scripts, de tests en de doorlopende optimalisatie.

Wil je dit niet zelf opzetten? Vraag een [gratis scan](/gratis-scan) aan en we kijken samen waar in jouw planning de meeste tijd weglekt aan inkomende oproepen. Werkt het niet? Geld terug, dat is onze Groei-of-Geld-Terug Garantie.
