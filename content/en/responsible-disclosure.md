---
layout: legal
title: Responsible Disclosure Policy
last_updated: 2026-06-17
lang: en
lang_equivalent: /da/ansvarlig-offentliggorelse/
---

# LogicNodes — Responsible Disclosure Policy

**Effective Date:** November 3, 2025

<p class="last-updated">Last Updated: {{ page.last_updated | date: "%B %-d, %Y" }}</p>

---

## 1. Introduction

LogicNodes is committed to protecting the security and privacy of our partners and their users. We welcome responsible disclosure of security vulnerabilities from the security research community.

This policy defines what researchers may test, how to report findings, and how LogicNodes will respond. By submitting a report, you agree to the terms of this policy.

---

## 2. Scope

### 2.1 In-Scope Systems

The following systems are authorized for security testing:

| System | Target |
|--------|--------|
| Web Application | https://app.logicnodes.ai |
| API | https://api.logicnodes.ai/api/v1/* |
| Staging (on request) | https://staging.logicnodes.ai |
| Demo accounts | Request via kontakt@logicnodes.ai |

### 2.2 Out-of-Scope Systems

The following are **not authorized** for testing:

- Third-party services (Supabase, AWS, Mailgun — report directly to them)
- Physical security (offices, data centers)
- Social engineering (phishing, vishing, pretexting)
- Denial of Service (DoS/DDoS)
- Spam or bulk email testing
- Other customers' accounts or data

---

## 3. Vulnerability Classification

### 3.1 Critical

- Authentication bypass — access systems without valid credentials
- Cross-tenant data leak — access another organization's data
- Remote Code Execution (RCE)
- SQL injection with data access or modification
- Exposure of API keys, signing secrets, or vault secrets

### 3.2 High

- Cross-Site Scripting (XSS) — reflected, stored, or DOM-based
- Cross-Site Request Forgery (CSRF) on authenticated actions
- Insecure Direct Object References (IDOR) bypassing authorization
- Server-Side Request Forgery (SSRF)
- XML External Entity injection (XXE)

### 3.3 Medium

- Privilege escalation (e.g., member → admin)
- Sensitive information disclosure (stack traces, internal config)
- Weak cryptography or insufficient key lengths
- Session fixation or insecure session storage
- Subdomain takeover

### 3.4 Low

- Missing security headers (HSTS, CSP, X-Frame-Options)
- Clickjacking
- Open redirects
- Verbose error messages exposing software versions or paths
- Mixed content or insecure cookies

### 3.5 Out-of-Scope Vulnerability Types

The following will not be accepted as valid reports:

- Denial of Service (DoS/DDoS)
- Brute force attacks
- Social engineering
- Physical attacks
- SPF/DKIM/DMARC misconfigurations (unless they lead to account compromise)
- Rate limiting absence (unless it enables DoS or brute force)
- Software version disclosure in headers (informational only)

---

## 4. Testing Rules

### 4.1 You must

- Test only on accounts you own or have explicit permission to test
- Use test/demo accounts (available on request via kontakt@logicnodes.ai)
- Limit testing to non-destructive methods
- Respect rate limits
- Stop testing immediately if you encounter real user data
- Report findings within 24 hours of discovery

### 4.2 You must not

- Access, modify, or delete other users' data
- Perform DoS/DDoS attacks or load testing
- Use automated scanners without prior approval
- Exploit vulnerabilities beyond proof-of-concept
- Publicly disclose vulnerabilities before the 90-day embargo expires
- Demand payment or issue ransom for a disclosure

---

## 5. Reporting a Vulnerability

### 5.1 Contact

| Channel | Details |
|---------|---------|
| Email | kontakt@logicnodes.ai |
| PGP encryption (optional) | [/en/pgp](/en/pgp) |
| Acknowledgment | Within 24 hours |
| Initial assessment | Within 72 hours |

PGP encryption is optional. Plain email is acceptable.

### 5.2 Report Format

**Required:**

1. Vulnerability type (e.g., XSS, authorization bypass)
2. Affected system or endpoint
3. Severity assessment (your view: Critical / High / Medium / Low)
4. Steps to reproduce (numbered, detailed)
5. Proof of concept (screenshots, HTTP requests, or sample code)

**Optional:**

6. Impact assessment
7. Suggested remediation
8. Your name or handle (if you want credit)
9. Preferred disclosure timeline

### 5.3 Anonymous Reporting

Use ProtonMail or Tutanota for anonymous submission. Indicate in your report if you wish to remain anonymous and we will not publish your identity.

---

## 6. Response Process

### 6.1 Timeline

| Milestone | Target |
|-----------|--------|
| Acknowledgment | Within 24 hours |
| Severity assessment & validation | Within 72 hours |
| Remediation (Critical) | Within 24 hours of confirmation |
| Remediation (High) | Within 7 days of confirmation |
| Remediation (Medium) | Within 30 days |
| Remediation (Low) | Within 90 days |
| Public disclosure | After remediation, by mutual agreement |

### 6.2 Severity & Remediation Targets

| Severity | Example | Fix Target |
|----------|---------|------------|
| Critical (P0) | RCE, auth bypass, cross-tenant leak | 24 hours |
| High (P1) | Stored XSS, IDOR, SSRF | 7 days |
| Medium (P2) | Reflected XSS, session issues | 30 days |
| Low (P3) | Missing headers, verbose errors | 90 days |
| Informational | Version disclosure | Backlog |

### 6.3 Communication

During investigation we will provide weekly progress updates on Critical and High findings. After remediation we will notify you, offer an optional re-test window, and coordinate public disclosure.

**Standard embargo:** 90 days from initial report.

- **Early disclosure:** If the fix is deployed within 30 days, we may agree to earlier coordinated disclosure.
- **Extended embargo:** For complex architectural issues we may request up to 180 days (with researcher consent).
- **Researcher-initiated disclosure:** If LogicNodes has not remediated within 90 days, the researcher may disclose publicly. We request 7 days' notice to warn affected parties.

---

## 7. Recognition & Rewards

### 7.1 Hall of Fame

Researchers who report valid, in-scope vulnerabilities are listed below (with permission). We publish name or handle, severity, and month/year — never exploit details.

To opt out, indicate in your report that you prefer to remain anonymous.

| Researcher | Handle | Severity | Month |
|------------|--------|----------|-------|
| — | — | — | — |

*No reports have been received yet. Be the first.*

### 7.2 Bug Bounty Program

**Current status:** No bug bounty program. Planned launch: **Q2 2027**, subject to revenue milestones.

**Planned structure:**
- Platform: HackerOne or Bugcrowd
- Rewards: $500–$5,000 depending on severity

**Until launch, we offer:**
- Public acknowledgment in the Hall of Fame (with permission)
- Direct communication with the engineering team
- Priority handling for severe reports

For exceptional findings (0-day, Critical severity), contact kontakt@logicnodes.ai to discuss recognition.

---

## 8. Safe Harbor

LogicNodes will not initiate legal action against researchers who:

1. Comply with this policy (testing rules, disclosure timeline)
2. Make a good-faith effort to avoid harm (no data theft, DoS, privacy violations)
3. Report vulnerabilities promptly (within 24 hours of discovery)
4. Do not publicly disclose before the 90-day embargo or mutual agreement

**What safe harbor covers:**
- Accessing in-scope systems for testing purposes
- Creating test accounts for vulnerability research
- Viewing your own data or publicly accessible data

**What safe harbor does not cover:**
- Accessing other users' data (even if technically possible)
- Causing damage or disruption (DoS, data deletion)
- Violating third-party terms of service (Supabase, AWS)
- Using vulnerabilities for personal gain

This safe harbor does not grant permission to violate third-party terms of service. You are responsible for compliance with all applicable laws.

---

## 9. CVE Assignment

For vulnerabilities meeting CVE criteria, LogicNodes will request a CVE via MITRE or GitHub Security Advisories. CVEs will credit the reporter (with permission) and be accompanied by a published advisory.

---

## 10. Excluded Parties

The following are not eligible to participate:

- LogicNodes employees, contractors, or immediate family members
- Individuals in countries subject to EU or U.S. sanctions
- Minors under 18 years old (without verified parental consent)

---

## 11. Known Limitations

| Item | Status |
|------|--------|
| Bug bounty program | Not yet active — planned Q2 2027 |
| SOC 2 certification | In progress — targeted 2026/2027 |
| Forced logout | Not yet available — sessions expire after 1 hour |

---

## 12. Frequently Asked Questions

**Do you have a bug bounty program?**
Not yet. Planned for Q2 2027 on HackerOne or Bugcrowd. Currently we offer public acknowledgment.

**Can I use automated scanners?**
Request permission first at kontakt@logicnodes.ai. Scanners may trigger rate limits or DoS protections.

**Can I test on production systems?**
Yes, but only on your own accounts. Request test accounts via kontakt@logicnodes.ai for safer testing.

**Can I disclose before 90 days?**
Only with mutual agreement. We prefer coordinated disclosure.

**Is subdomain takeover in scope?**
Yes, if you can demonstrate impact (e.g., phishing, cookie theft).

**Are third-party dependencies in scope?**
Yes, if the vulnerability affects LogicNodes. Report to us and to the upstream vendor.

**What if my report is a duplicate?**
We will notify you. Duplicates receive acknowledgment but not additional Hall of Fame credit.

**When will bug bounty launch?**
Estimated Q2 2027, subject to revenue milestones.

---

## 13. Contact

| Purpose | Contact |
|---------|---------|
| Security reports | kontakt@logicnodes.ai |
| PGP key | [/en/pgp](/en/pgp) |
| Safe harbor / legal questions | kontakt@logicnodes.ai |
| General inquiries | kontakt@logicnodes.ai |

Response time: within 24 hours for security reports.

---

## 14. Policy Updates

LogicNodes may update this policy at any time. Material changes will be announced via blog post and email to past reporters. Minor changes are reflected in the "Last Updated" date. Policy changes take effect immediately upon posting. Existing reports are governed by the policy version in effect at the time of submission.

---


LogicNodes ApS · Sletvej 2D, 8310 Tranbjerg, Denmark · CVR: DK45318362
