---
layout: legal
title: Data Retention & Deletion
lang: en
lang_equivalent: /da/data-retention
last_updated: 2026-06-25
---

# Data Retention & Deletion

<p class="last-updated">Last Updated: {{ page.last_updated | date: "%B %-d, %Y" }}</p>

## 1. Overview

LogicNodes is built on the principle of data minimization. We only keep data for as long as it is needed to provide the service — and we make it easy to export or delete your data at any time.

Most operational data is deleted automatically on a daily schedule. Account data and certain legally required records are retained only for as long as necessary and cannot be deleted earlier for the reasons explained below.

---

## 2. Retention Periods

| Data Type | Default Retention | Configurable? | Deletion Method |
|---|---|---|---|
| Agent run history (inputs, outputs, execution logs) | 90 days | Yes (1–90 days, org-configurable) | Automatic daily cleanup |
| Voice transcriptions | 90 days | Yes (1–90 days) | Automatic daily cleanup |
| Audio recordings (voice feature) | 90 days | Yes (1–90 days) | Automatic daily cleanup |
| Voiceprints (biometric data) | Until deletion request | No | Via platform UI (chat page), or by contacting kontakt@logicnodes.ai |
| User profile (email, name, organization) | Until account deletion | No | Via account settings |
| Encrypted secrets (API keys) | Until deletion | No | Via platform UI |
| Audit logs | 5 years | No | Automatic after 5 years |
| Billing and transaction records | 5 years from end of financial year | No | Per Danish Bookkeeping Act (Bogføringsloven) |

---

## 3. Automatic Deletion

The daily cleanup job runs every night at **02:00 UTC**. It removes all operational data — agent runs, voice transcriptions, and audio recordings — that has reached the end of its configured retention period.

This process is fully automated and requires no action on your part.

**Configuring retention periods**

Organization administrators can shorten the retention period for operational data down to as little as 1 day. To change your organization's retention period, go to **Organization Settings > Data Retention** in the platform dashboard. The setting applies to all new data from the moment it is saved; existing data already scheduled for deletion is not affected.

---

## 4. How to Export Your Data

**Agent run history**

Export individual runs or bulk history via the platform dashboard. Data is available in JSON format.

**Account data**

Your profile information (email, name, organization) can be viewed and downloaded from your account settings.

**Full data export**

To request a complete export of all data associated with your account or organization, send a request to kontakt@logicnodes.ai. We will deliver your data in JSON format within 30 days.

---

## 5. How to Delete Your Data

**Individual agent runs**

Delete specific runs directly from the platform dashboard. Deletion from production is immediate.

**Entire account**

Go to **Account Settings > Delete Account**, or send a deletion request to kontakt@logicnodes.ai. All data associated with your account is deleted immediately from production systems.

**Organization deletion**

Organization administrators can delete the entire organization and all associated data via **Organization Settings > Delete Organization**, or by contacting us at kontakt@logicnodes.ai. This is a permanent, irreversible action.

**Voiceprints**

Voiceprints can be deleted directly from the platform UI. Navigate to the chat page — a deletion option is available there. Alternatively, you can request deletion by contacting kontakt@logicnodes.ai. Deletion is permanent and cannot be undone.

---

## 6. What Cannot Be Deleted on Request

Three categories of data are retained regardless of deletion requests:

**Audit logs (5 years)**

Audit logs are retained for **5 years** from the date of the relevant event. They are permanently deleted at the end of the 5-year period.

The legal basis is Art. 17(3)(e) GDPR (establishment, exercise, or defence of legal claims) and Art. 6(1)(f) GDPR (legitimate interests in security and compliance).

**Billing and transaction records (5 years)**

Invoices, payment records, and transaction history must be kept for five years from the end of the financial year in which they were created. This is a legal obligation under the Danish Bookkeeping Act (Bogføringsloven). Legal basis: GDPR Article 6(1)(c) — compliance with a legal obligation.

---

## 7. Data in Backups

When data is deleted from production, it is removed immediately via a synchronous cascading delete. However, encrypted backups are retained for up to 30 days before being purged.

During this 30-day window, deleted data exists only within encrypted backup files. It is not accessible to us or to you through the platform. After 30 days, it is permanently purged from backups as well.

If you require written confirmation of deletion (for example for a GDPR erasure request), contact kontakt@logicnodes.ai.

---

## 8. Contact

For any questions about data retention, export, or deletion, contact us at:

**Email:** kontakt@logicnodes.ai
**Response time:** Within 5 business days.

**LogicNodes ApS**
Sletvej 2D
8310 Tranbjerg
Denmark
CVR: DK45318362

---

