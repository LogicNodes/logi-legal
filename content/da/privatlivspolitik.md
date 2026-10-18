---
layout: legal
title: Privatlivspolitik
last_updated: 2026-10-15
lang: da
lang_equivalent: /en/privacy-policy/
---

# Privatlivspolitik

<p class="last-updated">Senest opdateret: {{ page.last_updated | date: "%-d. %B %Y" }}</p>

---

## 1. Introduktion

LogicNodes ("vi," "vores," eller "os") er forpligtet til at beskytte dit privatliv. Denne privatlivspolitik forklarer vores praksis vedrørende indsamling, brug og videregivelse af oplysninger, når du bruger vores tjenester.

**Vores forpligtelse til privatlivets fred:** Vi tror på minimal dataindsamling. Vi indsamler kun det, der er absolut nødvendigt for at levere vores tjenester, og vi opbevarer data i kortest mulig periode.

## 2. Oplysninger vi indsamler

### 2.1 Autentificeringsoplysninger

For at give dig adgang til vores tjenester indsamler vi kun følgende oplysninger, der er nødvendige for kontoautentificering:

- **E-mailadresse** - Bruges som dit unikke ID og til kontorelateret kommunikation
- **Adgangskode** - Opbevares sikkert via Supabase Auth (vores underdatabehandler) ved hjælp af industristandard kryptering. Indlejrede brugere autentificeres via partner-signerede JWT'er og har ingen adgangskode hos LogicNodes.
- **Autentificeringstokens** - Midlertidige sessionstokens for at holde dig logget ind

### 2.2 Oplysninger vi IKKE indsamler

I modsætning til mange tjenester indsamler vi ikke:

- Personhenførbare oplysninger ud over din e-mailadresse
- Adfærdssporingsdata
- Analyser eller brugsmønstre til marketingformål
- Tredjeparts cookies eller sporingspixels
- Enhedsfingeraftryksdata
- Placeringsdata

### 2.3 Cookies og lokal lagring

Platformen (app.logicnodes.ai) anvender udelukkende strengt nødvendige cookies for at opretholde din godkendte session. Der er tale om sessionscookies sat af Supabase Authentication (`sb-*`), som er HTTP-only, Secure og SameSite. De udløber, når du logger ud, eller når dit sessionstoken udløber. Applikationen sætter ingen tredjeparts cookies. For en fuldstændig beskrivelse af alle cookies og vores analysestilgang henvises til vores [Cookiemeddelelse](/da/cookie-notice/).

## 3. Hvordan vi bruger dine oplysninger

Vi bruger de minimale oplysninger, vi indsamler, udelukkende til følgende formål:

- **Autentificering** - For at verificere din identitet og give sikker adgang til din konto
- **Tjenesteleverance** - For at aktivere kernefunktionaliteten af vores platform
- **Sikkerhed** - For at beskytte din konto mod uautoriseret adgang
- **Essentiel kommunikation** - For at sende kritiske tjenesteopdateringer, sikkerhedsadvarsler eller svar på dine forespørgsler (vi sender ikke marketing-e-mails)

**Anonymiserede brugsanalyser.** Vi indsamler og anvender fuldt anonymiserede, aggregerede platformsbrugsstatistikker — såsom funktionsadoptionsrater, modelvalgshyppigheder og skabelonbrug — til intern produktudvikling og roadmap-beslutninger. Disse data kan ikke anvendes til at identificere en enkelt bruger eller organisation og er ikke omfattet af GDPR. De deles aldrig med tredjeparter.

Vi bruger ikke dine oplysninger til annoncering, profilering eller sekundære formål. Vi bruger ikke dine personoplysninger til at træne, finjustere eller evaluere AI- eller maskinlæringsmodeller.

## 4. Dataopbevaring

Vi praktiserer aggressiv dataminimering med følgende opbevaringspolitikker:

- **Sessionsdata** - Slettes ved logud eller sessionsudløb
- **Midlertidige data** - Ryddes automatisk dagligt i henhold til vores dataopbevaringspolitikker
- **Autentificeringsdata** - Opbevares kun mens din konto er aktiv
- **Kontosletning** - Ved kontosletning fjernes alle tilknyttede data fra produktionssystemer omgående; sletning fra krypterede sikkerhedskopier sker inden for 30 dage

Du kan anmode om sletning af din konto og alle tilknyttede data til enhver tid ved at kontakte os på kontakt@logicnodes.ai.

## 5. Informationsdeling og videregivelse

Vi sælger, udlejer eller deler IKKE på anden måde dine personoplysninger med tredjeparter, undtagen i følgende begrænsede tilfælde:

### 5.1 Med dit samtykke

Vi deler kun dine oplysninger, når du har givet et udtrykkeligt og informeret samtykke og der er et legitimt formål — såsom et funktionelt behov, en juridisk forpligtelse eller et sikkerhedsmæssigt krav.

### 5.2 Juridiske krav

Vi kan videregive dine oplysninger, hvis det kræves ved lov, retskendelse eller myndigheder, eller når vi i god tro mener, at en sådan videregivelse er nødvendig for at:

- Overholde juridiske forpligtelser
- Beskytte vores rettigheder, ejendom eller sikkerhed
- Undersøge svindel eller sikkerhedsproblemer
- Beskytte mod juridisk ansvar

### 5.3 Tjenesteudbydere

Vi kan bruge betroede tredjeparts tjenesteudbydere til at hjælpe med at drive vores tjenester (såsom hosting-infrastruktur og AI-modelinferens). Disse udbydere er kontraktligt forpligtet til at:

- Kun bruge dine data til de specifikke tjenester, de leverer til os
- Opretholde samme niveau af databeskyttelse som beskrevet i denne politik
- Slette eller returnere data, når deres tjenester ikke længere er nødvendige

En komplet liste over vores under-databehandlere, herunder hosting-, infrastruktur- og AI-modeludbydere, er tilgængelig på [/da/underbehandlere](/da/underbehandlere/).

Vi deler ikke data med annonceringsnetværk, analysefirmaer eller datamæglere.

### 5.4 Tredjeparts Connectorer

Når du aktiverer en connector, overføres data til den pågældende tredjepartstjeneste på dine vegne. Den pågældende udbyders privatlivspolitik regulerer, hvordan de behandler dine data — denne Privatlivspolitik finder ikke anvendelse på deres behandling. LogicNodes er ikke ansvarlig for privatlivspraksisser hos tredjepartstjenester, du tilslutter dig.

## 6. Datasikkerhed

Vi implementerer industristandard sikkerhedsforanstaltninger for at beskytte dine oplysninger:

- **Kryptering** - Alle data er krypteret under transmission (TLS/SSL) og i hvile
- **Adgangskontrol** - Strenge interne adgangspolitikker begrænser, hvem der kan få adgang til brugerdata
- **Sikker autentificering** - Adgangskoder hashes og saltes ved hjælp af bcrypt via Supabase Auth (vores underdatabehandler). Indlejrede brugere autentificeres via partner-signerede JWT'er.
- **Regelmæssige sikkerhedsrevisioner** - Vi overvåger og forbedrer løbende vores sikkerhedspraksis
- **Minimal dataeksponering** - Ved at indsamle minimale data minimerer vi potentiel eksponering i tilfælde af et brud
- **Adgangskontrol for personale** - Se [afsnit 6a](#6a-internt-personaladgang) nedenfor.

Selvom vi træffer rimelige forholdsregler, er ingen transmissionsmetode over internettet 100% sikker. Vi kan ikke garantere absolut sikkerhed.

## 6a. Internt personaladgang

### Hvad personalet kan tilgå

Et begrænset antal autoriserede LogicNodes-medarbejdere har driftsadgang til kundedata. Adgangen er begrænset til medarbejdere, der har underskrevet en NDA og gennemført obligatorisk sikkerhedsuddannelse og uddannelse i personoplysninger/GDPR. Alle medarbejderhandlinger er knyttet til et ansvarligt personalmedlem og er revisionslogget. Adgang anvendes udelukkende til følgende formål:

- **Teknisk support** — diagnosticering af problemer på anmodning fra Partner eller bruger
- **Fejlundersøgelse** — hvor LogicNodes konstaterer eller identificerer utilsigtet platformsadfærd, kan autoriserede medarbejdere inspicere de relevante agentkørsel(er) udelukkende med henblik på at identificere årsagen og løse platformsproblemet
- **Fakturering og kontoadministration** — løsning af tvister og verificering af forbrug
- **Platformsintegritet** — undersøgelse af mistænkt misbrug eller overtrædelse af brugsbetingelserne
- **Juridisk overholdelse** — besvarelse af lovmæssige myndighedsanmodninger

### Kontosupportadgang

I begrænsede tilfælde kan autoriserede medarbejdere tilgå og handle inden for en brugers konto (herunder sende beskeder, udløse kørsler og ændre indstillinger på dennes vegne) for at yde effektiv teknisk support. Enhver sådan adgangshændelse revisionslogges med personalets identitet, mål-bruger-ID, kilde-IP-adresse og tidsstempel.

Hvor kørselsinhold inspiceres som led i support, kan det indeholde særlige kategorier af personoplysninger (art. 9 GDPR). Sådan adgang er strengt begrænset til det support- eller platformsintegritetsmæssige formål, der berettigede den, og anvendes ikke til andre formål.

Når en brugerkonto slettes, skrives én identitetsregistrering (bruger-ID, e-mail, visningsnavn) til revisionsloggen umiddelbart inden sletningen og opbevares i 5 år med henblik på svindelundersøgelse (art. 17, stk. 3, litra e, GDPR; forældelseslovens § 3, stk. 1). Sikkerhedshændelseslogfiler (autentificeringshændelser, IP-adresser, brugeragentstrenge) opbevares ligeledes i 5 år til samme svindelundersøgelsesformål. Begge slettes permanent ved udløbet af 5-årsperioden. Der finder ingen pseudonymisering sted.

Retsgrundlaget for denne behandling er vores **legitime interesser** (art. 6, stk. 1, litra f, GDPR) i at levere aftalte supporttjenester og opretholde platformsintegriteten. En afvejningstest er gennemført; vi har konkluderet, at personalets supportadgang må forventes i kommercielle B2B SaaS-forhold og er proportionel i forhold til supportbehovet.

Du kan gøre indsigelse mod denne behandling i henhold til art. 21 GDPR ved at kontakte legal@logicnodes.ai.

## 7. Dine rettigheder og valgmuligheder

Du har følgende rettigheder vedrørende dine personoplysninger:

### 7.1 Adgang og portabilitet

Du kan til enhver tid anmode om en kopi af de personoplysninger, vi har om dig.

### 7.2 Rettelse

Du kan opdatere eller rette din e-mailadresse gennem dine kontoindstillinger eller ved at kontakte os.

### 7.3 Sletning

Du kan til enhver tid anmode om sletning af din konto og alle tilknyttede data. Vi sletter data fra produktionssystemer omgående og fra krypterede sikkerhedskopier inden for 30 dage.

### 7.4 Dataminimering

Vi minimerer automatisk dataopbevaring. Midlertidige data ryddes dagligt uden at kræve handling fra din side.

### 7.5 Frameld

Du kan til enhver tid afmelde dig ikke-essentiel kommunikation. Bemærk, at vi stadig kan sende kritiske tjenesterelaterede meddelelser, der er nødvendige for kontosikkerhed.

## 8. Internationale dataoverførsler

Personoplysninger opbevares primært i Den Europæiske Union (AWS eu-central-1, Frankfurt, via Supabase). Almindelig brug af platformen indebærer, at agent-prompts og -svar sendes til udbydere af AI-modelinferens. Nogle af disse udbydere — herunder OpenAI, Anthropic og xAI — har servere i USA, og behandling hos dem udgør en international overførsel. ElevenLabs (anvendt til stemmetransskription og, valgfrit, tekst-til-tale-oplæsning af agentbeskeder) behandler ligeledes data i USA. Disse overførsler er beskyttet af standardkontraktbestemmelser (EU-Kommissionens afgørelse 2021/914). En komplet liste over underbehandlere og deres lokationer er tilgængelig på [/da/underbehandlere](/da/underbehandlere/).

**Databehandling udelukkende inden for EU:** Brugere, der ønsker, at alle oplysninger forbliver inden for EU, kan anmode om dette ved at kontakte kontakt@logicnodes.ai. Når funktionen er aktiv, er AI-inferens begrænset til EU-baserede udbydere, og ingen data overføres uden for EU.

## 9. Børns privatliv

Vores tjenester er udelukkende rettet mod erhvervsbrugere. LogicNodes er en B2B-platform; organisationer er ansvarlige for at sikre, at deres slutbrugere opfylder gældende alderskrav. Vi indsamler ikke bevidst persondata om personer under 16 år. Hvis vi bliver opmærksomme på, at data fra en person under 16 år er blevet behandlet via vores platform, vil vi træffe passende foranstaltninger til at slette det.

## 10. Ændringer af denne privatlivspolitik

Vi kan opdatere denne privatlivspolitik fra tid til anden for at afspejle ændringer i vores praksis eller juridiske krav. Vi vil underrette dig om væsentlige ændringer mindst **7 dage** inden de træder i kraft ved at:

- Opdatere "Sidst opdateret" datoen øverst i denne politik
- Sende en e-mailmeddelelse til din registrerede e-mailadresse (for væsentlige ændringer)
- Vise en fremtrædende meddelelse på vores websted

Din fortsatte brug af vores tjenester efter ændringerne træder i kraft udgør accept af den opdaterede politik.

## 11. Europæiske privatlivsrettigheder (GDPR)

LogicNodes ApS er etableret i Danmark og behandler personoplysninger som dataansvarlig i henhold til Europa-Parlamentets og Rådets forordning (EU) 2016/679 (databeskyttelsesforordningen, GDPR). Vores ledende tilsynsmyndighed er **Datatilsynet**, Carl Jacobsens Vej 35, 2500 Valby, Danmark, dt@datatilsynet.dk.

**Databeskyttelsesrådgiver (DPO):** For alle henvendelser vedrørende privatlivets fred og databeskyttelse kan du kontakte vores DPO på dpo@logicnodes.ai.

### Retsgrundlag for behandling

Vi behandler personoplysninger på følgende retsgrundlag i henhold til GDPR artikel 6 (og artikel 9, hvor det er relevant):

- **Kontraktmæssig nødvendighed (art. 6, stk. 1, litra b)** — Behandling, der er nødvendig for at levere og vedligeholde LogicNodes-platformen i overensstemmelse med vores brugsbetingelser (f.eks. kontoautentificering og tjenesteleverance).
- **Legitime interesser (art. 6, stk. 1, litra f)** — Behandling, der er nødvendig for at varetage vores legitime interesser i platformssikkerhed, svindelforebyggelse, vedligeholdelse af revisionslogge og begrænset intern personaladgang til support- og platformsintegritetsmæssige formål, i det omfang disse interesser ikke tilsidesættes af dine rettigheder.
- **Retlig forpligtelse (art. 6, stk. 1, litra c)** — Opbevaring af fakturerings- og regnskabsbilag i overensstemmelse med bogføringsloven.
- **Kontohaverens ansvar (art. 9(2) og gældende national ret)** — Kontohavere kan introducere alle former for personoplysninger i platformen, herunder særlige kategorier af personoplysninger i henhold til GDPR art. 9(1) og personoplysninger underlagt særlig national ret. Kontohaveren er dataansvarlig for alle sådanne data og bærer eneansvar for at etablere et gyldigt retsgrundlag i henhold til art. 6(1), art. 9(2) og gældende national ret, inden sådanne data introduceres. LogicNodes behandler disse data udelukkende som databehandler på kontohaverens dokumenterede instrukser og verificerer ikke lovligheden af disse instrukser. For stemmeprofiler specifikt: du accepterer, at LogicNodes behandler biometriske data som led i leveringen af højttaleridentifikationstjenesten; stemmeprofildata kan til enhver tid slettes via agent-triggeren på chatsiden.

### Automatiske afgørelser

LogicNodes anvender ikke automatisk beslutningstagning, der medfører retsvirkninger eller på tilsvarende måde betydeligt påvirker de registrerede (GDPR art. 22). Kontohavere, der konfigurerer automatiserede workflows via platformen, er som dataansvarlige ansvarlige for at sikre, at disse workflows overholder art. 22's krav i forbindelse med deres egne anvendelsestilfælde. LogicNodes stiller ikke art. 22-beskyttelsesforanstaltninger til rådighed på kontohaverens vegne.

### Dine GDPR-rettigheder

Hvis du befinder dig i Det Europæiske Økonomiske Samarbejdsområde (EØS), har du følgende rettigheder:

- **Ret til indsigt (art. 15)** — Anmod om en kopi af de personoplysninger, vi behandler om dig.
- **Ret til berigtigelse (art. 16)** — Anmod om rettelse af urigtige eller ufuldstændige personoplysninger.
- **Ret til sletning (art. 17)** — Anmod om sletning af dine personoplysninger, med forbehold for eventuelle overordnede retlige forpligtelser.
- **Ret til begrænsning af behandling (art. 18)** — Anmod om, at vi begrænser vores behandling af dine oplysninger i visse tilfælde.
- **Ret til dataportabilitet (art. 20)** — Modtag dine personoplysninger i et struktureret, almindeligt anvendt og maskinlæsbart format.
- **Ret til indsigelse (art. 21)** — Gør indsigelse mod behandling, der sker på grundlag af legitime interesser.
- **Rettigheder vedrørende stemmeprofiler** — Stemmeprofildata kan til enhver tid slettes via agent-triggeren på chatsiden. Personer, hvis stemmer er blevet optaget, skal rette eventuelle GDPR-anmodninger til den bruger, der oprettede stemmeprofilen — denne bruger er ansvarlig for retsgrundlaget og for at håndtere sådanne anmodninger.
- **Ret til at indgive klage** — Du kan indgive en klage til Datatilsynet (dt@datatilsynet.dk) eller en anden kompetent tilsynsmyndighed i EØS.

For en mere detaljeret beskrivelse af, hvordan vi håndterer disse rettigheder, herunder svartider og procedurer for identitetsbekræftelse, henvises til vores [GDPR-meddelelse](/da/gdpr-notice/).

## 12. Kontakt os

Hvis du har spørgsmål, bekymringer eller anmodninger vedrørende denne privatlivspolitik eller vores datapraksis, bedes du kontakte os på:

**E-mail:** legal@logicnodes.ai

**Svartid:** Vi sigter mod at svare på alle privatlivsforespørgsler inden for 5 arbejdsdage.

For GDPR-relaterede anmodninger kan du også kontakte os via: legal@logicnodes.ai (emnefeltet: 'GDPR-anmodning om rettigheder'). Svar inden for 30 kalenderdage.

**Virksomhedsoplysninger:**  
LogicNodes ApS  
Sletvej 2D  
8310 Tranbjerg  
Danmark  
CVR: DK45318362

---

## Ændringslog

| Dato | Afsnit |
|---|---|
| 2026-10-15 | §8 |
| 2026-07-07 | §2.3; §3; §5; §5.1; §6; §6a; §9; §11 |
| 2026-04-21 | Første offentliggørelse |

---


*Denne privatlivspolitik er gældende fra den dato, der er angivet ovenfor, og gælder for alle brugere af LogicNodes-tjenester.*
