import type { GlossarTerm } from "./glossar";

// EN-Übersetzung (via Workflow, 2026-06-18). Struktur gespiegelt aus der DE-Quelle.
export const glossarEn: GlossarTerm[] = [
  {
    "slug": "audit-trail",
    "term": "Audit Trail",
    "definition": "An audit trail is the complete, tamper-proof logging of changes made to records — who changed what and when. In accounting, it is a prerequisite for GoBD (German tax-compliance principles) conformity."
  },
  {
    "slug": "crm",
    "term": "CRM (Customer Relationship Management)",
    "definition": "CRM refers to the systematic management of customer relationships — contact details, communication history, quotes and orders in one place. The goal is a complete view of each customer across all departments."
  },
  {
    "slug": "datev-export",
    "term": "DATEV Export",
    "definition": "A DATEV export provides accounting data in a format that your tax adviser can import directly into the DATEV software. In Germany, it is the de facto standard for handing over financial data to tax advisers."
  },
  {
    "slug": "dropshipping",
    "term": "Dropshipping",
    "definition": "Dropshipping is a retail model in which the merchant does not hold stock themselves but forwards orders to a supplier who ships directly to the end customer. It requires close synchronisation of stock levels and orders between the merchant's and the supplier's systems."
  },
  {
    "slug": "dsgvo",
    "term": "GDPR",
    "definition": "The General Data Protection Regulation (GDPR) is the EU-wide regulation for the protection of personal data. Among other things, it governs the legal bases for processing, data-subject rights (access, erasure) and obligations such as the data processing agreement (DPA)."
  },
  {
    "slug": "ean",
    "term": "EAN / GTIN",
    "definition": "The EAN (European Article Number, now GTIN) is a globally unique article number encoded in the barcode. It serves as a unique key for matching a product across different systems and sales channels."
  },
  {
    "slug": "erp",
    "term": "ERP (Enterprise Resource Planning)",
    "definition": "An ERP system is software that brings a company's core business processes — such as inventory management, accounting, purchasing, HR and sales — together on a shared data foundation. Instead of isolated point solutions, all departments work on the same data."
  },
  {
    "slug": "gobd",
    "term": "GoBD",
    "definition": "The GoBD are the German \"Principles for the proper keeping and retention of books, records and documents in electronic form and for data access\". They govern how tax-relevant data must be captured, stored in a tamper-proof manner and retained in digital form."
  },
  {
    "slug": "keycloak",
    "term": "Keycloak",
    "definition": "Keycloak is an open-source solution for identity and access management. It enables Single Sign-On (SSO), allowing employees to log in to multiple applications with a single central company account."
  },
  {
    "slug": "multi-mandant",
    "term": "Multi-Tenancy (Tenant Capability)",
    "definition": "Multi-tenancy means that several legally separate entities — such as the subsidiaries of a group — are managed within one system while their data remains cleanly separated from one another."
  },
  {
    "slug": "multi-standort",
    "term": "Multi-Site",
    "definition": "Multi-site describes a system's ability to represent a company with several locations (branches, warehouses). The data belongs to the same company but can be filtered and controlled per location."
  },
  {
    "slug": "on-premises",
    "term": "On-Premises",
    "definition": "On-premises refers to running software on the user's own infrastructure rather than in the provider's cloud. The term \"self-hosting\" is often used as a synonym. The advantage is full control over your own data."
  },
  {
    "slug": "pwa",
    "term": "PWA (Progressive Web App)",
    "definition": "A Progressive Web App is a website that behaves like a native app: it can be installed on the device, works across all platforms and requires no app store. Updates are applied automatically over the web."
  },
  {
    "slug": "saas",
    "term": "SaaS (Software as a Service)",
    "definition": "SaaS is a delivery model in which software is used as a service from the provider's cloud and is usually billed on a usage basis. The opposite model is licensed software that the customer runs themselves (on-premises)."
  },
  {
    "slug": "self-hosting",
    "term": "Self-Hosting",
    "definition": "Self-hosting means that a company runs software on its own or self-rented infrastructure instead of obtaining it from a provider's cloud. The data remains entirely within the company's area of responsibility."
  },
  {
    "slug": "skr03",
    "term": "SKR03",
    "definition": "SKR03 is a standard chart of accounts widely used in Germany that organises accounting accounts according to the process-structure principle. It forms the basis for structured, audit-proof financial accounting."
  },
  {
    "slug": "sso",
    "term": "SSO (Single Sign-On)",
    "definition": "Single Sign-On allows you to log in once and thereby gain access to multiple applications without having to log in again. This increases convenience and security, as fewer passwords need to be managed."
  },
  {
    "slug": "stueckliste",
    "term": "Bill of Materials (BOM)",
    "definition": "A bill of materials (BOM) lists all the components that make up a product or bundle. When a sale is made, the individual parts it contains can be deducted from stock automatically."
  },
  {
    "slug": "warenwirtschaft",
    "term": "Inventory Management",
    "definition": "An inventory management system controls a company's flow of goods and materials — from purchasing and warehousing through stock control to order processing and shipping. It forms the backbone of retail and logistics operations."
  },
  {
    "slug": "xrechnung-zugferd",
    "term": "XRechnung / ZUGFeRD",
    "definition": "XRechnung and ZUGFeRD are formats for electronic invoices in Germany. XRechnung is a purely structured XML format, while ZUGFeRD is a hybrid of PDF and embedded XML. Since 2025, domestic B2B businesses must be able to receive e-invoices."
  },
  {
    "slug": "wareneingang",
    "term": "Goods Receipt",
    "definition": "Goods receipt is the recording and inspection of incoming deliveries in the warehouse. Stock is increased in the books, ideally with a reference to the purchase order and a traceable status."
  },
  {
    "slug": "kommissionierung",
    "term": "Order Picking",
    "definition": "Order picking is the process of gathering the items of an order from stock for subsequent dispatch. Good ERP systems guide picking efficiently through warehouse zones and bins."
  },
  {
    "slug": "inventur",
    "term": "Stocktaking",
    "definition": "Stocktaking is the counting and valuation of actual stock on a given date. It reconciles book stock with physical stock and is a basis for the annual financial statements."
  },
  {
    "slug": "fulfillment",
    "term": "Fulfillment",
    "definition": "Fulfillment covers every step after the order – picking, packing, shipping and returns handling. In commerce it largely determines delivery time and customer satisfaction."
  },
  {
    "slug": "multichannel",
    "term": "Multichannel",
    "definition": "Multichannel means selling across several channels at once, such as your own shop, marketplaces and brick-and-mortar retail. The central challenge is keeping stock and prices in sync across all channels."
  },
  {
    "slug": "meldebestand",
    "term": "Reorder Point",
    "definition": "The reorder point (minimum stock level) is the quantity below which a reorder should be triggered. It prevents stockouts without tying up unnecessary capital in the warehouse."
  },
  {
    "slug": "skonto",
    "term": "Cash Discount (Skonto)",
    "definition": "A cash discount (Skonto) is a percentage deducted from the invoice amount that a supplier grants for fast payment within a set period. In accounting, it is recorded separately."
  },
  {
    "slug": "offene-posten",
    "term": "Open Items (OP)",
    "definition": "Open items are invoices that have not yet been settled – on the accounts-receivable (customer) or accounts-payable (supplier) side. The open-items list shows which amounts are still outstanding."
  },
  {
    "slug": "bwa",
    "term": "BWA (Business Analysis)",
    "definition": "A BWA (betriebswirtschaftliche Auswertung) contrasts a period’s income and expenses and shows the provisional result. It supports ongoing management but does not replace annual financial statements."
  },
  {
    "slug": "mahnwesen",
    "term": "Dunning",
    "definition": "Dunning is the structured process of reminding customers about overdue invoices, often in several stages. An ERP can propose dunning notices automatically based on open items."
  },
  {
    "slug": "seat",
    "term": "Seat",
    "definition": "A seat is a user licence, i.e. access to the system for one person. Many ERP plans include a set number of seats; additional users are billed separately."
  },
  {
    "slug": "api",
    "term": "API",
    "definition": "An API (application programming interface) lets systems exchange data and call functions in a structured way. Via APIs, an ERP can connect to shops, shipping providers or other software."
  },
  {
    "slug": "webhook",
    "term": "Webhook",
    "definition": "A webhook automatically notifies an external system as soon as a specific event occurs – such as a new order. Unlike regular polling, data is transmitted in an event-driven way."
  },
  {
    "slug": "e-rechnung",
    "term": "E-Invoice",
    "definition": "An e-invoice is a structured electronic invoice in a machine-readable format – not merely a PDF image. Common formats in Germany are XRechnung and ZUGFeRD."
  },
  {
    "slug": "ust-voranmeldung",
    "term": "Advance VAT Return",
    "definition": "With the advance VAT return, businesses regularly report collected and paid VAT to the tax office. The amount due is the difference between output VAT and input VAT."
  },
  {
    "slug": "cloud-erp",
    "term": "Cloud ERP",
    "definition": "A cloud ERP is operated by a provider and used over the internet as a service (SaaS). The counter-model is self-hosting or on-premises, where the customer runs the software themselves."
  },
  {
    "slug": "digitale-souveraenitaet",
    "term": "Digital Sovereignty",
    "definition": "Digital sovereignty is the ability of a company (or state) to decide over its own data, systems and digital dependencies. Building blocks include data sovereignty, open standards and export formats, and freedom of choice in the operating model – such as self-hosting instead of forced cloud."
  },
  {
    "slug": "digitale-resilienz",
    "term": "Digital Resilience",
    "definition": "Digital resilience is a company’s ability to keep operating through digital disruptions – such as outages, provider changes or altered contract terms. It involves managed dependencies, backups under your own control and tested exit strategies."
  },
  {
    "slug": "vendor-lock-in",
    "term": "Vendor Lock-in",
    "definition": "Vendor lock-in describes dependency on a provider that makes switching expensive or practically impossible – for example through proprietary formats or missing exports. Open standards and export formats (e.g. CSV, DATEV format, XRechnung) reduce this risk."
  },
  {
    "slug": "nis2",
    "term": "NIS2",
    "definition": "NIS2 is an EU directive on network and information security that extends cybersecurity and reporting obligations to considerably more companies and sectors than its predecessor. Whether and how a company is affected depends on sector and size – the respective national implementation is decisive."
  }
];
