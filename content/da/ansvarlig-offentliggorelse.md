---
layout: legal
title: Politik for Ansvarlig Offentliggørelse
last_updated: 2026-06-17
lang: da
lang_equivalent: /en/responsible-disclosure/
---

# LogicNodes — Politik for Ansvarlig Offentliggørelse

**Ikrafttrædelsesdato:** 3. november 2025

<p class="last-updated">Senest opdateret: {{ page.last_updated | date: "%-d. %B %Y" }}</p>

---

## 1. Introduktion

LogicNodes er forpligtet til at beskytte sikkerheden og privatlivet for vores partnere og deres brugere. Vi byder velkomne til ansvarlig offentliggørelse af sikkerhedssårbarheder fra sikkerhedsforskningssamfundet.

Denne politik definerer hvad forskere må teste, hvordan fund rapporteres, og hvordan LogicNodes reagerer. Ved at indsende en rapport accepterer du vilkårene i denne politik.

---

## 2. Anvendelsesområde

### 2.1 Systemer inden for anvendelsesområdet

Følgende systemer er autoriseret til sikkerhedstest:

| System | Adresse |
|--------|---------|
| Webapplikation | https://app.logicnodes.ai |
| API | https://api.logicnodes.ai/api/v1/* |
| Staging (på anmodning) | https://staging.logicnodes.ai |
| Demo-konti | Anmod via kontakt@logicnodes.ai |

### 2.2 Systemer uden for anvendelsesområdet

Følgende er **ikke autoriseret** til test:

- Tredjepartstjenester (Supabase, AWS, Mailgun — rapporter direkte til dem)
- Fysisk sikkerhed (kontorer, datacentre)
- Social engineering (phishing, vishing, pretexting)
- Denial of Service (DoS/DDoS)
- Spam eller massemail-test
- Andre kunders konti eller data

---

## 3. Klassificering af sårbarheder

### 3.1 Kritisk

- Authentication bypass — adgang til systemer uden gyldige legitimationsoplysninger
- Cross-tenant datalækage — adgang til en anden organisations data
- Remote Code Execution (RCE)
- SQL-injektion med dataadgang eller -ændring
- Eksponering af API-nøgler, signeringssecrets eller vault-secrets

### 3.2 Høj

- Cross-Site Scripting (XSS) — reflected, stored eller DOM-based
- Cross-Site Request Forgery (CSRF) på autentificerede handlinger
- Insecure Direct Object References (IDOR) der omgår autorisation
- Server-Side Request Forgery (SSRF)
- XML External Entity-injektion (XXE)

### 3.3 Mellem

- Privilege escalation (f.eks. medlem → admin)
- Følsom informationseksponering (stack traces, intern konfiguration)
- Svag kryptografi eller utilstrækkelige nøglelængder
- Session fixation eller usikker sessionopbevaring
- Subdomain takeover

### 3.4 Lav

- Manglende sikkerhedsheadere (HSTS, CSP, X-Frame-Options)
- Clickjacking
- Åbne omdirigeringer
- Verbøse fejlmeddelelser der afslører softwareversioner eller stier
- Blandet indhold eller usikre cookies

### 3.5 Sårbarheder uden for anvendelsesområdet

Følgende accepteres ikke som gyldige rapporter:

- Denial of Service (DoS/DDoS)
- Brute force-angreb
- Social engineering
- Fysiske angreb
- SPF/DKIM/DMARC-fejlkonfigurationer (medmindre de fører til kontokompromittering)
- Fravær af rate limiting (medmindre det muliggør DoS eller brute force)
- Softwareversion i headers (kun informativt)

---

## 4. Testregler

### 4.1 Du skal

- Teste kun på konti du ejer eller har udtrykkelig tilladelse til at teste
- Bruge test/demo-konti (tilgængelige på anmodning via kontakt@logicnodes.ai)
- Begrænse test til ikke-destruktive metoder
- Overholde rate limits
- Stoppe test øjeblikkeligt hvis du støder på rigtige brugerdata
- Rapportere fund inden for 24 timer efter opdagelse

### 4.2 Du må ikke

- Tilgå, ændre eller slette andre brugeres data
- Udføre DoS/DDoS-angreb eller belastningstest
- Bruge automatiserede scannere uden forudgående godkendelse
- Udnytte sårbarheder ud over proof-of-concept
- Offentliggøre sårbarheder før 90-dages embargoens udløb
- Kræve betaling eller løsesum for en offentliggørelse

---

## 5. Rapportering af en sårbarhed

### 5.1 Kontakt

| Kanal | Detaljer |
|-------|---------|
| Email | kontakt@logicnodes.ai |
| PGP-kryptering (valgfrit) | [/da/pgp](/da/pgp) |
| Bekræftelse | Inden for 24 timer |
| Indledende vurdering | Inden for 72 timer |

PGP-kryptering er valgfrit. Almindelig email er acceptabel.

### 5.2 Rapportformat

**Påkrævet:**

1. Sårbarheds-type (f.eks. XSS, authorization bypass)
2. Berørt system eller endpoint
3. Sværhedsgrads-vurdering (din vurdering: Kritisk / Høj / Mellem / Lav)
4. Trin til reproduktion (nummererede, detaljerede)
5. Proof of concept (screenshots, HTTP-forespørgsler eller eksempelkode)

**Valgfrit:**

6. Konsekvensvurdering
7. Foreslået afhjælpning
8. Dit navn eller handle (hvis du ønsker kredit)
9. Foretrukken offentliggørelsestidslinje

### 5.3 Anonym rapportering

Brug ProtonMail eller Tutanota til anonym indsendelse. Angiv i rapporten hvis du ønsker at forblive anonym — vi offentliggør ikke din identitet.

---

## 6. Responsproces

### 6.1 Tidslinje

| Milepæl | Mål |
|---------|-----|
| Bekræftelse | Inden for 24 timer |
| Sværhedsgrads-vurdering og validering | Inden for 72 timer |
| Afhjælpning (Kritisk) | Inden for 24 timer efter bekræftelse |
| Afhjælpning (Høj) | Inden for 7 dage efter bekræftelse |
| Afhjælpning (Mellem) | Inden for 30 dage |
| Afhjælpning (Lav) | Inden for 90 dage |
| Offentlig offentliggørelse | Efter afhjælpning, ved gensidig aftale |

### 6.2 Sværhedsgrad og afhjælpningsmål

| Sværhedsgrad | Eksempel | Fix-mål |
|--------------|---------|---------|
| Kritisk (P0) | RCE, auth bypass, cross-tenant lækage | 24 timer |
| Høj (P1) | Stored XSS, IDOR, SSRF | 7 dage |
| Mellem (P2) | Reflected XSS, sessionsproblemer | 30 dage |
| Lav (P3) | Manglende headers, verbøse fejl | 90 dage |
| Informativ | Versionsoffentliggørelse | Backlog |

### 6.3 Kommunikation

Under undersøgelse giver vi ugentlige statusopdateringer på Kritiske og Høje fund. Efter afhjælpning underretter vi dig, tilbyder et valgfrit gen-testvindue og koordinerer offentlig offentliggørelse.

**Standard embargo:** 90 dage fra indledende rapport.

- **Tidlig offentliggørelse:** Hvis fix er deployed inden for 30 dage, kan vi aftale tidligere koordineret offentliggørelse.
- **Udvidet embargo:** For komplekse arkitekturændringer kan vi anmode om op til 180 dage (med forskers samtykke).
- **Forsker-initieret offentliggørelse:** Hvis LogicNodes ikke har afhjulpet inden for 90 dage, kan forskeren offentliggøre. Vi anmoder om 7 dages varsel for at advare berørte parter.

---

## 7. Anerkendelse og belønninger

### 7.1 Hall of Fame

Forskere der rapporterer gyldige, in-scope sårbarheder er listet nedenfor (med tilladelse). Vi offentliggør navn eller handle, sværhedsgrad og måned/år — aldrig exploit-detaljer.

Angiv i din rapport hvis du ønsker at forblive anonym.

| Forsker | Handle | Sværhedsgrad | Måned |
|---------|--------|-------------|-------|
| — | — | — | — |

*Der er endnu ikke modtaget rapporter. Bliv den første.*

### 7.2 Bug bounty-program

**Aktuel status:** Intet bug bounty-program. Planlagt lancering: **Q2 2027**, afhængig af indtægtsmilepæle.

**Planlagt struktur:**
- Platform: HackerOne eller Bugcrowd
- Belønninger: $500–$5.000 afhængig af sværhedsgrad

**Indtil lancering tilbyder vi:**
- Offentlig anerkendelse i Hall of Fame (med tilladelse)
- Direkte kommunikation med ingeniørteamet
- Prioriteret håndtering af alvorlige rapporter

For ekstraordinære fund (0-day, Kritisk sværhedsgrad) kan du kontakte kontakt@logicnodes.ai for at drøfte anerkendelse.

---

## 8. Safe Harbor

LogicNodes vil ikke indlede retssag mod forskere der:

1. Overholder denne politik (testregler, offentliggørelsestidslinje)
2. Gør en god-faith indsats for at undgå skade (ingen datatyveri, DoS, privatlivskrænkelser)
3. Rapporterer sårbarheder hurtigt (inden for 24 timer efter opdagelse)
4. Ikke offentliggør før 90-dages embargoen eller gensidig aftale

**Hvad safe harbor dækker:**
- Adgang til in-scope systemer til testformål
- Oprettelse af testkonti til sårbarheds-forskning
- Visning af egne data eller offentligt tilgængelige data

**Hvad safe harbor ikke dækker:**
- Adgang til andre brugeres data (selv hvis det teknisk er muligt)
- Forårsage skade eller forstyrrelser (DoS, datasletning)
- Overtræde tredjeparters servicevilkår (Supabase, AWS)
- Udnytte sårbarheder til personlig vinding

Dette safe harbor giver ikke tilladelse til at overtræde tredjeparters servicevilkår. Du er ansvarlig for overholdelse af alle gældende love.

---

## 9. CVE-tildeling

For sårbarheder der opfylder CVE-kriterierne anmoder LogicNodes om en CVE via MITRE eller GitHub Security Advisories. CVE'er krediterer rapportøren (med tilladelse) og ledsages af et offentliggjort advisory.

---

## 10. Ekskluderede parter

Følgende er ikke berettiget til at deltage:

- LogicNodes-medarbejdere, kontraktører eller nærmeste familiemedlemmer
- Personer i lande underlagt EU- eller amerikanske sanktioner
- Mindreårige under 18 år (uden verificeret forældresamtykke)

---

## 11. Kendte begrænsninger

| Emne | Status |
|------|--------|
| Bug bounty-program | Ikke aktivt endnu — planlagt Q2 2027 |
| SOC 2-certificering | Under udvikling — målrettet 2026/2027 |
| Tvunget logout | Ikke tilgængeligt endnu — session tokens udløber efter 1 time |

---

## 12. Ofte stillede spørgsmål

**Har I et bug bounty-program?**
Ikke endnu. Planlagt til Q2 2027 på HackerOne eller Bugcrowd. Vi tilbyder i øjeblikket offentlig anerkendelse.

**Kan jeg bruge automatiserede scannere?**
Anmod om tilladelse først via kontakt@logicnodes.ai. Scannere kan udløse rate limits eller DoS-beskyttelser.

**Kan jeg teste på produktionssystemer?**
Ja, men kun på egne konti. Anmod om testkonti via kontakt@logicnodes.ai for sikrere test.

**Kan jeg offentliggøre før 90 dage?**
Kun ved gensidig aftale. Vi foretrækker koordineret offentliggørelse.

**Er subdomain takeover inden for anvendelsesområdet?**
Ja, hvis du kan demonstrere konsekvens (f.eks. phishing, cookie-tyveri).

**Er tredjeparts-afhængigheder inden for anvendelsesområdet?**
Ja, hvis sårbarheden påvirker LogicNodes. Rapporter til os og til den pågældende leverandør.

**Hvad hvis min rapport er en duplikat?**
Vi underretter dig. Duplikater modtager anerkendelse men ikke yderligere Hall of Fame-kredit.

**Hvornår lanceres bug bounty?**
Estimeret Q2 2027, afhængig af indtægtsmilepæle.

---

## 13. Kontakt

| Formål | Kontakt |
|--------|---------|
| Sikkerhedsrapporter | kontakt@logicnodes.ai |
| PGP-nøgle | [/da/pgp](/da/pgp) |
| Safe harbor / juridiske spørgsmål | kontakt@logicnodes.ai |
| Generelle henvendelser | kontakt@logicnodes.ai |

Svartid: inden for 24 timer for sikkerhedsrapporter.

---

## 14. Politikopdateringer

LogicNodes kan opdatere denne politik når som helst. Væsentlige ændringer annonceres via blog post og email til tidligere rapportører. Mindre ændringer afspejles i datoen "Senest opdateret". Ændringer træder i kraft øjeblikkeligt ved offentliggørelse. Eksisterende rapporter er underlagt den politikversion der var gældende på tidspunktet for indsendelse.

---


LogicNodes ApS · Sletvej 2D, 8310 Tranbjerg, Danmark · CVR: DK45318362
