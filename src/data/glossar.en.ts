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
  }
];
