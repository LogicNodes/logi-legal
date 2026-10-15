---
layout: legal
title: Security Overview
description: "LogicNodes Platform – Enterprise security overview, data protection, and compliance commitments."
last_updated: 2026-10-15
lang: en
lang_equivalent: /da/sikkerhedsarkitektur/
---

# LogicNodes Platform - Security Overview

<p class="last-updated">Last Updated: {{ page.last_updated | date: "%B %-d, %Y" }}</p>
**Audience:** Prospective partners, security teams, compliance officers

**Distribution:** This is a high-level security overview for public evaluation. Our detailed Security Architecture document (including implementation specifics, API endpoints, and operational parameters) is available upon request for qualified partners under NDA.

**Request Full Documentation:** Contact [kontakt@logicnodes.ai](mailto:kontakt@logicnodes.ai)

## Executive Summary

The LogicNodes AI agent platform is designed with enterprise-grade security to protect your data and your customers' data. This overview explains our security guarantees, data handling practices, and compliance capabilities. LogicNodes is used both directly through the LogicNodes frontend and embedded within partner SaaS platforms, and follows the principles of least privilege and data minimization in both configurations.

We do **not** use customer data for training or fine-tuning AI models.

## Security Guarantees

**Complete Data Isolation** - Your organizations' data is cryptographically isolated through multi-tenant architecture

**Encrypted Data** - All data encrypted at rest and in transit (TLS 1.2 or higher)

**Configurable Retention** - You control data retention periods; automated cleanup handles GDPR compliance

**Audit Logging** — retained 5 years

**Secure Authentication** - Supabase Auth for direct users; JWT-based authentication for partner-embedded users

**Rate Limiting** - Protection against abuse and unauthorized access attempts

**GDPR Ready** - Right to deletion, data export, data portability, cascading deletes

## Authentication & Access Control

### How It Works

LogicNodes supports two authentication models depending on how the platform is accessed:

**Direct users (LogicNodes frontend)**
Users sign in via email/password or OAuth (Google, Microsoft Azure). Credentials are managed exclusively by Supabase Auth — LogicNodes does not implement its own password storage or verification. Supabase Auth is SOC 2 Type II certified and handles hashing, salting, and secure storage. OAuth users never provide a password to LogicNodes at all.

**Partner-embedded users (integration JWT)**
Partners embedding LogicNodes into their own platform authenticate users by issuing a signed JWT from their own backend. LogicNodes validates the JWT signature using the partner's RSA public key and provisions a session automatically — the user never interacts with LogicNodes directly and no LogicNodes account or password is created.

**In both cases:**
- **Full audit trail** - All authentication attempts logged
- **Immediate revocation** - Sessions expire automatically; partners can revoke embedded access by stopping JWT issuance
- **Zero cross-tenant access** - Authentication is always scoped to a single organization

**Authentication Method:** Supabase Auth (direct users) / RS256-signed JWTs (partner-embedded users)

**Session Security:** Token-based sessions with automatic expiration and refresh capability

**Revoking access:** For direct users, delete or disable the account via the platform UI. For partner-embedded users, stop issuing JWTs — existing sessions expire automatically within 1 hour.

**Compromised partner signing secret:** Contact kontakt@logicnodes.ai immediately. We will rotate the signing secret and invalidate all active sessions for that integration.

## Data Security

### Multi-Tenant Isolation

Your data is completely isolated from other organizations through multiple security layers:

**Database Level:**
- Row-level security policies enforce organization boundaries
- Queries automatically filtered by organization
- Privileged access respects organization scoping

**Application Level:**
- All data access requires explicit organization context
- Cross-organization queries prevented by design
- Extensive test coverage for isolation scenarios

**Result:** Zero cross-organization data leakage. Adheres to the principle of least privilege and enforces strict tenant separation.

### Environment Isolation

Production data is strictly isolated from development, staging, and testing environments:

- Separate Supabase projects for production and non-production
- Distinct databases, credentials, and API endpoints per environment
- No production data is copied into non-production; development and testing use synthetic or seeded data
- Separate secret stores per environment; production secrets are never available outside production
- Backend access to production is restricted, MFA-protected, and audit-logged independently of non-production

### Encryption

**Data at Rest:**
- Database: Industry-standard encryption
- Secrets: Encrypted and stored in secure vaults (cannot be decrypted without authorized backend access)
- File Storage: Industry-standard encryption

**Data in Transit:**
- TLS 1.2 or higher for all API communication
- HTTPS enforcement


### Access Controls

**User Access:**
- Role-based access control (admin, member, viewer)
- Users can only access their organization's data
- Permissions enforced at database and application level

**Partner API Access:**
- Secure API keys for backend-to-backend communication
- Secrets scoped by organization
- All API access logged to audit logs

### Staff and Admin Access

A limited number of authorised LogicNodes staff have access to internal management tools for operational and support purposes. Before access is granted, every staff member must:

- Sign a Non-Disclosure Agreement (NDA) covering confidential customer data
- Complete mandatory security awareness training
- Complete mandatory personal data and GDPR training

Access is provisioned only after all three requirements are verified and is revoked immediately upon termination of employment or contractor agreement. Every action taken through internal management tools is tied to an accountable staff member and is audit-logged. MFA is mandatory for all staff with management access.

**Account Support Access:** In limited circumstances, authorised staff may access and act within a user's account to provide effective technical support or to investigate unintended platform behaviour — inspecting the relevant agent run(s) solely to identify the root cause and resolve the platform issue. All such access is audit-logged and disclosed in our Privacy Policy (§6a).

### Data Loss Prevention

Our data loss prevention strategy combines preventive, recoverable, and operational controls:

**Preventive:**
- Encryption at rest and in transit
- Multi-tenant isolation via row-level security
- Least-privilege access with MFA for staff
- Immutable, tamper-resistant audit logs

**Recoverable:**
- Encrypted automated backups with point-in-time recovery
- 30-day backup retention with documented restore procedures
- Cascading deletes prevent orphaned data fragments

**Operational:**
- Daily automated cleanup enforces configured retention periods
- No customer data copied to development environments or used for model training
- Restricted backend access prevents production data exfiltration

## Data Retention & Privacy

### What We Store

| Data Type | Retention | Purpose | Your Control |
|-----------|-----------|---------|--------------|
| User profile (email, name) | Until deletion | Account management | Platform UI |
| Agent execution history | Configurable (1-90 days, default: 90 days) | Conversation continuity, debugging | Configurable retention |
| API requests/responses | Configurable (1-90 days, default: 90 days) | Agent context, transparency | Configurable retention |
| AI model interactions | Configurable (1-90 days, default: 90 days) | Improve agent continuity and debugging | Configurable retention; **not used for model training** |
| Encrypted secrets | Until deletion | Tool execution | Platform UI |
| Audit logs | 5 years | Compliance | Read-only |

### Automated Cleanup

**Daily automated cleanup** (runs at 02:00 UTC via database scheduler) removes agent run records and associated events older than your configured retention period.

Storage file retention follows the lifecycle of the element the file belongs to:
- **Agent run files** (uploaded documents, audio recordings tied to a specific run) are deleted together with their parent agent run when it expires
- **App and platform files** (files attached to apps or other persistent platform elements) are retained for the lifetime of that app or element, and deleted when the app or element is deleted
- **Audit logs** are excluded from automated cleanup and retained for 5 years

### Data Deletion

**User and Organization Deletion APIs** support GDPR right to deletion:
- Immediate deletion of user record and profile data from production database (synchronous)
- Agent runs, events, conversation history, and organization memberships deleted via database cascade
- Uploaded files (documents, avatars) deleted from storage as part of the deletion flow
- Encrypted secrets deleted on organization deletion
- All data purged from encrypted backups within 30 days

**Exception for voiceprints:** Voiceprints created by the voice feature are stored separately and are not covered by the automated account deletion flow. Voiceprints can be deleted directly from the platform UI on the chat page.

**Exception:** Audit logs are retained for 5 years for fraud investigation purposes (Art. 17(3)(e) GDPR). See [Privacy Policy Section 6a - Internal Staff Access](/en/privacy-policy/#6a-internal-staff-access) for details. They are permanently deleted at the end of the 5-year period.

**Audit Log Protection:**
- Tamper-resistant and write-protected via Row-Level Security
- Only authorized operations can modify logs (requires elevated privileges)
- Organization deletion preserves audit trail (logs retained for compliance)

## Compliance & Certifications

### GDPR Compliance

**Data Controller vs Processor:**

For **partner-embedded deployments:** You (the partner) are the Data Controller; LogicNodes is the Data Processor processing data on your behalf.

For **direct platform use:** LogicNodes acts as Data Controller for account and profile data (email, name, login history) and as Data Processor for the content your organization processes through the platform (agent runs, uploaded documents, AI interactions).

**GDPR Rights We Support:**

For a full legal description of your rights under the GDPR, see the [GDPR Notice](/en/gdpr-notice/).

- Right to Access — dashboard export of profile, organization membership, run metadata, and transcription list; full agent run content available upon written request to kontakt@logicnodes.ai (delivered within 30 days)
- Right to Deletion — platform UI with cascading deletes for all standard data records; voiceprints can be deleted directly from the platform UI on the chat page
- Right to Data Portability — same scope as Right to Access; full content export available upon written request
- Right to Rectification (update via dashboard and API)
- Data Minimization (retention policies, automated cleanup)

**Data Processing Agreement:** Template available at [Data Processing Agreement](/en/data-processing-agreement/)
- GDPR Article 28 compliant
- Standard Contractual Clauses (SCCs) for international transfers

### Data Location

**Primary Data Residency:** European Union (Germany)

**US Residency:** Available upon request (additional fees may apply)

**International Transfers:**
- Standard Contractual Clauses (EU Commission approved)
- Adequate safeguards per GDPR Article 46

Primary data storage is EU-based by default (Germany). However, standard agent runs transmit prompts and responses to AI model providers — OpenAI, Anthropic, and xAI have servers in the USA, which constitutes an international transfer covered by Standard Contractual Clauses. Partners who require that all processing stays within the EU can request EU-only data processing (see below).

### Infrastructure Compliance

LogicNodes' infrastructure runs on Supabase (built on AWS). Supabase operates on Amazon Web Services (AWS), inheriting its physical and network security controls.

**Our Infrastructure Provider (Supabase):**
- SOC 2 Type II certified
- ISO 27001 certified
- GDPR compliant



**Cloud Provider (AWS):**
- SOC 1, 2, 3
- ISO 27001
- PCI DSS

### LogicNodes Certifications

**Current:**
- Designed to meet SOC 2 Trust Service Criteria — formal audit targeted for Q1 2027
- Comprehensive security documentation available to qualified partners under NDA; custom security questionnaires accepted (send to kontakt@logicnodes.ai, response time 5-10 business days)
- Penetration testing planned (first engagement scheduled Q1 2027, annual cadence thereafter)

**Planned:**
- SOC 2 Type II audit (targeted Q1 2027)
- ISO 27001 (for EU customers, targeted Q1 2027)
- Bug bounty program (targeted Q1 2027)

### Sub-Processors

The authoritative, current list of sub-processors is maintained below. We provide 7-day advance notice before adding new sub-processors. The complete and always-current list is maintained at [/en/subprocessors/](/en/subprocessors/).

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRHy76XGvurEqCuaIjMYAKlogtBJg4Maz1EOIptwtBQth89Vyaq3CM929kRdwEEf8mSbESwZrfnd9o7/pubhtml?gid=0&single=true" width="100%" height="550" frameborder="0" scrolling="no"></iframe>

Full details, DPA status, and contact information for each sub-processor are available on our [Sub-Processor List](/en/subprocessors/).

## Incident Response

### Security Contact

**Email:** kontakt@logicnodes.ai  
**PGP Fingerprint:** Published at [https://legal.logicnodes.ai/en/pgp.txt](https://legal.logicnodes.ai/en/pgp.txt)  
**Response Time:** Within 24 hours for critical issues

### Data Breach Notification

If we detect unauthorized access to your data:

**Within 24 Hours:**
- Contain the breach (stop unauthorized access)
- Rotate all access tokens and API keys as part of containment (manual rotation completed within 24 hours)
- Notify you via email
- Provide preliminary incident report

**Within 72 Hours:**
- Detailed incident report (timeline, affected data, root cause), in accordance with GDPR Article 33
- Remediation plan (steps taken, preventive measures)
- Assistance with regulatory notification (if required)

**Your Responsibility:**
- Notify affected users (if required by GDPR Article 34)
- We'll provide: Affected user lists, impact assessment, technical details

### Responsible Disclosure

Security researchers can report vulnerabilities:
- **Email:** kontakt@logicnodes.ai
- **Safe Harbor:** We will not pursue legal action for good-faith research
- **90-Day Embargo:** Allow us 90 days to fix before public disclosure
- **Recognition:** Public acknowledgment in our Security Hall of Fame

Full policy: [https://legal.logicnodes.ai/en/responsible-disclosure/](https://legal.logicnodes.ai/en/responsible-disclosure/)

Please review our full [Responsible Disclosure Policy](https://legal.logicnodes.ai/en/responsible-disclosure/) for scope and testing guidelines before conducting security research.

## Request Full Security Architecture

For detailed technical specifications including:
- Complete API endpoint documentation
- Detailed authentication flows and session management
- API key management and rotation procedures
- Secrets management implementation details
- Audit log schemas and access procedures
- Partner API capabilities
- Security best practices and recommendations

**Contact:** [kontakt@logicnodes.ai](mailto:kontakt@logicnodes.ai)

Our full Security Architecture document is available to qualified partners under NDA for security evaluation and compliance review.

## Contact & Support

### Security Team
**Email:** kontakt@logicnodes.ai  
**PGP Fingerprint:** Published at [https://legal.logicnodes.ai/en/pgp.txt](https://legal.logicnodes.ai/en/pgp.txt)  
**Response Time:** 24 hours for critical issues  
**Full Security Architecture:** Available under NDA or by request  

### Privacy & Compliance
**Email:** kontakt@logicnodes.ai  
**Response Time:** 5 business days  

### Sales & Partnerships
**Email:** kontakt@logicnodes.ai  
**Purpose:** DPA execution, custom agreements, security questionnaires  

### Technical Support
**Email:** kontakt@logicnodes.ai  
**Response Time:** 4 business hours  

## Document Information

**Version:** 1.3 (Public Overview)  
**Last Updated:** 2026-10-15  
**Status:** This page is informational and subject to change  


This document is intended for partner evaluation. The full Security Architecture is available upon request.
