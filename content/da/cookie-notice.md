---
layout: legal
title: Cookiepolitik
lang: da
lang_equivalent: /en/cookie-notice
last_updated: 2026-05-18
---

# Cookiepolitik

<p class="last-updated">Senest opdateret: {{ page.last_updated | date: "%-d. %B %Y" }}</p>

Denne cookiepolitik gælder udelukkende for **app.logicnodes.ai**. Markedsføringswebstedet logicnodes.ai kan anvende andre cookies; se evt. den meddelelse, der præsenteres dér.

## 1. Hvad er en cookie?

En cookie er en lille tekstfil, som et websted gemmer på din enhed, når du besøger det. Cookies tjener forskellige formål: nogle er strengt nødvendige for, at en tjeneste overhovedet fungerer, andre bruges til analyse, og andre til markedsføring eller sporing på tværs af websteder.

## 2. Cookies vi anvender

App.logicnodes.ai sætter udelukkende følgende cookies. Begge placeres af Supabase Authentication, som vi anvender til sessionsstyring.

| Cookienavn | Type | Formål | Varighed | Retsgrundlag |
|---|---|---|---|---|
| `sb-[ref]-auth-token` | Strengt nødvendig | Opretholder din autentificerede session. Uden denne cookie kan du ikke forblive logget ind. Cookien er HTTP-only, Secure og SameSite; den indeholder kun dit sessionsidentifikator — ingen øvrige personoplysninger. | Session (slettes ved logout eller ved udløb af sessionstokenets TTL) | Kontraktmæssig nødvendighed — nødvendig for at levere den tjeneste, du har indgået aftale om |
| `sb-[ref]-auth-token-code-verifier` | Strengt nødvendig | Gemmer PKCE-kodeverifikatoren under OAuth 2.0-godkendelsesflowet. Der er tale om et engangssikkerhedstoken, som beskytter mod angreb, hvor autorisationskoder opfanges. | Session (slettes, når godkendelsesflowet er gennemført) | Kontraktmæssig nødvendighed |

Der sættes ingen andre cookies af applikationen.

## 3. Analyse — uden cookies

Vi indsamler grundlæggende sidevisnings- og ydeevnedata for at forstå, hvordan platformen anvendes, og for at identificere fejl. Ingen af de anvendte værktøjer benytter cookies eller sætter sporingsidentifikatorer.

**Vercel Analytics** — førstepartsanalyse af sidevisninger uden brug af cookies. Der sættes ingen cookies. Der indsamles ingen personoplysninger. Vercel Analytics er designet og dokumenteret som GDPR-kompatibel uden at kræve samtykke.

**Vercel Speed Insights** — cookiefri indsamling af Core Web Vitals (sideindlæsningsydelse). Der sættes ingen cookies. Der indsamles ingen personoplysninger.

Da der ikke anvendes cookies eller vedvarende identifikatorer, falder denne dataindsamling uden for kravene om cookiesamtykke i EU's ePrivacy-direktiv.

## 4. Hvad vi ikke anvender

Vi ønsker at være eksplicitte om, hvad der ikke er til stede på denne platform:

- Ingen reklame- eller adfærdssporingscookies
- Ingen sporing på tværs af websteder eller brugerprofilerering
- Ingen Google Analytics eller Google Tag Manager
- Ingen Meta (Facebook) Pixel
- Ingen LinkedIn Insight Tag
- Ingen Hotjar, Mixpanel, Segment eller lignende analyseprogrammer
- Ingen tredjeparts-cookies overhovedet

Dette er en bevidst produktbeslutning. Som B2B-platform, der håndterer forretningskritiske automatiseringer, anser vi en arkitektur med minimalt cookieforbrug som både et privatlivsengagement og en sikkerhedsforanstaltning.

## 5. Dine valgmuligheder

**Strengt nødvendige cookies** kan ikke deaktiveres uden at ødelægge platformens kernefunktionalitet. Hvis du sletter eller blokerer `sb-[ref]-auth-token`-cookien, vil du blive logget ud og ikke kunne anvende platformen. Disse cookies kræver ikke samtykke i henhold til ePrivacy-direktivet, da de er uundværlige for en tjeneste, du udtrykkeligt har anmodet om.

**Vercel Analytics og Speed Insights** anvender ingen cookies. Der er intet at framelde sig på cookieniveau. De indsamlede data er anonyme som udgangspunkt og kan ikke henføres til dig som enkeltperson.

Du kan til enhver tid administrere cookies via dine browserindstillinger. Vejledning til de mest udbredte browsere:

- Chrome: Indstillinger > Privatliv og sikkerhed > Cookies og andre webstedsdata
- Firefox: Indstillinger > Privatliv og sikkerhed > Cookies og webstedsdata
- Safari: Indstillinger > Privatliv > Administrer webstedsdata
- Edge: Indstillinger > Cookies og webstedstilladelser

## 6. Ændringer i denne cookiepolitik

Vi opdaterer denne cookiepolitik, hvis vores brug af cookies ændrer sig. Datoen "Senest opdateret" øverst på siden afspejler, hvornår politikken sidst blev revideret. Væsentlige ændringer meddeles desuden via platformens notifikationssystem eller pr. e-mail til din registrerede adresse.

## 7. Kontakt og tilsynsmyndighed

Har du spørgsmål til denne cookiepolitik eller vores brug af cookies, er du velkommen til at kontakte os:

**E-mail:** kontakt@logicnodes.ai

**Virksomhed:**
LogicNodes ApS
Sletvej 2D
8310 Tranbjerg
Danmark
CVR: DK45318362

Du har ret til at indgive en klage til den danske datatilsynsmyndighed:

**Datatilsynet**
Carl Jacobsens Vej 35
2500 Valby
[www.datatilsynet.dk](https://www.datatilsynet.dk)

---

