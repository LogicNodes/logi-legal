---
layout: legal
title: Partner Dokumentationshub
last_updated: 2026-10-15
lang: da
lang_equivalent: /en/partner-docs/
---

# Partner Dokumentationshub

<p class="last-updated">Senest opdateret: {{ page.last_updated | date: "%-d. %B %Y" }}</p>

**Omfattende sikkerheds-, privatlivs- og integrationsressourcer**

---

## Velkommen partnere!

Dette dokumentationshub giver dig alt, hvad du har brug for til at evaluere, integrere og vedligeholde LogicNodes i dit miljø. Uanset om du gennemfører sikkerhedsevaluering, integrerer vores API eller sikrer compliance, finder du ressourcerne her.

---

## 📋 Dokumentationsindeks

### 🔒 Sikkerhedsdokumentation

#### [Sikkerhedsarkitektur]({{ '/da/sikkerhedsarkitektur/' | relative_url }})
**Målgruppe:** Tekniske beslutningstagere, sikkerhedsteams, compliance-ansvarlige

**Nøgleemner:**
- Autentificering & autorisation (JWT, API-nøgler, skyggebrugere)
- Multi-tenant sikkerhedsarkitektur (tredobbelt forsvarslag)
- Hemmelighedsadministration (Supabase Vault-kryptering)
- Dataopbevaring & automatiseret oprydning
- Revisionslogning (5 år)
- Partneradministrationskapaciteter (organisations-/brugeradministration)
- Infrastruktursikkerhed (kryptering, RLS, hastighedsbegrænsning)
- Compliance-status (GDPR, SOC 2-køreplan)

**Hvornår bruges det:**
- Svar på sikkerhedsspørgeskemaer
- Teknisk due diligence
- Integrationsplanlægning
- Sikkerhedsteamsevaluering

### 🛡️ Privatliv & Compliance

#### [Privatlivspolitik]({{ '/da/privatlivspolitik/' | relative_url }})
**Målgruppe:** Juridiske teams, compliance-ansvarlige, slutbrugere

**Nøgleemner:**
- Dataansvarlig vs. databehandlerroller
- Hvilke data vi indsamler (og ikke indsamler)
- Hvordan vi bruger, deler og beskytter data
- Dataopbevaring & sletningspolitikker
- GDPR-rettigheder (adgang, sletning, portabilitet)
- CCPA-overholdelse (Californien-beboere)
- Internationale dataoverførsler (SCC'er)

**Hvornår bruges det:**
- GDPR-compliance gennemgang
- Konsekvensanalyser vedrørende databeskyttelse (DPIA)
- Slutbrugeres privatlivsoplysninger
- Juridisk teams evaluering

#### [Databehandleraftale]({{ '/da/databehandleraftale/' | relative_url }})
**Målgruppe:** Juridiske teams, indkøb

**Nøgleemner:**
- DPA i overensstemmelse med GDPR Artikel 28
- Behandlingsdetaljer (genstand, varighed, datatyper)
- LogicNodes' forpligtelser (sikkerhed, brudvarsel, registreredes rettigheder)
- Underbehandlerautorisering & varsel
- Internationale dataoverførsler (SCC'er)
- Revisionsrettigheder & certificeringer
- Ansvar & skadesløsholdelse

**Hvornår bruges det:**
- Kontraktforhandling
- GDPR-compliance (påkrævet for EU-data)
- Juridisk gennemgang inden integration
- Indkøbsproces

### 🐛 Sikkerhedsrapportering

#### [Ansvarlig Offentliggørelsespolitik]({{ '/da/ansvarlig-offentliggorelse/' | relative_url }})
**Målgruppe:** Sikkerhedsforskere, penetrationstestere

**Nøgleemner:**
- Omfang (omfattede systemer, sårbarheds typer)
- Testretningslinjer (hvad man skal og ikke skal gøre)
- Safe harbor (juridisk beskyttelse)
- Rapporteringsproces (format, tidslinje)
- Responsproces (24-timers bekræftelse, 90-dages embargo)
- Anerkendelse & belønninger

**Hvornår bruges det:**
- Autorisering af sikkerhedsforskning
- Sårbarhedsrapportering
- Definition af omfang for penetrationstest
- Bug bounty reference (ved lancering)

---

## 🎯 Hurtig start efter rolle

### For sikkerhedsteams
**Begynd her:**
1. [Sikkerhedsarkitektur]({{ '/da/sikkerhedsarkitektur/' | relative_url }}) - Fuld teknisk sikkerhedsoversigt
2. [Privatlivspolitik]({{ '/da/privatlivspolitik/' | relative_url }}) - Datahåndtering & privatliv
3. [Ansvarlig offentliggørelsespolitik]({{ '/da/ansvarlig-offentliggorelse/' | relative_url }}) - Sikkerhedsrapportering

**Vigtige spørgsmål besvaret:**
- Hvordan håndhæves multi-tenant isolering? → Sikkerhedsarkitektur (afsnit 2)
- Hvordan krypteres hemmeligheder? → Sikkerhedsarkitektur (afsnit 4)
- Hvad er jeres GDPR-compliance-status? → Privatlivspolitik + Sikkerhedsarkitektur (afsnit 9)
- Har I SOC 2? → Sikkerhedsarkitektur (afsnit 8)

---

### For juridiske/compliance-teams
**Begynd her:**
1. [Privatlivspolitik]({{ '/da/privatlivspolitik/' | relative_url }}) - GDPR/CCPA-overholdelse
2. [Databehandleraftale]({{ '/da/databehandleraftale/' | relative_url }}) - DPA-skabelon
3. [Sikkerhedsarkitektur]({{ '/da/sikkerhedsarkitektur/' | relative_url }}) - Tekniske sikkerhedsforanstaltninger

**Vigtige spørgsmål besvaret:**
- Er I GDPR-kompatible? → Ja (se Privatlivspolitik)
- Kan vi underskrive en DPA? → Ja (se DPA-skabelon)
- Hvor opbevares data? → EU (AWS eu-central-1, Frankfurt)
- Hvor længe opbevares data? → 1-90 dage (konfigurerbar), revisionslogfiler 5 år

---

### For udviklere
**Begynd her:**
1. Widget-integrationsguide - Frontend-integration (Kommer snart)
2. Secret Management API - Backend-integration (Kommer snart)
3. [Sikkerhedsarkitektur]({{ '/da/sikkerhedsarkitektur/' | relative_url }}) - Bedste praksis

**Vigtige spørgsmål besvaret:**
- Hvordan integrerer jeg widgetten? → Widget-integrationsguide
- Hvordan provisionerer jeg hemmeligheder? → Secret Management API
- Hvordan genererer jeg JWTs? → Widget-integrationsguide
- Hvad er bedste sikkerhedspraksis? → Sikkerhedsarkitektur (afsnit 10)

---

### For direktører/beslutningstagere
**Begynd her:**
1. [Sikkerhedsarkitektur]({{ '/da/sikkerhedsarkitektur/' | relative_url }}) - Resumé
2. [Privatlivspolitik]({{ '/da/privatlivspolitik/' | relative_url }}) - Introduktion

**Vigtige spørgsmål besvaret:**
- Er LogicNodes sikkert? → Ja (arkitektur af virksomhedsklasse)
- Er vi GDPR-kompatible, hvis vi bruger LogicNodes? → Ja (DPA tilgængelig)
- Hvilke certificeringer har I? → Klar til SOC 2-certificering, penetrationstest planlagt 1. kvartal 2027
- Kan vi slette brugerdata on-demand? → Ja (API-drevet sletning, 24-timers tidslinje)

---

## 🛠️ Brug af disse dokumenter

### Sikkerhedsspørgeskemaer

De fleste sikkerhedsspørgeskemaer kan besvares ved hjælp af disse dokumenter:

**Hyppige spørgsmål → Dokumentafsnit:**

| Spørgsmål | Dokument | Afsnit |
|----------|----------|---------|
| "Beskriv jeres autentificeringsmekanisme" | Sikkerhedsarkitektur | Autentificering |
| "Hvordan håndhæver I multi-tenancy?" | Sikkerhedsarkitektur | Datasikkerhed |
| "Krypterer I data i hvile?" | Sikkerhedsarkitektur | Infrastruktur |
| "Hvad er jeres dataopbevaringspolitik?" | Privatlivspolitik | Dataopbevaring |
| "Har I SOC 2?" | Sikkerhedsarkitektur | Compliance |
| "Er I GDPR-kompatible?" | Privatlivspolitik | Alle afsnit |
| "Kan I underskrive en DPA?" | DPA-skabelon | Alle afsnit |
| "Hvilke underbehandlere bruger I?" | DPA | Underbehandlere |

### Leverandørsikkerhedsvurderinger

**Almindelige vurderingsrammer:**

**CAIQ (Consensus Assessments Initiative Questionnaire):**
- Primært dokument: Sikkerhedsarkitektur
- Supplement: Privatlivspolitik, DPA

**SIG (Standardized Information Gathering):**
- Primært dokument: Sikkerhedsarkitektur
- Supplement: Privatlivspolitik, DPA, Ansvarlig Offentliggørelse

**VSA (Vendor Security Assessment):**
- Tilpassede spørgeskemaer: Brug alle dokumenter som reference
- Kontakt kontakt@logicnodes.ai for assistance

## 🔄 Dokumentopdateringer

Alle dokumenter er versionsstyrede og opdateres regelmæssigt:

**Opdateringsfrekvens:**
- Sikkerhedsarkitektur: Kvartalsvis (eller efter større ændringer)
- Privatlivspolitik: Efter behov (30 dages varsel ved væsentlige ændringer)
- DPA: Efter behov (i sync med Privatlivspolitik)
- Ansvarlig Offentliggørelse: Årligt (eller i takt med bug bounty-programmets udvikling)

**Underretning:**
Partnere underrettes via e-mail om væsentlige ændringer til:
- Privatlivspolitik (7 dages forudgående varsel)
- DPA (7 dages forudgående varsel)
- Underbehandlerliste (7 dages forudgående varsel)

## 📄 Licens & Brug

**Brugsrettigheder:**
- Del med interne teams (juridisk, sikkerhed, teknik)
- Henvis til i sikkerhedsspørgeskemaer (med korrekt kildehenvisning)
- Medtag i intern compliance-dokumentation
- Offentlig distribution uden tilladelse er ikke tilladt
- Ændring eller oprettelse af afledte værker er ikke tilladt

**Spørgsmål:** Kontakt [kontakt@logicnodes.ai](mailto:kontakt@logicnodes.ai) for brugsrettigheder.

## 📞 Kontaktinformation

### Sikkerhedsteam
**E-mail:** [kontakt@logicnodes.ai](mailto:kontakt@logicnodes.ai)
**Formål:** Sikkerhedsspørgsmål, sårbarhedsrapporter, hændelsesrespons
**Svartid:** 24 timer

### Privatlivs-/Compliance-team
**E-mail:** [kontakt@logicnodes.ai](mailto:kontakt@logicnodes.ai)
**Formål:** GDPR/CCPA-anmodninger, DPA-udførelse, privatlivsspørgsmål
**Svartid:** 5 hverdage

### Salg & Partnerskaber
**E-mail:** [kontakt@logicnodes.ai](mailto:kontakt@logicnodes.ai)
**Formål:** Kontraktspørgsmål, tilpassede aftaler, sikkerhedsspørgeskemaer
**Svartid:** 2 hverdage

### Teknisk support
**E-mail:** [kontakt@logicnodes.ai](mailto:kontakt@logicnodes.ai)
**Formål:** Integrationshjælp, API-spørgsmål, fejlfinding
**Svartid:** 4 timer

---

## 📚 Yderligere ressourcer

### Eksterne links

**Supabase (infrastrukturudbyder):**
- [SOC 2-rapport](https://supabase.com/security)
- [Sikkerhedsdokumentation](https://supabase.com/docs/guides/security)

**GDPR-ressourcer:**
- [Officiel tekst](https://gdpr-info.eu/)
- [Artikel 28 (DPA-krav)](https://gdpr-info.eu/art-28-gdpr/)

**Sikkerhedsstandarder:**
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [CWE Top 25](https://cwe.mitre.org/top25/)

---

## 🎓 Ordliste

**Skyggebruger:** Syntetisk brugerkonto oprettet under partnerautentificering (ingen adgangskode; anvender syntetiske, ikke-routable e-mailadresser genereret ud fra bruger- og partneridentifikatorer)

**RLS (Row-Level Security):** Databasesikkerhedspolitikker, der håndhæver multi-tenant isolation på rækkeniveau

**JWT (JSON Web Token):** Underskrevet token brugt til autentificering, der indeholder brugeridentitetskrav

**Vault:** Supabase krypteret hemmelighedslagring (til API-nøgler, legitimationsoplysninger)

**DPA (Data Processing Agreement):** GDPR Artikel 28-kontrakt mellem dataansvarlig og databehandler

**SCC (Standard Contractual Clauses):** EU-godkendt kontrakt til internationale dataoverførsler

**Underbehandler:** Tredjepart engageret af databehandler til at behandle persondata (f.eks. Supabase, AWS)

**Dataansvarlig:** Enhed, der bestemmer formål og midler til behandling (partneren)

**Databehandler:** Enhed, der behandler data på vegne af dataansvarlig (LogicNodes)

---

**For det komplette partnerdokumentationsrepository, kontakt [kontakt@logicnodes.ai](mailto:kontakt@logicnodes.ai)**
