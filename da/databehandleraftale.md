---
layout: legal
title: Databehandleraftale
last_updated: 2026-07-07
lang: da
lang_equivalent: /en/data-processing-agreement/
---

# Databehandleraftale (DPA)


Mellem den Dataansvarlige og **LogicNodes ApS** (Databehandler)

---

**Databehandler:** LogicNodes ApS  
**Ikrafttrædelse:** [DATO]  
**CVR (Behandler):** DK45318362  

---

## 1. Definitioner

### 1.1 Definerede Begreber

For formålet med denne Databehandleraftale (“DBA”) gælder følgende definitioner:

**"GDPR"**

Europa-Parlamentets og Rådets forordning (EU) 2016/679 af 27. april 2016 om beskyttelse af fysiske personer i forbindelse med behandling af personoplysninger og om fri udveksling af sådanne oplysninger.

**"Databeskyttelseslovgivning"**

Alle gældende love og regler vedrørende privatliv og databeskyttelse, herunder GDPR, UK GDPR og Data Protection Act 2018, den schweiziske FADP, CCPA/CPRA og andre gældende love.

**"Personoplysninger"**

Enhver information vedrørende en identificeret eller identificerbar fysisk person, som behandles af LogicNodes på vegne af den Dataansvarlige i forbindelse med Ydelserne.

**"Behandling"**

Enhver handling eller række af handlinger, der foretages med Personoplysninger, såsom indsamling, registrering, organisering, strukturering, opbevaring, tilpasning, genfinding, konsultation, anvendelse, videregivelse, sletning eller tilintetgørelse.

**"Registrerede"**

Den fysiske person, som Personoplysninger vedrører (den Dataansvarliges slutbrugere).

**"Ydelser"**

LogicNodes’ indlejrbare AI-agentplatform med tilhørende funktioner og integrationer.

**"Underdatabehandler"**

Enhver tredjepart, som LogicNodes anvender til at behandle Personoplysninger på vegne af den Dataansvarlige.

**"Tilsynsmyndighed"**

En uafhængig offentlig myndighed etableret af en EU-medlemsstat i henhold til GDPR artikel 51.

**"Databrud"**

Et brud på persondatasikkerheden som defineret i GDPR: et sikkerhedsbrud, der fører til utilsigtet eller ulovlig tilintetgørelse, tab, ændring, uautoriseret videregivelse af eller adgang til Personoplysninger, der er transmitteret, opbevaret eller på anden vis behandlet.

---

## 2. Anvendelsesområde & Roller

### 2.1 Forhold

Denne DPA regulerer behandlingen af Personoplysninger af LogicNodes (Databehandler) på vegne af den Dataansvarlige (Dataansvarlig) i forbindelse med Ydelserne.

### 2.2 Anvendelighed

Denne DPA gælder for alle Personoplysninger, som behandles af LogicNodes på den Dataansvarliges vegne, herunder men ikke begrænset til:
- Slutbrugeridentitetsoplysninger (e-mail, navn, organisation)
- Agenteksekverings-logs (agent-prompts, -svar og API-anmodninger/svar)
- Stemmeoptagelser (lydoptagelser fra stemmebaserede agenter) og voiceprints (biometriske data, Art. 9 — jf. §2.3)
- Uploadede og hentede filer
- Revisionslogfiler

### 2.3 Følsomme Data — Den Dataansvarliges Ansvar

**Voiceprints og biometriske data:** Platformen tilbyder valgfri stemmeidentifikation, der anvender biometriske stemmeprofiler ("voiceprints") til at identificere talere i lydoptagelser. Voiceprints udgør biometriske data i henhold til GDPR artikel 9, stk. 1, og behandles udelukkende med henblik på talaridentifikation. Hvert voiceprint er knyttet til et selvvalgt navn.

**Alle Personoplysninger:** Den Dataansvarlige kan instruere LogicNodes i at behandle alle former for Personoplysninger via platformen, herunder Personoplysninger underlagt skærpede krav i henhold til GDPR artikel 8, 9 og 10 eller gældende national ret. LogicNodes stiller ingen teknisk begrænsning på de kategorier af Personoplysninger, som den Dataansvarlige må introducere; det er udelukkende den Dataansvarliges ansvar at sikre, at alle gældende juridiske krav er opfyldt, inden LogicNodes instrueres til at behandle sådanne oplysninger.

**Den Dataansvarliges ansvar:** Den Dataansvarlige, som dataansvarlig, er eneansvarlig for at sikre et gyldigt retsgrundlag i henhold til GDPR og al gældende national ret for Personoplysninger, der introduceres i Ydelserne, herunder overholdelse af eventuelle skærpede krav, der gælder for specifikke kategorier af Personoplysninger, og overholdelse af GDPR artikel 22, hvor den Dataansvarliges brug af Ydelserne indebærer automatiseret beslutningstagning. LogicNodes behandler Personoplysninger udelukkende som databehandler på baggrund af den Dataansvarliges dokumenterede instrukser og verificerer ikke lovligheden af disse instrukser. LogicNodes implementerer ikke GDPR artikel 22-beskyttelsesforanstaltninger på den Dataansvarliges vegne. LogicNodes er ikke ansvarlig for den Dataansvarliges manglende overholdelse af gældende lovgivning.

**DPIA-forpligtelse:** Hvor den Dataansvarliges påtænkte behandling via Ydelserne sandsynligvis vil medføre høj risiko for de Registrerede — herunder hvor den involverer storstilet behandling af særlige kategorier af Personoplysninger eller nationale identifikationsnumre — er den Dataansvarlige eneansvarlig for at gennemføre en konsekvensanalyse vedrørende databeskyttelse (DPIA) i henhold til GDPR artikel 35, inden sådan behandling påbegyndes. Hvis en DPIA viser, at forudgående høring af en Tilsynsmyndighed er nødvendig i henhold til GDPR artikel 36, skal den Dataansvarlige underrette LogicNodes, inden behandlingen påbegyndes. Erstatningsforpligtelsen i §9.3 finder anvendelse på krav opstået som følge af den Dataansvarliges manglende gennemførelse af en påkrævet DPIA.

### 2.4 Databehandling udelukkende inden for EU

Den Dataansvarlige kan anmode om databehandling udelukkende inden for EU for sin organisation ved at kontakte kontakt@logicnodes.ai. Når denne funktion er aktiveret, gælder følgende begrænsninger og garantier:

- **Stemmetransskription deaktiveret** — når databehandling udelukkende inden for EU er aktiveret, er stemmetransskription ikke tilgængelig. Stemmeoptagelser transmitteres ikke til ElevenLabs (LogicNodes' transskriptionsudbyder), da ElevenLabs ikke kan garantere, at behandling finder sted udelukkende inden for EU. Den Dataansvarlige, der har behov for stemmetransskription, må ikke aktivere databehandling udelukkende inden for EU.
- **Valg af AI-model begrænset** — kun AI-modeller, hvor behandling finder sted udelukkende inden for EU, kan anvendes. Pr. ikrafttrædelsesdatoen for denne DPA omfatter dette: Mistral AI (Frankrig), Google Cloud Platform Gemini (EU-region), Microsoft Azure OpenAI Service (EU-region) og Amazon Bedrock (Frankfurt — eu-central-1).
- **EU-behandlingsgaranti** — når databehandling udelukkende inden for EU er aktiveret, bekræfter LogicNodes, at alle Personoplysninger behandles og opbevares udelukkende inden for Den Europæiske Union.

Listen over AI-modeller, der er tilgængelige under databehandling udelukkende inden for EU, holdes opdateret og gennemgås løbende.

---

## 3. Behandling af Personoplysninger

### 3.1 Den Dataansvarliges instrukser

LogicNodes må kun behandle Personoplysninger:
1. På dokumenterede instruktioner fra den Dataansvarlige (gennem platformen eller skriftlig anmodning til kontakt@logicnodes.ai)
2. I det omfang det er nødvendigt for at levere Ydelserne
3. Som krævet ved gældende lovgivning (med meddelelse til den Dataansvarlige, hvis lovgivningen tillader det)

**Instrukser fra den Dataansvarlige inkluderer:**
- Brugerautentificering via SDK (den Dataansvarlige leverer JWT'er med brugeridentitets-claims)
- Organisation/bruger-sletning (via platformens brugergrænseflade eller skriftlig anmodning til kontakt@logicnodes.ai)
- Håndtering af hemmeligheder (via platformens brugergrænseflade eller skriftlig anmodning til kontakt@logicnodes.ai)
- Konfiguration af dataopbevaringsperiode (default_retention_period indstilling)

### 3.2 Uautoriseret Behandling

Hvis LogicNodes har grund til at tro, at en specifik instruktion er i konflikt med Databeskyttelseslovgivningen, vil LogicNodes straks underrette den Dataansvarlige, så den kan gennemgås og afklares.

### 3.3 Behandlingsdetaljer

**FORMÅL:** 

Levering af AI-agent-automatiseringsplatform

**VARIGHED:** 

Denne DBAs løbetid + opbevaringsperiode (som konfigureret af den Dataansvarlige)

**ART OG FORMÅL:**
- Godkendelse af slutbrugere via JWT-validering
- Eksekvering af AI-agenter på vegne af slutbrugere
- Opbevaring af eksekveringskontekst med henblik på samtalekontinuitet
- Levering af fejlfinding og transparensværktøjer

**TYPER AF PERSONOPLYSNINGER:**
- Identitetsoplysninger: E-mail, navn, bruger-ID, organisations-ID
- Brugsdata: Agentkørsler, agent-prompts og -svar, transkriptioner
- Tekniske data: IP-adresse, user agent (af sikkerhedsmæssige årsager)
- Stemmeoptagelser: Lydoptagelser fra stemmebaserede agenter; inkl. voiceprints knyttet til selvvalgte navne (biometriske data, Art. 9 — jf. §2.3; valgfri funktionalitet)
- Uploadede filer: Indsendte og hentede dokumenter
- Alle Personoplysninger, herunder særlige kategorier (GDPR art. 9(1)) og Personoplysninger underlagt national ret, når de introduceres af den Dataansvarlige — den Dataansvarlige er dataansvarlig for alle sådanne data og bærer eneansvar for det retsgrundlag, der finder anvendelse (jf. §2.3)

**KATEGORIER AF REGISTREREDE:**
- Den Dataansvarliges slutbrugere (medarbejdere, kunder, konsulenter)

---

## 4. LogicNodes' Forpligtelser

### 4.1 Fortrolighed

LogicNodes skal sikre, at alt personale autoriseret til at behandle Personoplysninger:
1. Er underlagt fortrolighedsforpligtelser (ansættelseskontrakter, NDA'er)
2. Har gennemført obligatorisk sikkerhedsbevidsthedstræning og obligatorisk træning i personoplysninger og GDPR inden adgang gives
3. Kun får adgang til Personoplysninger som nødvendigt for deres rolle

### 4.2 Sikkerhedsforanstaltninger

LogicNodes implementerer passende tekniske og organisatoriske foranstaltninger til beskyttelse af Personoplysninger, herunder:

**Tekniske Foranstaltninger:**
- Kryptering af data i hvile (database, hemmeligheder, opbevaring)
- Kryptering under transmission (TLS 1.2+, HTTPS-håndhævelse)
- Multi-tenant-isolation (RLS-politikker, applikationslags-adgangskontrol)
- Adgangskontrol (JWT-baseret autentificering, rollebaserede tilladelser)
- Revisionslogning (5 år — se App. B §12)
- Hastighedsbegrænsning (forebyggelse af misbrug)
- Automatiserede backups (dagligt, krypteret)

**Organisatoriske Foranstaltninger:**
- Baggrundstjek for medarbejdere med produktionsadgang
- Mindst-privilegium adgangsprincip
- Hændelsesresponsplan (24-timers svartid)
- Sikkerhedsbevidsthedstræning (årligt)
- Leverandørrisikostyring (underdatabehandler-gennemgange)
- NDA og obligatorisk træning i personoplysninger/GDPR kræves inden enhver administrationsadgang gives
- Alle handlinger i administrationssystemet er knyttet til et ansvarligt personalmedlem og er revisionslogget
- Administrationsadgang tilbagekaldes øjeblikkeligt ved ophør af ansættelses- eller konsulentaftale

**Overholdelse (fremadrettet):**
- SOC 2 Type II-forberedelser er påbegyndt (rapport målrettet 2026/2027; ikke endnu certificeret)
- Årlig penetrationstest (første engagement planlagt Q1 2027, herefter årlig kadence)
- Automatiseret sårbarhedsscanning (via GitHub Dependabot)

### 4.3 Anmodninger fra Registrerede

LogicNodes skal assistere den Dataansvarlige med at opfylde Registreredes rettigheder i henhold til Databeskyttelseslovgivningen uden unødig forsinkelse.

**Ret til Indsigt (GDPR Art. 15):**
- Eksport af agentkørselshistorik via platformens brugergrænseflade eller per anmodning til kontakt@logicnodes.ai
- JSON-format til maskinlæsbar eksport
- Svartid: Inden for 30 dage

**Ret til Berigtigelse (GDPR Art. 16):**
- Den Dataansvarlige kan opdatere slutbrugerens identitetsoplysninger (navn, e-mail) via platformen
- Ændringer reflekteres øjeblikkeligt

**Ret til Sletning (GDPR Art. 17):**
- Sletning af bruger/organisation via platformens brugergrænseflade eller per anmodning til kontakt@logicnodes.ai
- Kaskade-sletning sikrer fuldstændig fjernelse
- Sletningsperiode: Øjeblikkeligt (produktion), 30 dage (backups)

**Ret til Dataportabilitet (GDPR Art. 20):**
- Data kan eksporteres i JSON-format via platformens brugergrænseflade eller per anmodning til kontakt@logicnodes.ai
- Strukturerede, maskinlæsbare data

**Ret til Begrænsning af Behandling (GDPR Art. 18):**
- Den Dataansvarlige kan deaktivere brugerkonti
- Behandling stoppes (data bevares, men anvendes ikke)

**Ret til Indsigelse (GDPR Art. 21):**
- Den Dataansvarlige evaluerer indsigelsen og instruerer LogicNodes
- Hvis berettiget, slettes data via platformens brugergrænseflade eller per anmodning til kontakt@logicnodes.ai

**Assistance:**
LogicNodes vil besvare anmodninger fra den Dataansvarlige inden for 5 arbejdsdage og levere rimelig assistance (dokumentation, API-vejledning, teknisk support).

### 4.4 Underretning om Databrud

I tilfælde af et Databrud skal LogicNodes:

**Juridisk forpligtelse (GDPR Art. 33):**
LogicNodes skal underrette den Dataansvarlige **uden unødig forsinkelse** og, hvor det er muligt, inden for 72 timer efter at have fået kendskab til Databruddet.

**Internt SLA-mål (inden for 24 timer):**
1. Inddæmme bruddet (stoppe uautoriseret adgang)
2. Underrette den Dataansvarlige via e-mail (sikkerhedskontakt)
3. Levere foreløbig hændelsesrapport (omfang, berørte data, grundårsag)

**Opfølgende Handlinger (inden for 72 timer):**
1. Detaljeret hændelsesrapport (tidslinje, konsekvensanalyse, berørte Registrerede)
2. Afhjælpningsplan (trin taget, forebyggende foranstaltninger)
3. Assistance med underretning til Tilsynsmyndighed (hvis krævet af GDPR Art. 33)

**Den Dataansvarliges forpligtelser:**
- Den Dataansvarlige er ansvarlig for at underrette Registrerede (hvis krævet af GDPR Art. 34)
- LogicNodes vil levere rimelig assistance (lister over berørte brugere, konsekvensanalyse)

### 4.5 Konsekvensanalyse vedrørende Databeskyttelse (DPIA)

LogicNodes skal levere rimelig assistance, hvis den Dataansvarlige er forpligtet til at udføre en DPIA i henhold til GDPR artikel 35, herunder:
- Beskrivelse af behandlingsoperationer
- Sikkerhedsforanstaltninger implementeret
- Risikovurdering (sandsynlighed for Databrud, konsekvens)
- Information om underdatabehandlere

### 4.6 Forudgående Høring

Hvis en DPIA indikerer høj risiko, og den Dataansvarlige skal konsultere en Tilsynsmyndighed (GDPR Art. 36), vil LogicNodes levere nødvendige oplysninger og assistance. Enhver videregivelse vil være begrænset til oplysninger, der er strengt nødvendige for konsultationen.

---

## 5. Underdatabehandling

### 5.1 Autoriserede Underdatabehandlere

Den Dataansvarlige giver generel autorisation til LogicNodes til at engagere Underdatabehandlere, underlagt betingelserne i dette afsnit.

**Komplet Underdatabehandler-liste:** https://legal.logicnodes.ai/da/underbehandlere

**Resumé:**

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRHy76XGvurEqCuaIjMYAKlogtBJg4Maz1EOIptwtBQth89Vyaq3CM929kRdwEEf8mSbESwZrfnd9o7/pubhtml?gid=0&single=true" width="100%" height="550" frameborder="0" scrolling="no"></iframe>

Den autoritative og opdaterede liste over Underdatabehandlere vedligeholdes på https://legal.logicnodes.ai/da/underbehandlere og opdateres med 7 dages forhåndsvarsel ved ændringer.

**Bring Your Own Key (BYOK) — AI-inferenstjenester:**
Den Dataansvarlige kan til enhver tid vælge at anvende egne API-nøgler til AI-tjenester. Når egne nøgler anvendes, behandler AI-udbyderen data direkte på den Dataansvarliges vegne og er den Dataansvarliges direkte databehandler — ikke LogicNodes' underdatabehandler.

**Underdatabehandleres underdatabehandlere:** Underdatabehandlere kan engagere egne underdatabehandlere (f.eks. benytter Supabase AWS; Vercel benytter AWS/Google Cloud; Hetzner behandler data udelukkende i egne EU-datacentre). Disse er dækket af de respektive leverandørers DPA'er.

### 5.2 Krav til Underdatabehandlere

LogicNodes skal sikre, at alle Underdatabehandlere (med undtagelse af BYOK-valgte AI-udbydere, som er den Dataansvarliges direkte databehandlere):
1. Er bundet af databeskyttelsesforpligtelser svarende til denne DPA
2. Implementerer passende tekniske og organisatoriske sikkerhedsforanstaltninger
3. Er bundet af Databehandleraftaler eller tilsvarende kontraktuelle mekanismer, herunder Standardkontraktbestemmelser (SCC EU 2021/914) for behandlere uden for EØS
4. Undergår regelmæssige sikkerhedsvurderinger

**LogicNodes' forpligtelser:** LogicNodes sikrer, at hver Underdatabehandler har underskrevet en GDPR-kompatibel databehandleraftale og, hvor påkrævet, Standardkontraktbestemmelser. LogicNodes garanterer ikke, at Underdatabehandlere er i besiddelse af sikkerhedscertificeringer (såsom SOC 2 eller ISO 27001), medmindre dette er udtrykkeligt angivet i denne DPA.

### 5.3 Nye Underdatabehandlere

**Underretning:**
LogicNodes vil underrette den Dataansvarlige mindst **7 dage** før engagement af nye Underdatabehandlere eller væsentlig ændring af eksisterende Underdatabehandlere.

**Underretningsmetode:**
- E-mail til den Dataansvarliges sikkerhedskontakt
- Opdatering til den offentlige underdatabehandler-side på https://legal.logicnodes.ai/da/underbehandlere

**Indsigelse:**
Den Dataansvarlige kan gøre indsigelse mod ny Underdatabehandler på rimelige databeskyttelsesgrunde ved at underrette LogicNodes inden for 7 dage.

**Hvis den Dataansvarlige Gør Indsigelse:**
- LogicNodes vil ikke engagere Underdatabehandleren
- ELLER: LogicNodes vil arbejde med den Dataansvarlige om at løse bekymringer
- ELLER: Hvis intet alternativ, kan den Dataansvarlige opsige Vilkår & Betingelser (ingen straf)

### 5.4 Underdatabehandler-ansvar

LogicNodes forbliver fuldt ansvarlig over for den Dataansvarlige for Underdatabehandlers præstation. Hvis Underdatabehandler fejler i at opfylde databeskyttelsesforpligtelser, er LogicNodes ansvarlig over for den Dataansvarlige, som hvis LogicNodes selv havde udført behandlingen. Ansvaret gælder ikke for AI-tjenester, som den Dataansvarlige anvender via egne API-nøgler (BYOK), idet disse udbydere i så fald er den Dataansvarliges direkte databehandlere.

---

## 6. Internationale Dataoverførsler

### 6.1 Datalokation

**Primær Opbevaring:** Den Europæiske Union (AWS EU-North-1, Stockholm via Supabase)

**US Data-residens (Valgfrit):** Den Dataansvarlige kan anmode om dataopbevaring i USA. Yderligere gebyrer kan forekomme.

**Præcisering — AI-inferens:** Uanset valg af datalagringsregion indebærer standardbrug af platformen, at agent-prompts og -svar transmitteres til LLM-udbydere (OpenAI, Anthropic, Google Cloud, xAI) med servere i USA ved hver agentkørsel. Disse inferenskald udgør internationale dataoverførsler, der er dækket af SCC og de respektive Underdatabehandleres DPA'er som beskrevet i §5 og Appendiks C. Den Dataansvarlige kan reducere omfanget af sådanne overførsler ved at anvende egne API-nøgler (BYOK), hvorved LLM-udbyderen bliver den Dataansvarliges direkte databehandler.

**Databehandling udelukkende inden for EU:** Hvis den Dataansvarlige har aktiveret databehandling udelukkende inden for EU (§2.4), behandles og opbevares alle Personoplysninger — herunder AI-inferenskald — udelukkende inden for EU. Internationale dataoverførsler til LLM-udbydere uden for EU finder ikke sted, og ovenstående præcisering om AI-inferens finder ikke anvendelse.

### 6.2 Overførselsmekanismer

**Standard:** Data opbevaret i EU (ingen international overførsel for EU-kunder)

For overførsler af Personoplysninger til lande uden en tilstrækkeligheds-afgørelse (hvis den Dataansvarlige anmoder om US-residens), stoler LogicNodes på:

**Standardkontraktbestemmelser (SCC'er):**
- EU-Kommissionens afgørelse 2021/914 (Modul 2: Dataansvarlig til Databehandler)
- Inkorporeret ved reference i denne DPA
- Fuld tekst tilgængelig på: https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj

**UK-tillæg / IDTA:** For overførsler underlagt UK-lovgivning gælder ICO International Data Transfer Addendum (eller IDTA) ved inkorporering.

**Schweizisk tillæg:** For overførsler underlagt schweizisk FADP skal henvisninger til GDPR og "EU" i SCC'erne læses som henvisninger til FADP og "Schweiz".

**Supabase SCC'er:**
- Supabase har underskrevet SCC'er med LogicNodes
- LogicNodes har underskrevet SCC'er med den Dataansvarlige (via denne DPA)

### 6.3 Yderligere Beskyttelsesforanstaltninger

Ud over SCC'er implementerer LogicNodes supplerende foranstaltninger som krævet af Schrems II:

**Kryptering:**
- Data krypteret i hvile med AES-256 (database, hemmeligheder, opbevaring)
- Transportkryptering med TLS 1.2 eller højere
- HTTPS-håndhævelse med HSTS-headers

**Nøglehåndtering:**
- AWS KMS-administrerede krypteringsnøgler
- Automatisk nøglerotation mindst årligt
- Adgang til nøgler begrænset til tjenesterolle
- Alle dekrypteringsoperationer revisionslogges

**Adgangskontrol:**
- Multi-tenant-isolation via PostgreSQL Row-Level Security (RLS)
- JWT-baseret autentificering (RS256, 1-times udløb)
- Rollebaseret adgangskontrol (admin, medlem, viewer)
- Applikationslags-adgangskontrol (cross-tenant adgang forhindres by design)
- Mindst-privilegium princip for medarbejderadgang

**Dataminimering:**
- Konfigurerbare opbevaringsperioder (1-90 dage for operationelle data)
- Automatisk daglig oprydning
- Ingen brug af kundedata til AI-modeltræning eller -analyse
- Formålsbegrænsning håndhævet by design

**Transparens & Tilsyn:**
- Revisionslogning (5 år — se App. B §12)
- Dataeksport-API'er (JSON-format, maskinlæsbart)
- Den Dataansvarliges adgang til revisionslogfiler via platform eller på anmodning
- Årlige sikkerhedsvurderinger

**Myndighedsadgangsanmodninger:**
- Vi underretter den Dataansvarlige omgående, medmindre det er juridisk forbudt
- Vi anvender rimelige juridiske midler til at anfægte eller indsnævre alt for brede anmodninger
- Vi videregiver kun det minimum af Personoplysninger, der kræves ved lov
- Alle myndighedsanmodninger dokumenteres og rapporteres til den Dataansvarlige

### 6.4 Myndighedsadgangsanmodninger

Hvis LogicNodes modtager en lovlig anmodning fra offentlige myndigheder om adgang til Personoplysninger:
1. Underretter vi omgående den Dataansvarlige, medmindre det er juridisk forbudt
2. Anvender vi rimelige juridiske midler til at anfægte eller indsnævre anmodningen
3. Videregiver vi kun det minimum af Personoplysninger, der kræves ved lov, og dokumenterer anmodningen og videregivelsen

---

## 7. Dataopbevaring & Sletning

### 7.1 Opbevaringsperioder

| Datatype | Opbevaring | Sletningsmetode |
|-----------|-----------|-----------------|
| Agent-kørsler, events | 1-90 dage (konfigurerbar af den Dataansvarlige) | Automatisk daglig oprydning |
| Transskriptioner | 1-90 dage (konfigurerbar af den Dataansvarlige) | Automatisk daglig oprydning |
| Agent-udførelseskontekst (checkpoints) | 1-90 dage (konfigurerbar af den Dataansvarlige) | Automatisk daglig oprydning |
| Brugerkontodata | Indtil sletningsanmodning | Manuel eller initieret af den Dataansvarlige |
| Identitetsgravstenspost (slettet bruger) | 5 år fra kontosletning | Automatisk efter 5 år |
| Fakturaknyttede identitetsoplysninger | 5 år fra regnskabsårets afslutning (bogføringsloven §10) | Automatisk efter 5 år |
| Revisionslogfiler | 5 år fra hændelsesdatoen | Automatisk efter 5 år |

Backups er krypteret i hvile (AES-256).

### 7.2 Ophør af Ydelse

Ved opsigelse eller udløb af Vilkår & Betingelser skal LogicNodes (efter den Dataansvarliges valg):

**Mulighed A: Sletning**
- Slet alle Personoplysninger inden for 30 dage
- Lever skriftlig bekræftelse på sletning, underskrevet af en autoriseret repræsentant

**Mulighed B: Returnering**
- Eksportér alle Personoplysninger i JSON-format
- Lever til den Dataansvarlige inden for 30 dage
- Slet efter den Dataansvarlige bekræfter modtagelse

**Undtagelse:** LogicNodes kan opbevare Personoplysninger i det omfang, som kræves af gældende lovgivning (f.eks. revisionslogfiler til overholdelse).

### 7.3 Den Dataansvarliges Sletning

Den Dataansvarlige kan til enhver tid slette data via:
- Platformens brugergrænseflade
- Skriftlig anmodning til kontakt@logicnodes.ai

LogicNodes sletter øjeblikkeligt fra produktionsdatabasen (synkron CASCADE) og fjerner fra backups inden for 30 dage.

Revisionslogfiler er undtaget fra dette afsnit. De kan ikke slettes på anmodning fra den Dataansvarlige eller slutbruger.

---

## 8. Revision & Overholdelse

### 8.1 Den Dataansvarliges Revisionsrettigheder

Den Dataansvarlige har ret til at revidere LogicNodes' overholdelse af denne DPA, underlagt:

**HYPPIGHED:** Én gang per kalenderår (eller flere hvis Databrud forekommer)

**Omfang:**
- Sikkerhedsforanstaltninger (gennemgang af dokumentation)
- Underdatabehandler-aftaler
- Dataopbevaringspolitikker
- Hændelsesrespons-procedurer

**Metode:**
- **Primær:** Fjernrevision via gennemgang af dokumentation, sikkerhedsspørgeskema og Q&A
- **Alternativ:** LogicNodes kan opfylde revisionsanmodninger ved at stille nylige tredjepartsvurderinger til rådighed (f.eks. SOC 2-rapport, sammenfatninger af penetrationstest under NDA)
- **On-site:** Kun hvis fjernmetoder er utilstrækkelige med 60 dages forhåndsvarsel, i arbejdstiden, begrænset til rimelig varighed (1-2 arbejdsdage)

**Fortrolighed:**
Den Dataansvarlige accepterer at underskrive NDA og begrænse adgang til fortrolige oplysninger.

**Omkostninger:**
- Første fjernrevision per år: Ingen gebyr
- On-site revisioner: Rimelige omkostninger (aftales på forhånd)
- Yderligere revisioner: Rimelige omkostninger (skal aftales)

Revisioner må ikke forstyrre LogicNodes' drift urimeligt og må ikke kræve adgang til andre kunders data eller proprietære systemer, der er uden relation til den Dataansvarliges databehandling.

### 8.2 LogicNodes Certificeringer

LogicNodes vil opretholde industri-standard sikkerhedspraksis og levere dokumentation på rimelig anmodning:
- SOC 2 Type II-rapport (når tilgængelig)
- Penetrationstestrapporter (årligt, under NDA)
- Underdatabehandler-sikkerhedsdokumentation (DPA'er, leverandørsikkerhedssider, tilgængelige certifikater)
- Dokumentation for sikkerhedspolitikker og -procedurer
- Svar på standard sikkerhedsspørgeskemaer (CAIQ, SIG, VSA)

---

## 9. Ansvar & Erstatning

### 9.1 Ansvarsbegrænsning

Begge parter er ansvarlige for tab, der direkte skyldes overtrædelse af denne DPA. Ingen af parterne er ansvarlig for indirekte tab, følgeskader eller tab af data, medmindre tabet skyldes forsæt eller grov uagtsomhed. Disse begrænsninger gælder ikke, hvor lovgivningen forbyder dem, herunder ved overtrædelse af GDPR.

### 9.2 Den Dataansvarliges Erstatningsforpligtelse

Uanset §9.1 skal den Dataansvarlige skadesløsholde, forsvare og holde LogicNodes fri for ethvert krav, tab, bøder, sanktioner og rimelige sagsomkostninger opstået som følge af den Dataansvarliges manglende overholdelse af sine forpligtelser i henhold til §2.3, herunder Tilsynsmyndigheders undersøgelser eller håndhævelsesforanstaltninger og krav fra Registrerede i henhold til GDPR artikel 82 rettet mod LogicNodes. Hvor LogicNodes holdes solidarisk ansvarlig i henhold til GDPR artikel 82 i forbindelse med Personoplysninger introduceret af den Dataansvarlige i strid med §2.3, skal den Dataansvarlige godtgøre LogicNodes for ethvert beløb betalt til Registrerede eller myndigheder.

## 10. Periode & Opsigelse

### 10.1 Periode

Denne DPA træder i kraft fra Ikrafttrædelsesdatoen og gælder, indtil den opsiges af en af parterne i overensstemmelse med afsnit 10.2.

### 10.2 Opsigelse

Denne DPA ophører automatisk ved opsigelse af Vilkår & Betingelser.

### 10.3 Overlevelse

Følgende afsnit overlever opsigelse:
- Afsnit 4.2 (Sikkerhedsforanstaltninger) - indtil data slettes
- Afsnit 4.4 (Underretning om Databrud) - for brud forekommet under perioden
- Afsnit 7 (Dataopbevaring & Sletning) - indtil data slettes
- Afsnit 9 (Ansvar & Erstatning) - i 2 år efter opsigelse

---

## 11. Generelle Bestemmelser

### 11.1 Lovvalg

Denne DPA er underlagt dansk ret. For GDPR-overholdelse gælder EU-databeskyttelseslovgivning i det omfang, som kræves af GDPR artikel 28(3)(a). I tilfælde af konflikt mellem denne DPA og SCC'erne vedrørende overførsler af personoplysninger har SCC'erne forrang.

### 11.2 Ændringer

LogicNodes kan opdatere denne DPA ved at give mindst 7 dages skriftligt varsel til den Dataansvarlige. Den Dataansvarlige kan inden varselets udløb vælge at opsige denne DPA med virkning fra varselets udløb. Fortsætter den Dataansvarlige brugen af Ydelserne efter varselets udløb, anses den opdaterede DPA for accepteret.

### 11.3 Adskillelse

Hvis nogen bestemmelse i denne DPA er ugyldig eller ikke kan håndhæves, forbliver de resterende bestemmelser i fuld kraft og virkning. Den ugyldige bestemmelse skal erstattes af en gyldig bestemmelse, der opnår den oprindelige hensigt.

### 11.4 Hele Aftalen

Denne DPA udgør hele aftalen om databehandling mellem parterne.

### 11.5 Rangorden

I tilfælde af konflikt:
1. Denne DPA (for databeskyttelsesmæssige spørgsmål)
2. Privatlivspolitik (for slutbrugeres datarettigheder)

---

## 12. Underskrifter

**Dataansvarlig:**

Underskrift: _______________________________  
Navn: [DEN DATAANSVARLIGES AUTORISEREDE UNDERSKRIVER]  
Titel: _______________________________  
Dato: _______________________________  

**LogicNodes ApS (Databehandler):**

Underskrift: _______________________________  
Navn: [LOGICNODES AUTORISERET UNDERSKRIVER]  
Titel: _______________________________  
Dato: _______________________________  

---

## Appendiks A: Standardkontraktbestemmelser (SCC'er)

**EU-Kommissionens afgørelse 2021/914 — Modul 2 (Dataansvarlig til databehandler)**

Fuld tekst tilgængelig på: https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj

**Part-detaljer:**

**Dataeksportør (Dataansvarlig):**
- Navn: [DEN DATAANSVARLIGES NAVN]  
- Adresse: [DEN DATAANSVARLIGES ADRESSE]  
- Kontakt: [DEN DATAANSVARLIGES SIKKERHEDSKONTAKT]  
- Rolle: Dataansvarlig (Controller)
- Aktiviteter: Anvender LogicNodes' AI-agentplatform til behandling af egne slutbrugeres data

**Dataimportør (Databehandler):**
- Navn: LogicNodes ApS
- Adresse: Sletvej 2D, 8310 Tranbjerg, Danmark
- CVR: DK45318362
- Kontakt: legal@logicnodes.ai  
- Rolle: Databehandler (Processor)
- Aktiviteter: Leverer indlejrbar AI-agentautomatiseringsplatform (Logi AI)

**Kompetent Tilsynsmyndighed:**
[den Dataansvarliges lokale databeskyttelsesmyndighed, f.eks. Datatilsynet for Danmark]


**Klausul 9 (Brug af Underdatabehandlere):**
- Generel autorisation givet (Afsnit 5.1)
- 7-dages varsel for nye Underdatabehandlere (Afsnit 5.3)

**Klausul 13 (Tilsyn):**
Tilsynsmyndighed: Den kompetente tilsynsmyndighed i det land, hvor den Dataansvarlige er etableret

**Klausul 17 (Lovvalg):**
Lovgivningen i det EU-medlemsland, hvor Dataeksportør er etableret

**Klausul 18 (Valg af Forum):**
Domstole i det EU-medlemsland, hvor Dataeksportør er etableret

**UK-tillæg:**
Hvor det er påkrævet, udgør UK-tillægget til SCC'erne (version udstedt af ICO) en del af denne DPA.

**Schweizisk tillæg:**
For schweiziske FADP-overførsler skal henvisninger i SCC'erne til GDPR og EU-lovgivning læses som henvisninger til FADP og schweizisk lovgivning.

---

## Appendiks B: Tekniske og Organisatoriske Foranstaltninger

**Sikkerhedsforanstaltninger Implementeret af LogicNodes:**

### 1. Adgangskontrol

**Fysisk Adgang:**
- Ikke relevant (cloud-baseret infrastruktur, ingen on-premise servere)
- Supabase/AWS administrerer fysisk datacenter-sikkerhed (ISO 27001, SOC 2)

**Systemadgang:**
- Stærk godkendelse kræves for produktionsadgang (MFA aktiveret, hvor understøttet)
- Nøglebaseret autentificering (adgangskode-baseret login deaktiveret)
- Mindst-privilegium-adgangsprincip (rollebaseret)
- Adgang begrænset til et lille antal autoriserede medarbejdere, der har underskrevet en NDA og gennemført obligatorisk sikkerheds- og personoplysnings/GDPR-træning
- Al produktionsadgang logget til revisionsformål

**Dataadgang:**
- Row-Level Security (RLS)-politikker håndhæver multi-tenant-isolation
- JWT-baseret autentificering (RS256, 1-times udløb)
- API-nøgle-autentificering (bcrypt-hashing, vis-én-gang)
- Service role-adgang logget til revisionslogfiler

### 2. Transmissionskontrol

**Kryptering under Transmission:**
- TLS 1.2+ for al API-kommunikation
- HTTPS-håndhævelse (HTTP omdirigerer til HTTPS)
- HSTS-headers (forhindrer nedrustningsangreb)

**API-sikkerhed:**
- Hastighedsbegrænsning på autentificeringsendpoints
- Input-validering og parameteriserede forespørgsler
- SQL-injektionsforebyggelse (kun parameteriserede forespørgsler)

### 3. Opbevaringskontrol

**Kryptering i Hvile:**
- Database-kryptering (Supabase standard, AES-256)
- Hemmeligheder-kryptering (krypteret vault-opbevaring)
- Storage bucket-kryptering (AWS S3, AES-256)
- Nøglehåndtering: AWS KMS-administrerede nøgler, automatisk rotation mindst årligt
- Nøgleadgang: Begrænset til tjenesterolle, alle dekrypteringsoperationer revisionslogges

**Backup-sikkerhed:**
- Automatiserede daglige backups (Supabase)
- Backups krypteret i hvile
- 30-dages backup-opbevaring

### 4. Brugerkontrol

**Bruger-autentificering:**
- Skygge-brugere (ingen adgangskode-deling med LogicNodes)
- JWT-validering (den Dataansvarliges signeringsnøgle)
- Session-administration (1-times udløb, refresh tokens)

**Autorisation:**
- Rollebaseret adgangskontrol (admin, medlem, viewer)
- Tilladelsessystem (runs:read, runs:create osv.)
- Organisations-scoping (brugere får kun adgang til egen org-data)

### 5. Dataadskillelse

**Multi-Tenancy:**
- Database RLS-politikker (håndhæver organization_id scoping)
- Applikationslags-validering (cross-tenant adgang forhindres by design)
- JWT custom claims (org_id indlejret i session)

**Testdækning:**
- Forebyggelse af adgang på tværs af organisationer tests
- Automatiserede sikkerhedsregressionstests

### 6. Pseudonymisering

**Skygge-brugere:**
- Syntetiske e-mail-adresser (syntetiske, ikke-routable e-mailadresser genereret ud fra bruger- og partneridentifikatorer)
- Ingen PII i bruger-ID'er (UUID'er)

**Revisionslogfiler:**
- Bruger-ID'er i stedet for navne/e-mails
- IP-adresser håndteres i overensstemmelse med sikkerhedsovervågning og juridiske krav

### 7. Tilgængelighed & Modstandsdygtighed

**Infrastruktur:**
- Multi-AZ-deployment (AWS EU-North-1, via Supabase)
- Automatiseret failover (Supabase-administreret)
- Høj tilgængelighed via Supabase/AWS

**Katastrofegendannelse:**
- Daglige automatiserede backups
- Genopretnings-tid og -punkt mål designet til at opfylde forretningskontinuitetskrav

### 8. Hændelsesstyring

**Detektion:**
- Realtidsovervågning (fejlet auth, usædvanlige mønstre)
- Automatiserede alarmer

**Respons:**
- Hændelsesresponsplan (dokumenterede procedurer)
- 24-timers svartid (kritiske problemer)
- Post-hændelsesrapporter (inden for 5 arbejdsdage)

**Eskalering:**
- Teknisk team-notifikation (kritiske problemer)
- CTO/teknisk ledelse-tilsyn
- kommunikation med den Dataansvarlige via sikkerhedskontakt (kontakt@logicnodes.ai)

### 9. Dataportabilitet & Sletning

**Eksport:**
- Agent-kørselseksport-API (JSON-format)
- Struktureret, maskinlæsbare data
- Svartid: Inden for 30 dage

**Sletning:**
- Kaskaderende sletninger (foreign key constraints)
- Automatisk storage-oprydning (triggers)
- Sletningstidslinje: Øjeblikkeligt (produktion), 30 dage (backups)

### 10. Logning & Overvågning

**Revisionslogfiler:**
- Alle autentificeringshændelser logget
- Hemmeligheder-operationer logget (automatisk trigger)
- Admin-operationer logget (org/bruger-sletning)
- Alle handlinger i det interne administrationssystem logget og knyttet til et ansvarligt personalmedlem
- Kontosupportadgangshændelser logget

**Sikkerhedsovervågning:**
- Sporing af fejlet autentificering
- API-nøgle-brugsovervågning
- Løbende forbedring af anomalidetektion

---

### 11. Teknisk Supportadgang

Databehandleren kan tilgå Dataansvarligens organisationsdata og, hvor det er strengt nødvendigt for at levere support eller fejlundersøgelse, tilgå individuelle agentkørsler og Brugerkontodata. Tilladte formål omfatter:

- **Supportlevering** — løsning af problemer rejst af den Dataansvarlige eller slutbrugere;
- **Fejlundersøgelse** — hvor LogicNodes konstaterer eller identificerer utilsigtet platformsadfærd, kan LogicNodes inspicere de relevante agentkørsel(er) udelukkende med henblik på at identificere årsagen og løse platformsproblemet. Adgang er begrænset til data, der er nødvendige for at reproducere eller diagnosticere fejlen.

Databehandleren skal:

(a) Begrænse sådan adgang til et lille antal medarbejdere, der har underskrevet en NDA og gennemført obligatorisk sikkerheds- og personoplysnings/GDPR-træning;

(b) Sikre, at alle adgangshandlinger er knyttet til et ansvarligt personalmedlem og er revisionslogget;

(c) Opbevare adgangslogfiler i overensstemmelse med den formålsbestemte opbevaringsplan i §7.1 og App. B §12 (sikkerhedshændelseslogfiler: 5 år; identitetsgravstenspost: 5 år);

(d) Hvor Databehandleren initierer adgang uden en forudgående supportanmodning fra Dataansvarlig (f.eks. som reaktion på en automatisk fejlalarm), underrette Dataansvarligens udpegede kontaktperson inden for 48 timer;

### 12. Personoplysninger i Revisionslogfiler ved Brugersletning

LogicNodes opbevarer revisionslogfiler i **5 år** fra datoen for den loggede hændelse. Revisionslogfiler opbevares uanset om den relevante brugerkonto efterfølgende er slettet.

Den Dataansvarlige kan tilgå revisionslogfiler for sin egen organisation via platformen eller ved at kontakte kontakt@logicnodes.ai. Data leveres i et læsbart format. Anmodninger behandles inden for 5 arbejdsdage.

Revisionslogfiler kan ikke slettes på anmodning fra den Dataansvarlige eller slutbruger. De slettes permanent ved udløbet af 5-årsperioden.

Retsgrundlag: GDPR art. 6, stk. 1, litra f og art. 17, stk. 3, litra e, sammenholdt med bogføringsloven §10 og straffeloven §93.

## Appendiks C: Underdatabehandler-liste

**Autoritativ Liste:** https://legal.logicnodes.ai/da/underbehandlere

**Resumé:**

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRHy76XGvurEqCuaIjMYAKlogtBJg4Maz1EOIptwtBQth89Vyaq3CM929kRdwEEf8mSbESwZrfnd9o7/pubhtml?gid=0&single=true" width="100%" height="550" frameborder="0" scrolling="no"></iframe>

**LLM-udbydere:** Som standard leverer LogicNodes API-nøgler til LLM-tjenester. Den Dataansvarlige kan valgfrit levere deres egne API-nøgler, i hvilket tilfælde LLM-udbyderen bliver den Dataansvarliges direkte databehandler (ikke LogicNodes' underdatabehandler).

**Underdatabehandleres underdatabehandlere:** Hver underdatabehandler kan engagere egne underdatabehandlere (f.eks. benytter Supabase AWS; Vercel benytter AWS/Google Cloud). Disse er dækket af de respektive leverandørers DPA'er.

**Senest Opdateret:** 21. april 2026

**Ændringer:**
Den Dataansvarlige underrettes 7 dage før eventuelle ændringer til denne liste (ny Underdatabehandler, væsentlig ændring af eksisterende).

Den autoritative underdatabehandler-liste vedligeholdes på https://legal.logicnodes.ai/da/underbehandlere.

---

## Ændringslog

| Dato | Afsnit |
|---|---|
| 2026-07-07 | §2.3; §3.3; §4.1; §4.2; §7.1; §7.3; §9.3; App. B §1; App. B §10; App. B §11; App. B §12 |
| 2026-04-21 | Første offentliggørelse |

---


LogicNodes ApS  
Sletvej 2D, 8310 Tranbjerg, Danmark  
CVR: DK45318362

Denne Databehandleraftale er fortrolig og beregnet til underskrivelse af den Dataansvarlige. Offentlig distribution er ikke tilladt.
