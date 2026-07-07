import type { Branche } from "./branchen";

// EN-Übersetzung (via Workflow, 2026-06-18). Struktur gespiegelt aus der DE-Quelle.
export const branchenEn: Branche[] = [
  {
    "slug": "handel",
    "name": "Retail & E-Commerce",
    "icon": "shopping-cart",
    "metaTitle": "ERP for Retail & E-Commerce – VertooERP",
    "metaDescription": "Modular ERP for online and brick-and-mortar retail: inventory management, warehousing, dropshipping, web shop, loyalty points and market-price check. Self-hosting, GDPR- and GoBD-compliant.",
    "hero": {
      "eyebrow": "For Retail & E-Commerce",
      "headline": "ERP for retail — from goods receipt to customer loyalty",
      "subhead": "One platform for inventory management, warehousing, dropshipping, web shop and accounting. No more Excel between Shopware, Amazon and suppliers — all your data in one system.",
      "primaryCta": {
        "label": "Request a demo",
        "href": "/#kontakt"
      },
      "secondaryCta": {
        "label": "View all modules",
        "href": "/#module"
      }
    },
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "package-x",
          "title": "Stock levels drift apart",
          "description": "Shopware says 12 units, the warehouse still has 7, eBay is already selling the 13th. Sales-channel synchronisation is a daily headache."
        },
        {
          "icon": "tag",
          "title": "Maintaining prices manually",
          "description": "Idealo, Amazon, eBay, billiger.de — every platform has its own upkeep. Margins slip away without anyone noticing."
        },
        {
          "icon": "refresh-cw",
          "title": "Switching dropshipping providers",
          "description": "BigBuy today, DropXL tomorrow, a new supplier next month. Every integration is its own file-mapping workshop."
        },
        {
          "icon": "package-search",
          "title": "Order status for customers",
          "description": "\"Where is my order?\" — open three tools, piece it together by hand. Customer communication turns into detective work."
        }
      ]
    },
    "modules": {
      "intro": "These modules cover the classic retail operation completely — individually or combined.",
      "items": [
        {
          "icon": "package",
          "name": "Inventory Management",
          "description": "Unified product catalogue (one product per EAN, any number of suppliers behind it). Order processing, shipment tracking across 5 carriers, bundles / BOMs."
        },
        {
          "icon": "warehouse",
          "name": "Warehouse Management",
          "description": "Multiple warehouses, zone/aisle/rack/bin hierarchy, transfers, complete movement audit, stocktaking with target/actual comparison."
        },
        {
          "icon": "truck",
          "name": "Dropshipping",
          "description": "BigBuy, DropXL, JTL-Wawi and Shopware 6 in a single interface. Stock sync every 15 minutes, automatic order forwarding."
        },
        {
          "icon": "search-check",
          "name": "Market-Price Check",
          "description": "EAN bulk check across idealo, Amazon, eBay, billiger.de and Google Shopping. Max purchase price per platform, traffic-light logic, automatic source fallback."
        },
        {
          "icon": "store",
          "name": "Web Shop",
          "description": "White-label customer shop under your own domain. Stock, prices and loyalty points automatically in sync. Stripe, PayPal and Mollie integrated."
        },
        {
          "icon": "gift",
          "name": "Loyalty Points",
          "description": "Tier system (Bronze/Silver/Gold), automatic crediting on order, voucher generator and Shopware plugin for displaying points at checkout."
        },
        {
          "icon": "receipt-text",
          "name": "Accounting",
          "description": "DATEV export, XRechnung/ZUGFeRD, SKR03 chart of accounts, 3-stage dunning, bank reconciliation. Accountant-ready out of the box."
        },
        {
          "icon": "chart-column",
          "name": "Reporting",
          "description": "Live dashboard with revenue trend, stock value, top 10 categories, dropshipping performance and low-stock alerts. Aggregated queries, no Excel export needed."
        }
      ]
    },
    "workflow": {
      "intro": "This is what an order lifecycle looks like in VertooERP:",
      "steps": [
        {
          "number": "01",
          "title": "Customer orders in the web shop",
          "description": "Stock is pulled live from inventory management — no double sales. Loyalty points are shown at checkout.",
          "module": "Web Shop · Inventory Mgmt · Loyalty Points"
        },
        {
          "number": "02",
          "title": "Order lands in inventory management",
          "description": "Warehouse items are picked. For dropshipping items, the order is automatically sent out to the supplier.",
          "module": "Inventory Mgmt · Warehouse · Dropshipping"
        },
        {
          "number": "03",
          "title": "Shipping and tracking",
          "description": "Shipping label created via the appropriate carrier (DHL/DPD/GLS/Hermes/UPS), tracking link sent automatically to the customer.",
          "module": "Inventory Mgmt · Shipping"
        },
        {
          "number": "04",
          "title": "Invoice and booking",
          "description": "Invoice created XRechnung-compliant, added to the open-items run, loyalty points credited. The DATEV export runs automatically every month.",
          "module": "Accounting · Loyalty Points"
        },
        {
          "number": "05",
          "title": "Analysis in reporting",
          "description": "Margin, return rate and customer value for this order — instantly visible in the dashboard, without a CSV export.",
          "module": "Reporting & Analytics"
        }
      ]
    },
    "faq": [
      {
        "q": "Which shop systems are supported?",
        "a": "Shopware 6 is natively integrated (OAuth2, product/stock sync, order import). In addition, there are API and webhook interfaces through which we can connect Shopify, WooCommerce and JTL-Shop. Migration of existing data from these systems is possible."
      },
      {
        "q": "How exactly does dropshipping work?",
        "a": "Three connection types are built in: BigBuy (Bearer-token API with taxonomies and CDN images), DropXL (Basic Auth, paginated products and order API) and JTL-Wawi (Bearer token, items and SalesOrders with a configurable customer number). Stock is synchronised every 15 minutes; orders are triggered automatically with the appropriate supplier upon order confirmation."
      },
      {
        "q": "Can we migrate existing data from JTL or Plentymarkets?",
        "a": "Yes. We typically import products, customers, suppliers and open orders via CSV/Excel exports and carry out a one-off mapping. For larger migrations we write a customer-specific importer — this is part of the separately bookable onboarding services, not of the licence."
      },
      {
        "q": "What happens if we still use JTL-Wawi in parallel?",
        "a": "This is a common transitional case. VertooERP supports JTL as a dropshipping source (items + SalesOrders) and can run alongside your existing system. For this supplementary use we grant reduced terms — simply get in touch with us."
      },
      {
        "q": "How long does implementation typically take?",
        "a": "Pure licence activation: immediate. A productive implementation with master-data import, interface setup and training typically takes 4–8 weeks for a classic 5–20-person retail operation, depending on the number of source systems to be integrated."
      },
      {
        "q": "Is there a minimum size at which VertooERP pays off?",
        "a": "The Starter plan is aimed at teams from 3 people upwards with 1–3 core modules (e.g. inventory management + accounting). Very small sole traders without warehousing/shipping processes are usually better served by a lean accounting solution. From around 5 people with a warehouse and multiple sales channels, the added value becomes apparent."
      }
    ],
    "cta": {
      "headline": "Let's talk about your shop.",
      "text": "In 30 minutes we'll show you the order lifecycle on your specific setup — including an interface check.",
      "primary": {
        "label": "Request a demo",
        "href": "/#kontakt"
      }
    }
  },
  {
    "slug": "dienstleister",
    "name": "Service Providers & Agencies",
    "icon": "briefcase",
    "metaTitle": "ERP for Service Providers & Agencies – VertooERP",
    "metaDescription": "Modular ERP for agencies and service providers: time tracking, project and task management, accounting, CRM and team chat. Self-hosting, GDPR- and GoBD-compliant.",
    "hero": {
      "eyebrow": "For Service Providers & Agencies",
      "headline": "From logged hour to paid invoice",
      "subhead": "Time tracking, projects, accounting and team communication in one platform. No more Excel timesheets, forgotten hours and invoices that sit around for weeks.",
      "primaryCta": {
        "label": "Request a demo",
        "href": "/#kontakt"
      },
      "secondaryCta": {
        "label": "View all modules",
        "href": "/#module"
      }
    },
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "clock",
          "title": "Hours slip through the cracks",
          "description": "Time is recorded on slips of paper, in calendars and in people's heads — at the end of the month, billable hours are missing, and with them real money."
        },
        {
          "icon": "folder-kanban",
          "title": "Projects without an overview",
          "description": "Who does what by when? Tasks are scattered across email, chat and sticky notes. Deadlines slip and no one has the full picture."
        },
        {
          "icon": "receipt-text",
          "title": "Invoices left sitting",
          "description": "Recorded work doesn't automatically make it onto the invoice. Billing is a chore at the end of the quarter instead of a single click."
        },
        {
          "icon": "book-open",
          "title": "Knowledge locked in people's heads",
          "description": "Processes, templates and client know-how aren't documented. When someone leaves, the knowledge leaves with them."
        }
      ]
    },
    "modules": {
      "intro": "These modules cover the day-to-day of a service business, from recording work to reporting.",
      "items": [
        {
          "icon": "clock",
          "name": "Time Tracking & Leave",
          "description": "Time clock, project-based time entries, holiday and absence management, overtime accounts — on mobile and desktop."
        },
        {
          "icon": "list-checks",
          "name": "Tasks & Projects",
          "description": "Kanban, list and calendar views with subtasks, ownership, @mentions, watchers and a full activity feed."
        },
        {
          "icon": "receipt-text",
          "name": "Accounting",
          "description": "Quotes, invoices and credit notes with service periods, open items, P&L/BWA, DATEV export and XRechnung/ZUGFeRD."
        },
        {
          "icon": "users",
          "name": "CRM",
          "description": "Customer and contact history across all modules — quotes, projects, invoices and communication at a glance."
        },
        {
          "icon": "message-square",
          "name": "Messages",
          "description": "Internal DMs, groups and channels with reactions, replies and file attachments — project-based communication without switching tools."
        },
        {
          "icon": "book-open",
          "name": "Knowledge Base",
          "description": "Processes, templates and onboarding knowledge as searchable Markdown articles with categories and a publishing workflow."
        },
        {
          "icon": "wallet",
          "name": "Cost Management",
          "description": "Keep track of fixed costs, salaries and SaaS subscriptions — with contracts, notice periods and monthly/annual overviews."
        },
        {
          "icon": "chart-column",
          "name": "Reporting & Analytics",
          "description": "Utilisation, billed vs. logged hours and project margins in a live dashboard instead of an Excel pivot table."
        }
      ]
    },
    "workflow": {
      "intro": "Here's how an engagement runs from enquiry to reporting:",
      "steps": [
        {
          "number": "01",
          "title": "Set up client & project",
          "description": "New client in the CRM, project set up with a budget and task structure — everything linked in one place.",
          "module": "CRM · Tasks & Projects"
        },
        {
          "number": "02",
          "title": "Team works & tracks time",
          "description": "Tasks on the Kanban board, time recorded per project. Every hour is assigned to a project and client.",
          "module": "Tasks · Time Tracking"
        },
        {
          "number": "03",
          "title": "Bill the work",
          "description": "Logged hours flow into the invoice — with the service period and the correct payment term from the client master data.",
          "module": "Time Tracking · Accounting"
        },
        {
          "number": "04",
          "title": "Track open items",
          "description": "Invoice in the open-items run, automatic payment reminders, DATEV export for the tax adviser at the end of the month.",
          "module": "Accounting"
        },
        {
          "number": "05",
          "title": "Analyse utilisation",
          "description": "Which project was profitable, who is over- or under-utilised? Instantly visible in Reporting.",
          "module": "Reporting & Analytics"
        }
      ]
    },
    "faq": [
      {
        "q": "Can staff record time on mobile?",
        "a": "Yes. VertooERP is a PWA and can be installed like a native app on smartphones and tablets. Time, tasks and absences can be recorded on the go – no app store required, with web push notifications."
      },
      {
        "q": "Can logged hours be billed directly?",
        "a": "Project-based time entries can be consolidated into invoice line items in the accounting module – with the service period and the payment term stored in the client master data. This saves manually transferring data from separate timesheets."
      },
      {
        "q": "Is there permission/role control for freelancers and permanent staff?",
        "a": "Yes. Through the 4-tier role system (super admin, module admin, team lead, employee) and per-user configurable module access, external freelancers only see the projects and functions released to them."
      },
      {
        "q": "Can we manage multiple locations or subsidiaries?",
        "a": "Yes. Multi-location and multi-tenant support is included in all plans. Using the location switcher, team, costs and data are filtered per location; multiple companies can be run separately."
      },
      {
        "q": "Is the accounting suitable for tax advisers?",
        "a": "Yes. DATEV export, the SKR03 chart of accounts, VAT return, GoBD-compliant tamper-proof documents and XRechnung/ZUGFeRD are built in. Your tax adviser receives the data in the familiar format."
      },
      {
        "q": "How quickly is an agency up and running?",
        "a": "The licence is active immediately. A productive rollout with master data, project structure and training typically takes 2–4 weeks for a team of 5–20 people – time tracking and tasks can often be used as early as the first week."
      }
    ],
    "cta": {
      "headline": "Show us your project business.",
      "text": "In 30 minutes we'll show you the path from logged hour to invoice, based on your specific setup.",
      "primary": {
        "label": "Request a demo",
        "href": "/#kontakt"
      }
    }
  },
  {
    "slug": "produktion",
    "name": "Manufacturing & Logistics",
    "icon": "factory",
    "metaTitle": "ERP for Manufacturing & Logistics – VertooERP",
    "metaDescription": "Modular ERP for manufacturing and logistics operations: inventory management, warehouse management with zones, goods receipt, shipping and stocktaking. Self-hosting, GDPR- and GoBD-compliant.",
    "hero": {
      "eyebrow": "For Manufacturing & Logistics",
      "headline": "Materials, warehouse and shipping – fully traceable, end to end",
      "subhead": "From goods receipt through warehouse management to shipping: a continuous, auditable flow of goods. No more stock discrepancies, time wasted searching the warehouse, or replenishment that arrives too late.",
      "primaryCta": {
        "label": "Request a demo",
        "href": "/#kontakt"
      },
      "secondaryCta": {
        "label": "View all modules",
        "href": "/#module"
      }
    },
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "package-x",
          "title": "Stock is never accurate",
          "description": "Target and actual figures diverge. No one trusts the numbers, so orders or counts are duplicated just to be safe."
        },
        {
          "icon": "warehouse",
          "title": "Searching instead of finding",
          "description": "Goods are stored „somewhere“. Without a clear storage-location structure, every pick takes minutes that add up over the year."
        },
        {
          "icon": "truck",
          "title": "Goods receipt as a bottleneck",
          "description": "Deliveries are booked in on an ad-hoc basis, quantities don't match, and complaints can't be reconstructed later."
        },
        {
          "icon": "trending-down",
          "title": "Replenishment arrives too late",
          "description": "Minimum stock levels aren't defined. Shortages only become apparent once production or shipping has already ground to a halt."
        }
      ]
    },
    "modules": {
      "intro": "These modules map the physical flow of goods completely and auditably.",
      "items": [
        {
          "icon": "package",
          "name": "Inventory Management",
          "description": "Unified product catalogue (one entry per EAN), master data, stock management with audit trail, barcode scanner, bundles and bills of materials (BOM)."
        },
        {
          "icon": "warehouse",
          "name": "Warehouse Management",
          "description": "Multiple warehouses with a zone/aisle/rack/bin hierarchy, product-to-storage-location assignment, transfers and a fill-level indicator."
        },
        {
          "icon": "truck",
          "name": "Goods Receipt",
          "description": "Structured goods receipt (Draft → Booked → Cancelled), optionally linked to a purchase order, with quantity checks and cancellation with reverse posting."
        },
        {
          "icon": "clipboard-check",
          "name": "Stocktaking",
          "description": "Location-based counting with target/actual comparison and automatic correction posting — no more Excel count sheets."
        },
        {
          "icon": "send",
          "name": "Shipping",
          "description": "Carrier tracking for DHL, DPD, GLS, Hermes and UPS, shipping labels and automatic tracking links sent to the recipient."
        },
        {
          "icon": "shopping-cart",
          "name": "Purchasing",
          "description": "Purchase orders with number ranges, supplier management and minimum-stock alerts, so that replenishment is triggered in good time."
        },
        {
          "icon": "clipboard-list",
          "name": "Operating Resources",
          "description": "Request workflow for consumables and tools, IT inventory with employee assignment and booking history."
        },
        {
          "icon": "chart-column",
          "name": "Reporting & Analytics",
          "description": "Stock value, top categories, low-stock alerts and throughput metrics in a live dashboard instead of a monthly export."
        }
      ]
    },
    "workflow": {
      "intro": "Here's how goods move from receipt to stocktaking:",
      "steps": [
        {
          "number": "01",
          "title": "Record goods receipt",
          "description": "Delivery checked against the purchase order, quantities recorded, booked in. Stock increases automatically, everything captured in the audit trail.",
          "module": "Goods Receipt · WaWi"
        },
        {
          "number": "02",
          "title": "Put away to storage location",
          "description": "Goods are assigned to specific zones/bins. Everyone knows where everything is — picking becomes fast and low-error.",
          "module": "Warehouse Management"
        },
        {
          "number": "03",
          "title": "Pick & produce",
          "description": "Orders draw down stock, bills of materials resolve their components. A minimum-stock alert triggers reordering.",
          "module": "WaWi · Purchasing"
        },
        {
          "number": "04",
          "title": "Ship & track",
          "description": "Shipping label via the appropriate carrier, tracking link automatically sent to the recipient, stock finally booked.",
          "module": "Shipping"
        },
        {
          "number": "05",
          "title": "Stocktaking & analysis",
          "description": "Location-based counting with automatic correction, stock value and throughput immediately available in reporting.",
          "module": "Stocktaking · Reporting"
        }
      ]
    },
    "faq": [
      {
        "q": "Does VertooERP support barcode scanners?",
        "a": "Yes. Stock movements, goods receipt and stocktaking can be recorded using a barcode scanner. As VertooERP runs as a PWA on mobile devices, the camera of a smartphone or tablet can also be used as a scanner."
      },
      {
        "q": "Can we map multiple warehouses and locations?",
        "a": "Yes. Warehouse management supports multiple warehouses with a zone/aisle/rack/bin tree structure, transfers between zones and location-based stocktaking. Multi-location is included in all plans."
      },
      {
        "q": "Are there bills of materials / production breakdown?",
        "a": "Yes. Bundles and bills of materials (BOM) are mapped in inventory management. On order confirmation, components can be automatically resolved and drawn down from stock."
      },
      {
        "q": "How does the minimum-stock alert work?",
        "a": "A minimum stock level can be defined per item. Shortfalls appear as a low-stock alert in the dashboard and in the stock overview, so that reorders are triggered in good time via the purchasing module."
      },
      {
        "q": "Is every stock movement traceable?",
        "a": "Yes. Receipts, issues, transfers and stocktaking corrections are logged with an audit trail (who, when, what). This meets traceability and GoBD (German tax-compliance principles) requirements for stock-managed items."
      },
      {
        "q": "Can VertooERP be connected to machines or existing systems?",
        "a": "External systems can be connected via the webhook module (events such as product.stock_changed, order.created) and the REST API. Customer-specific interfaces are available as a separately bookable onboarding service."
      }
    ],
    "cta": {
      "headline": "Show us your flow of goods.",
      "text": "In 30 minutes we'll walk through the path from goods receipt to stocktaking on your specific setup.",
      "primary": {
        "label": "Request a demo",
        "href": "/#kontakt"
      }
    }
  },
  {
    "slug": "handwerk",
    "name": "Trades & Construction",
    "icon": "wrench",
    "metaTitle": "ERP for Trades & Construction – VertooERP",
    "metaDescription": "Modular ERP for trades and construction: mobile time tracking, equipment and tool management, fleet, per-job cost control and accounting. Self-hosting, GDPR- and GoBD-compliant.",
    "hero": {
      "eyebrow": "For Trades & Construction",
      "headline": "Stay on top of your business – even from the building site",
      "subhead": "Mobile time tracking, tool and material management, fleet and per-job cost control. No more paper timesheets, missing tools, or projects whose margin only becomes visible at the very end.",
      "primaryCta": {
        "label": "Request a demo",
        "href": "/#kontakt"
      },
      "secondaryCta": {
        "label": "View all modules",
        "href": "/#module"
      }
    },
    "painpoints": {
      "intro": "Sound familiar?",
      "items": [
        {
          "icon": "clock",
          "title": "Hours on paper",
          "description": "Working hours are jotted down on site and typed up in the office — error-prone, delayed, and hard to attribute to a specific site."
        },
        {
          "icon": "package-search",
          "title": "Tools & materials go missing",
          "description": "Which machine is on which site? What is still in the warehouse? Without an inventory, things are bought twice and still have to be searched for."
        },
        {
          "icon": "car",
          "title": "Fleet without overview",
          "description": "Vehicles, appointments, costs — spread across people and folders. Maintenance and inspections only come to attention once it is too late."
        },
        {
          "icon": "wallet",
          "title": "Margin only visible at the end",
          "description": "Materials, hours and travel costs run unbundled. Whether a job was profitable only becomes clear on the final invoice."
        }
      ]
    },
    "modules": {
      "intro": "These modules bring the office and the building site together — on any device.",
      "items": [
        {
          "icon": "clock",
          "name": "Mobile time tracking",
          "description": "Clock-in and absences directly on the smartphone (PWA). Times can be assigned to jobs — without paper slips or retyping."
        },
        {
          "icon": "clipboard-list",
          "name": "Equipment & tools",
          "description": "Device inventory with employee assignment and serial number, consumables with minimum stock levels and a request workflow."
        },
        {
          "icon": "car",
          "name": "Fleet",
          "description": "Vehicle management as part of the cost module — vehicles, assigned costs and master data in one place instead of in a folder."
        },
        {
          "icon": "wallet",
          "name": "Cost management",
          "description": "Fixed costs, salaries, fleet and SaaS subscriptions at a glance, with monthly and annual views — the basis for clean costing."
        },
        {
          "icon": "list-checks",
          "name": "Tasks & projects",
          "description": "Building sites and jobs as projects with tasks, responsibilities and deadlines — on the board or in the calendar."
        },
        {
          "icon": "receipt-text",
          "name": "Accounting",
          "description": "Quotes, invoices and credit notes with GoBD-compliant documents, DATEV export, XRechnung/ZUGFeRD and a 3-stage dunning process."
        },
        {
          "icon": "message-square",
          "name": "Messages",
          "description": "Direct communication between the office and the team on site — DMs, groups and channels with file attachments."
        },
        {
          "icon": "users",
          "name": "CRM",
          "description": "Customer and order history in one place — traceable from the enquiry through the quote to the final invoice."
        }
      ]
    },
    "workflow": {
      "intro": "This is how a job runs from acceptance to final invoice:",
      "steps": [
        {
          "number": "01",
          "title": "Order & quote",
          "description": "Customer in the CRM, quote created in accounting. On acceptance, it becomes an order with tasks and deadlines.",
          "module": "CRM · Accounting · Tasks"
        },
        {
          "number": "02",
          "title": "Assign tools & materials",
          "description": "The required tools and materials are assigned to the site, consumption is booked, and replenishment is requested when the minimum stock is reached.",
          "module": "Equipment"
        },
        {
          "number": "03",
          "title": "Track time on site",
          "description": "The team clocks in on mobile and assigns hours to the job — including travel times, directly on the smartphone.",
          "module": "Mobile time tracking"
        },
        {
          "number": "04",
          "title": "Bundle costs",
          "description": "Hours, materials and fleet costs come together on the job — the margin is visible before the invoice goes out.",
          "module": "Cost management"
        },
        {
          "number": "05",
          "title": "Invoice & analyse",
          "description": "Final invoice created GoBD-compliant, entered into the open-items run, DATEV export for the tax advisor. Job analysed.",
          "module": "Accounting · Reporting"
        }
      ]
    },
    "faq": [
      {
        "q": "Does time tracking work without internet on the building site?",
        "a": "VertooERP is an installable PWA. The interface and most recently loaded data remain usable during brief connection drops; entries are synchronised as soon as a connection is available again. For continuous offline capture, we recommend an advance check based on your specific site scenario."
      },
      {
        "q": "Can we assign tools and machines to individual employees?",
        "a": "Yes. The IT/device inventory in the Equipment module records each device with a serial number and an assignment to the employee (assigned_to). This makes it clear at all times who has which device."
      },
      {
        "q": "Can costs be analysed per job or building site?",
        "a": "Hours, material consumption and costs can be bundled via projects/jobs. Combined with the cost and reporting module, the margin per job becomes visible. We set up in-depth construction post-costing (e.g. by trade) as an onboarding service where required."
      },
      {
        "q": "Are there measurement (Aufmaß) or GAEB functions?",
        "a": "Honest answer: VertooERP is a modular ERP, not specialised construction measurement software. Measurement and GAEB interfaces are not built in. Its strengths lie in time, equipment, costs and accounting — often complementing a measurement solution. For complementary use, we grant reduced rates."
      },
      {
        "q": "Is invoicing GoBD-compliant?",
        "a": "Yes. Documents are immutable with an audit trail, plus DATEV export, SKR03, XRechnung/ZUGFeRD and a 3-stage dunning process. This makes billing audit-proof and suitable for tax advisors."
      },
      {
        "q": "From how many employees is it worthwhile?",
        "a": "From around 3–5 employees working on building sites, the benefit becomes apparent — above all through mobile time tracking and the tool/material overview. The Starter plan covers up to 3 modules and 3 seats and can be expanded at any time."
      }
    ],
    "cta": {
      "headline": "Show us your business.",
      "text": "In 30 minutes, we show how the office and the building site come together in VertooERP — based on your specific setup.",
      "primary": {
        "label": "Request a demo",
        "href": "/#kontakt"
      }
    }
  }
];
