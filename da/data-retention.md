---
layout: legal
title: Dataopbevaring og sletning
lang: da
lang_equivalent: /en/data-retention
last_updated: 2026-06-25
---

# Dataopbevaring og sletning

<p class="last-updated">Sidst opdateret: {{ page.last_updated | date: "%-d. %B %Y" }}</p>

## 1. Oversigt

LogicNodes er bygget på princippet om dataminimering. Vi opbevarer kun data, så længe det er nødvendigt for at levere tjenesten — og vi gør det nemt at eksportere eller slette dine data når som helst.

Størstedelen af den operationelle data slettes automatisk efter en fast daglig plan. Kontodata og visse lovpligtige registreringer opbevares kun så længe som nødvendigt og kan ikke slettes tidligere af de årsager, der er forklaret nedenfor.

---

## 2. Opbevaringsperioder

| Datatype | Standard opbevaring | Kan konfigureres? | Sletningsmetode |
|---|---|---|---|
| Agent-kørselshistorik (input, output, udførelseslog) | 90 dage | Ja (1–90 dage, konfigurerbart pr. organisation) | Automatisk daglig oprydning kl. 02:00 UTC |
| Stemmetransskriptioner | 90 dage | Ja (1–90 dage) | Automatisk daglig oprydning |
| Lydoptagelser (stemmefunktion) | 90 dage | Ja (1–90 dage) | Automatisk daglig oprydning |
| Stemmeaftryk (biometriske data) | Indtil anmodning om sletning | Nej | Via platform-UI (chatside — vælg den relevante chat-trigger), eller ved at kontakte kontakt@logicnodes.ai |
| Brugerprofil (e-mail, navn, organisation) | Indtil kontosletning | Nej | Via kontoindstillinger |
| Krypterede hemmeligheder (API-nøgler) | Indtil sletning | Nej | Via platform-UI |
| Revisionslogfiler | 5 år | Nej | Automatisk efter 5 år |
| Fakturerings- og transaktionsdata | 5 år fra regnskabsårets afslutning | Nej | I henhold til bogføringsloven |

---

## 3. Automatisk sletning

Den daglige oprydning kører hver nat kl. **02:00 UTC**. Den sletter al operationel data — agent-kørsler, stemmetransskriptioner og lydoptagelser — der har nået slutningen af den konfigurerede opbevaringsperiode.

Processen er fuldt automatiseret og kræver ingen handling fra din side.

**Konfigurering af opbevaringsperioder**

Organisations-administratorer kan forkorte opbevaringsperioden for operationel data ned til minimum 1 dag. For at ændre din organisations opbevaringsperiode skal du gå til **Organisationsindstillinger > Dataopbevaring** i platform-dashboardet. Indstillingen gælder for alle nye data fra det øjeblik, de gemmes; eksisterende data, der allerede er planlagt til sletning, påvirkes ikke.

---

## 4. Sådan eksporterer du dine data

**Agent-kørselshistorik**

Eksporter individuelle kørsler eller samlet historik via platform-dashboardet. Data leveres i JSON-format.

**Kontodata**

Dine profiloplysninger (e-mail, navn, organisation) kan ses og downloades fra dine kontoindstillinger.

**Fuld dataeksport**

For at anmode om en komplet eksport af alle data tilknyttet din konto eller organisation skal du sende en anmodning til kontakt@logicnodes.ai. Vi leverer dine data i JSON-format inden for 30 dage.

---

## 5. Sådan sletter du dine data

**Individuelle agent-kørsler**

Slet specifikke kørsler direkte fra platform-dashboardet. Sletning fra produktionssystemerne sker øjeblikkeligt.

**Hele kontoen**

Gå til **Kontoindstillinger > Slet konto**, eller send en sletningsanmodning til kontakt@logicnodes.ai. Alle data tilknyttet din konto slettes øjeblikkeligt fra produktionssystemerne.

**Sletning af organisation**

Organisations-administratorer kan slette hele organisationen og alle tilknyttede data via **Organisationsindstillinger > Slet organisation**, eller ved at kontakte os på kontakt@logicnodes.ai. Dette er en permanent og uigenkaldelig handling.

**Stemmeaftryk**

Stemmeaftryk kan slettes direkte fra platform-UI'en. Gå til chatsiden og vælg den relevante chat-trigger, der er knyttet til stemmeaftrykket — herfra er der en slettemulighed. Du kan alternativt anmode om sletning ved at kontakte kontakt@logicnodes.ai. Sletning er permanent og kan ikke fortrydes.

---

## 6. Hvad kan ikke slettes på anmodning

Tre kategorier af data opbevares uanset sletningsanmodninger:

**Revisionslogfiler (5 år)**

Revisionslogfiler opbevares i **5 år** fra datoen for den relevante hændelse. De slettes permanent ved udløbet af 5-årsperioden.

Det juridiske grundlag er art. 17, stk. 3, litra e, GDPR (fastlæggelse, udøvelse eller forsvar af retskrav) og art. 6, stk. 1, litra f, GDPR (legitime interesser i sikkerhed og compliance).

**Fakturerings- og transaktionsdata (5 år)**

Fakturaer, betalingsregistreringer og transaktionshistorik skal opbevares i fem år fra afslutningen af det regnskabsår, hvori de blev oprettet. Dette er en lovmæssig forpligtelse i henhold til den danske bogføringslov. Retsgrundlag: GDPR artikel 6, stk. 1, litra c — overholdelse af en retlig forpligtelse.

---

## 7. Data i sikkerhedskopier

Når data slettes fra produktionssystemerne, sker det øjeblikkeligt via en synkron kaskaderende sletning. Krypterede sikkerhedskopier opbevares dog i op til 30 dage, inden de slettes permanent.

I dette 30-dages vindue eksisterer slettede data kun i krypterede sikkerhedskopifiler. De er ikke tilgængelige for os eller for dig via platformen. Efter 30 dage slettes de permanent fra sikkerhedskopierne.

Hvis du har brug for skriftlig bekræftelse på sletning — for eksempel i forbindelse med en GDPR-anmodning om sletning — kan du kontakte kontakt@logicnodes.ai.

---

## 8. Kontakt

Har du spørgsmål om dataopbevaring, eksport eller sletning, er du velkommen til at kontakte os:

**E-mail:** kontakt@logicnodes.ai
**Svartid:** Inden for 5 arbejdsdage.

**LogicNodes ApS**
Sletvej 2D
8310 Tranbjerg
Danmark
CVR: DK45318362

---

