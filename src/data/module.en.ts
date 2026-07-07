import type { Modul } from "./module";

// EN-Übersetzung (via Workflow, 2026-06-18). Struktur gespiegelt aus der DE-Quelle.
export const moduleEn: Modul[] = [
  {
    "slug": "warenwirtschaft",
    "name": "Inventory Management",
    "icon": "package",
    "metaTitle": "Inventory Management Software for Retail – VertooERP",
    "metaDescription": "Inventory management software from VertooERP: one product per EAN, multi-supplier, stock control with audit trail, goods receipt, orders and shipment tracking.",
    "hero": {
      "eyebrow": "Module: Inventory Management",
      "headline": "Inventory management software with a single product catalogue for all suppliers",
      "subhead": "One entry per EAN, multiple suppliers, end-to-end stock control with an audit trail – from goods receipt through picking to dispatch with carrier tracking."
    },
    "intro": "Inventory management refers to the recording and control of all of a company's goods movements – from procurement through storage and stock control to order and dispatch. Inventory management software maps these processes in a single system, so that master data, stock levels and documents are maintained in one place. VertooERP relies on a unified product catalogue: each product exists exactly once per EAN and can be assigned to multiple suppliers. This keeps stock levels, purchase and sales prices, as well as movements, consistent, even when the same product is sourced from different suppliers.",
    "painpoints": {
      "intro": "You may recognise these situations",
      "items": [
        {
          "icon": "package-search",
          "title": "One product, multiple records",
          "description": "The same product is held multiple times in the system, once per supplier. Stock levels and prices diverge, and no one knows which record is correct."
        },
        {
          "icon": "history",
          "title": "Stock movements without evidence",
          "description": "Additions and withdrawals are only partially documented. When discrepancies arise, it cannot be traced when and by whom a stock level was changed."
        },
        {
          "icon": "package-x",
          "title": "Goods missing despite reported stock",
          "description": "Orders are confirmed even though the actual stock is insufficient. Without a minimum-stock alert, a reorder is triggered too late."
        },
        {
          "icon": "truck",
          "title": "Shipment status spread across many portals",
          "description": "Tracking numbers sit in the interfaces of the individual carriers. To check the status of a delivery, several systems have to be opened."
        }
      ]
    },
    "features": {
      "intro": "The following functions map the flow of goods from master data maintenance to returns in a single system.",
      "items": [
        {
          "icon": "package",
          "name": "Unified product catalogue",
          "description": "One product per EAN, which can be linked to multiple suppliers (multi-supplier). This keeps stock, prices and movements unambiguous per item."
        },
        {
          "icon": "database",
          "name": "Master data",
          "description": "Categories, suppliers and products with SKU, EAN, purchase and sales price, VAT rate, weight, dimensions and storage location, all maintained in one place."
        },
        {
          "icon": "boxes",
          "name": "Stock control",
          "description": "Addition, withdrawal and stocktaking with a complete audit trail, Excel import/export, barcode scanner, minimum-stock alert and multi-location management."
        },
        {
          "icon": "clipboard-check",
          "name": "Goods receipt",
          "description": "Recording in the Draft, Booked and Cancelled statuses – optionally linked to a purchase order. Incorrect entries can be corrected by reversal."
        },
        {
          "icon": "shopping-cart",
          "name": "Purchasing",
          "description": "Purchase orders to suppliers with their own number range. Goods receipts can be linked directly to the relevant purchase order."
        },
        {
          "icon": "list-checks",
          "name": "Orders and picking",
          "description": "Orders pass through the statuses draft, confirmed, processing, shipped and delivered. During picking, stock is deducted automatically."
        },
        {
          "icon": "send",
          "name": "Dispatch and returns",
          "description": "Carrier tracking via DHL, DPD, GLS, Hermes and UPS is stored on the order. Returned items are recorded as returns and accounted for in the stock flow."
        },
        {
          "icon": "chart-column",
          "name": "Bundles and KPI dashboard",
          "description": "Maintain assembled items as a bundle or bill of materials (BOM). A dashboard with 10 KPI cards consolidates key figures."
        }
      ]
    },
    "faq": [
      {
        "q": "What does \"one product per EAN\" mean in the inventory management software?",
        "a": "Each product exists in the catalogue exactly once, identified by its EAN. This single entry can be assigned to multiple suppliers (multi-supplier). This means there are no duplicate records of the same item, and stock, prices and movements remain unambiguous per product."
      },
      {
        "q": "How are stock movements documented?",
        "a": "Additions, withdrawals and stocktaking are recorded with a complete audit trail. Every movement is traceable, so that in the event of discrepancies it can be reconstructed when a stock level was changed. In addition, Excel import and export as well as recording via barcode scanner are available."
      },
      {
        "q": "Does the module support multiple locations?",
        "a": "Yes. Stock control is multi-location capable, so that stock is held separately per location. A minimum-stock alert flags items whose stock falls below a defined threshold."
      },
      {
        "q": "Which shipping providers are supported for tracking?",
        "a": "The dispatch module supports carrier tracking for DHL, DPD, GLS, Hermes and UPS. Shipment tracking is stored directly on the respective order."
      },
      {
        "q": "Which statuses does an order pass through?",
        "a": "An order passes through the statuses draft, confirmed, processing, shipped and delivered. During picking, the associated stock is deducted automatically."
      },
      {
        "q": "Can assembled items be represented?",
        "a": "Yes. Using bundles or bills of materials (BOM), several components can be combined into a single sales unit. This way, an item made up of several products is maintained as a single entry."
      }
    ],
    "cta": {
      "headline": "Explore inventory management in a single system",
      "text": "See in a demo how VertooERP brings together product catalogue, stock control, orders and dispatch with one product per EAN in a single system."
    }
  },
  {
    "slug": "buchhaltung",
    "name": "Accounting",
    "icon": "receipt-text",
    "metaTitle": "Accounting Software for SMEs – VertooERP",
    "metaDescription": "Accounting software for SMEs: receipts, open items, P&L/BWA, DATEV export, advance VAT return and dunning – GoBD-compliant in VertooERP.",
    "hero": {
      "eyebrow": "Module: Accounting",
      "headline": "Accounting software for SMEs – integrated into your ERP",
      "subhead": "From the invoice through open items and the cash book to P&L/BWA and DATEV export: the accounting module maps your ongoing accounting in a GoBD-compliant way within a single application."
    },
    "intro": "Accounting refers to the systematic, complete recording of all of a company's business transactions in receipts and accounts. For small and medium-sized enterprises, accounting software for SMEs maps these processes digitally – from creating receipts through open items and the cash book to evaluation as a P&L or BWA. The VertooERP accounting module works with the SKR03 chart of accounts, exports to DATEV and is designed to be GoBD-compliant (GoBD are German tax-compliance principles), so that receipts are stored in an immutable form and changes are logged in the audit trail.",
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "receipt-text",
          "title": "Receipts across multiple tools",
          "description": "Invoices in a word processor, open items in Excel, cash receipts in a folder – with no consistent receipt number and no link to the customer record."
        },
        {
          "icon": "clock",
          "title": "Unclear open items",
          "description": "Which invoice is overdue, which is almost due? Without an up-to-date open-items list with an ageing structure, you lack an overview of outstanding payments."
        },
        {
          "icon": "send",
          "title": "Payment reminders by hand",
          "description": "Tracking due invoices and contacting customers individually takes time – and is easily forgotten or sent twice in day-to-day business."
        },
        {
          "icon": "shield-check",
          "title": "Doubts about GoBD compliance",
          "description": "Are receipts immutable? Is every change traceable? Without an audit trail and immutable receipts, uncertainty towards the tax office remains."
        }
      ]
    },
    "features": {
      "intro": "The accounting module covers the ongoing accounting of small and medium-sized enterprises in a single application – from creating receipts through to evaluation and export to the tax adviser or tax office.",
      "items": [
        {
          "icon": "receipt-text",
          "name": "Receipts",
          "description": "Invoices, quotations, credit notes and cancellations with a service period. The receipt number is assigned dynamically, and the due date is derived from the customer's payment terms."
        },
        {
          "icon": "list-checks",
          "name": "Open items (open-items list)",
          "description": "All unpaid receipts in a single list with an ageing structure (ageing buckets). Overdue items are highlighted in colour, so that the need for action is immediately apparent."
        },
        {
          "icon": "wallet",
          "name": "Cash book",
          "description": "Cash receipts and cash payments with a running balance. A monthly filter narrows the entries down to the desired period."
        },
        {
          "icon": "chart-column",
          "name": "P&L / BWA",
          "description": "Monthly overview of income and expenses as a bar chart with the key figures – for a quick look at the economic situation."
        },
        {
          "icon": "calculator",
          "name": "SKR03 account assignment",
          "description": "Receipts are assigned to the SKR03 chart of accounts with 47 accounts. This creates the basis for a clean DATEV export to the tax adviser."
        },
        {
          "icon": "bell",
          "name": "Payment reminders",
          "description": "Due invoices trigger automatic reminder emails. A cooldown of 7 days prevents a customer from being contacted several times in quick succession."
        },
        {
          "icon": "download",
          "name": "DATEV export & advance VAT return",
          "description": "Booking data can be exported to DATEV; supplemented by the advance VAT return – for handover to the tax adviser and tax office."
        },
        {
          "icon": "lock",
          "name": "GoBD-compliant",
          "description": "Receipts are stored in an immutable form, and every change is logged in the audit trail. With XRechnung, ZUGFeRD, bank reconciliation and a three-stage dunning process, the module covers the formal requirements."
        }
      ]
    },
    "faq": [
      {
        "q": "What is accounting software for SMEs?",
        "a": "Accounting software for SMEs is an application that small and medium-sized enterprises use to keep their ongoing accounting digitally – that is, to create receipts, manage open items, keep the cash book and generate evaluations such as a P&L or BWA. In the VertooERP accounting module, these functions are bundled in a single piece of software together with account assignment to SKR03 and DATEV export."
      },
      {
        "q": "Is the accounting module GoBD-compliant?",
        "a": "The accounting module is designed to be GoBD-compliant: receipts are stored in an immutable form, and every change is logged in an audit trail. This is complemented by consistent receipt numbering as well as DATEV export. Full GoBD compliance additionally depends on your operational processes and does not replace tax advice."
      },
      {
        "q": "Does VertooERP support DATEV and the advance VAT return?",
        "a": "Yes. Booking data can be exported to DATEV and handed over to the tax adviser. The advance VAT return is available as a function. For account assignment, the module uses the SKR03 chart of accounts with 47 accounts."
      },
      {
        "q": "Which types of receipt can I create?",
        "a": "The module creates invoices, quotations, credit notes and cancellations, each with a service period. The receipt number is assigned dynamically, and the due date is derived automatically from the customer's stored payment terms."
      },
      {
        "q": "How do I keep track of outstanding invoices?",
        "a": "The open-items list shows all open items with an ageing structure (ageing buckets), with overdue amounts highlighted in colour. For due invoices, the system sends automatic payment reminders with a cooldown of 7 days; in addition, a three-stage dunning process is available."
      },
      {
        "q": "Does the module support e-invoices such as XRechnung and ZUGFeRD?",
        "a": "Yes. The accounting module supports the e-invoice formats XRechnung and ZUGFeRD, which are increasingly mandatory in the B2B sector. Additionally, a bank reconciliation for assigning payments as well as the DATEV export are available."
      }
    ],
    "cta": {
      "headline": "Accounting and ERP in a single application",
      "text": "The accounting module is part of VertooERP and can be activated individually. See how receipts, open items, the cash book and DATEV export work together in your company."
    }
  },
  {
    "slug": "lagerverwaltung",
    "name": "Warehouse Management",
    "icon": "warehouse",
    "metaTitle": "Warehouse Management Software for Your ERP – VertooERP",
    "metaDescription": "Warehouse management software with storage-bin structure, transfers, stocktaking and a movement audit log. Standalone module for multi-site operations in VertooERP.",
    "hero": {
      "eyebrow": "Module: Warehouse Management",
      "headline": "Warehouse Management Software – every item in its place",
      "subhead": "Map your warehouses down to zone, aisle, rack and bin, post transfers and reconcile target and actual stock through stocktaking. Every movement is logged – across any number of sites."
    },
    "intro": "Warehouse management refers to the systematic recording and control of all stock and goods movements within one or more storage sites. To this end, warehouse management software digitally maps the physical structure of the warehouse, assigns products to specific storage bins and records every put-away and removal in a traceable manner. The warehouse management module of VertooERP is a standalone module that manages storage locations as a tree structure from zone through aisle and rack down to the individual bin, keeping the entire stock consistent across multiple sites.",
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "package-search",
          "title": "Nobody knows where the goods are",
          "description": "Stock may be correct on paper, but out in the warehouse the team searches aisle by aisle for the item. Without fixed storage bins, every picking operation costs time."
        },
        {
          "icon": "refresh-cw",
          "title": "Transfers bypass the software",
          "description": "Goods are moved between zones but not updated in the system. The posted stock and the actual storage location drift apart."
        },
        {
          "icon": "clipboard-list",
          "title": "Stocktaking remains a paper exercise",
          "description": "Counting is done on paper and discrepancies are entered manually. What was corrected and why can no longer be substantiated later on."
        },
        {
          "icon": "boxes",
          "title": "No overview of capacity utilisation",
          "description": "Whether a zone is full or space remains free only becomes apparent when you enter the hall – not at a glance in the system."
        }
      ]
    },
    "features": {
      "intro": "The warehouse management module covers the entire journey of goods within the warehouse – from structure through posting to control:",
      "items": [
        {
          "icon": "warehouse",
          "name": "Storage locations as a tree structure",
          "description": "Map your warehouses hierarchically: zone, aisle, rack and bin in a self-referencing structure. This way every storage bin corresponds exactly to its physical location."
        },
        {
          "icon": "map-pin",
          "name": "Assign products to storage bins",
          "description": "Assign each product to one or more storage bins with a quantity. A primary toggle defines the main storage bin at which the item is preferentially kept."
        },
        {
          "icon": "route",
          "name": "Transfers with status history",
          "description": "Move goods between zones and follow the process from draft through confirmation to completion. Transfers that are no longer required can be cancelled."
        },
        {
          "icon": "history",
          "name": "Movements as an audit log",
          "description": "Every put-away, removal, transfer and stocktaking posting is logged without gaps. This keeps every stock change traceable and verifiable."
        },
        {
          "icon": "clipboard-check",
          "name": "Stocktaking with target/actual comparison",
          "description": "Count on a per-site basis and compare the counted actual stock against the target. From the discrepancies, the module automatically generates the appropriate correction posting."
        },
        {
          "icon": "chart-column",
          "name": "Overview with fill-level indicator",
          "description": "KPI cards summarise the key figures. A traffic-light bar per zone shows the fill level at a glance – from plenty of space to almost full."
        },
        {
          "icon": "building-2",
          "name": "Multi-site",
          "description": "Manage multiple storage sites in a single system. Stock, movements and stocktakes remain separated per site while staying centrally viewable."
        }
      ]
    },
    "faq": [
      {
        "q": "What is warehouse management software?",
        "a": "Warehouse management software records and controls stock and goods movements within a warehouse. It digitally maps the physical warehouse structure, assigns products to specific storage bins and logs every put-away and removal. In VertooERP, warehouse management is a standalone module with a storage-bin structure, transfers, stocktaking and a movement audit log."
      },
      {
        "q": "How detailed can the warehouse be mapped?",
        "a": "Storage locations are maintained as a self-referencing tree structure: zone, aisle, rack and bin. This way every storage bin corresponds exactly to its physical location, and products can be assigned precisely to individual bins."
      },
      {
        "q": "How does a transfer work?",
        "a": "A transfer moves goods between zones and passes through the statuses Draft, Confirmed and Completed. Transfers that are no longer required can be cancelled. Every step is recorded as a movement in the audit log."
      },
      {
        "q": "How does stocktaking work?",
        "a": "Stocktaking is carried out on a per-site basis: the counted actual stock is compared against the target stock. From the discrepancies identified, the module automatically generates a correction posting so that the system stock once again matches the actual warehouse stock."
      },
      {
        "q": "Does the module support multiple sites?",
        "a": "Yes. Warehouse management is designed for multi-site operations. Stock, movements and stocktakes are maintained separately per site and can at the same time be viewed centrally."
      },
      {
        "q": "Which movements are logged?",
        "a": "The movement audit log captures put-aways, removals, transfers and stocktaking postings. Every stock change is thereby traceable and verifiable without gaps."
      }
    ],
    "cta": {
      "headline": "Bring structure to your warehouse",
      "text": "See in a demo how, with VertooERP's warehouse management software, you map storage bins, post transfers and carry out stocktakes with automatic correction postings – across all sites."
    }
  },
  {
    "slug": "dropshipping",
    "name": "Dropshipping",
    "icon": "truck",
    "metaTitle": "Dropshipping Software for Retailers – VertooERP",
    "metaDescription": "Dropshipping software by VertooERP: connect suppliers via FTP/CSV or API, synchronise stock levels every 15 minutes and forward orders automatically.",
    "hero": {
      "eyebrow": "Module: Dropshipping",
      "headline": "Dropshipping Software: Suppliers, Stock and Orders in a Single System",
      "subhead": "Connect dropshipping suppliers via FTP/CSV or REST API, keep stock levels updated automatically and forward orders directly – without manual reconciliation between shop and supplier."
    },
    "intro": "Dropshipping is a retail model in which the retailer does not hold the goods in stock but forwards orders to a supplier who ships directly to the end customer. This requires close synchronisation of stock levels and orders between the retailer's and the supplier's systems. The Dropshipping module by VertooERP is a middleware that handles exactly this synchronisation: it imports products and stock levels from connected suppliers, keeps them up to date via a scheduler and automatically forwards incoming orders to the appropriate supplier. As dropshipping software, it connects supplier feeds, supplier APIs and your shop in a single end-to-end workflow.",
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "refresh-cw",
          "title": "Stock levels drift apart",
          "description": "Without automatic synchronisation, you sell items the supplier ran out of long ago – and end up maintaining stock levels manually from various sources."
        },
        {
          "icon": "webhook",
          "title": "Every supplier speaks a different language",
          "description": "One delivers a CSV feed via FTP, the next offers a REST API. Without a unified connection, every new supplier source becomes a special project."
        },
        {
          "icon": "send",
          "title": "Forwarding orders by hand",
          "description": "Incoming orders have to be transferred manually to the right supplier – error-prone, time-consuming and hard to trace."
        },
        {
          "icon": "search-check",
          "title": "No traceability during import",
          "description": "When prices or stock levels suddenly turn out to be wrong, there is no record of which import delivered which data and when."
        }
      ]
    },
    "features": {
      "intro": "The Dropshipping module bundles supplier connection, product import, stock synchronisation and order processing into a single middleware. All functions are based on configurable suppliers – from the data source through to price calculation.",
      "items": [
        {
          "icon": "users",
          "name": "Manage suppliers centrally",
          "description": "Set up suppliers with FTP or API configuration, CSV format, field mapping and price calculation. Passwords and API keys are stored encrypted."
        },
        {
          "icon": "webhook",
          "name": "Three API types out of the box",
          "description": "Supported connections are BigBuy (Bearer Token, taxonomies, variants, CDN images), DropXL (Basic Auth, paginated products, order API) and JTL-Wawi (Bearer Token, items, sales orders)."
        },
        {
          "icon": "download",
          "name": "Automated product import",
          "description": "Products are imported via FTP/CSV or REST API. The field mapping transfers the supplier data into your structure, and the price calculation applies your mark-ups automatically."
        },
        {
          "icon": "refresh-cw",
          "name": "Stock synchronisation every 15 minutes",
          "description": "A scheduler reconciles the stock levels of all connected API types every 15 minutes, so that availability in your shop and ERP stays up to date."
        },
        {
          "icon": "clipboard-list",
          "name": "Orders with status workflow",
          "description": "Orders pass through a defined status workflow, are optimised for the appropriate supplier and submitted via that supplier's order API."
        },
        {
          "icon": "truck",
          "name": "End-customer delivery via JTL-Wawi",
          "description": "For JTL-Wawi, sales orders are created with a configurable customer number and the end customer's delivery address, so that the supplier ships directly to your customer."
        },
        {
          "icon": "store",
          "name": "Shopware 6 integration",
          "description": "Products and stock levels are synchronised with Shopware 6 via OAuth2 – including as a batch sync for larger ranges."
        },
        {
          "icon": "history",
          "name": "Import logs as an audit trail",
          "description": "Every import is logged. The import logs form an audit trail that lets you trace which data was imported and when."
        }
      ]
    },
    "faq": [
      {
        "q": "What is a dropshipping middleware?",
        "a": "A dropshipping middleware is a software layer between your shop or ERP and the supplier systems. It imports products and stock levels from the suppliers, keeps them synchronised and forwards incoming orders to the respective supplier. The Dropshipping module by VertooERP performs exactly this intermediary role."
      },
      {
        "q": "Which supplier APIs does VertooERP support for dropshipping?",
        "a": "The module supports three API types: BigBuy (authentication via Bearer Token, with taxonomies, variants and CDN images), DropXL (Basic Auth, paginated product retrieval and order API) and JTL-Wawi (Bearer Token, items and sales orders). In addition, suppliers can be connected via an FTP/CSV feed."
      },
      {
        "q": "How often are stock levels synchronised?",
        "a": "A scheduler runs the stock synchronisation every 15 minutes for all connected API types. As a result, availability in your system reflects the suppliers' current stock levels without you having to update anything manually."
      },
      {
        "q": "How are suppliers with a CSV feed connected instead of an API?",
        "a": "For suppliers without an API, you configure an FTP connection along with the CSV format and field mapping. The automated import transfers the feed data into your product structure; your mark-ups are applied via the price calculation. Access credentials are stored encrypted."
      },
      {
        "q": "Can VertooERP use JTL-Wawi as a dropshipping source?",
        "a": "Yes. VertooERP connects JTL-Wawi via Bearer Token, reads items and creates sales orders with a configurable customer number and the end customer's delivery address. This allows JTL-Wawi to serve as a dropshipping source and to run alongside an existing system."
      },
      {
        "q": "Can the Dropshipping module be connected to Shopware?",
        "a": "Yes. The module integrates Shopware 6 via OAuth2 and synchronises products and stock levels, including as a batch sync for extensive ranges. This transfers imported dropshipping items and their availability into your Shopware shop."
      }
    ],
    "cta": {
      "headline": "Automate your dropshipping processes",
      "text": "See in a conversation how the Dropshipping module connects your suppliers, keeps stock levels synchronised every 15 minutes and forwards orders automatically. We will show you the connection to BigBuy, DropXL, JTL-Wawi and Shopware 6 based on your use case."
    }
  },
  {
    "slug": "zeiterfassung",
    "name": "Time Tracking & Leave",
    "icon": "clock",
    "metaTitle": "Time Tracking Software for Teams – VertooERP",
    "metaDescription": "Time tracking software with a clock-in feature, leave management, sick-leave reporting and team approval. Usable on mobile as a PWA – part of VertooERP.",
    "hero": {
      "eyebrow": "Module: Time Tracking & Leave",
      "headline": "Time tracking software with leave management for your team",
      "subhead": "Record working hours with a clock-in feature, manage leave and absences, and approve requests within the team – all in one application, on mobile too."
    },
    "intro": "Time Tracking & Leave is the HR module of VertooERP for recording working hours and managing absences. As time tracking software, it brings together a digital clock-in feature, leave management, sick-leave reporting and further absence types in a shared team context. Team leaders approve requests, while employees can view their hours and entitlements. The module is also usable on mobile as an installable PWA.",
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "clock",
          "title": "Working hours on slips and in spreadsheets",
          "description": "Clock-in and clock-out times are recorded on paper or in scattered Excel files and can only be traced with considerable effort."
        },
        {
          "icon": "calendar",
          "title": "Leave requested by email",
          "description": "Leave requests go through email and word of mouth. Who is off and when, and how many days are still available, has to be recalculated individually every time."
        },
        {
          "icon": "file-text",
          "title": "Sick-leave notes and AU submitted after the fact",
          "description": "A sick-leave note comes in at short notice, and the AU certificate follows later. Without a defined process, the follow-up submission is easily overlooked."
        },
        {
          "icon": "users",
          "title": "No overview of the team",
          "description": "Team leaders have no shared view of attendance and pending requests and have to gather information first for every approval."
        }
      ]
    },
    "features": {
      "intro": "The Time Tracking & Leave module offers these features:",
      "items": [
        {
          "icon": "alarm-clock",
          "name": "Clock-in feature",
          "description": "Employees record their working hours digitally with a clock-in feature – clocking in and out is captured directly in the system."
        },
        {
          "icon": "calendar",
          "name": "Leave management",
          "description": "Leave requests are submitted and managed in the system. Entitlements and approved days are stored centrally."
        },
        {
          "icon": "clipboard-list",
          "name": "Absences",
          "description": "In addition to leave, further absence types can be represented, so that all absences are recorded in one place."
        },
        {
          "icon": "file-text",
          "name": "Sick-leave note with AU follow-up submission",
          "description": "A sick-leave note can be recorded provisionally, and the AU certificate submitted afterwards."
        },
        {
          "icon": "refresh-cw",
          "name": "Leave carry-over with expiry cut-off date",
          "description": "Unused leave is carried over to the following year. The expiry cut-off date is configurable."
        },
        {
          "icon": "history",
          "name": "Overtime reduction",
          "description": "Overtime reduction is represented as its own absence type and is requested and documented like other absences."
        },
        {
          "icon": "check-check",
          "name": "Team approval",
          "description": "Team leaders receive a team overview and approve their employees' absence requests."
        },
        {
          "icon": "smartphone",
          "name": "Mobile as a PWA",
          "description": "The module is usable on mobile as an installable PWA. Web push notifications are possible."
        }
      ]
    },
    "faq": [
      {
        "q": "What is VertooERP's time tracking software?",
        "a": "VertooERP's time tracking software is the HR module \"Time Tracking & Leave\". It comprises a digital clock-in feature for recording working hours as well as the management of leave, absences and sick-leave notes. Requests are submitted within the team and approved by team leaders."
      },
      {
        "q": "How does the clock-in feature work?",
        "a": "Employees record their working hours digitally with a clock-in feature by capturing their clock-in and clock-out in the system. As the module is also usable as a mobile PWA, time tracking can likewise take place on mobile."
      },
      {
        "q": "How are leave and absences managed?",
        "a": "Leave and further absences are requested and managed centrally within the module. Team leaders see the requests in a team overview and approve them. Unused leave can be carried over to the following year with a configurable expiry cut-off date."
      },
      {
        "q": "How does the sick-leave note with AU follow-up submission work?",
        "a": "A sick-leave note can first be recorded provisionally. The certificate of incapacity for work (AU) is then submitted afterwards and assigned to the sick-leave note, so that the evidence remains documented."
      },
      {
        "q": "Can overtime reduction be represented?",
        "a": "Yes. Overtime reduction is stored as its own absence type. It is requested, approved and documented like other absences."
      },
      {
        "q": "Is time tracking usable on mobile?",
        "a": "Yes. The module is usable on mobile devices as an installable PWA (Progressive Web App). In addition, web push notifications are possible, for example about requests and approvals."
      }
    ],
    "cta": {
      "headline": "Manage time tracking and leave centrally",
      "text": "Record working hours, leave and absences within the team – as a module of VertooERP, on mobile as a PWA too."
    }
  },
  {
    "slug": "crm",
    "name": "CRM",
    "icon": "users",
    "metaTitle": "CRM Software for SMEs: Module within the ERP – VertooERP",
    "metaDescription": "Integrated CRM within your ERP: customer and contact management with a history spanning accounting, inventory, orders and messages – CRM software for SMEs.",
    "hero": {
      "eyebrow": "Module: CRM",
      "headline": "CRM Software for SMEs — customer data and history in one place",
      "subhead": "Customer and contact management that connects directly to accounting, inventory management, orders and messages. One customer record instead of five separate lists."
    },
    "intro": "CRM (Customer Relationship Management) refers to the central management of customer and contact data together with the associated activities. The CRM module in VertooERP is an integrated CRM within the ERP: customers, contacts and their history reside in one place and are connected across modules with accounting, inventory management, orders and communication. As CRM software for small and medium-sized businesses, it does not replace a specialised sales pipeline, but instead gives you the complete operational history for every customer at a glance.",
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "search-check",
          "title": "Customer data spread across multiple systems",
          "description": "The address in accounting, the orders in inventory management, the latest email thread in the mailbox. To get a complete picture, staff click their way through three tools."
        },
        {
          "icon": "history",
          "title": "No end-to-end history",
          "description": "Who ordered what and when, which invoice is outstanding, what was last discussed? Without a shared history, every enquiry starts with a search."
        },
        {
          "icon": "wallet",
          "title": "Payment terms not at hand",
          "description": "The agreed payment term is on an old quote or in someone's head. When invoicing, it is guessed or asked for again."
        }
      ]
    },
    "features": {
      "intro": "The CRM module consolidates the master data and makes it usable across all modules. The following features are included:",
      "items": [
        {
          "icon": "users",
          "name": "Customer and contact management",
          "description": "Central management of customers and their contact persons. All master data resides in one place and is available to every module."
        },
        {
          "icon": "history",
          "name": "Cross-module customer history",
          "description": "A customer's history spans all modules: accounting, inventory management, orders and communication are visible at a glance for every customer."
        },
        {
          "icon": "receipt-text",
          "name": "Connected to accounting",
          "description": "The customer's invoices and outstanding items are visible directly on the customer record. You can see the payment status without switching to a separate system."
        },
        {
          "icon": "package",
          "name": "Connected to inventory management and orders",
          "description": "Orders from inventory management are assigned to the customer. What was ordered and what was delivered appears in the same context as the contact details."
        },
        {
          "icon": "message-square",
          "name": "Connected to messages",
          "description": "Communication with the customer is linked to the record. The message history complements the overall history and does not need to be searched for separately."
        },
        {
          "icon": "clock",
          "name": "Customers with payment terms",
          "description": "Store the agreed payment term for each customer. It is ready for further processing rather than having to be looked up again for every invoice."
        }
      ]
    },
    "faq": [
      {
        "q": "Is this a full-featured sales CRM with pipeline and forecast?",
        "a": "No. The CRM module is an integrated CRM within the ERP and focuses on customer and contact management with a cross-module history. A specialised sales pipeline with opportunity stages or revenue forecasting is deliberately not part of the feature set."
      },
      {
        "q": "What does cross-module customer history mean in practice?",
        "a": "For every customer, you see the activities from several modules in one place: invoices and outstanding items from accounting, orders from inventory management, and communication from messages. You do not have to piece the information together from separate systems."
      },
      {
        "q": "Can I store a payment term per customer?",
        "a": "Yes. Customers can be created with an individual payment term. This is available in the connected modules, so it does not have to be determined anew every time during further processing."
      },
      {
        "q": "Which modules is the CRM connected to?",
        "a": "The CRM is integrated with accounting (invoices and outstanding items), inventory management (orders) and messages. As a result, customer and contact data is not locked into a single module but usable throughout."
      },
      {
        "q": "Who is the CRM module suited for?",
        "a": "It is aimed at small and medium-sized businesses that want to manage their customer and contact data centrally and keep their operational history in one place. Anyone looking instead for a dedicated sales process with pipeline management should check whether a specialised sales CRM is a better fit."
      }
    ],
    "cta": {
      "headline": "See your customers in context.",
      "text": "In 30 minutes, we'll show you on the customer record how accounting, orders and communication come together for a single customer — using an example from your own business."
    }
  },
  {
    "slug": "aufgaben-projekte",
    "name": "Tasks & Projects",
    "icon": "list-checks",
    "metaTitle": "Project Management Software for SMEs – VertooERP",
    "metaDescription": "Project management software for SMEs: tasks with Kanban, list and calendar, priorities, subtasks, checklists, comments and projects – integrated into VertooERP.",
    "hero": {
      "eyebrow": "Module: Tasks & Projects",
      "headline": "Project management software for SMEs – tasks and projects in one system",
      "subhead": "Manage tasks as a Kanban board, list or calendar, run projects in their own right and share notes. Without a separate tool, directly in VertooERP."
    },
    "intro": "Tasks & Projects is the module in VertooERP for organising tasks, projects and notes. As project management software for SMEs, it brings together task management with a Kanban board, list and calendar view, standalone projects with optional task assignment, as well as personal and shared notes. Tasks can be given priorities, due dates, checklists, subtasks and file attachments, and can be coordinated across the team via comments and @mentions.",
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "layers",
          "title": "Tasks scattered across many tools",
          "description": "To-dos live in emails, chat messages and a separate task tool. No one has a complete overview of what is open and who is responsible for it."
        },
        {
          "icon": "history",
          "title": "Unclear who changed what",
          "description": "Due date moved, responsibility switched, comment edited – without a traceable history it remains unclear when and by whom something happened."
        },
        {
          "icon": "bell",
          "title": "Important tasks slip through",
          "description": "Without a targeted notification, no one finds out when they are assigned to a task or mentioned in a comment. Queries go unanswered."
        },
        {
          "icon": "folder-kanban",
          "title": "Projects without a fixed framework",
          "description": "Related tasks cannot be bundled together. A project exists only as a loose collection of entries across various lists."
        }
      ]
    },
    "features": {
      "intro": "Task management, projects and notes with the features that matter in day-to-day teamwork.",
      "items": [
        {
          "icon": "folder-kanban",
          "name": "Kanban, list and calendar",
          "description": "Work with tasks in three views: a Kanban board for status, a list view for the overview and a calendar view along the due dates."
        },
        {
          "icon": "list-checks",
          "name": "Priorities, checklists and subtasks",
          "description": "Give tasks a priority and due date, break them down into subtasks and structure them into individual steps with checklists."
        },
        {
          "icon": "message-square",
          "name": "Comments with history",
          "description": "Comments can be edited and deleted; every change is recorded in a change history. @mention notifications bring the relevant people in in a targeted way."
        },
        {
          "icon": "history",
          "name": "Activity feed and assignment history",
          "description": "An activity feed documents every change to a task. The assignment history provides a traceable record of who the task was assigned to and when."
        },
        {
          "icon": "users",
          "name": "Watching and assigning",
          "description": "Watch tasks as a watcher without being responsible for them. The Mine, Created, Unassigned and All tabs filter tasks by involvement."
        },
        {
          "icon": "file-text",
          "name": "Detail view and file attachments",
          "description": "The detail view opens read-only and switches to edit mode when needed. Files can be attached directly to the task."
        },
        {
          "icon": "folder-kanban",
          "name": "Standalone projects",
          "description": "Projects exist independently and can optionally have tasks assigned to them. This bundles related work within a fixed framework."
        },
        {
          "icon": "book-open",
          "name": "Personal and shared notes",
          "description": "Keep notes as a personal memo or share them across the team – for information that does not belong to any single task."
        }
      ]
    },
    "faq": [
      {
        "q": "Which views are available for tasks?",
        "a": "Tasks can be worked on in three views: as a Kanban board, as a list view and as a calendar view. The calendar view arranges tasks along their due dates. In addition, the Mine, Created, Unassigned and All tabs filter by involvement."
      },
      {
        "q": "How do I keep track of changes to a task?",
        "a": "Every task has an activity feed that documents changes. Comments can be edited and deleted, with every change recorded in a change history. The assignment history also shows who the task was assigned to and when."
      },
      {
        "q": "How are the people involved notified?",
        "a": "@mention notifications let you bring colleagues into comments in a targeted way. In addition, you can watch tasks as a watcher to stay informed about changes without being responsible yourself."
      },
      {
        "q": "How do tasks and projects relate to each other?",
        "a": "Projects in VertooERP stand on their own and exist independently of individual tasks. Tasks can optionally be assigned to a project. This lets you bundle related tasks within a project without an assignment being mandatory."
      },
      {
        "q": "Can I structure and organise tasks?",
        "a": "Yes. Tasks can be given priorities and due dates, broken down into subtasks and structured into individual steps via checklists. Files can be attached directly to a task."
      },
      {
        "q": "Are there keyboard shortcuts for task management?",
        "a": "Yes. The N keyboard shortcut creates a new task. The detail view initially opens read-only and switches to edit mode when needed, to avoid accidental changes."
      }
    ],
    "cta": {
      "headline": "Get to know Tasks & Projects in VertooERP",
      "text": "See in a demo how your team organises tasks with Kanban, list and calendar and runs projects in the ERP."
    }
  },
  {
    "slug": "kostenmanagement",
    "name": "Cost Management",
    "icon": "wallet",
    "metaTitle": "Cost Management Software for SMEs – VertooERP",
    "metaDescription": "Cost management software for SMEs: track fixed costs, salaries, fleet and SaaS subscriptions in one place – with a monthly and annual overview in VertooERP.",
    "hero": {
      "eyebrow": "Module: Cost Management",
      "headline": "Cost management software – all fixed costs in a single overview",
      "subhead": "Record salaries, rent, vehicle fleet and SaaS subscriptions in one place. A monthly and annual overview instead of scattered spreadsheets and forgotten contracts."
    },
    "intro": "Cost management refers to the systematic recording, overview and control of a company's ongoing costs. Cost management software brings recurring fixed costs – such as salaries, rent and software subscriptions – together in a central view and makes them visible as a monthly and annual total. The VertooERP Cost Management module records these cost blocks in a structured way by areas such as personnel, vehicle fleet and software, so that you always know which fixed expenses arise each month. Sensitive areas such as personnel costs are accessible exclusively to cost admins.",
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "receipt-text",
          "title": "Fixed costs spread across many spreadsheets",
          "description": "Salaries in one file, rent in the next, SaaS subscriptions somewhere in your inbox. There is no reliable overall total per month."
        },
        {
          "icon": "alarm-clock",
          "title": "Notice periods missed",
          "description": "A SaaS contract renews automatically because no one kept track of the deadline. Costs keep running even though the tool has long been unused."
        },
        {
          "icon": "lock",
          "title": "Salary data without clear access rules",
          "description": "Personnel costs sit in open files. Who has access and who does not is not properly regulated – a problem with sensitive data."
        },
        {
          "icon": "search-check",
          "title": "No annual view of fixed costs",
          "description": "On a monthly basis it barely stands out, but over the year it adds up. Without an annual overview, the basis for budgeting and planning is missing."
        }
      ]
    },
    "features": {
      "intro": "The module divides ongoing costs into clearly separated areas – from the general fixed-cost overview to the detailed management of personnel, vehicle fleet and software.",
      "items": [
        {
          "icon": "chart-column",
          "name": "Fixed-cost overview",
          "description": "Record monthly fixed costs such as salaries, SaaS and rent centrally. All items come together in a monthly and annual overview."
        },
        {
          "icon": "calendar",
          "name": "Monthly and annual view",
          "description": "See the total of your fixed costs per month and projected across the year. This makes visible what actually arises over the long term."
        },
        {
          "icon": "users",
          "name": "Personnel management",
          "description": "Manage salaries, employment contracts, salary changes and terminations. This area is accessible exclusively to cost admins."
        },
        {
          "icon": "lock",
          "name": "Access for cost admins only",
          "description": "Sensitive personnel costs are restricted to cost admins. Salary and contract data thus remain reserved for a defined group of people."
        },
        {
          "icon": "car",
          "name": "Vehicle fleet",
          "description": "Manage your vehicles centrally in the vehicle fleet area and bring the inventory of company vehicles together in one place."
        },
        {
          "icon": "credit-card",
          "name": "Software and SaaS subscriptions",
          "description": "Record subscriptions with name, provider, URL, cost, billing cycle, contract, notice period, seats and status – full visibility of your SaaS expenditure."
        },
        {
          "icon": "file-text",
          "name": "Contracts and deadlines in view",
          "description": "For each SaaS subscription you store the contract and notice period. This way the contract term and notice period are documented per subscription and can be viewed at any time."
        },
        {
          "icon": "banknote",
          "name": "Costs structured by area",
          "description": "Personnel, vehicle fleet and software are cleanly separated areas. This makes the origin of every cost item traceable."
        }
      ]
    },
    "faq": [
      {
        "q": "What is cost management software?",
        "a": "Cost management software records a company's ongoing costs centrally and presents them clearly. In the VertooERP Cost Management module, monthly fixed costs such as salaries, rent and SaaS subscriptions are recorded in a structured way and presented as a monthly and annual overview."
      },
      {
        "q": "Which cost types can I record in the module?",
        "a": "You record recurring fixed costs such as salaries, rent and SaaS subscriptions in a single overview. In addition, there are dedicated areas for personnel, vehicle fleet and software, in which the respective costs are managed in detail."
      },
      {
        "q": "Who has access to the personnel and salary data?",
        "a": "The personnel area with salary management, employment contracts, salary changes and terminations is accessible exclusively to cost admins. Sensitive personnel data thus remains reserved for a defined group of people."
      },
      {
        "q": "How do I keep track of notice periods for SaaS subscriptions?",
        "a": "In the software area you store details for each SaaS subscription such as provider, cost, billing cycle, contract, notice period, seats and status. This way contract terms and deadlines are documented in one place."
      },
      {
        "q": "Can I see my fixed costs per month and per year?",
        "a": "Yes. The recorded fixed costs come together in a monthly and annual overview. This lets you see both the monthly burden and the total of your ongoing costs projected across the year."
      },
      {
        "q": "Can I also manage my vehicle fleet in cost management?",
        "a": "Yes. The vehicle fleet area serves the central management of your vehicles and brings the inventory of company vehicles together in one place."
      }
    ],
    "cta": {
      "headline": "Keep fixed costs centrally in view",
      "text": "See the Cost Management module in a demo – from the fixed-cost overview through personnel and vehicle fleet to SaaS contracts and notice periods."
    }
  },
  {
    "slug": "webshop",
    "name": "Web Shop",
    "icon": "store",
    "metaTitle": "Web Shop Module – VertooERP",
    "metaDescription": "VertooERP's web shop: a whitelabel customer store under your own domain, connected directly to your ERP's stock, prices and loyalty points.",
    "hero": {
      "eyebrow": "Module: Web Shop",
      "headline": "Your customer store, straight from your ERP",
      "subhead": "A whitelabel web shop under your own domain – seamlessly connected to stock, prices and loyalty points in VertooERP."
    },
    "intro": "A web shop in an ERP context is an online sales channel wired directly into your central inventory system. Instead of maintaining shop and ERP separately, VertooERP's web shop reads your stock, prices and loyalty points directly. That lets you sell online under your own brand without entering data twice.",
    "painpoints": {
      "intro": "Separate shop and ERP systems cost time and cause errors. An integrated web shop solves these problems:",
      "items": [
        {
          "icon": "boxes",
          "title": "Duplicate data entry",
          "description": "Stock and prices have to be maintained separately in the shop and the ERP – tedious and error-prone."
        },
        {
          "icon": "package",
          "title": "Outdated stock levels",
          "description": "Without a live connection you sell items that are long out of stock, or miss revenue on available ones."
        },
        {
          "icon": "palette",
          "title": "Someone else's brand",
          "description": "Off-the-shelf shop systems impose their design and domain on you instead of showing your own brand."
        },
        {
          "icon": "credit-card",
          "title": "Awkward checkout",
          "description": "Missing or unsuitable payment methods lead to abandoned carts at checkout."
        }
      ]
    },
    "features": {
      "intro": "VertooERP's web shop unites selling and inventory management in one system:",
      "items": [
        {
          "icon": "store",
          "name": "Whitelabel under your own domain",
          "description": "Your customer store runs under your own domain and branding – with no third-party name attached."
        },
        {
          "icon": "link",
          "name": "Seamless ERP connection",
          "description": "Stock, prices and loyalty points connect directly to the ERP. No interfaces, no double maintenance."
        },
        {
          "icon": "credit-card",
          "name": "Established payment methods",
          "description": "Your customers pay conveniently via Stripe, PayPal or Mollie."
        },
        {
          "icon": "languages",
          "name": "Multilingual shop",
          "description": "Address customers in several languages and sell across borders."
        },
        {
          "icon": "palette",
          "name": "Your own branding",
          "description": "Style the shop in your brand's look so it feels like a natural part of your presence."
        }
      ]
    },
    "faq": [
      {
        "q": "Does the web shop run under my own domain?",
        "a": "Yes. The web shop is a whitelabel customer store that runs under your own domain and branding."
      },
      {
        "q": "Which payment methods are supported?",
        "a": "Your customers can pay via Stripe, PayPal and Mollie."
      },
      {
        "q": "How are stock and prices connected to the shop?",
        "a": "The web shop is seamlessly connected to stock, prices and loyalty points from VertooERP, so you don't have to maintain that data twice."
      }
    ],
    "cta": {
      "headline": "Sell online under your own brand",
      "text": "See how VertooERP's web shop connects your sales directly to your inventory management."
    }
  },
  {
    "slug": "preischeck",
    "name": "Price Check",
    "icon": "shopping-cart",
    "metaTitle": "Price Check & Market Comparison – VertooERP",
    "metaDescription": "Query market prices by EAN across idealo, Amazon, eBay, billiger.de and Google Shopping. Traffic-light rating, bulk import and per-platform max price.",
    "hero": {
      "eyebrow": "Module: Price Check",
      "headline": "Compare market prices before you buy",
      "subhead": "Query market prices by EAN across five marketplaces, rate them with a traffic-light system and set a maximum purchase price per platform – right inside VertooERP."
    },
    "intro": "A price check, or market price comparison, determines the current market price of an item across several selling platforms and compares it against your own terms. In VertooERP the query runs by EAN across idealo, Amazon, eBay, billiger.de and Google Shopping. That lets you see at a glance whether an offer or purchase price is in line with the market – and make decisions on a solid data basis.",
    "painpoints": {
      "intro": "Buying and pricing without current market data leaves margin on the table and wastes time on research.",
      "items": [
        {
          "icon": "search",
          "title": "Manual price research eats time",
          "description": "Looking up prices on several portals one by one ties up hours that purchasing and sales teams need elsewhere."
        },
        {
          "icon": "trending-down",
          "title": "Overpaying on purchases",
          "description": "Without a market comparison, it often shows up too late that a purchase price sits above the usual market level."
        },
        {
          "icon": "layers",
          "title": "Data scattered across portals",
          "description": "idealo, Amazon, eBay and others show different prices – without consolidation the picture stays incomplete."
        },
        {
          "icon": "scale",
          "title": "No clear basis for decisions",
          "description": "Raw price lists without a rating don't tell you whether an offer is good, borderline or too expensive."
        }
      ]
    },
    "features": {
      "intro": "Price Check bundles market data from five sources and makes it instantly assessable.",
      "items": [
        {
          "icon": "search",
          "name": "EAN-based market price query",
          "description": "Enter the EAN and get the item's current market price – with no manual searching on each individual portal."
        },
        {
          "icon": "store",
          "name": "Five marketplaces in one query",
          "description": "idealo, Amazon, eBay, billiger.de and Google Shopping are evaluated together and compared side by side."
        },
        {
          "icon": "traffic-cone",
          "name": "Traffic-light rating",
          "description": "A traffic-light logic in green, yellow and red instantly shows how a price ranks against the market."
        },
        {
          "icon": "upload",
          "name": "Bulk import for mass queries",
          "description": "Check entire product ranges at once via bulk import instead of querying items one by one."
        },
        {
          "icon": "badge-euro",
          "name": "Max purchase price per platform",
          "description": "Store a maximum purchase price per platform so the rating aligns with your own thresholds."
        }
      ]
    },
    "faq": [
      {
        "q": "Which marketplaces does the price check cover?",
        "a": "The market price query evaluates five sources: idealo, Amazon, eBay, billiger.de and Google Shopping. If one source returns no price, a source fallback relies on the remaining sources."
      },
      {
        "q": "How does the traffic-light rating work?",
        "a": "Every price is classified by traffic-light logic as green, yellow or red. That lets you see without any calculation whether a price is within range or stands out – also against the stored maximum purchase price."
      },
      {
        "q": "Can I check many items at once?",
        "a": "Yes. Bulk import lets you check entire item lists in a single mass query instead of entering each EAN individually."
      }
    ],
    "cta": {
      "headline": "Compare prices, protect your margin",
      "text": "Try Price Check in VertooERP and rate market prices by EAN and traffic-light logic across five marketplaces."
    }
  },
  {
    "slug": "bonuspunkte",
    "name": "Loyalty Points",
    "icon": "gift",
    "metaTitle": "Loyalty Points & Retention – VertooERP",
    "metaDescription": "Loyalty program with tier system, voucher generator and automatic point credits. Built into your ERP – with Shopware integration.",
    "hero": {
      "eyebrow": "Module: Loyalty Points",
      "headline": "Customer loyalty that lives inside your ERP",
      "subhead": "Reward loyal customers with a points and tier system, generate vouchers, and credit points automatically on every order – no extra software required."
    },
    "intro": "A loyalty or bonus-points program rewards customers for their purchases and loyalty with points they can collect and redeem. A tier system (e.g. Bronze, Silver, Gold) grades benefits by activity and creates incentives for repeat purchases. In VertooERP, loyalty is tied directly to orders and customer data, so points are created and managed automatically.",
    "painpoints": {
      "intro": "Without an integrated loyalty program, customer retention is left to chance:",
      "items": [
        {
          "icon": "users",
          "title": "Customers buy just once",
          "description": "With no reason to return, first-time buyers drift away instead of becoming loyal repeat customers."
        },
        {
          "icon": "repeat",
          "title": "Manual point tracking eats time",
          "description": "Booking points by hand is error-prone and doesn't scale as your order volume grows."
        },
        {
          "icon": "ticket",
          "title": "Vouchers without a system",
          "description": "Vouchers created one by one are hard to track, control, or deploy in a targeted way."
        },
        {
          "icon": "plug",
          "title": "Shop and ERP don't talk",
          "description": "When your loyalty program and inventory run separately, you get duplicate work and data gaps."
        }
      ]
    },
    "features": {
      "intro": "Everything you need for a working loyalty program – built into your ERP:",
      "items": [
        {
          "icon": "award",
          "name": "Tier system (Bronze/Silver/Gold)",
          "description": "Grade customer benefits across multiple levels and reward activity with a visible status."
        },
        {
          "icon": "coins",
          "name": "Automatic point credits",
          "description": "Points are credited automatically on orders (auto-credit) – no manual booking required."
        },
        {
          "icon": "ticket",
          "name": "Voucher generator",
          "description": "Create vouchers in a structured way within the system and keep track of issuing and redemption."
        },
        {
          "icon": "hourglass",
          "name": "Point expiry",
          "description": "Set points to expire so the program stays active and your liabilities stay clean."
        },
        {
          "icon": "plug",
          "name": "Shopware plugin",
          "description": "Connect your Shopware store via the plugin and link online orders directly to the loyalty program."
        }
      ]
    },
    "faq": [
      {
        "q": "How are points credited on orders?",
        "a": "Points are credited automatically on orders (auto-credit). You don't need to book anything manually – the credit is applied in the system based on the order."
      },
      {
        "q": "Can loyalty points expire?",
        "a": "Yes. VertooERP supports point expiry, so collected points can expire according to your rules. This keeps customers engaged and your liabilities manageable."
      },
      {
        "q": "Can the program be connected to Shopware?",
        "a": "Yes. The Shopware plugin connects your store to the loyalty program so online orders feed in directly."
      }
    ],
    "cta": {
      "headline": "Turn buyers into regulars",
      "text": "Get started with the Loyalty Points module and build a retention program that runs automatically inside your ERP."
    }
  },
  {
    "slug": "wissensdatenbank",
    "name": "Knowledge Base",
    "icon": "book-open",
    "metaTitle": "Knowledge Base – VertooERP",
    "metaDescription": "Internal knowledge base for your team: articles in Markdown, categories, tags and a publishing workflow. Usable as a knowledge source for the AI assistant.",
    "hero": {
      "eyebrow": "Module: Knowledge Base",
      "headline": "Your team's knowledge in one place",
      "subhead": "An internal knowledge base for processes, guides and answers – structured into categories, written in Markdown and anchored directly in your ERP."
    },
    "intro": "A knowledge base is a central collection of articles in which a company captures its internal knowledge – such as process descriptions, how-to guides and answers to recurring questions. In VertooERP it is intended solely for your team and is not public. Instead of searching for knowledge across emails, chats and scattered documents, your team finds it in one fixed, searchable place.",
    "painpoints": {
      "intro": "Knowledge that lives only in people's heads and inboxes costs time every day. Many SMEs recognise these problems:",
      "items": [
        {
          "icon": "search",
          "title": "Knowledge is scattered",
          "description": "Guides and answers sit in emails, chats and individual files – no one knows where the current version lives."
        },
        {
          "icon": "users",
          "title": "Knowledge gets lost",
          "description": "When an experienced colleague leaves, their knowledge often goes with them because it was never written down."
        },
        {
          "icon": "repeat",
          "title": "The same questions again",
          "description": "New team members ask recurring questions that others have to answer from scratch every single time."
        },
        {
          "icon": "file-text",
          "title": "No clear status",
          "description": "Without an approval step, outdated drafts circulate alongside current versions – and nobody knows which one applies."
        }
      ]
    },
    "features": {
      "intro": "The knowledge base in VertooERP is deliberately lean and practical – with the building blocks a team actually needs:",
      "items": [
        {
          "icon": "pencil",
          "name": "Articles in Markdown",
          "description": "Write articles in plain Markdown – with headings, lists and links, without a cumbersome editor."
        },
        {
          "icon": "folder-tree",
          "name": "Categories",
          "description": "Organise articles into clear categories so your team can quickly find the topics it needs."
        },
        {
          "icon": "tags",
          "name": "Tags",
          "description": "Assign tags to label articles across topics and pull up exactly what you're looking for."
        },
        {
          "icon": "workflow",
          "name": "Publishing workflow",
          "description": "Work with Draft and Live statuses – so it's always clear which articles are already in force."
        },
        {
          "icon": "bot",
          "name": "RAG-ready for the AI assistant",
          "description": "Your articles can serve as a knowledge source for the local AI assistant, delivering answers from your own knowledge."
        }
      ]
    },
    "faq": [
      {
        "q": "Is the knowledge base publicly accessible?",
        "a": "No. The knowledge base is an internal knowledge base intended solely for your team. It is not public and is not designed as a customer-facing help centre."
      },
      {
        "q": "What format are articles written in?",
        "a": "Articles are written in Markdown. This lets you structure text with headings, lists and links, without needing a complicated editor."
      },
      {
        "q": "How does the knowledge base relate to the AI assistant?",
        "a": "The articles are RAG-ready: they can serve as a knowledge source for the local AI assistant, so it can answer questions based on your own documented knowledge."
      }
    ],
    "cta": {
      "headline": "Bring your team's knowledge together",
      "text": "Use VertooERP's knowledge base to build a central foundation for internal knowledge – structured, searchable and ready for your AI assistant."
    }
  },
  {
    "slug": "reporting",
    "name": "Reporting & Analytics",
    "icon": "chart-column",
    "metaTitle": "Reporting & Analytics for Your ERP – VertooERP",
    "metaDescription": "Reporting & Analytics in VertooERP: live dashboard with KPIs from inventory, revenue trends, stock value, low-stock alerts and top-10 categories.",
    "hero": {
      "eyebrow": "Module: Reporting & Analytics",
      "headline": "Reporting & Analytics – your key figures live from inventory management",
      "subhead": "A live dashboard consolidates revenue trends, stock value, dropshipping performance and low-stock alerts. From the KPI overview down to the detail via drill-down – without pulling numbers from several systems."
    },
    "intro": "Reporting & Analytics refers to the evaluation of operational data into key figures, trends and charts that support decisions in a company. In an ERP, these evaluations are produced directly from the operational data, so figures do not have to be exported and prepared separately. The VertooERP reporting module shows KPIs from inventory management in a live dashboard – such as revenue trend, stock value and dropshipping performance. Using aggregate queries, it condenses large volumes of data into key figures while keeping the path into the individual details open via drill-down.",
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "table",
          "title": "Piecing key figures together from Excel",
          "description": "Revenue, stock and performance sit in separate lists. To get an overview, the figures are exported by hand and merged into spreadsheets – time-consuming and quickly out of date."
        },
        {
          "icon": "clock",
          "title": "Figures are already outdated once they're ready",
          "description": "By the time a report is prepared, stock has long since changed. Without a live dashboard, you lack a view of the current status at the moment of decision."
        },
        {
          "icon": "bell",
          "title": "Low stock is noticed too late",
          "description": "That an item is running low often only becomes apparent once it is missing. Without an alert for low stock, the reorder is triggered too late."
        },
        {
          "icon": "search",
          "title": "Key figure yes – cause unclear",
          "description": "A trend points downward, but why? Without moving from the key figure into the underlying data, the analysis stays on the surface."
        }
      ]
    },
    "features": {
      "intro": "The reporting module evaluates the data from inventory management in a live dashboard – from the condensed key figure down to the individual detail:",
      "items": [
        {
          "icon": "gauge",
          "name": "Live dashboard with KPIs",
          "description": "Key figures from inventory management come together in a live dashboard. The overview reflects the current status instead of waiting for a manually created report."
        },
        {
          "icon": "trending-up",
          "name": "Revenue trend",
          "description": "Revenue development is evaluated over time and makes revenue trends visible. This lets you see in which direction revenue is moving."
        },
        {
          "icon": "truck",
          "name": "Dropshipping performance",
          "description": "A dedicated key figure shows dropshipping performance. This keeps the contribution of your dropshipping business in view without evaluating the data separately."
        },
        {
          "icon": "boxes",
          "name": "Stock value and low-stock alerts",
          "description": "The dashboard reports the current stock value and warns with low-stock alerts as soon as an item's stock is low – in time for reordering."
        },
        {
          "icon": "chart-line",
          "name": "Trends over 7 months and top-10 categories",
          "description": "Developments can be tracked over a period of 7 months. An evaluation of the top-10 categories shows which categories contribute the most."
        }
      ]
    },
    "faq": [
      {
        "q": "What is Reporting & Analytics in an ERP?",
        "a": "Reporting & Analytics refers to evaluating operational data into key figures, trends and charts as a basis for decisions. In an ERP, these evaluations are produced directly from the operational data. In VertooERP, a live dashboard shows KPIs from inventory management, including revenue trend, stock value and dropshipping performance."
      },
      {
        "q": "Which key figures does the live dashboard show?",
        "a": "The live dashboard consolidates key figures from inventory management: revenue development with revenue trends, dropshipping performance, stock value and low-stock alerts when stock is low. In addition, trends over 7 months and the top-10 categories can be evaluated."
      },
      {
        "q": "Can I move from a key figure into the details?",
        "a": "Yes. The module condenses large volumes of data into key figures via aggregate queries and at the same time allows a drill-down into the underlying details. This keeps the path from the condensed key figure down to the individual item open."
      }
    ],
    "cta": {
      "headline": "Keep your key figures in view, live",
      "text": "See in a demo how the VertooERP live dashboard brings together revenue trend, stock value, dropshipping performance and low-stock alerts from your inventory management – with drill-down into the detail."
    }
  },
  {
    "slug": "ki-assistent",
    "name": "AI Assistant",
    "icon": "bot",
    "metaTitle": "AI Assistant in ERP – VertooERP",
    "metaDescription": "VertooERP's AI Assistant runs as a local LLM via Ollama: chat with ERP context, generate product texts, data stays in-house. Privacy-friendly by design.",
    "hero": {
      "eyebrow": "Module: AI Assistant",
      "headline": "AI right inside your ERP – local and in-house",
      "subhead": "An AI assistant that knows your ERP data and writes product texts. Powered by a local language model via Ollama, without your data ever leaving your company."
    },
    "intro": "An AI assistant in the ERP is a language model (LLM) integrated into your business software that answers questions about your own data and helps with writing tasks. In VertooERP this assistant runs locally via Ollama – the language model and all data stay on your own infrastructure. This combines modern AI capabilities with the data protection of a self-hosted system.",
    "painpoints": {
      "intro": "Why many SMEs hesitate when it comes to AI in the ERP:",
      "items": [
        {
          "icon": "cloud-off",
          "title": "Sensitive data in the cloud",
          "description": "Typical AI services send your business and customer data to external servers. For many SMEs that is not an option, for data-protection and competitive reasons."
        },
        {
          "icon": "database",
          "title": "AI without context on your data",
          "description": "General chatbots don't know your company. They can't answer questions about specific orders, items or stock levels."
        },
        {
          "icon": "pen-tool",
          "title": "Product texts take time",
          "description": "Writing appealing, SEO-ready descriptions for many items is time-consuming – especially with large product ranges."
        },
        {
          "icon": "server",
          "title": "Dependence on external providers",
          "description": "Cloud AI ties you to the pricing, availability and terms of third parties that you have no control over."
        }
      ]
    },
    "features": {
      "intro": "What the AI Assistant in VertooERP does:",
      "items": [
        {
          "icon": "message-square",
          "name": "Chat with ERP context",
          "description": "Ask questions about your own ERP data and get answers straight from the system – in a dialogue, without detours."
        },
        {
          "icon": "file-text",
          "name": "Generate product descriptions",
          "description": "Create SEO-optimized product texts at the click of a button and give every item a convincing description."
        },
        {
          "icon": "wand-2",
          "name": "Bulk texts for large ranges",
          "description": "Generate descriptions as bulk texts for many items at once and save yourself manual, repetitive work."
        },
        {
          "icon": "server",
          "name": "Local LLM via Ollama",
          "description": "The language model runs via Ollama on your own infrastructure – as an integral part of your self-hosted ERP."
        },
        {
          "icon": "shield",
          "name": "Data stays in-house",
          "description": "Your data never leaves the company: no forced cloud, no data leakage, privacy-friendly through the architecture itself."
        }
      ]
    },
    "faq": [
      {
        "q": "Is my data sent to an external AI cloud?",
        "a": "No. The AI assistant runs as a local language model via Ollama on your own infrastructure. Your data stays in-house and never leaves your company."
      },
      {
        "q": "Can the assistant answer questions about my specific ERP data?",
        "a": "Yes. The chat works with ERP context, so you can ask questions about your own data stored in the system and get answers in a dialogue."
      },
      {
        "q": "Can I create product texts for many items at once?",
        "a": "Yes. Besides individual SEO-optimized product descriptions, you can also generate texts as bulk texts for many items at the same time."
      }
    ],
    "cta": {
      "headline": "Use AI without giving your data away",
      "text": "Experience an AI assistant that knows your ERP data and runs locally, in-house. Discover the AI Assistant module in VertooERP."
    }
  }
];
