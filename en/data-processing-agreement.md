---
layout: legal
title: Data Processing Agreement
last_updated: 2026-07-07
lang: en
lang_equivalent: /da/databehandleraftale/
description: "Data Processing Agreement between LogicNodes ApS (Processor) and Partner (Controller). GDPR Art. 28 compliant."
---

# Data Processing Agreement (DPA)


Between the Data Controller and **LogicNodes ApS** (Data Processor)

---

**Data Processor:** LogicNodes ApS  
**Effective Date:** [DATE]  
**CVR (Processor):** DK45318362  

---

## 1. Definitions

### 1.1 Defined Terms

For purposes of this Data Processing Agreement ("DPA"):

**"GDPR"**

Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data.

**"Data Protection Laws"**

All applicable laws and regulations relating to privacy and data protection, including the GDPR, the UK GDPR and Data Protection Act 2018, the Swiss FADP, the CCPA/CPRA, and other applicable laws.

**"Personal Data"**

Any information relating to an identified or identifiable natural person that is processed by LogicNodes on behalf of Partner in connection with the Services.

**"Processing"**

Any operation or set of operations performed on Personal Data, such as collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, erasure, or destruction.

**"Data Subject"**

The individual to whom Personal Data relates (Partner's end-users).

**"Services"**

The LogicNodes embeddable AI agent platform with associated features and integrations.

**"Sub-Processor"**

Any third party engaged by LogicNodes to process Personal Data on behalf of Partner.

**"Supervisory Authority"**

An independent public authority established by an EU Member State pursuant to GDPR Article 51.

**"Data Breach"**

A personal data breach as defined in the GDPR: a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Personal Data transmitted, stored or otherwise processed.

## 2. Scope & Roles

### 2.1 Relationship

This DPA governs the processing of Personal Data by LogicNodes (Data Processor) on behalf of Partner (Data Controller) in connection with the Services.

### 2.2 Applicability

This DPA applies to all Personal Data processed by LogicNodes on Partner's behalf, including but not limited to:
- End-user identity data (email, name, organization)
- Agent execution logs (agent prompts, responses, and API requests/responses)
- Voice recordings (audio from voice-based agents) and voiceprints (biometric data, Art. 9 — see §2.3)
- Uploaded and retrieved files
- Audit logs

### 2.3 Personal Data — Controller Responsibility

**Voiceprints and Biometric Data:** The platform offers optional speaker identification that uses biometric voice profiles ("voiceprints") to identify speakers in audio recordings. Voiceprints constitute biometric data under GDPR Article 9(1) and are processed solely for the purpose of speaker identification. Each voiceprint is linked to a self-chosen name.

**Any Personal Data:** Partner may instruct LogicNodes to process any Personal Data through the platform, including Personal Data subject to heightened requirements under GDPR Articles 8, 9, and 10 or applicable national law. LogicNodes imposes no technical restriction on the categories of Personal Data Partner may introduce; it remains Partner's sole responsibility to ensure that all applicable legal requirements are satisfied before instructing LogicNodes to process such data.

**Partner Responsibility:** Partner, as data controller, is solely responsible for ensuring a valid legal basis under the GDPR and all applicable national law for any Personal Data introduced into the Services, including compliance with any heightened requirements that apply to specific categories of data and compliance with GDPR Article 22 where Partner's use of the Services involves automated decision-making. LogicNodes processes Personal Data solely as data processor on Partner's documented instructions and does not verify the lawfulness of those instructions. LogicNodes does not implement GDPR Article 22 safeguards on Partner's behalf. LogicNodes is not liable for Partner's failure to comply with applicable law.

**DPIA Obligation:** Where Partner's intended processing through the Services is likely to result in high risk to Data Subjects — including where it involves large-scale processing of special category data or national identification numbers — Partner is solely responsible for conducting a Data Protection Impact Assessment (DPIA) under GDPR Article 35 before commencing such processing. Where a DPIA reveals that prior consultation with a Supervisory Authority is required under GDPR Article 36, Partner must notify LogicNodes before commencing processing. The indemnity in §9.3 applies to claims arising from Partner's failure to conduct a required DPIA.

### 2.4 EU-Only Data Processing

Partner may request EU-only data processing for their organisation by contacting kontakt@logicnodes.ai. When EU-only data processing is active, the following restrictions and guarantees apply:

- **Voice transcription disabled** — when EU-only data processing is active, voice transcription is not available. Voice recordings are not transmitted to ElevenLabs (LogicNodes' transcription provider), as ElevenLabs cannot guarantee that processing takes place exclusively within the EU. Partners who require voice transcription must not activate EU-only data processing.
- **AI model selection restricted** — only AI models where processing takes place exclusively within the EU may be used. As of the effective date of this DPA, these include: Mistral AI (France), Google Cloud Platform Gemini (EU region), Microsoft Azure OpenAI Service (EU region), and Amazon Bedrock (Frankfurt — eu-central-1).
- **EU processing guarantee** — when EU-only data processing is active, LogicNodes confirms that all Personal Data is processed and stored exclusively within the European Union.

The list of AI models available under EU-only data processing is kept up to date and reviewed on an ongoing basis.

## 3. Processing of Personal Data

### 3.1 Partner Instructions

LogicNodes shall process Personal Data only:
1. On documented instructions from Partner (through the platform or written request to kontakt@logicnodes.ai)
2. To the extent necessary to provide the Services
3. As required by applicable law (with notice to the Data Controller if permitted by law)

**Partner Instructions Include:**
- User authentication via SDK (Partner provides JWTs containing user identity claims)
- Organization/user deletion (via platform UI or written request to kontakt@logicnodes.ai)
- Secret management (via platform UI or written request to kontakt@logicnodes.ai)
- Data retention configuration (default_retention_period setting)

### 3.2 Unauthorized Processing

If LogicNodes has reason to believe a specific instruction conflicts with Data Protection Laws, LogicNodes will notify Partner promptly so it can be reviewed and clarified.

### 3.3 Processing Details

**Subject Matter:** Provision of AI agent automation platform

**Duration:** Term of the Terms & Conditions + retention period (as configured by Partner)

**Nature & Purpose:**
- Authenticate end-users via JWT validation
- Execute AI agents on behalf of end-users
- Store execution context for conversation continuity
- Provide debugging and transparency tools

**Type of Personal Data:**
- Identity data: Email, name, user ID, organization ID
- Usage data: Agent runs, agent prompts and responses, transcriptions
- Technical data: IP address, user agent (for security purposes)
- Voice recordings: Audio from voice-based agents; incl. voiceprints linked to self-chosen names (biometric data, Art. 9 — see §2.3; optional feature)
- Uploaded files: Submitted and retrieved documents
- Any Personal Data, including special category data (GDPR Art. 9(1)) and Personal Data subject to national law requirements, where introduced by Partner — Partner is the data controller for all such data and bears sole responsibility for the applicable legal basis (see §2.3)

**Categories of Data Subjects:**
- Partner's end-users (employees, customers, contractors)

## 4. LogicNodes Obligations

### 4.1 Confidentiality

LogicNodes shall ensure that all personnel authorized to process Personal Data:
1. Are subject to confidentiality obligations (employment contracts, NDAs)
2. Have completed mandatory security awareness training and mandatory personal data and GDPR training before being granted access
3. Access Personal Data only as necessary for their role

### 4.2 Security Measures

LogicNodes implements appropriate technical and organizational measures to protect Personal Data, including:

**Technical Measures:**
- Encryption at rest (database, secrets, storage)
- Encryption in transit (TLS 1.2 or higher; HTTPS enforcement)
- Multi-tenant isolation (RLS policies, application-layer access controls)
- Access controls (JWT-based authentication, role-based permissions)
- Audit logging (5 years — see App. B §12)
- Rate limiting (abuse prevention)
- Automated backups (daily, encrypted)

**Organizational Measures:**
- Background checks for employees with production access
- Least-privilege access principle
- Incident response plan (24-hour response time)
- Security awareness training (annual)
- Vendor risk management (sub-processor reviews)
- NDA and mandatory personal data/GDPR training required before any management access is granted
- All staff actions tied to an accountable staff member and audit-logged
- Management access revoked immediately upon termination of employment or contractor agreement

**Compliance (forward-looking):**
- SOC 2 Type II preparations underway (report targeted 2026/2027; not yet certified)
- Annual penetration testing (first engagement scheduled Q1 2027, annual cadence thereafter)
- Automated vulnerability scanning (via GitHub Dependabot)

### 4.3 Data Subject Requests

LogicNodes shall assist Partner in fulfilling Data Subject rights under Data Protection Laws. LogicNodes will assist **without undue delay**.

**Right to Access (GDPR Art. 15):**
- Export of agent run history via platform UI or upon request to kontakt@logicnodes.ai
- JSON format for machine-readable export
- Response time: Within 30 days

**Right to Rectification (GDPR Art. 16):**
- Partner may update end-user identity data (name, email) via the platform
- Changes reflected immediately

**Right to Erasure (GDPR Art. 17):**
- User/organization deletion via platform UI or upon request to kontakt@logicnodes.ai
- Cascading deletes ensure complete removal
- Deletion timeline: Immediate (production), 30 days (backups)

**Right to Data Portability (GDPR Art. 20):**
- Data can be exported in JSON format via platform UI or upon request to kontakt@logicnodes.ai
- Structured, machine-readable data

**Right to Restrict Processing (GDPR Art. 18):**
- Partner can disable user accounts
- Processing stopped (data retained but not used)

**Right to Object (GDPR Art. 21):**
- Partner evaluates objection and instructs LogicNodes
- If valid, data deleted via platform UI or upon request to kontakt@logicnodes.ai

**Assistance:**
LogicNodes will respond to Partner requests within 5 business days and provide reasonable assistance (documentation, API guidance, technical support).

### 4.4 Data Breach Notification

In the event of a Data Breach, LogicNodes shall:

**Legal Commitment (GDPR Art. 33):**
LogicNodes shall notify Partner **without undue delay** and, where feasible, within 72 hours of becoming aware of the Data Breach.

**Internal SLA Target (within 24 hours):**
1. Contain the breach (stop unauthorized access)
2. Notify Partner via email (security contact)
3. Provide preliminary incident report (scope, affected data, root cause)

**Follow-Up Actions (within 72 hours):**
1. Detailed incident report (timeline, impact assessment, affected Data Subjects)
2. Remediation plan (steps taken, preventive measures)
3. Assistance with Supervisory Authority notification (if required by GDPR Art. 33)

**Partner Obligations:**
- Partner is responsible for notifying Data Subjects (if required by GDPR Art. 34)
- LogicNodes will provide reasonable assistance (affected user lists, impact analysis)

### 4.5 Data Protection Impact Assessment (DPIA)

LogicNodes shall provide reasonable assistance if Partner is required to conduct a DPIA under GDPR Article 35, including:
- Description of processing operations
- Security measures implemented
- Risk assessment (data breach likelihood, impact)
- Sub-processor information

### 4.6 Prior Consultation

If a DPIA indicates high risk and Partner must consult a Supervisory Authority (GDPR Art. 36), LogicNodes will provide necessary information and assistance. Any disclosures will be limited to information strictly necessary for the consultation.

## 5. Sub-Processing

### 5.1 Authorized Sub-Processors

Partner grants general authorization for LogicNodes to engage Sub-Processors, subject to the conditions in this section.

**Current Sub-Processors:**

**Complete Sub-Processor List:** https://legal.logicnodes.ai/en/subprocessors

**Summary:**

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRHy76XGvurEqCuaIjMYAKlogtBJg4Maz1EOIptwtBQth89Vyaq3CM929kRdwEEf8mSbESwZrfnd9o7/pubhtml?gid=0&single=true" width="100%" height="550" frameborder="0" scrolling="no"></iframe>

The authoritative and up-to-date list of Sub-Processors is maintained at https://legal.logicnodes.ai/en/subprocessors and is updated with 7 days' advance notice of changes.

**Bring Your Own Key (BYOK) — AI Inference Services:**
Partner may at any time choose to use their own API keys for AI services. When own keys are used, the AI provider processes data directly on Partner's behalf and is Partner's direct processor — not LogicNodes' sub-processor.

**Sub-Processors of Sub-Processors:** Sub-processors may engage their own sub-processors (e.g., Supabase uses AWS; Vercel uses AWS/Google Cloud; Hetzner processes data exclusively in its own EU data centres). These are covered under respective vendor DPAs.

### 5.2 Sub-Processor Requirements

LogicNodes shall ensure that all Sub-Processors (excluding BYOK-selected AI providers, which are Partner's direct processors):
1. Are bound by data protection obligations equivalent to this DPA
2. Implement appropriate technical and organizational security measures
3. Are bound by Data Processing Agreements or equivalent contractual mechanisms, including Standard Contractual Clauses (SCC EU 2021/914) for processors outside the EEA
4. Undergo regular security assessments

**Scope of LogicNodes' obligations:** LogicNodes ensures each Sub-Processor has signed a GDPR-compliant data processing agreement and, where required, Standard Contractual Clauses. LogicNodes does not guarantee that Sub-Processors hold any security certifications (such as SOC 2 or ISO 27001) unless expressly stated in this DPA.

### 5.3 New Sub-Processors

**Notification:**
LogicNodes will notify Partner at least **7 days** before engaging new Sub-Processors or materially changing existing Sub-Processors.

**Notification Method:**
- Email to Partner's security contact
- Update to the public sub-processor page at https://legal.logicnodes.ai/en/subprocessors

**Objection:**
Partner may object to new Sub-Processor on reasonable data protection grounds by notifying LogicNodes within 7 days.

**If Partner Objects:**
- LogicNodes will not engage the Sub-Processor
- OR: LogicNodes will work with Partner to address concerns
- OR: If no alternative, Partner may terminate the Terms & Conditions (no penalty)

### 5.4 Sub-Processor Liability

LogicNodes remains fully liable to Partner for Sub-Processor performance. If Sub-Processor fails to fulfill data protection obligations, LogicNodes is liable to Partner as if LogicNodes had performed the processing. This liability does not apply to AI services that Partner uses via their own API keys (BYOK), as those providers are in that case Partner's direct processors.

## 6. International Data Transfers

### 6.1 Data Location

**Primary Storage:** European Union (AWS EU-North-1, Stockholm via Supabase)

**US Data Residency (Optional):** Partner may request US data residency. Additional fees may apply.

**Clarification — AI inference:** Regardless of chosen data storage region, standard platform use involves agent prompts and responses being transmitted to LLM providers (OpenAI, Anthropic, Google Cloud, xAI) with servers in the USA at each agent run. These inference calls constitute international data transfers covered by SCCs and the respective Sub-Processors' DPAs as described in §5 and Appendix C. Partner can reduce the scope of such transfers by using their own API keys (BYOK), whereby the LLM provider becomes Partner's direct processor.

**EU-only data processing:** If Partner has activated EU-only data processing (§2.4), all Personal Data — including AI inference calls — is processed and stored exclusively within the EU. No international transfers to LLM providers outside the EU take place, and the AI inference clarification above does not apply.

### 6.2 Transfer Mechanisms

**Default:** Data stored in EU (no international transfer for EU customers)

For transfers of Personal Data to countries without an adequacy decision (if Partner requests US residency), LogicNodes relies on:

**Standard Contractual Clauses (SCCs):**
- EU Commission Decision 2021/914 (Module 2: Controller to Processor)
- Incorporated by reference into this DPA
- Full text available at: https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj

**UK Addendum / IDTA:** For transfers subject to UK law, the ICO International Data Transfer Addendum (or IDTA) applies by incorporation.

**Swiss Addendum:** For transfers subject to Swiss FADP, references to the GDPR and "EU" in the SCCs shall be read, mutatis mutandis, as references to the FADP and "Switzerland".

**Supabase SCCs:**
- Supabase has signed SCCs with LogicNodes
- LogicNodes has signed SCCs with Partner (via this DPA)

### 6.3 Additional Safeguards

In addition to SCCs, LogicNodes implements supplementary measures required by Schrems II:

**Encryption:**
- Data encrypted at rest with AES-256 (database, secrets, storage)
- Transport encryption with TLS 1.2 or higher
- HTTPS enforcement with HSTS headers

**Key Management:**
- AWS KMS-managed encryption keys
- Automatic key rotation at least annually
- Access to keys limited to service role
- All decrypt operations audit-logged

**Access Controls:**
- Multi-tenant isolation via PostgreSQL Row-Level Security (RLS)
- JWT-based authentication (RS256, 1-hour expiration)
- Role-based access control (admin, member, viewer)
- Application-layer access controls (cross-tenant access prevented by design)
- Least-privilege principle for employee access

**Data Minimization:**
- Configurable retention periods (1-90 days for operational data)
- Automatic daily cleanup (2:00 AM UTC)
- No use of customer data for AI model training or analytics
- Purpose limitation enforced by design

**Transparency & Oversight:**
- Audit logging (5 years — see App. B §12)
- Data export APIs (JSON format, machine-readable)
- Partner access to audit logs via platform UI or by request
- Annual security assessments

**Government Access Requests:**
- We will promptly notify Partner unless legally prohibited
- We will use reasonable legal means to challenge or narrow over-broad requests
- We will disclose only the minimum Personal Data required by law
- All government requests will be documented and reported to Partner

### 6.4 Government Access Requests

If LogicNodes receives a lawful request from government authorities to access Personal Data:
1. Promptly notify Partner unless legally prohibited;
2. Use reasonable legal means to challenge or narrow the request;
3. Disclose only the minimum Personal Data required by law, and document the request and disclosure.

## 7. Data Retention & Deletion

### 7.1 Retention Periods

| Data Type | Retention | Deletion Method |
|-----------|-----------|-----------------|
| Agent runs, events | 1-90 days (Partner-configurable) | Automatic daily cleanup |
| Transcriptions | 1-90 days (Partner-configurable) | Automatic daily cleanup |
| Agent execution context (checkpoints) | 1-90 days (Partner-configurable) | Automatic daily cleanup |
| User account data | Until deletion request | Manual or Partner-initiated |
| Identity tombstone (deleted user) | 5 years from account deletion | Automatic after 5 years |
| Billing-linked identity records | 5 years from end of financial year (Bogføringsloven §10) | Automatic after 5 years |
| Audit logs | 5 years from date of event | Automatic after 5 years |

Backups are encrypted at rest (AES-256).

### 7.2 End of Service

Upon termination or expiration of the Terms & Conditions, LogicNodes shall (at Partner's choice):

**Option A: Delete**
- Delete all Personal Data within 30 days
- Provide written certification of deletion, signed by an authorized representative

**Option B: Return**
- Export all Personal Data in JSON format
- Provide to Partner within 30 days
- Delete after Partner confirms receipt

**Exception:** LogicNodes may retain Personal Data to the extent required by applicable law (e.g., audit logs for compliance).

### 7.3 Partner-Initiated Deletion

Partner may delete data at any time via:
- Platform UI
- Written request to kontakt@logicnodes.ai

LogicNodes will delete immediately from production database (synchronous CASCADE) and purge from backups within 30 days.

Audit logs are exempt from this section. They cannot be deleted on Partner or end-user request.

## 8. Audit & Compliance

### 8.1 Partner Audit Rights

Partner has the right to audit LogicNodes' compliance with this DPA, subject to:

**Frequency:** Once per calendar year (or more if Data Breach occurs)

**Scope:**
- Security measures (documentation review)
- Sub-Processor agreements
- Data retention policies
- Incident response procedures

**Method:**
- **Primary:** Remote audit via documentation review, security questionnaire, and Q&A
- **Alternative:** Where available, LogicNodes may satisfy audit requests by providing recent third-party assessments (e.g., SOC 2 report when available, penetration test summaries under NDA)
- **On-Site:** On-site audit only if remote methods are insufficient to address reasonable audit concerns, with 60 days' advance notice, during business hours, and limited to reasonable duration (1-2 business days)

**Confidentiality:**
Partner agrees to sign NDA and limit access to confidential information.

**Costs:**
- First remote audit per year: No charge
- On-site audits: Reasonable costs (to be agreed in advance)
- Additional audits: Reasonable costs (to be agreed)

Audits must not unreasonably disrupt LogicNodes' operations and shall not require access to other customers' data or proprietary systems unrelated to Partner's data processing.

### 8.2 LogicNodes Certifications

LogicNodes will maintain industry-standard security practices and provide documentation upon reasonable request:
- SOC 2 Type II report (when available)
- Penetration test summary reports (annual, under NDA when available)
- Sub-processor security documentation (DPAs, vendor security pages, available certifications)
- Security policies and procedures documentation
- Responses to standard security questionnaires (CAIQ, SIG, VSA)

## 9. Liability & Indemnification

### 9.1 Limitation of Liability

Each party is liable for losses directly caused by a breach of this DPA. Neither party is liable for indirect losses, consequential damages, or loss of data, unless the loss is caused by willful misconduct or gross negligence. These limitations do not apply where prohibited by law, including in the event of a breach of the GDPR.

### 9.2 Indemnification

LogicNodes shall indemnify and hold harmless Partner from:
- Claims arising from LogicNodes' breach of this DPA
- Fines imposed by Supervisory Authorities due to LogicNodes' non-compliance with GDPR
- Data Subject claims arising from LogicNodes' unauthorized processing

**Exclusions:**
LogicNodes is NOT liable for claims arising from:
- Processing undertaken at Partner's documented instructions that contravene Data Protection Laws;
- Partner's breach of this DPA, the Terms & Conditions, or Data Protection Laws;
- Events caused by Partner's systems, integrations, or end-users.

### 9.3 Controller Indemnity

Notwithstanding §9.1, Partner shall indemnify, defend, and hold harmless LogicNodes from any claims, losses, fines, penalties, and reasonable legal costs arising from Partner's failure to comply with its obligations under §2.3, including Supervisory Authority investigations or enforcement actions and Data Subject claims under GDPR Article 82 directed at LogicNodes. Where LogicNodes is held jointly liable under GDPR Article 82 in connection with Personal Data introduced by Partner in breach of §2.3, Partner shall reimburse LogicNodes for any amounts paid to Data Subjects or authorities.

## 10. Term & Termination

### 10.1 Term

This DPA is effective as of the Effective Date and continues until terminated by either party in accordance with Section 10.2.

### 10.2 Termination

This DPA terminates automatically upon termination of the Terms & Conditions.

### 10.3 Survival

The following sections survive termination:
- Section 4.2 (Security Measures) - until data deleted
- Section 4.4 (Data Breach Notification) - for breaches occurring during term
- Section 7 (Data Retention & Deletion) - until data deleted
- Section 9 (Liability & Indemnification) - for 2 years following termination

## 11. General Provisions

### 11.1 Governing Law

This DPA is governed by Danish law. For GDPR compliance, EU data protection law applies to the extent required by GDPR Article 28(3)(a). In case of conflict between this DPA and the SCCs with respect to personal data transfers, the SCCs shall prevail.

### 11.2 Amendments

LogicNodes may update this DPA by providing at least 7 days' written notice to Partner. Partner may, before the notice period expires, choose to terminate this DPA with effect from the end of the notice period. Continued use of the Services after the notice period expires constitutes acceptance of the updated DPA.

### 11.3 Severability

If any provision of this DPA is invalid or unenforceable, the remaining provisions remain in full force and effect. The invalid provision shall be replaced with a valid provision that achieves the original intent.

### 11.4 Entire Agreement

This DPA constitutes the entire agreement on data processing between the parties.

### 11.5 Order of Precedence

In the event of conflict:
1. This DPA (for data protection matters)
2. Privacy Policy (for end-user data rights)

## 12. Signatures

**Partner (Data Controller):**

Signature: _______________________________  
Name: [PARTNER AUTHORIZED SIGNATORY]  
Title: _______________________________  
Date: _______________________________  

**LogicNodes ApS (Data Processor):**

Signature: _______________________________  
Name: [LOGICNODES AUTHORIZED SIGNATORY]  
Title: _______________________________  
Date: _______________________________  

## Appendix A: Standard Contractual Clauses (SCCs)

**EU Commission Decision 2021/914 - Module 2 (Controller to Processor)**

Full text available at: https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj

**Party Details:**

**Data Exporter (Controller):**
- Name: [PARTNER NAME]  
- Address: [PARTNER ADDRESS]  
- Contact: [PARTNER SECURITY CONTACT]  
- Role: Data Controller
- Activities: Uses LogicNodes' AI agent platform to process own end-users' data

**Data Importer (Processor):**
- Name: LogicNodes ApS
- Address: Sletvej 2D, 8310 Tranbjerg, Denmark
- CVR: DK45318362
- Contact: legal@logicnodes.ai  
- Role: Data Processor
- Activities: Provides embeddable AI agent automation platform (Logi AI)

**Competent Supervisory Authority:**  
[Partner's local data protection authority, e.g., Datatilsynet for Denmark]

**Clause 9 (Use of Sub-Processors):**  
- General authorization granted (Section 5.1)
- 7-day notice for new Sub-Processors (Section 5.3)

**Clause 13 (Supervision):**  
Supervisory Authority: The competent supervisory authority in the country where the Data Exporter is established

**Clause 17 (Governing Law):**  
Law of EU Member State where Data Exporter is established

**Clause 18 (Choice of Forum):**  
Courts of EU Member State where Data Exporter is established

**UK Addendum:**  
Where required, the UK Addendum to the SCCs (version issued by the ICO) forms part of this DPA.

**Swiss Addendum:**  
For Swiss FADP transfers, references in the SCCs to the GDPR and EU law shall be read as references to the FADP and Swiss law.

## Appendix B: Technical and Organizational Measures

**Security Measures Implemented by LogicNodes:**

### 1. Access Control

**Physical Access:**
- N/A (cloud-based infrastructure, no on-premise servers)
- Supabase/AWS manage physical datacenter security (ISO 27001, SOC 2)

**System Access:**
- Strong authentication required for production access (MFA enabled where supported)
- Key-based authentication (password-based login disabled)
- Role-based access control (least-privilege principle)
- Access limited to a small number of authorized personnel who have signed an NDA and completed mandatory security and personal data/GDPR training
- All production access logged for audit purposes

**Data Access:**
- Row-Level Security (RLS) policies enforce multi-tenant isolation
- JWT-based authentication (RS256, 1-hour expiration)
- API key authentication (bcrypt hashing, show-once)
- Service role access logged to audit logs

### 2. Transmission Control

**Encryption in Transit:**
- TLS 1.2+ for all API communication
- HTTPS enforcement (HTTP redirects to HTTPS)
- HSTS headers (prevent downgrade attacks)

**API Security:**
- Rate limiting on authentication endpoints
- Input validation and parameterized queries
- SQL injection prevention (parameterized queries only)

### 3. Storage Control

**Encryption at Rest:**
- Database encryption (Supabase default, AES-256)
- Secrets encryption (encrypted vault storage)
- Storage bucket encryption (AWS S3, AES-256)
- Key Management: AWS KMS-managed keys, automatic rotation at least annually
- Key Access: Limited to service role, all decrypt operations audit-logged

**Backup Security:**
- Automated daily backups (Supabase)
- Backups encrypted at rest
- 30-day backup retention

### 4. User Control

**User Authentication:**
- Shadow users (no password sharing with LogicNodes)
- JWT validation (partner's signing secret)
- Session management (1-hour expiration, refresh tokens)

**Authorization:**
- Role-based access control (admin, member, viewer)
- Permission system (runs:read, runs:create, etc.)
- Organization scoping (users only access own org data)

### 5. Data Separation

**Multi-Tenancy:**
- Database RLS policies (enforce organization_id scoping)
- Application-layer validation (cross-tenant access prevented by design)
- JWT custom claims (org_id embedded in session)

**Test Coverage:**
- Cross-organization access prevention tests
- Automated security regression tests

### 6. Pseudonymization

**Shadow Users:**
- Synthetic email addresses (synthetic, non-routable email addresses generated from user and partner identifiers)
- No PII in user IDs (UUIDs)

**Audit Logs:**
- User IDs instead of names/emails
- IP address handling aligned with security monitoring and legal requirements

### 7. Availability & Resilience

**Infrastructure:**
- Multi-AZ deployment (AWS EU-North-1, via Supabase)
- Automated failover (Supabase managed)
- High availability architecture (multi-AZ) provided by Supabase/AWS

**Disaster Recovery:**
- Daily automated backups
- Recovery time and point objectives designed to meet business continuity requirements

### 8. Incident Management

**Detection:**
- Real-time monitoring (failed auth, unusual patterns)
- Automated alerts (monitoring system)
- Audit log analysis (quarterly reviews)

**Response:**
- Incident response plan (documented procedures)
- 24-hour response time (critical issues)
- Post-incident reports (within 5 business days)

**Escalation:**
- Technical team notification (critical issues)
- CTO/technical lead oversight
- Partner communication via security contact (kontakt@logicnodes.ai)

### 9. Data Portability & Deletion

**Export:**
- Agent run export API (JSON format)
- Structured, machine-readable data
- Response time: Within 30 days

**Deletion:**
- Cascading deletes (foreign key constraints)
- Automatic storage cleanup (triggers)
- Deletion timeline: Immediate (production), 30 days (backups)

### 10. Logging & Monitoring

**Audit Logs:**
- All authentication events logged
- Secret operations logged (automatic trigger)
- Admin operations logged (org/user deletion)
- All staff actions logged and tied to an accountable staff member
- Account support access events logged

**Security Monitoring:**
- Failed authentication tracking
- API key usage monitoring
- Anomaly detection enhancements under continuous improvement

### 11. Technical Support Access

The Processor may access the Controller's organisational data and, where strictly necessary for support delivery or bug investigation, access individual agent runs and User account data. Permitted purposes include:

- **Support delivery** — resolving issues raised by Partner or end-users;
- **Bug investigation** — where LogicNodes encounters or identifies unintended platform behaviour, LogicNodes may inspect the relevant agent run(s) solely to identify the root cause and resolve the platform issue. Access is limited to data necessary to reproduce or diagnose the defect.

The Processor shall:

(a) Restrict such access to a limited number of staff who have signed an NDA and completed mandatory security and personal data/GDPR training;

(b) Ensure all access actions are tied to an accountable staff member and audit-logged;

(c) Retain access logs in accordance with the purpose-limited retention schedule in §7.1 and App. B §12 (security event logs: 5 years; identity tombstones: 5 years);

(d) Where access is initiated without a prior Partner support request (e.g. in response to an automated error alert), notify Partner's designated contact within 48 hours;

### 12. Audit Log Personal Data on User Deletion

LogicNodes retains audit logs for **5 years** from the date of the logged event. Audit logs are retained regardless of whether the relevant user account has been deleted.

Partners can access audit logs for their own organisation via the platform or by contacting kontakt@logicnodes.ai. Data is available in a readable format. Requests are fulfilled within 5 business days.

Audit logs cannot be deleted on Partner or end-user request. They are permanently deleted at the end of the 5-year period.

Legal basis: GDPR Art. 6(1)(f) and Art. 17(3)(e), in conjunction with Bogføringsloven §10 and Straffeloven §93.

## Appendix C: Sub-Processor List

**Authoritative List:** https://legal.logicnodes.ai/en/subprocessors

**Summary:**

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRHy76XGvurEqCuaIjMYAKlogtBJg4Maz1EOIptwtBQth89Vyaq3CM929kRdwEEf8mSbESwZrfnd9o7/pubhtml?gid=0&single=true" width="100%" height="550" frameborder="0" scrolling="no"></iframe>

**LLM Providers:** By default, LogicNodes provides API keys for LLM services. Partners may optionally provide their own API keys, in which case the LLM provider becomes Partner's direct processor (not LogicNodes' sub-processor).

**Sub-Processors of Sub-Processors:** Each sub-processor may engage their own sub-processors (e.g., Supabase uses AWS; Vercel uses AWS/Google Cloud). These are covered under respective vendor DPAs.

**Changes:**
Partners will be notified 7 days before any changes to this list (new Sub-Processor, material change to existing).

The authoritative sub-processor list is maintained at https://legal.logicnodes.ai/en/subprocessors.

## Change Log

| Date | Section |
|---|---|
| 2026-07-07 | §2.3; §3.3; §4.1; §4.2; §7.1; §7.3; §9.3; App. B §1; App. B §10; App. B §11; App. B §12 |
| 2026-04-21 | Initial publication |

---


LogicNodes ApS
Sletvej 2D, 8310 Tranbjerg, Denmark
CVR: DK45318362

This DPA is confidential and intended for Partner execution. Public distribution is not permitted.
