---
layout: legal
title: Sikkerhedsoversigt
description: "LogicNodes Platform – Sikkerhedsoversigt, databeskyttelse og compliance for virksomheder."
last_updated: 2026-07-03
lang: da
lang_equivalent: /en/security-architecture/
---

# LogicNodes Platform - Sikkerhedsoversigt

<p class="last-updated">Senest opdateret: {{ page.last_updated | date: "%-d. %B %Y" }}</p>
**Målgruppe:** Potentielle partnere, sikkerhedsteams, compliance-ansvarlige

**Distribution:** Dette er en overordnet sikkerhedsoversigt til offentlig evaluering. Vores detaljerede sikkerhedsarkitekturdokument (herunder implementeringsspecifikationer, API-endpoints og operationelle parametre) er tilgængeligt på anmodning for kvalificerede partnere under NDA.

**Anmod om fuld dokumentation:** Kontakt [kontakt@logicnodes.ai](mailto:kontakt@logicnodes.ai)

## Resumé

LogicNodes AI agent platform er designet med enterprise-grade sikkerhed for at beskytte dine data og dine kunders data. Denne oversigt forklarer vores sikkerhedsgarantier, datahåndteringspraksis og compliance-muligheder. LogicNodes anvendes både direkte via LogicNodes-frontenden og indlejret i partner-SaaS-platforme, og følger principperne om mindste privilegium og dataminimering i begge konfigurationer.

Vi anvender **ikke** kundedata til træning eller finjustering af AI-modeller.

## Sikkerhedsgarantier

**Komplet dataisolering** - Dine organisationers data er kryptografisk isoleret via multi-tenant-arkitektur

**Krypterede data** - Alle data krypteret i hvile og under transport (TLS 1.2 eller højere)

**Konfigurerbar opbevaring** - Du styrer opbevaringsperioderne; automatiseret oprydning håndterer GDPR-overholdelse

**Revisionslogning** — opbevares 5 år

**Sikker autentificering** - Supabase Auth til direkte brugere; JWT-baseret autentificering til partner-indlejrede brugere

**Hastighedsbegrænsning** - Beskyttelse mod misbrug og uautoriserede adgangsforsøg

**GDPR-klar** - Ret til sletning, dataeksport, dataportabilitet, kaskaderende sletninger

## Autentificering & Adgangskontrol

### Sådan fungerer det

LogicNodes understøtter to autentificeringsmodeller afhængigt af, hvordan platformen tilgås:

**Direkte brugere (LogicNodes-frontend)**
Brugere logger ind via e-mail/adgangskode eller OAuth (Google, Microsoft Azure). Legitimationsoplysninger administreres udelukkende af Supabase Auth — LogicNodes implementerer ikke egen adgangskodelagring eller -verifikation. Supabase Auth er SOC 2 Type II-certificeret og håndterer hashing, salting og sikker lagring. OAuth-brugere afgiver aldrig en adgangskode til LogicNodes.

**Partner-indlejrede brugere (integration JWT)**
Partnere, der indlejrer LogicNodes i deres egen platform, autentificerer brugere ved at udstede et signeret JWT fra deres egen backend. LogicNodes validerer JWT-signaturen ved hjælp af partnerens RSA public key og opretter automatisk en session — brugeren interagerer aldrig direkte med LogicNodes, og der oprettes ingen LogicNodes-konto eller adgangskode.

**I begge tilfælde:**
- **Fuldt audit trail** - Alle autentificeringsforsøg logges
- **Øjeblikkelig tilbagekaldelse** - Sessioner udløber automatisk; partnere kan tilbagekalde indlejret adgang ved at stoppe JWT-udstedelse
- **Nul adgang på tværs af lejere** - Autentificering er altid begrænset til én organisation

**Autentificeringsmetode:** Supabase Auth (direkte brugere) / RS256-signerede JWTs (partner-indlejrede brugere)

**Sessionssikkerhed:** Token-baserede sessioner med automatisk udløb og mulighed for fornyelse

**Tilbagekaldelse af adgang:** For direkte brugere: slet eller deaktiver kontoen via platform-UI'en. For partner-indlejrede brugere: stop med at udstede JWTs — eksisterende sessioner udløber automatisk inden for 1 time.

**Kompromitteret partner-signeringssecret:** Kontakt kontakt@logicnodes.ai øjeblikkeligt. Vi roterer signeringssecret og invaliderer alle aktive sessioner for den pågældende integration.

## Datasikkerhed

### Multi-Tenant Isolering

Dine data er fuldstændigt isoleret fra andre organisationer gennem flere sikkerhedslag:

**Database-niveau:**
- Row-level security policies håndhæver organisationsgrænser
- Forespørgsler automatisk filtreret efter organisation
- Privilegeret adgang respekterer organisationsscopning

**Applikationsniveau:**
- Al dataadgang kræver eksplicit organisationskontekst
- Cross-organisation forespørgsler forhindres by design
- Omfattende testdækning for isoleringsscenarier

**Resultat:** Nul cross-organisation datalækage. Overholder princippet om mindste privilegium og håndhæver strict tenant separation.

### Miljøadskillelse

Produktionsdata er strengt adskilt fra udviklings-, staging- og testmiljøer:

- Separate Supabase-projekter til produktion og ikke-produktion
- Adskilte databaser, legitimationsoplysninger og API-endpoints pr. miljø
- Ingen produktionsdata kopieres til ikke-produktion; udvikling og test bruger syntetiske eller seeded data
- Separate secret stores pr. miljø; produktionssecrets er aldrig tilgængelige uden for produktion
- Backend-adgang til produktion er begrænset, MFA-beskyttet og audit-logget uafhængigt af ikke-produktion

### Kryptering

**Data i hvile:**
- Database: Industristandard kryptering
- Hemmeligheder: Krypteret og gemt i sikre vaults (kan ikke dekrypteres uden autoriseret backend-adgang)
- Fillager: Industristandard kryptering

**Data under transport:**
- TLS 1.2 eller højere til al API-kommunikation
- HTTPS-håndhævelse


### Adgangskontrol

**Brugeradgang:**
- Rollebaseret adgangskontrol (admin, medlem, viewer)
- Brugere kan kun tilgå deres organisations data
- Tilladelser håndhævet på database- og applikationsniveau

**Partner API-adgang:**
- Sikre API-nøgler til backend-til-backend kommunikation
- Hemmeligheder scopet efter organisation
- Al API-adgang logget til revisionslogfiler

### Personale- og Adminadgang

Et begrænset antal autoriserede LogicNodes-medarbejdere har adgang til interne administrationsværktøjer til drifts- og supportformål. Inden adgang tildeles, skal enhver medarbejder:

- Underskrive en fortrolighedsaftale (NDA), der dækker fortrolige kundedata
- Gennemføre obligatorisk sikkerhedsbevidsthedsuddannelse
- Gennemføre obligatorisk uddannelse i personoplysninger og GDPR

Adgang gives kun, når alle tre krav er opfyldt, og tilbagekaldes øjeblikkeligt ved ophør af ansættelses- eller konsulentaftale. Enhver handling foretaget via interne administrationsværktøjer er knyttet til et ansvarligt personalmedlem og er revisionslogget. MFA er obligatorisk for alt personale med administrationsadgang.

**Kontosupportadgang:** I begrænsede tilfælde kan autoriserede medarbejdere tilgå og handle inden for en brugers konto for at yde effektiv teknisk support eller for at undersøge utilsigtet platformsadfærd — ved at inspicere de relevante agentkørsel(er) udelukkende med henblik på at identificere årsagen og løse platformsproblemet. Al sådan adgang er revisionslogget og oplyst i vores Privatlivspolitik (§6a).

### Data Loss Prevention

Vores strategi for forebyggelse af datatab kombinerer forebyggende, gendannelige og operationelle kontroller:

**Forebyggende:**
- Kryptering i hvile og under transport
- Multi-tenant isolering via row-level security
- Mindste-privilegium adgang med MFA for personale
- Uforanderlige, manipulationssikre revisionslogfiler

**Gendannelige:**
- Krypterede automatiserede backups med point-in-time recovery
- 30-dages backup-opbevaring med dokumenterede gendannelsesprocedurer
- Kaskaderende sletninger forhindrer forældreløse datafragmenter

**Operationelle:**
- Daglig automatiseret oprydning håndhæver konfigurerede opbevaringsperioder
- Ingen kundedata kopieres til udviklingsmiljøer eller bruges til modeltræning
- Begrænset backend-adgang forhindrer eksfiltration af produktionsdata

## Dataopbevaring & Privatliv

### Hvad vi gemmer

| Datatype | Opbevaring | Formål | Din kontrol |
|----------|-----------|---------|-------------|
| Brugerprofil (e-mail, navn) | Indtil sletning | Kontoadministration | Platform-UI |
| Agent eksekveringshistorik | Konfigurerbar (1-90 dage, standard: 90 dage) | Samtalekontinuitet, debugging | Konfigurerbar opbevaring |
| API-forespørgsler/svar | Konfigurerbar (1-90 dage, standard: 90 dage) | Agentkontekst, gennemsigtighed | Konfigurerbar opbevaring |
| AI-modelinteraktioner | Konfigurerbar (1-90 dage, standard: 90 dage) | Forbedre agentkontinuitet og debugging | Konfigurerbar opbevaring; **bruges ikke til modeltræning** |
| Krypterede hemmeligheder | Indtil sletning | Værktøjseksekvering | Platform-UI |
| Revisionslogfiler | 5 år | Compliance | Skrivebeskyttet |

### Automatiseret oprydning

**Daglig automatiseret oprydning** (kører kl. 02:00 UTC via databasescheduler) sletter agentkørselsregistreringer og tilknyttede hændelser ældre end din konfigurerede opbevaringsperiode.

Opbevaring af lagerfiler følger livscyklussen for det element, filen tilhører:
- **Agentkørselsfiler** (uploadede dokumenter og lydoptagelser tilknyttet en specifik kørsel) slettes sammen med den overordnede agentkørsel, når denne udløber
- **App- og platformsfiler** (filer tilknyttet apps eller andre vedvarende platformselementer) opbevares i elementets levetid og slettes, når appen eller elementet slettes
- **Revisionslogfiler** er undtaget fra automatisk oprydning og opbevares i 5 år

### Datasletning

**Bruger- og organisationssletnings-API'er** understøtter GDPR-retten til sletning:
- Øjeblikkelig sletning af brugerregistrering og profildata fra produktionsdatabasen (synkront)
- Agentkørsler, hændelser, samtalehistorik og organisationsmedlemskaber slettes via database-cascade
- Uploadede filer (dokumenter, avatarer) slettes fra storage som del af sletningsflowet
- Krypterede hemmeligheder slettes ved organisationssletning
- Alle data fjernes fra krypterede backups inden for 30 dage

**Undtagelse for stemmeaftryk:** Stemmeaftryk oprettet via talefunktionen er lagret separat og er ikke dækket af det automatiserede kontosletningsflow. Stemmeaftryk kan slettes direkte fra platform-UI'en under den tilknyttede trigger på chatsiden.

**Undtagelse:** Revisionslogfiler opbevares i 5 år af hensyn til svindelundersøgelse (Art. 17(3)(e) GDPR). Se [Privatlivspolitik afsnit 6a - Internt Personaladgang](/da/privatlivspolitik/#6a-internt-personaladgang) for detaljer. De slettes permanent ved udløbet af 5-årsperioden.

**Revisionslogbeskyttelse:**
- Manipulationssikre og skrivebeskyttede via Row-Level Security
- Kun autoriserede operationer kan ændre logfiler (kræver forhøjede rettigheder)
- Organisationssletning bevarer revisionshistorik (logfiler opbevares til compliance-formål)

## Compliance & Certificeringer

### GDPR-overholdelse

**Dataansvarlig vs. databehandler:**

Ved **partner-indlejrede deployments:** Du (partneren) er den Dataansvarlige; LogicNodes er Databehandleren og behandler data på dine vegne.

Ved **direkte platformbrug:** LogicNodes fungerer som Dataansvarlig for konto- og profildata (e-mail, navn, loginhistorik) og som Databehandler for det indhold, din organisation behandler via platformen (agentkørsler, uploadede dokumenter, AI-interaktioner).

**GDPR-rettigheder vi understøtter:**

For en fuld juridisk beskrivelse af dine rettigheder under GDPR, se [GDPR-meddelelsen](/da/gdpr-notice/).

- Ret til indsigt — dashboard-eksport af profil, organisationsmedlemskab, kørselsmetadata og transskriptionsliste; fuldt indhold af agentkørsler tilgængeligt via skriftlig henvendelse til kontakt@logicnodes.ai (leveres inden for 30 dage)
- Ret til sletning — platform-UI med kaskaderende sletninger for alle standarddataregistreringer; stemmeaftryk kan slettes direkte fra platform-UI'en under den tilknyttede trigger på chatsiden
- Ret til dataportabilitet — samme omfang som Ret til indsigt; fuld indholdseksport tilgængelig via skriftlig henvendelse
- Ret til berigtigelse (opdater via dashboard og API)
- Dataminimering (opbevaringspolitikker, automatiseret oprydning)

**Databehandleraftale:** Skabelon tilgængelig på [Databehandleraftale](/da/databehandleraftale/)
- GDPR Artikel 28-kompatibel
- Standardkontraktbestemmelser (SCCs) til internationale overførsler

### Datalokalisering

**Primær datalokalisering:** Den Europæiske Union (Sverige)

**Amerikansk datalokalisering:** Tilgængelig på anmodning (tillægsgebyrer kan gælde)

**Internationale overførsler:**
- Standardkontraktbestemmelser (EU-Kommissionen godkendt)
- Tilstrækkelige sikkerhedsforanstaltninger pr. GDPR Artikel 46

Primær datalagring sker som standard i EU (Sverige). Standard agentkørsler sender forespørgsler og svar til AI-modeludbydere — OpenAI, Anthropic og xAI har servere i USA, hvilket udgør en international overførsel dækket af Standardkontraktbestemmelser. Partnere, der kræver, at al behandling forbliver inden for EU, kan anmode om EU-only databehandling (se nedenfor).

### Infrastruktur-compliance

LogicNodes' infrastruktur kører på Supabase (bygget på AWS). Supabase drives på Amazon Web Services (AWS) og arver dermed dets fysiske og netværksmæssige sikkerhedskontroller.

**Vores infrastrukturudbyder (Supabase):**
- SOC 2 Type II certificeret
- ISO 27001 certificeret
- GDPR-kompatibel



**Cloud-udbyder (AWS):**
- SOC 1, 2, 3
- ISO 27001
- PCI DSS

### LogicNodes Certificeringer

**Aktuel:**
- Designet til at opfylde SOC 2 Trust Service Criteria — formel audit planlagt til Q1 2027
- Omfattende sikkerhedsdokumentation tilgængelig for kvalificerede partnere under NDA; tilpassede sikkerhedsspørgeskemaer besvares (send til kontakt@logicnodes.ai, svartid 5-10 arbejdsdage)
- Penetrationstest planlagt (første engagement planlagt til Q1 2027, herefter årlig kadence)

**Planlagt:**
- SOC 2 Type II audit (planlagt Q1 2027)
- ISO 27001 (til EU-kunder, planlagt Q1 2027)
- Bug bounty-program (planlagt Q1 2027)

### Underbehandlere

Den autoritative, aktuelle liste over underbehandlere vedligeholdes nedenfor. Vi giver 7 dages forhåndsvarsel inden tilføjelse af nye underbehandlere. Den komplette og altid opdaterede liste vedligeholdes på [/da/underbehandlere/](/da/underbehandlere/).

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRHy76XGvurEqCuaIjMYAKlogtBJg4Maz1EOIptwtBQth89Vyaq3CM929kRdwEEf8mSbESwZrfnd9o7/pubhtml?gid=0&single=true" width="100%" height="550" frameborder="0" scrolling="no"></iframe>

Fulde detaljer, DPA-status og kontaktoplysninger for hver underbehandler er tilgængelige på vores [Underbehandlerliste](/da/underbehandlere/).

## Incident Response

### Sikkerhedskontakt

**E-mail:** kontakt@logicnodes.ai  
**PGP-fingeraftryk:** Publiceret på [https://legal.logicnodes.ai/en/pgp.txt](https://legal.logicnodes.ai/en/pgp.txt)  
**Svartid:** Inden for 24 timer for kritiske problemer

### Databrudnotifikation

Hvis vi opdager uautoriseret adgang til dine data:

**Inden for 24 timer:**
- Inddæm bruddet (stop uautoriseret adgang)
- Rotér alle adgangstokens og API-nøgler som del af inddæmningen (manuel rotation gennemført inden for 24 timer)
- Underret dig via e-mail
- Lever foreløbig incident-rapport

**Inden for 72 timer:**
- Detaljeret incident-rapport (tidslinje, berørte data, grundårsag), i overensstemmelse med GDPR Artikel 33
- Afhjælpningsplan (trin taget, forebyggende foranstaltninger)
- Assistance med lovpligtig notifikation (hvis påkrævet)

**Dit ansvar:**
- Underret berørte brugere (hvis påkrævet af GDPR Artikel 34)
- Vi leverer: Berørte brugerlister, konsekvensanalyse, tekniske detaljer

### Ansvarlig Offentliggørelse

Sikkerhedsforskere kan rapportere sårbarheder:
- **E-mail:** kontakt@logicnodes.ai
- **Safe Harbor:** Vi vil ikke indlede retssag mod god-faith forskning
- **90-dages embargo:** Giv os 90 dage til at løse problemet inden offentlig offentliggørelse
- **Anerkendelse:** Offentlig anerkendelse i vores Security Hall of Fame

Fuld politik: [https://legal.logicnodes.ai/da/ansvarlig-offentliggorelse/](https://legal.logicnodes.ai/da/ansvarlig-offentliggorelse/)

Gennemgå venligst vores fulde [Politik for Ansvarlig Offentliggørelse](https://legal.logicnodes.ai/da/ansvarlig-offentliggorelse/) for omfang og testretningslinjer inden sikkerhedsforskning.

## Anmod om fuld sikkerhedsarkitektur

For detaljerede tekniske specifikationer herunder:
- Komplet API-endpoint-dokumentation
- Detaljerede autentificeringsflows og sessionsstyring
- API-nøglehåndtering og rotationsprocedurer
- Implementeringsdetaljer for hemmelighedsstyring
- Revisionslog-skemaer og adgangsprocedurer
- Partner API-kapaciteter
- Bedste sikkerhedspraksis og anbefalinger

**Kontakt:** [kontakt@logicnodes.ai](mailto:kontakt@logicnodes.ai)

Vores fulde sikkerhedsarkitekturdokument er tilgængeligt for kvalificerede partnere under NDA til sikkerhedsevaluering og compliance-gennemgang.

## Kontakt & Support

### Sikkerhedsteam
**E-mail:** kontakt@logicnodes.ai  
**PGP-fingeraftryk:** Publiceret på [https://legal.logicnodes.ai/en/pgp.txt](https://legal.logicnodes.ai/en/pgp.txt)  
**Svartid:** 24 timer for kritiske problemer  
**Fuld sikkerhedsarkitektur:** Tilgængelig under NDA eller på anmodning  

### Privatliv & Compliance
**E-mail:** kontakt@logicnodes.ai  
**Svartid:** 5 arbejdsdage  

### Salg & Partnerskaber
**E-mail:** kontakt@logicnodes.ai  
**Formål:** DPA-eksekvering, tilpassede aftaler, sikkerhedsspørgeskemaer  

### Teknisk Support
**E-mail:** kontakt@logicnodes.ai  
**Svartid:** 4 arbejdstimer  

## Dokumentoplysninger

**Version:** 1.2 (Offentlig oversigt)  
**Senest opdateret:** 2026-07-03  
**Status:** Denne side er informativ og kan ændres  


Dette dokument er beregnet til partnerevaluering. Den fulde sikkerhedsarkitektur er tilgængelig på anmodning.
