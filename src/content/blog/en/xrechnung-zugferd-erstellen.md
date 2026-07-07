---
title: "XRechnung & ZUGFeRD: creating e-invoices the right way"
description: "How do XRechnung and ZUGFeRD differ, and how do you create e-invoices correctly? A practical guide to formats, required data and ERP support."
pubDate: 2026-07-07
author: "VertooERP"
tags: ["E-invoice","XRechnung","ZUGFeRD","Accounting","ERP"]
lang: en
---

An e-invoice is not a PDF you can print and file away – it is a structured data record that software processes directly. This is exactly where the terms XRechnung and ZUGFeRD tend to cause confusion. This guide explains, in practical terms, how the two formats differ, which data must be structured, and how an ERP system helps you create, validate and send e-invoices.

## What actually is an e-invoice?

A true e-invoice is an invoice whose contents are available in a structured, machine-readable format. A classic PDF – essentially a digital image of a paper document – explicitly does **not** qualify, even when it is sent by email. The difference: a human can read a PDF, but a machine has to laboriously "read out" the figures. In an e-invoice, by contrast, the invoice number, amount, tax rates and payment details are present as clearly labelled fields. The receiving software can post them without any manual data entry.

The key reference here is the European standard EN 16931, which defines a common semantic data model for electronic invoices. XRechnung and ZUGFeRD are two variants of this standard that are widely used in Germany.

## XRechnung vs. ZUGFeRD: what is the difference?

Both formats comply with the European standard, but take technically different routes.

### XRechnung – pure XML

XRechnung is a purely structured format: the entire invoice consists of an XML file. Without suitable viewing software this file is hard for humans to read, but ideal for machines. XRechnung is the established standard for exchanges with public-sector clients (B2G, business-to-government) – authorities in Germany reliably accept this format.

### ZUGFeRD – the hybrid format

ZUGFeRD is a **hybrid** format. It combines both worlds: what you see is an ordinary PDF, into which a structured XML file is additionally embedded. Humans therefore see and read the familiar PDF view, while software can simultaneously evaluate the embedded data automatically.

That makes ZUGFeRD convenient in the **B2B** (business-to-business) space: the recipient can view the invoice on screen as usual, regardless of whether their system already processes the data automatically. Sending works even when not every business partner is fully automated.

## Which data must be structured?

For an e-invoice to be standard-compliant, the core invoice details must be present as distinct data fields – not merely as text in the layout. This typically includes:

- **Supplier and recipient** with address and identification data
- **Invoice number and invoice date**
- **Line items** with quantity, unit price and description
- **Tax rates and tax amounts**, broken down by rate
- **Total amounts** (net, tax, gross)
- **Payment terms and bank details**

For invoices to public-sector clients, a routing identification number (Leitweg-ID) is often also required, so the invoice can be assigned to the correct government office.

## How does an ERP system help you create them?

Generating these structured formats by hand would be error-prone and time-consuming. In practice, software takes care of it. An ERP system brings three benefits together:

1. **Creating:** The invoice data is already held in the system in structured form. When you issue an invoice, the desired format – XRechnung or ZUGFeRD – is generated automatically, without you having to write XML by hand.
2. **Validating:** Before sending, the system can check that all mandatory fields are correctly filled and that the file conforms to the standard. This reduces rejections, for example from authorities.
3. **Sending and archiving:** The finished e-invoice is transmitted via the appropriate channel and stored in an audit-proof way.

Modular ERP systems cover this within accounting. In VertooERP, for example, the accounting module supports both XRechnung and ZUGFeRD, so both formats can be produced from the same invoice data.

## XRechnung or ZUGFeRD – which should you choose?

There is no one-size-fits-all answer, but a useful rule of thumb:

- **Public-sector clients (B2G):** XRechnung is the safe standard here.
- **Business customers (B2B):** ZUGFeRD is often convenient, because the embedded PDF stays instantly readable for humans.

What matters is what the recipient can process. When in doubt, a quick word with your business partner helps – or a system that handles both formats and outputs them flexibly.

## Conclusion

The core idea is simple: an e-invoice is a structured data record, not an image of an invoice. XRechnung provides pure XML and is established in dealings with authorities; ZUGFeRD combines PDF and XML and is practical in B2B. If you keep your invoice data clean in your system, you can create, validate and send both formats largely automatically.

---

*This article provides general information and does not constitute legal or tax advice. For your specific situation, please consult your tax advisor or a qualified professional.*
