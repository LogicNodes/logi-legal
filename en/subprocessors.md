---
layout: legal
title: Sub-Processor List
last_updated: 2026-07-07
lang: en
lang_equivalent: /da/underbehandlere
description: "Complete list of third-party sub-processors engaged by LogicNodes ApS for service delivery. GDPR-compliant notification page."
---

# LogicNodes – Authorized Sub-Processors

**Effective Date:** April 23, 2026
<p class="last-updated">Last Updated: {{ page.last_updated | date: "%B %-d, %Y" }}</p>

This page lists all third-party sub-processors engaged by **LogicNodes ApS** (CVR: DK45318362) in connection with providing the LogicNodes platform and related services.

Each sub-processor is bound by a valid **Data Processing Agreement (DPA)** that includes appropriate GDPR safeguards (e.g., Standard Contractual Clauses, SOC 2, ISO 27001).

Copies of all executed or click-through DPAs are maintained internally and can be provided to partners upon request.

---

## Primary Sub-Processors

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRHy76XGvurEqCuaIjMYAKlogtBJg4Maz1EOIptwtBQth89Vyaq3CM929kRdwEEf8mSbESwZrfnd9o7/pubhtml?gid=0&single=true" width="100%" height="550" frameborder="0" scrolling="no"></iframe>

### What Each Sub-Processor Does

| Sub-Processor | Service |
|---|---|
| **Supabase** | Database, authentication, and file storage |
| **Vercel** | Web application hosting and edge delivery |
| **Hetzner** | Backend API hosting |
| **Mailgun** | Transactional email delivery |
| **ElevenLabs** | Speech-to-text transcription |
| **Pyannote** | Speaker identification (optional; involves biometric data — GDPR Art. 9) |
| **OpenAI / Anthropic / Google / xAI** | AI language model inference |
| **Mistral AI** | AI language model inference — EU-only data processing only (France) |
| **Hugging Face, Inc.** | AI model hosting and inference |
| **Amazon Web Services (Bedrock)** | AI language model inference — EU-only data processing only (eu-central-1, Frankfurt) |

ElevenLabs and Pyannote are only engaged when the voice transcription and speaker identification features are explicitly enabled. They are not used on standard agent runs.

> **EU-only data processing:** When an organisation has activated EU-only data processing (see DPA §2.4), AI inference is handled exclusively by EU-based models via Amazon Bedrock (Frankfurt), Mistral AI (France), Google Cloud Gemini (EU region), or Microsoft Azure OpenAI Service (EU region). ElevenLabs transcription is not available in this configuration. No data is transferred to US-based LLM providers. Amazon Web Services (Bedrock) is only engaged in this configuration; contact: aws-privacy@amazon.com.

---

## LLM Provider Data Handling

**Default Configuration:**
By default, LogicNodes provides API keys for LLM services (OpenAI, Anthropic, Google, xAI). In this configuration:
- LogicNodes is the **Data Processor** (on behalf of Partner, the Data Controller)
- LLM providers are **Sub-Processors** of LogicNodes
- LogicNodes maintains DPAs with all LLM providers
- LogicNodes disables provider-side training and retention where configurable
- All data processing is covered under LogicNodes' DPA with the Partner

**Optional: Partner-Provided API Keys**
Partners may choose to provide their own API keys for LLM services. In this configuration:
- Partner contracts directly with the LLM provider
- LLM provider becomes Partner's **Direct Processor** (not LogicNodes' sub-processor)
- Partner is responsible for their own DPA with the LLM provider
- Partners should review LLM provider privacy policies and enforce no-training, no-retention settings
- LogicNodes is not responsible for LLM provider data handling in this configuration

**Partner Control:**
Partners can specify which LLM provider(s) to use. This flexibility allows Partners to:
- Use LogicNodes-managed keys (default, covered under this sub-processor list)
- Provide their own keys (Partner's direct relationship with LLM provider)
- Disable specific LLM providers
- Use only EU-based providers (e.g., Google Cloud EU regions)

### AI Training Prohibition

No sub-processor engaged by LogicNodes may use Customer Content, Outputs, or any data derived from them for the purpose of training, fine-tuning, benchmarking, or evaluating any AI or machine learning model. Where LLM providers offer zero data retention (ZDR) or equivalent no-training options, LogicNodes enables these settings.

| Provider | Training Prevention | Zero Data Retention |
|---|---|---|
| OpenAI | Training disabled via API agreement | ZDR available on Enterprise; enabled for LogicNodes-managed traffic |
| Anthropic | Training disabled via API agreement | No training on API traffic by default |
| Google Cloud | Training disabled via API agreement | Per-request opt-out available |
| xAI | Training disabled via DPA | Per DPA |

---

## Sub-Processor of Sub-Processors

Each sub-processor may use their own infrastructure providers to deliver their service. Known examples:

| Sub-Processor | Infrastructure | Purpose |
|---|---|---|
| Supabase | AWS (eu-north-1, Stockholm) | Managed database and object storage |
| Vercel | AWS, Google Cloud | Edge network and CDN delivery |
| Hetzner | Own EU data centres (Falkenstein/Nuremberg) | Dedicated server infrastructure |
| Mailgun | Various email delivery networks | Email routing and delivery |

These relationships are governed under each vendor's own DPA and are publicly documented on their trust and legal pages (see the appendix for links). The DPA between LogicNodes ApS and each sub-processor covers that sub-processor's use of its own sub-processors.

---

## Data Location & Residency

**Default Configuration:**
- Primary data storage: **EU (AWS eu-north-1, Stockholm via Supabase)**
- Web hosting: **EU (Frankfurt via Vercel)**
- Backend services: **EU (Falkenstein/Nuremberg via Hetzner)**
- Email delivery: **EU/USA routing-dependent (via Mailgun)**

**US Data Residency:**
Available upon Partner request. Additional fees may apply. Contact kontakt@logicnodes.ai.

**LLM Processing:**
When partners configure LLM providers, data processing may occur in the provider's global infrastructure (typically USA for OpenAI, Anthropic, xAI; EU/Global for Google). Partners should review each provider's data residency options.

**EU-only data processing:**
When an organisation has activated EU-only data processing, all AI inference is restricted to EU-based models only. No data is transferred to US-based providers in this configuration. Contact kontakt@logicnodes.ai to activate.

---

## Security & Compliance

All sub-processors meet or exceed LogicNodes' security requirements, including GDPR compliance, appropriate transfer mechanisms (SCCs or adequacy decisions), and encryption in transit and at rest.

---

## Review & Verification Process

**Internal Governance:**
- LogicNodes reviews and re-verifies all sub-processor DPAs **at least annually**
- DPAs are re-reviewed whenever a vendor updates their legal terms
- All DPAs are timestamped and archived in our internal legal repository
- Security certifications (SOC 2, ISO 27001) are verified annually

**Last Full Review:** April 2026
**Next Scheduled Review:** October 2026

---

## Notification of Changes

**7-Day Advance Notice:**
LogicNodes ApS will update this page at least **7 days prior** to:
- Adding a new sub-processor
- Materially changing an existing sub-processor relationship
- Changing data processing locations

**Notification Method:**
1. Update this page with the change and effective date
2. Email notification to all active partners' security contacts
3. Version history tracked via GitHub Pages commit log

**Partner Objection Rights:**
Partners may object to new sub-processors on reasonable data protection grounds by notifying LogicNodes within 7 days. See your Data Processing Agreement (DPA) for full details.

---

## Related Documentation

**Core Legal Documents:**
- [Data Processing Agreement (DPA)](/en/data-processing-agreement/) – GDPR Art. 28 compliant processor agreement
- [Responsible Disclosure Policy](/en/responsible-disclosure/) – Security vulnerability reporting
- **Security Architecture** – Available on request (contact kontakt@logicnodes.ai)

**Partner Resources:**
- **Partner Documentation** – Integration guides and API documentation available on request at kontakt@logicnodes.ai
- [Security Questionnaires](mailto:kontakt@logicnodes.ai) – Request completed security assessments

---

## Contact Information

**Privacy & Compliance:**
- **Email:** kontakt@logicnodes.ai
- **Response Time:** 5 business days

**Security Team:**
- **Email:** kontakt@logicnodes.ai
- **PGP Key:** /en/pgp
- **Response Time:** 24 hours for critical issues

**Sales & Partnerships:**
- **Email:** kontakt@logicnodes.ai
- **Purpose:** DPA execution, custom agreements, US data residency requests

**Mailing Address:**
LogicNodes ApS
Sletvej 2D
8310 Tranbjerg
Denmark
CVR: DK45318362

---

## Appendix: Sub-Processor Contact Information

For direct inquiries to sub-processors regarding their data processing practices:

| Sub-Processor | Privacy Contact | DPA Information |
|---------------|-----------------|-----------------|
| Supabase Inc. | privacy@supabase.com | [Supabase Trust Center](https://supabase.com/security) |
| Vercel Inc. | privacy@vercel.com | [Vercel DPA](https://vercel.com/legal/dpa) |
| Hetzner Online GmbH | datenschutz@hetzner.com | [Hetzner Privacy](https://www.hetzner.com/legal/privacy-policy/) |
| Mailgun / Sinch | privacy@mailgun.com | [Mailgun Privacy](https://www.mailgun.com/legal/privacy-policy/) |
| OpenAI LLC | privacy@openai.com | [OpenAI Privacy](https://openai.com/privacy/) |
| Anthropic PBC | privacy@anthropic.com | [Anthropic Privacy](https://www.anthropic.com/legal/privacy) |
| Google Cloud | cloud-privacy@google.com | [Google Cloud Privacy](https://cloud.google.com/privacy) |
| xAI Corp. | privacy+enterprise@x.ai | [xAI Privacy](https://x.ai/privacy/) |
| Mistral AI SAS | privacy@mistral.ai | [Mistral AI Privacy](https://mistral.ai/terms/#privacy-policy) |
| Hugging Face, Inc. | privacy@huggingface.co | [Hugging Face Privacy](https://huggingface.co/privacy) |
| Amazon Web Services Inc. | aws-privacy@amazon.com | [AWS GDPR Centre](https://aws.amazon.com/compliance/gdpr-center/) |
| ElevenLabs Inc. | legal@elevenlabs.io | [ElevenLabs Trust Center](https://compliance.elevenlabs.io/) |
| Pyannote SAS | support@pyannote.ai | [PyAnnoteAI](https://pyannote.ai/) |

**Note:** Contact information is provided for reference only. All sub-processor relationships are managed by LogicNodes ApS. Partners should direct all inquiries to kontakt@logicnodes.ai.

---

**Version:** 1.2
**Effective Date:** April 23, 2026
**Last Updated:** July 7, 2026

**© 2025 LogicNodes ApS. All rights reserved.**

This sub-processor list is maintained as part of LogicNodes' GDPR compliance obligations under Article 28(3)(d).
