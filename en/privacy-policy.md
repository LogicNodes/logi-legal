---
layout: legal
title: Privacy Policy
last_updated: 2026-06-17
lang: en
lang_equivalent: /da/privatlivspolitik/
---

# Privacy Policy

<p class="last-updated">Last Updated: {{ page.last_updated | date: "%B %-d, %Y" }}</p>

## 1. Introduction

LogicNodes ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information when you use our services.

**Our Privacy Commitment:** We believe in minimal data collection. We only collect what is absolutely necessary to provide our services, and we retain data for the shortest period possible.

## 2. Information We Collect

### 2.1 Authentication Information

To provide you with access to our services, we collect only the following information necessary for account authentication:

- **Email address** - Used as your unique identifier and for account-related communications
- **Password** - Stored securely via Supabase Auth (our sub-processor) using industry-standard encryption. Embedded users authenticate via partner-signed JWTs and have no password with LogicNodes.
- **Authentication tokens** - Temporary session tokens to keep you logged in

### 2.2 Information We Do NOT Collect

Unlike many services, we do not collect:

- Personal identifying information beyond your email address
- Behavioral tracking data
- Analytics or usage patterns for marketing purposes
- Third-party cookies or tracking pixels
- Device fingerprinting data
- Location data

### 2.3 Cookies and Local Storage

The platform (app.logicnodes.ai) uses only strictly necessary cookies to maintain your authenticated session. These are session cookies set by Supabase Authentication (`sb-*`), which are HTTP-only, Secure, and SameSite. They expire when you log out or when your session token expires. No third-party cookies are set by the application. For a full description of all cookies and our analytics approach, see our [Cookie Notice](/en/cookie-notice/).

## 3. How We Use Your Information

We use the minimal information we collect solely for the following purposes:

- **Authentication** - To verify your identity and provide secure access to your account
- **Service delivery** - To enable the core functionality of our platform
- **Security** - To protect your account from unauthorized access
- **Essential communications** - To send critical service updates, security alerts, or responses to your inquiries (we do not send marketing emails)

**Anonymised usage analytics.** We collect and use fully anonymised, aggregate platform usage statistics — such as feature adoption rates, model selection frequencies, and template usage — for internal product development and roadmap decisions. This data cannot be used to identify any individual user or organisation and is not subject to GDPR. It is never shared with third parties.

We do not use your information for advertising, profiling, or any secondary purposes. We do not use your personal data to train, fine-tune, or evaluate AI or machine learning models.

## 4. Data Retention

We practice aggressive data minimization with the following retention policies:

- **Session data** - Deleted upon logout or session expiration
- **Temporary data** - Automatically purged on a daily basis according to our data retention policies
- **Authentication data** - Retained only while your account is active
- **Account deletion** - Upon account deletion, all associated data is immediately removed from production systems and purged from backups within 30 days

You may request deletion of your account and all associated data at any time by contacting us at kontakt@logicnodes.ai.

## 5. Information Sharing and Disclosure

We do not sell, rent, trade, or otherwise share your personal information with third parties, except in the following limited circumstances:

### 5.1 With Your Consent

We will only share your information when you have given explicit, informed consent and there is a legitimate purpose — such as a functional requirement, legal obligation, or security necessity.

### 5.2 Legal Requirements

We may disclose your information if required by law, court order, or governmental authority, or when we believe in good faith that such disclosure is necessary to:

- Comply with legal obligations
- Protect our rights, property, or safety
- Investigate fraud or security issues
- Protect against legal liability

### 5.3 Service Providers

We may use trusted third-party service providers to help operate our services (such as hosting infrastructure and AI model inference). These providers are contractually bound to:

- Use your data only for the specific services they provide to us
- Maintain the same level of data protection as outlined in this policy
- Delete or return data when their services are no longer needed

A full list of our sub-processors, including hosting, infrastructure, and AI model providers, is available at [/en/subprocessors](/en/subprocessors/).

We do not share data with advertising networks, analytics companies, or data brokers.

### 5.4 Third-Party Connectors

When you activate a connector, data is transmitted to that third-party service at your direction. That provider's own privacy policy governs how they handle your data — this Privacy Policy does not apply to their processing. LogicNodes is not responsible for the privacy practices of any third-party service you connect.

## 6. Data Security

We implement industry-standard security measures to protect your information:

- **Encryption** - All data is encrypted in transit (TLS/SSL) and at rest
- **Access controls** - Strict internal access policies limit who can access user data
- **Secure authentication** - Passwords are hashed and salted using bcrypt via Supabase Auth (our sub-processor). Embedded users authenticate via partner-signed JWTs.
- **Regular security audits** - We continuously monitor and improve our security practices
- **Minimal data exposure** - By collecting minimal data, we minimize potential exposure in the event of a breach
- **Staff access controls** - See [Section 6a](#6a-internal-staff-access) below.

While we take reasonable precautions, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.

## 6a. Internal Staff Access

### What Staff Can Access

A limited number of authorised LogicNodes staff have operational access to customer data. Access is restricted to personnel who have signed an NDA and completed mandatory security and personal data/GDPR training. All staff actions are tied to an accountable staff member and audit-logged. Access is used solely for the following purposes:

- **Technical support** — diagnosing issues upon Partner or user request
- **Bug investigation** — where LogicNodes encounters or identifies unintended platform behaviour, authorised staff may inspect the relevant agent run(s) solely to identify the root cause and resolve the platform issue
- **Billing and account management** — resolving disputes and verifying usage
- **Platform integrity** — investigating suspected abuse or Terms of Service violations
- **Legal compliance** — responding to lawful government or regulatory requests

### Account Support Access

In limited circumstances, authorised staff may access and act within a user's account (including sending messages, triggering runs, and modifying settings on their behalf) to provide effective technical support. Every such access event is audit-logged with staff identity, target user ID, source IP address, and timestamp.

Where run content is inspected as part of support, it may include special category data (Art. 9 GDPR). Such access is strictly limited to the support or platform integrity purpose that justified it and is not used for any other purpose.

When a user account is deleted, a single identity record (user ID, email, display name) is written to the audit log immediately before deletion and retained for 5 years for fraud investigation purposes (Art. 17(3)(e) GDPR, Forældelsesloven §3, stk. 1). Audit logs (authentication events, IP addresses, browser and device information) are also retained for 5 years for the same purpose. Both are permanently deleted at the end of the 5-year period. No pseudonymisation takes place.

The legal basis for this processing is our **legitimate interests** (Art. 6(1)(f) GDPR) in providing contracted support services and maintaining platform integrity. A balancing test was conducted; we concluded that staff support access is reasonably expected in commercial B2B SaaS relationships and is proportionate to the support need.

You may object to this processing under Art. 21 GDPR by contacting legal@logicnodes.ai.

## 7. Your Rights and Choices

You have the following rights regarding your personal information:

### 7.1 Access and Portability

You may request a copy of the personal information we hold about you at any time.

### 7.2 Correction

You may update or correct your email address through your account settings or by contacting us.

### 7.3 Deletion

You may request deletion of your account and all associated data at any time. We will delete data immediately from production systems and purge from backups within 30 days.

### 7.4 Data Minimization

We automatically minimize data retention. Temporary data is purged daily without requiring action on your part.

### 7.5 Opt-Out

You may opt out of non-essential communications at any time. Note that we may still send critical service-related notifications necessary for account security.

## 8. International Data Transfers

Personal data is stored primarily in the European Union (AWS EU-North-1, Stockholm, via Supabase). Standard use of the platform involves agent prompts and responses being transmitted to AI model inference providers. Some of these providers — including OpenAI, Anthropic, and xAI — have servers in the USA, and processing by them constitutes an international data transfer. These transfers are protected by Standard Contractual Clauses (EU Commission Decision 2021/914). A full list of sub-processors and their locations is available at [/en/subprocessors](/en/subprocessors/).

**EU-only data processing:** Users who require that all data stays within the EU can request EU-only data processing by contacting kontakt@logicnodes.ai. When active, AI inference is restricted to EU-based providers only, and no data is transferred outside the EU.

## 9. Children's Privacy

Our services are intended exclusively for business users. LogicNodes is a B2B platform; organisations are responsible for ensuring that their end-users meet any applicable age requirements. We do not knowingly collect personal data from individuals under the age of 16. If we become aware that data from a person under 16 has been processed through our platform, we will take appropriate steps to delete it.

## 10. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes at least **7 days** before they take effect by:

- Updating the "Last Updated" date at the top of this policy
- Sending an email notification to your registered email address (for significant changes)
- Displaying a prominent notice on our website

Your continued use of our services after changes become effective constitutes acceptance of the updated policy.

## 11. European Privacy Rights (GDPR)

LogicNodes ApS is established in Denmark and processes personal data as a data controller under the General Data Protection Regulation (EU) 2016/679 (GDPR). Our lead supervisory authority is the **Datatilsynet** (Danish Data Protection Agency), Carl Jacobsens Vej 35, 2500 Valby, Denmark, dt@datatilsynet.dk.

**Data Protection Officer:** For all privacy and data protection inquiries, contact our DPO at dpo@logicnodes.ai.

### Legal Bases for Processing

We rely on the following legal bases under GDPR Article 6 (and Article 9 where applicable):

- **Contractual necessity (Art. 6(1)(b))** — Processing required to deliver and maintain the LogicNodes platform in accordance with our Terms of Service (e.g., account authentication, service delivery).
- **Legitimate interests (Art. 6(1)(f))** — Processing necessary for our legitimate interests in platform security, fraud prevention, maintaining audit logs, and limited internal staff access for support and platform integrity purposes, where these interests are not overridden by your rights.
- **Legal obligation (Art. 6(1)(c))** — Retention of billing and invoicing records as required by the Danish Bookkeeping Act (Bogføringsloven).
- **Account holder responsibility (Art. 9(2) and applicable national law)** — Account holders may introduce any personal data into the platform, including special category personal data under GDPR Art. 9(1) and personal data subject to specific national law requirements. The account holder is the data controller for all such data and is solely responsible for establishing a valid legal basis under Art. 6(1), Art. 9(2), and applicable national law before introducing such data. LogicNodes processes this data solely as data processor on the account holder's documented instructions and does not verify the lawfulness of those instructions. For voiceprints specifically: you accept that LogicNodes processes biometric data as part of delivering the speaker identification service; voiceprint data can be deleted at any time via the agent trigger on the chat page.

### Automated Decision-Making

LogicNodes does not use automated decision-making that produces legal effects or similarly significant effects concerning data subjects (GDPR Art. 22). Where account holders configure automated workflows through the platform, they are responsible as data controllers for ensuring those workflows comply with Art. 22 requirements applicable to their own use cases. LogicNodes does not provide Art. 22 safeguards on behalf of account holders.

### Your GDPR Rights

If you are located in the European Economic Area (EEA), you have the following rights:

- **Right of access (Art. 15)** — Request a copy of the personal data we hold about you.
- **Right to rectification (Art. 16)** — Request correction of inaccurate or incomplete personal data.
- **Right to erasure (Art. 17)** — Request deletion of your personal data, subject to any overriding legal obligations.
- **Right to restriction of processing (Art. 18)** — Request that we limit how we use your data in certain circumstances.
- **Right to data portability (Art. 20)** — Receive your personal data in a structured, commonly used, machine-readable format.
- **Right to object (Art. 21)** — Object to processing carried out on the basis of legitimate interests.
- **Rights regarding voiceprints** — Voiceprint data can be deleted at any time via the agent trigger on the chat page. Individuals whose voices have been recorded should direct any GDPR rights requests to the user who created the voiceprint, as that user is responsible for the legal basis and compliance obligations for that processing.
- **Right to lodge a complaint** — You may file a complaint with Datatilsynet (dt@datatilsynet.dk) or any other competent supervisory authority in the EEA.

For a more detailed explanation of how we handle these rights, including response timelines and identity verification procedures, see our [GDPR Notice](/en/gdpr-notice/).

## 12. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:

**Email:** legal@logicnodes.ai
**Response time:** We aim to respond to all privacy inquiries within 5 business days.

For GDPR-related requests, you may also contact us via: legal@logicnodes.ai (subject line: 'GDPR Rights Request'). Response within 30 calendar days.

**Company Information:**
LogicNodes ApS
Sletvej 2D
8310 Tranbjerg
Denmark
CVR: DK45318362

---

## Change Log

| Date | Section |
|---|---|
| 2026-07-07 | §2.3; §3; §5; §5.1; §6; §6a; §9; §11 |
| 2026-04-21 | Initial publication |

---


*This Privacy Policy is effective as of the date listed above and applies to all users of LogicNodes services.*
