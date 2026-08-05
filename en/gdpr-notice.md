---
layout: legal
title: GDPR Notice
lang: en
lang_equivalent: /da/gdpr-notice
last_updated: 2026-06-25
---

# GDPR Supplemental Notice

<p class="last-updated">Last Updated: {{ page.last_updated | date: "%B %-d, %Y" }}</p>

## 1. Scope and Purpose

This GDPR Supplemental Notice ("Notice") supplements our [Privacy Policy](/en/privacy-policy/) and applies specifically to individuals located in the **European Economic Area (EEA)**, the **United Kingdom (UK)**, and **Switzerland**.

- For UK residents: references to "GDPR" in this Notice mean the **UK GDPR** as retained in UK law by the European Union (Withdrawal) Act 2018, read together with the Data Protection Act 2018.
- For Swiss residents: references to "GDPR" in this Notice mean the **Swiss Federal Act on Data Protection (FADP)** as revised with effect from 1 September 2023.

This Notice provides the information required under GDPR Articles 13 and 14. In the event of any conflict between this Notice and the Privacy Policy, this Notice prevails for matters governed by the GDPR.

## 2. Data Controller and Contact Details

**Data Controller:**

LogicNodes ApS  
Sletvej 2D  
8310 Tranbjerg  
Denmark  
CVR: DK45318362

**General contact:** legal@logicnodes.ai

**Data Protection Officer (DPO):** LogicNodes ApS has appointed a Data Protection Officer. The DPO may be contacted at dpo@logicnodes.ai. For general legal matters, contact legal@logicnodes.ai.

LogicNodes ApS is established in Denmark, an EU Member State, and is therefore subject to the GDPR directly. Our **lead supervisory authority** is Datatilsynet (the Danish Data Protection Agency) — see Section 9.

## 3. Legal Bases for Processing

The table below sets out each processing activity, the categories of personal data involved, the legal basis under GDPR Article 6 (and Article 9 where applicable), and the applicable retention period.

| Processing Activity | Data Categories | Legal Basis | Retention Period |
|---|---|---|---|
| Account authentication | Email address, session tokens | Art. 6(1)(b) — contractual necessity | Duration of session; until account deletion |
| Platform service delivery (agent runs, conversation history, execution logs) | Agent inputs and outputs, execution logs | Art. 6(1)(b) — contractual necessity | 1–90 days (configurable by account holder) |
| Voice transcription (optional feature) | Audio recordings | Art. 6(1)(b) — contractual necessity | Same as agent run retention (1–90 days, configurable) |
| Speaker identification / voiceprints (optional feature) | Biometric data (Art. 9(1)) | User responsibility — by using this feature, the user accepts that LogicNodes processes biometric data as part of service delivery. The user is responsible for establishing a valid Art. 9(2) legal basis and informing the individuals whose voices are recorded. | Until deleted via the chat page |
| Account holder-introduced personal data (including health data, national identification numbers such as CPR numbers, payment card data, racial or ethnic origin, political opinions, religious beliefs, genetic data, biometric data, trade union membership, and data concerning sex life or sexual orientation) | Any personal data introduced by the account holder, including special category data (GDPR Art. 9(1)) and data subject to specific national law requirements | Account holder responsibility — the account holder is the data controller for all personal data they introduce and is solely responsible for establishing and maintaining a valid legal basis under Art. 6(1) and, where applicable, Art. 9(2) and applicable national law (e.g., the Danish Data Protection Act §11 for CPR numbers). LogicNodes processes this data solely as data processor on documented account holder instructions and does not verify the lawfulness of those instructions. | Same as agent run retention (1–90 days, configurable by account holder) |
| Audit logs | User ID, IP address, browser and device information, event type | Art. 6(1)(f) GDPR + Art. 17(3)(e) GDPR — defence of legal claims | 5 years |
| Billing and payment records | Transaction data | Art. 6(1)(c) — legal obligation (Danish Bookkeeping Act, section 10) | 5 years from the end of the relevant financial year |
| Responding to enquiries | Contact information, correspondence content | Art. 6(1)(f) — legitimate interests (responding to communications) | Duration of the correspondence plus a reasonable period thereafter |
| Anonymous aggregate usage analytics | No personal data (fully anonymised) | Not subject to GDPR (anonymous data is outside the scope of the Regulation) | Indefinite |

### 3.1 Legitimate Interests Assessment

Where LogicNodes relies on legitimate interests (Art. 6(1)(f)) as the legal basis for processing, we have carried out a balancing test. We have assessed the nature of the data, the limited intrusiveness of the processing, and the reasonable expectations of users on a B2B platform — and concluded that our interests are not overridden by data subjects' rights or fundamental freedoms.

Data subjects may object to processing carried out on this basis at any time — see Section 6.6.

## 4. Automated Decision-Making (GDPR Article 22)

**LogicNodes' own processing:** LogicNodes does not carry out automated decision-making that produces legal effects or similarly significant effects concerning data subjects within the meaning of GDPR Article 22(1).

**Partner-configured and account holder workflows:** The platform provides an automation framework. Any automated actions executed through the platform — including scheduled, event-triggered, or time-based (cron) workflows — are configured and instructed by the account holder (the data controller in respect of their end users). The account holder retains full responsibility for the design, configuration, and consequences of such automated workflows in their own environment.

Where an account holder's automated workflows may produce legal effects or similarly significant effects on data subjects, the account holder is responsible as data controller for ensuring compliance with GDPR Article 22, including implementing any required safeguards such as human review mechanisms, explanation rights, or the ability for data subjects to contest decisions. LogicNodes does not provide these safeguards on behalf of account holders.

## 5. Special Category Data (GDPR Article 9)

### 5.1 Voiceprints (Biometric Data)

The platform's optional speaker identification feature processes **biometric data** (voiceprints) for the purpose of identifying speakers in audio recordings. Biometric data constitutes a special category of personal data under GDPR Article 9(1).

By using this feature, the user accepts that LogicNodes processes biometric data as part of delivering the service. The user who creates voiceprints is responsible for:

- establishing and maintaining a valid legal basis under Art. 9(2) for processing each recorded individual's biometric data;
- informing those individuals before any voiceprint is created;
- deleting voiceprints upon request from the individuals concerned; and
- documenting compliance and making documentation available upon request.

LogicNodes processes voiceprints solely to deliver the service and does not use them for any other purpose.

**Deletion:** Voiceprint data can be deleted at any time via the chat page. Deletion from production systems is immediate; purge from encrypted backups occurs within 30 days.

### 5.2 Personal Data Introduced by Account Holders

Account holders may introduce any personal data into the platform through their use of the Services. This includes, but is not limited to, special category personal data within the meaning of GDPR Article 9(1):

- **Health data** — data concerning a person's physical or mental health;
- **Biometric data** (other than voiceprints, which are covered in §5.1) — processed for the purpose of uniquely identifying a natural person;
- **Genetic data**;
- **Data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership**;
- **Data concerning sex life or sexual orientation**.

It also includes personal data subject to specific national law requirements, such as **national identification numbers** (e.g., Danish CPR numbers / personnumre, passport numbers, and social security or equivalent numbers), which are governed by GDPR Article 87 and applicable national law (e.g., the Danish Data Protection Act §11).

The account holder is the **data controller** for all personal data they introduce. LogicNodes acts solely as data processor, processing personal data on the account holder's documented instructions, and does not verify the lawfulness of those instructions. The account holder is solely responsible for:

- establishing and maintaining a valid legal basis under Art. 6(1) and, where applicable, Art. 9(2);
- complying with any applicable national law requirements;
- informing affected data subjects and handling their rights requests; and
- implementing safeguards appropriate to the nature and risk of the data processed.

Data subjects who have concerns about how their personal data introduced by an account holder is being processed should direct their enquiries to that account holder, as that party is the data controller.

## 6. Your Rights as a Data Subject

You have the following rights under the GDPR. These rights apply subject to applicable exemptions and conditions set out in the Regulation.

### 6.1 Right of Access (Art. 15)

You have the right to obtain confirmation as to whether personal data concerning you is being processed, and, where that is the case, to receive a copy of that data together with information about: the purposes of processing, the categories of data, the recipients or categories of recipient, the envisaged retention period, the existence of your other rights, and the source of data where it was not collected directly from you.

### 6.2 Right to Rectification (Art. 16)

You have the right to obtain the correction of inaccurate personal data concerning you without undue delay. Taking into account the purposes of the processing, you also have the right to have incomplete personal data completed.

### 6.3 Right to Erasure (Art. 17)

You have the right to obtain the erasure of personal data concerning you without undue delay where one of the grounds in Art. 17(1) applies (for example, the data is no longer necessary for the purpose for which it was collected, or you withdraw consent and there is no other legal basis).

The right to erasure does not apply to the extent that processing is necessary for compliance with a legal obligation (for example, billing records retained under the Danish Bookkeeping Act) or for the establishment, exercise, or defence of legal claims.

Erasure from production systems is immediate. Purge from encrypted backups occurs within 30 days.

### 6.4 Right to Restriction of Processing (Art. 18)

You have the right to obtain a restriction of processing where: (a) you contest the accuracy of the data; (b) the processing is unlawful and you oppose erasure; (c) we no longer need the data but you require it for legal claims; or (d) you have objected to processing and verification of our legitimate grounds is pending.

Where processing is restricted, we will continue to store the data but will not use it until the restriction is lifted.

### 6.5 Right to Data Portability (Art. 20)

Where processing is based on consent (Art. 6(1)(a) or Art. 9(2)(a)) or on contractual necessity (Art. 6(1)(b)), and processing is carried out by automated means, you have the right to receive personal data concerning you in a structured, commonly used, and machine-readable format (JSON), and to transmit that data to another controller without hindrance.

### 6.6 Right to Object (Art. 21)

Where processing is based on legitimate interests (Art. 6(1)(f)), you have the right to object at any time on grounds relating to your particular situation. We will cease processing unless we demonstrate compelling legitimate grounds that override your interests, rights, and freedoms, or unless processing is necessary for the establishment, exercise, or defence of legal claims.

Where personal data is processed for direct marketing purposes, you have an unconditional right to object at any time (note: LogicNodes does not send marketing communications).

### 6.7 Rights Relating to Voiceprints

Voiceprint data can be deleted at any time via the chat page. Individuals whose voices have been recorded should direct any GDPR rights requests (such as access, rectification, or objection) to the user who created the voiceprint — that user is responsible for the legal basis and for handling such requests.

## 7. How to Exercise Your Rights

To exercise any of the rights set out in Section 6, please contact us at:

**Email:** legal@logicnodes.ai  
**Subject line:** "GDPR Rights Request"

Please state clearly which right(s) you wish to exercise and provide sufficient information for us to identify you. We may ask you to verify your identity before we can act on your request. We will not use information provided for identity verification for any other purpose.

**Response time:** We will respond without undue delay and in any event within **30 calendar days** of receipt of your request, in accordance with GDPR Article 12(3). Where requests are complex or numerous, we may extend this period by a further two months; we will inform you of any extension within the initial 30-day period, together with the reasons for the delay.

Responses are provided free of charge. Where requests are manifestly unfounded or excessive, we may charge a reasonable fee or refuse to act.

## 8. International Data Transfers

### 8.1 Primary Data Storage

Personal data is stored primarily in the **European Union**. Our primary database infrastructure is operated by Supabase on AWS eu-north-1 (Stockholm, Sweden). Data is not transferred outside the EEA for storage purposes.

### 8.2 LLM Inference Transfers

Standard use of the platform involves agent prompts and responses being transmitted at the time of each agent run to large language model (LLM) inference providers. The following providers are located in the **United States** and processing by them constitutes an international transfer:

- OpenAI, L.L.C.
- Anthropic, PBC
- xAI Corp.

These transfers are protected by **Standard Contractual Clauses** pursuant to EU Commission Implementing Decision 2021/914 (Module 2: Controller to Processor). Copies of the applicable SCCs are available on request.

Google Cloud is also used for AI inference; Google processes data in EU and global regions under its own EU data processing terms and SCCs.

ElevenLabs Inc. is used for voice transcription when that feature is used; ElevenLabs processes audio data in the USA, protected by Standard Contractual Clauses and the EU-US Data Privacy Framework.

A full list of sub-processors is available at [/en/subprocessors](/en/subprocessors/).

### 8.3 Supplementary Measures

In addition to SCCs, LogicNodes implements supplementary technical measures including end-to-end encryption in transit (TLS 1.2+), encryption at rest (AES-256), and strict access controls, in accordance with the requirements arising from judgment C-311/18 (Schrems II).

### 8.4 EU-Only Data Processing

Partners and direct users who require that all personal data — including AI inference calls — stays within the European Union can request EU-only data processing by contacting kontakt@logicnodes.ai. When active, AI inference is restricted to EU-based providers only (Mistral AI, Google Cloud EU region, Microsoft Azure OpenAI Service EU region, Amazon Bedrock Frankfurt). ElevenLabs transcription is not available in this configuration, and no personal data is transferred to providers outside the EU.

### 8.5 UK and Swiss Transfers

For transfers subject to UK data protection law, the applicable transfer mechanism is the UK International Data Transfer Agreement (IDTA) or the UK Addendum to the EU SCCs (as issued by the Information Commissioner's Office).

For transfers subject to the Swiss FADP, the SCCs apply with necessary modifications so that references to the GDPR and EU law are read as references to the FADP and Swiss law.

## 9. Right to Lodge a Complaint

If you consider that the processing of your personal data infringes the GDPR, you have the right to lodge a complaint with a supervisory authority, in particular in the EU Member State of your habitual residence, place of work, or place of the alleged infringement.

**Lead supervisory authority for LogicNodes ApS:**

Datatilsynet (Danish Data Protection Agency)  
Carl Jacobsens Vej 35  
2500 Valby  
Denmark  
Website: [datatilsynet.dk](https://www.datatilsynet.dk)  
Email: dt@datatilsynet.dk

You may also contact the supervisory authority of the EU Member State in which you habitually reside or work.

**UK residents:** The relevant supervisory authority is the Information Commissioner's Office (ICO), Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF; ico.org.uk.

**Swiss residents:** The relevant authority is the Federal Data Protection and Information Commissioner (FDPIC); edoeb.admin.ch.

## 10. Changes to This Notice

We may update this Notice from time to time to reflect changes in our data processing activities or applicable law. We will notify you of any **material changes** at least **7 days** in advance by email to your registered address. The "Last Updated" date at the top of this Notice indicates when it was most recently revised. Non-material changes (such as corrections of typographical errors or clarifications that do not affect your rights) may be made without advance notice.

---

**LogicNodes ApS**  
Sletvej 2D, 8310 Tranbjerg, Denmark  
CVR: DK45318362  
legal@logicnodes.ai

