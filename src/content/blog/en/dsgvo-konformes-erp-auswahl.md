---
title: "GDPR-Compliant ERP: What SMEs Need to Consider When Choosing"
description: "An ERP processes customer, employee, and financial data — plenty of personal data. Which data protection criteria really matter when selecting software, and what role self-hosting plays."
pubDate: 2026-06-18
author: "VertooERP"
tags: ["GDPR","Data Protection","ERP Selection","Self-Hosting"]
lang: en
---

An ERP is a company's data hub: customer contacts, personnel files, salaries, invoices. This also makes it a central point for data protection. When selecting a system, you should factor in the GDPR-relevant criteria from the outset — this article shows you which ones. It does not replace legal advice.

## Why an ERP Is Sensitive Under Data Protection Law

An ERP brings together an especially large volume of **personal data** — some of it also particularly worthy of protection (e.g. health data in the case of sick notes). This makes security (Art. 32 GDPR) and clear responsibilities a duty, not an optional extra.

## The Key Selection Criteria

### 1. Where Is the Data Stored?

The most important question first. With cloud ERPs, the provider processes your data — you need a **data processing agreement (DPA)** under Art. 28 GDPR, and with providers that have a US connection, issues such as standard contractual clauses and third-country transfers come into play.

With **self-hosting**, this whole set of concerns largely disappears: you operate the software yourself and remain the sole controller. The data never leaves your infrastructure. Read more in our article [Self-Hosting vs. Cloud ERP](/en/blog/self-hosting-vs-cloud-erp).

### 2. Roles and Permissions Concept

Not everyone should see everything. Look for a granular permissions system that restricts access to personal data to what is necessary (need-to-know principle). Salary data, for example, should only be accessible to a clearly defined group.

### 3. Secure Authentication

Modern systems rely on **session-based authentication with httpOnly cookies** instead of tokens in browser storage, ideally supplemented by single sign-on (SSO). This reduces attack surfaces.

### 4. Ability to Provide Information and Delete Data

Data subjects have rights (access, erasure). Your ERP should be able to export personal data and — where permissible — delete it, without you having to search the database manually.

### 5. Traceability

An audit trail (who changed what and when) helps not only with GoBD (German principles for the proper keeping and retention of records in electronic form), but also with demonstrating data protection-compliant processing.

## Checklist for the Selection

| Criterion | Question |
|---|---|
| Data location | Self-hosting possible? DPA required? |
| Permissions | Granular per user/module? |
| Authentication | httpOnly sessions, SSO? |
| Data subject rights | Data export & deletion built in? |
| Audit trail | Changes logged? |

## How VertooERP Implements This

[VertooERP](/en/) is designed for GDPR compliance: self-hosting (full data sovereignty), a four-tier role system with module-specific permissions, session-based authentication with optional Keycloak SSO, a GDPR data subject access report, and immutable audit trails. Because you host it yourself, you remain the sole controller.

## Conclusion

GDPR compliance in an ERP is not a single feature, but an interplay of data location, permissions concept, secure authentication, and data subject rights. Self-hosting considerably simplifies the legal situation, because no processing by third parties is required. Review the criteria against the checklist — and consult your data protection officer for your specific case.
