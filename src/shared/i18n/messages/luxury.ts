import type { Locale } from "../locale";
import {
  getLuxuryPlatformMessages,
  type LuxuryPlatformMessages,
} from "./luxury-platform";

export type LuxuryMessages = LuxuryPlatformMessages & {
  brand: { name: string; tagline: string };
  nav: {
    home: string;
    villas: string;
    projects: string;
    design3d: string;
    interiorDesign: string;
    construction: string;
    ourWork: string;
    developers: string;
    about: string;
    contact: string;
    professionals: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    servicesLine: string;
    tags: readonly string[];
    ctaPrimary: string;
    ctaSecondary: string;
    ctaSample: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  stats: {
    items: readonly { value: string; label: string }[];
  };
  execution: {
    badge: string;
    title: string;
    subtitle: string;
    points: readonly string[];
    cta: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    items: readonly { title: string; description: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: readonly {
      title: string;
      description: string;
      cta: string;
      href: string;
    }[];
  };
  why: {
    eyebrow: string;
    title: string;
    items: readonly { title: string; description: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    items: readonly { title: string; category: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    steps: readonly { title: string; description: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: readonly { quote: string; author: string; role: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  quoteForm: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formCity: string;
    formCountry: string;
    formProducts: string;
    formQuantity: string;
    formFile: string;
    formFileHint: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formError: string;
    products: readonly { value: string; label: string }[];
    countries: readonly { value: string; label: string }[];
  };
  footer: {
    about: string;
    quickLinks: string;
    importantLinks: string;
    servicesLinks: string;
    solutionsLinks: string;
    offices: string;
    countries: {
      saudiArabia: string;
      oman: string;
      bahrain: string;
      egypt: string;
    };
    contact: string;
    callNow: string;
    followUs: string;
    affiliation: string;
    affiliationLink: string;
    affiliationSuffix: string;
    legalNotice: string;
    privacy: string;
    terms: string;
    address: string;
    email: string;
    phone: string;
    sponsoredBy: string;
    solutions: {
      modularKitchens: string;
      wardrobes: string;
      b2bJoinery: string;
    };
  };
  pages: {
    interiorDesign: { title: string; intro: string };
    construction: { title: string; intro: string };
    ourWork: {
      title: string;
      intro: string;
      caseStudyContactCta: string;
    };
    portfolio: {
      eyebrow: string;
      title: string;
      intro: string;
      gateEyebrow: string;
      gateTitle: string;
      gateIntro: string;
      gateNote: string;
      formName: string;
      formCompany: string;
      formWorkEmail: string;
      formWorkEmailPlaceholder: string;
      formSubmit: string;
      formLoading: string;
      formError: string;
      formErrorPersonal: string;
      formErrorInvalid: string;
      viewerEyebrow: string;
      viewerTitle: string;
      downloadCta: string;
      fullscreenCta: string;
      exitFullscreenCta: string;
      footerNote: string;
      footerContact: string;
    };
    about: { title: string; intro: string };
    contact: {
      title: string;
      intro: string;
      formName: string;
      formEmail: string;
      formPhone: string;
      formProjectType: string;
      formMessage: string;
      formSubmit: string;
      formSuccess: string;
      formError: string;
      projectTypes: readonly { value: string; label: string }[];
    };
    villas: {
      title: string;
      intro: string;
      steps: readonly { title: string; description: string }[];
      ctaDesign: string;
      ctaContact: string;
      segments: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: readonly { title: string; description: string; tag: string }[];
      };
      kitchens: {
        eyebrow: string;
        title: string;
        intro: string;
        highlights: readonly { title: string; description: string }[];
        cta: string;
      };
      wardrobes: {
        eyebrow: string;
        title: string;
        intro: string;
        highlights: readonly { title: string; description: string }[];
        cta: string;
      };
      gallery: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: readonly { title: string; category: string }[];
        cta: string;
      };
      formSection: {
        title: string;
        subtitle: string;
      };
      faq: {
        eyebrow: string;
        title: string;
        items: readonly { q: string; a: string }[];
      };
    };
    projects: {
      title: string;
      intro: string;
      ctaBrief: string;
      ctaSample: string;
      segments: {
        eyebrow: string;
        title: string;
        subtitle: string;
        items: readonly { title: string; description: string; tag: string }[];
      };
      steps: readonly { title: string; description: string }[];
      highlights: readonly { title: string; description: string }[];
      programme: {
        eyebrow: string;
        title: string;
        intro: string;
        highlights: readonly { title: string; description: string }[];
        cta: string;
      };
      formSection: {
        title: string;
        subtitle: string;
      };
      faq: {
        eyebrow: string;
        title: string;
        items: readonly { q: string; a: string }[];
      };
      formTitle: string;
      formCompany: string;
      formUnits: string;
      formProducts: string;
      formSubmit: string;
      formEmail: string;
      productOptions: readonly { value: string; label: string }[];
    };
    design: { title: string; intro: string };
    styles: {
      title: string;
      intro: string;
      disclaimer: string;
      filters: {
        all: string;
        italian: string;
        french: string;
        contemporary: string;
        minimal: string;
      };
      cta: string;
      lightboxOpen: string;
      lightboxClose: string;
      items: readonly {
        id: string;
        category: "italian" | "french" | "contemporary" | "minimal";
        title: string;
        description: string;
        materials: string;
      }[];
    };
  };
};

const en: LuxuryMessages = {
  ...getLuxuryPlatformMessages("en"),
  brand: { name: "Turriva", tagline: "Spatial Design · Experience · Build" },
  nav: {
    home: "Home",
    villas: "Residential",
    projects: "Commercial",
    design3d: "Discuss a project",
    interiorDesign: "Interior design",
    construction: "Delivery & build",
    ourWork: "Our work",
    developers: "Project experience",
    about: "About",
    contact: "Contact",
    professionals: "For professionals",
  },
  hero: {
    eyebrow: "A Tasami Group company · Saudi Arabia",
    title: "From idea to a space you can enter.",
    subtitle:
      "Turriva designs and delivers spaces for homes, businesses, hospitality, and real estate. Clear scope. One team. From drawings to handover.",
    servicesLine: "Spatial Design · Experience · Build",
    tags: ["Spatial Design", "Experience", "Build"],
    ctaPrimary: "Discuss your project",
    ctaSecondary: "Project experience",
    ctaSample: "Send the drawings",
  },
  intro: {
    eyebrow: "How we work",
    title: "Design with intent. Delivery with care.",
    body:
      "A finished space should feel inevitable — materials, light, and detail working together. One team stays with the work from samples to handover, with clear updates at every stage.",
  },
  stats: {
    items: [
      { value: "1 team", label: "Design through handover" },
      { value: "Samples", label: "Approved before fabrication" },
      { value: "Site", label: "Delivered in Saudi Arabia" },
      { value: "Scope", label: "Agreed before we start" },
    ],
  },
  execution: {
    badge: "Design & site delivery",
    title: "What you approve is what we build.",
    subtitle:
      "Joinery, stone, lighting, and furnishings follow approved boards. Trades are coordinated on site until the space matches the signed design.",
    points: [
      "Samples and sign-off before bulk orders",
      "Execution drawings aligned with your design team",
      "Site leadership through snagging and handover",
    ],
    cta: "Talk to our team",
  },
  capabilities: {
    eyebrow: "Capabilities",
    title: "What Turriva can execute",
    items: [
      {
        title: "Spatial design",
        description: "The plan, materials, and how the room is used. A capability inside a product, not a product of its own.",
      },
      {
        title: "Technical development",
        description: "Shop drawings, quantities, and a specification that can be built.",
      },
      {
        title: "Joinery and fabrication",
        description: "Custom joinery to the drawings. Support for kitchens and wardrobes when the room needs them, not as the brand identity.",
      },
      {
        title: "Fit-out and experience",
        description: "Installation, handover, and experience integration only when the project requires it.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Where clients start with Turriva",
    items: [
      {
        title: "Interior design & decor",
        description:
          "Layout, materials, lighting, and styling for villas, apartments, palaces, and majlis, from first sketch to installation.",
        cta: "Interior design",
        href: "/interior-design",
      },
      {
        title: "Project delivery on site",
        description:
          "Trade coordination, quality checks, and documented handover so finishes survive the build programme intact.",
        cta: "Delivery & build",
        href: "/construction",
      },
      {
        title: "Exhibition & booth builds",
        description:
          "Campaign-ready stands: concept, fabrication, on-site dressing, and strike when the event ends.",
        cta: "Send a brief",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "Why Turriva",
    title: "Disciplined quality, considered service",
    items: [
      {
        title: "Contemporary, place-aware design",
        description: "A global design language adapted to Gulf hospitality and daily life, never a template lifted from elsewhere.",
      },
      {
        title: "Materials you can trust",
        description: "Wood, stone, metal, and textiles specified for how they look on day one and perform over years.",
      },
      {
        title: "One accountable team",
        description: "Designers and site leads who stay with your file, fewer handoffs, clearer decisions.",
      },
      {
        title: "Commitment through handover",
        description: "Precise scope, regular updates, and closed snagging lists before we sign off the space.",
      },
    ],
  },
  projects: {
    eyebrow: "Typical scopes",
    title: "A finished space, not a furniture list.",
    subtitle:
      "Illustrative work: sales environments, hospitality, and fit-out. Named studies on Our work are labelled as team experience until a Turriva contract is confirmed.",
    cta: "Project experience",
    items: [
      { title: "Sales gallery and show villa", category: "Developers" },
      { title: "Hospitality reception and suites", category: "Hospitality" },
      { title: "Fit-out and joinery from drawings", category: "Execution" },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "From first meeting to handover",
    steps: [
      {
        title: "Listen & brief",
        description: "We visit or workshop your needs, lifestyle, programme, and how you measure success.",
      },
      {
        title: "Design & approve",
        description: "Concepts, layouts, and material boards for your sign-off before major spend.",
      },
      {
        title: "Build & coordinate",
        description: "Workshop and site under one Turriva programme with regular progress updates.",
      },
      {
        title: "Handover & care",
        description: "Snagging, final styling, and walk-through so you move in or open with confidence.",
      },
    ],
  },
  testimonials: {
    eyebrow: "From the field",
    title: "Notes from recent projects",
    items: [],
  },
  cta: {
    title: "Tell us the space, the date, and what has to be finished.",
    subtitle:
      "A short brief is enough. We reply within one business day, and we will say if the scope is not ours.",
    button: "Talk to Turriva",
  },
  quoteForm: {
    title: "Discuss your project",
    subtitle:
      "Send the drawings, or describe the space. Cost follows the scope. It is not a price sent before we have read the work.",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Phone / WhatsApp",
    formCity: "City",
    formCountry: "Country",
    formProducts: "What is the job",
    formQuantity: "Quantity / area",
    formFile: "Upload file",
    formFileHint: "Floor plans, PDFs, or images (optional)",
    formMessage:
      "Message: Is this for a commercial project or a home? Please share project details or floor plans.",
    formSubmit: "Submit",
    formSuccess: "Thank you. We will contact you within 24 hours.",
    formError: "Something went wrong. Please try again, WhatsApp us, or email info@turriva.com.",
    products: [
      { value: "real-estate", label: "Real estate project experience" },
      { value: "show-unit", label: "Show unit" },
      { value: "design-build", label: "Design and build" },
      { value: "fit-out", label: "Fit-out and execution" },
      { value: "commercial", label: "Commercial spaces" },
      { value: "hospitality", label: "Hospitality spaces" },
      { value: "renovation", label: "Renovation and upgrade" },
      { value: "other", label: "Other" },
    ],
    countries: [
      { value: "sa", label: "Saudi Arabia" },
      { value: "ae", label: "United Arab Emirates" },
      { value: "om", label: "Oman" },
      { value: "bh", label: "Bahrain" },
      { value: "eg", label: "Egypt" },
      { value: "other", label: "Other" },
    ],
  },
  footer: {
    about:
      "Turriva designs and builds spaces and experiences. Execution is part of the product, not the whole identity. Hire Turriva alone. The group joins only when the project needs it.",
    quickLinks: "Quick Links",
    importantLinks: "Important Links",
    servicesLinks: "Capabilities",
    solutionsLinks: "Solutions",
    offices: "Offices",
    countries: {
      saudiArabia: "Saudi Arabia",
      oman: "Oman",
      bahrain: "Bahrain",
      egypt: "Egypt",
    },
    contact: "Contact",
    callNow: "Call now",
    followUs: "Follow us",
    affiliation: "Turriva is part of",
    affiliationLink: "Tasami Group",
    affiliationSuffix: "",
    legalNotice: "© 2026 Turriva. All rights reserved | CR: 7054412114 | VAT: 314808998900003",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    address: "Jeddah, Al-Zahra District, Saudi Arabia",
    email: "info@turriva.com",
    phone: "+966 50 278 6513",
    sponsoredBy: "Turriva",
    solutions: {
      modularKitchens: "Modular kitchens",
      wardrobes: "Wardrobes & walk-ins",
      b2bJoinery: "B2B joinery",
    },
  },
  pages: {
    interiorDesign: {
      title: "Interior execution",
      intro:
        "Turriva develops approved interior concepts into technical details, material packages, fabrication scopes, coordinated installation, and completed spaces.",
    },
    construction: {
      title: "Fit-out and delivery",
      intro:
        "Turriva manages physical delivery on site, coordinating fabrication, trades, installation, quality control, snagging, and documented handover.",
    },
    ourWork: {
      title: "Our work",
      intro:
        "Selected team experience and typical scopes. Named programmes are not presented as historical Turriva contracts unless that attribution is confirmed.",
      caseStudyContactCta: "Discuss a similar project",
    },
    portfolio: {
      eyebrow: "Execution portfolio",
      title: "Turriva Folio 2026",
      intro:
        "The complete 2026 folio PDF is available on this page only. Register with your company work email to view or download. The document stays hidden until access is verified. Personal email providers are not accepted.",
      gateEyebrow: "Professional access",
      gateTitle: "View the Turriva folio",
      gateIntro:
        "Enter your details to open the PDF. We verify that your email belongs to a company domain. Personal addresses (Gmail, Hotmail, iCloud, and similar) are not accepted.",
      gateNote: "Your information is used only to follow up on relevant B2B opportunities.",
      formName: "Full name",
      formCompany: "Company / organisation",
      formWorkEmail: "Work email",
      formWorkEmailPlaceholder: "you@yourcompany.com",
      formSubmit: "Open portfolio",
      formLoading: "Verifying access…",
      formError: "Something went wrong. Please try again or contact us directly.",
      formErrorPersonal:
        "Please use your company email address. Personal providers such as Gmail, Yahoo, Hotmail, and iCloud cannot be accepted.",
      formErrorInvalid: "Please enter a valid work email address.",
      viewerEyebrow: "Turriva Folio 2026",
      viewerTitle: "Execution portfolio",
      downloadCta: "Download PDF",
      fullscreenCta: "Full screen",
      exitFullscreenCta: "Exit full screen",
      footerNote: "Need a printed copy or a walkthrough with our team?",
      footerContact: "Contact Turriva",
    },
    about: {
      title: "About Turriva",
      intro:
        "Turriva designs and delivers spaces and experiences — spatial design, technical development, fit-out, and handover. Execution is part of the offer, not the whole brand. Contract Turriva alone; the group joins only when the project needs it.",
    },
    contact: {
      title: "Contact Turriva",
      intro: "Tell us about the project, or send the drawings. Scope comes first. Cost follows.",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone / WhatsApp",
      formProjectType: "Project type",
      formMessage: "A short note on the project",
      formSubmit: "Send message",
      formSuccess: "Thank you. We will reply within one business day.",
      formError: "Something went wrong. Try again, WhatsApp us, or email info@turriva.com.",
      projectTypes: [
        { value: "villa", label: "Private villa" },
        { value: "developer", label: "Developer / B2B project" },
        { value: "hospitality", label: "Hotel / hospitality" },
        { value: "sample", label: "Sample kit request" },
        { value: "other", label: "Other" },
      ],
    },
    villas: {
      title: "Residential, hospitality & retail execution",
      intro:
        "Turriva manages physical delivery for villas, hotels, restaurants, and retail, from technical development and material approval through fabrication, installation, and local warranty.",
      steps: [
        { title: "3D design session", description: "Upload your plan or book a visit. Layouts follow the drawings, not a factory catalogue." },
        { title: "Samples & sign-off", description: "Physical finishes and hardware references before we order." },
        { title: "Manufacture & import", description: "Made to the drawings. Import marks stay with the supplier, not as a Turriva certificate." },
        { title: "Install & warranty", description: "Site install and local after-sales support." },
      ],
      ctaDesign: "Start 3D design",
      ctaContact: "Book a fit-out consultation",
      segments: {
        eyebrow: "Who we serve",
        title: "One journey for private homes and premium spaces",
        subtitle:
          "Whether you are finishing a family villa, a boutique hotel suite, or a flagship store, one Turriva execution team manages samples, fabrication, installation, and handover.",
        items: [
          {
            tag: "Residential",
            title: "Villas & private homes",
            description:
              "Majlis, kitchens, walk-ins, and whole-home joinery, with a contemporary Gulf character and materials chosen for climate and daily life.",
          },
          {
            tag: "Hospitality",
            title: "Hotels & F&B",
            description:
              "Lobby joinery, guest suites, and restaurant fit-out with finishes that survive real footfall and operational wear.",
          },
          {
            tag: "Commercial",
            title: "Retail & showrooms",
            description:
              "Brand-forward boutiques, sales suites, and premium retail interiors that carry your identity from first sketch to opening day.",
          },
        ],
      },
      kitchens: {
        eyebrow: "When the room needs them",
        title: "Kitchens, when the room needs them",
        intro:
          "Modular systems with moisture-resistant cores, PET and lacquer finishes, and soft-close hardware. They are specified, sampled on site, then fabricated to the approved drawings.",
        highlights: [
          {
            title: "Island & galley layouts",
            description: "Central islands, parallel runs, and hidden storage tuned to the floor plan and the approved drawings.",
          },
          {
            title: "Finishes you approve first",
            description: "Physical boards and hardware references before manufacturing, so installation does not start with surprises.",
          },
          {
            title: "Laser survey & install",
            description: "Site verification, coordinated trades, and snagging until the kitchen matches the signed design.",
          },
        ],
        cta: "Discuss your kitchen",
      },
      wardrobes: {
        eyebrow: "Wardrobes & walk-ins",
        title: "Walk-in closets and dressing rooms with hidden luxury",
        intro:
          "Integrated lighting, glass inserts, and hydraulic fittings in layouts designed around how you dress, store, and live, not catalogue boxes forced into your space.",
        highlights: [
          {
            title: "Master suite programmes",
            description: "His-and-hers zones, shoe walls, and jewellery drawers with soft-close throughout.",
          },
          {
            title: "Hotel & staff wardrobes",
            description: "Repeatable modules for guest suites and back-of-house storage on boutique hospitality projects.",
          },
          {
            title: "Made to the drawings",
            description: "Each elevation follows the approved drawings. Hardware is specified for the project, not taken from a house catalogue.",
          },
        ],
        cta: "Plan your wardrobes",
      },
      gallery: {
        eyebrow: "On site",
        title: "Spaces we have delivered",
        subtitle: "A selection of kitchens, wardrobes, and joinery programmes across Saudi Arabia.",
        items: [
          { category: "Kitchen", title: "Private villa, Jeddah" },
          { category: "Walk-in", title: "Master suite, Makkah" },
          { category: "Joinery", title: "Hospitality programme" },
        ],
        cta: "View full portfolio",
      },
      formSection: {
        title: "Start your project with Turriva",
        subtitle:
          "Share your floor plan, space type, and timeline. We respond within one business day with next steps for 3D design, samples, or a site visit.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Questions about villas, hotels & retail fit-out",
        items: [
          {
            q: "Do you only work on villas?",
            a: "No. This page covers single-owner projects: villas, apartments, boutique hotels, restaurants, and premium retail. Multi-unit developer programmes are on Commercial & exhibitions.",
          },
          {
            q: "How long from design to install?",
            a: "Typical programmes run 8 to 14 weeks after sample sign-off, depending on scope, import lead times, and site readiness. We confirm a schedule at drawing approval.",
          },
          {
            q: "Can I see materials before ordering?",
            a: "Yes. We can send finish references and review the drawings before anything is manufactured.",
          },
          {
            q: "What warranty do you offer?",
            a: "Warranty follows the contract for the work we deliver. Board grade and hardware follow the specification. We do not publish a factory certificate we have not issued.",
          },
          {
            q: "How do I start?",
            a: "Book a 3D design session, request a sample kit, or submit the form below with your plan. We route you to the right Turriva studio lead.",
          },
        ],
      },
    },
    projects: {
      title: "Commercial, exhibition & B2B execution",
      intro:
        "Turriva delivers commercial interiors, exhibition environments, developer programmes, and hospitality rollouts through coordinated technical development, fabrication, installation, and phased handover.",
      ctaBrief: "Submit B2B brief",
      ctaSample: "Request sample kit",
      segments: {
        eyebrow: "Who we serve",
        title: "Built for multi-unit programmes",
        subtitle:
          "Whether you are a developer, main contractor, or hospitality operator scaling fit-out across many units, we structure supply, drawings, and installation to your programme.",
        items: [
          {
            tag: "Developers",
            title: "Residential towers & compounds",
            description:
              "Volume MOQ pricing, repeatable module specs, and phased logistics aligned to your handover schedule.",
          },
          {
            tag: "Contractors",
            title: "Main contractors & GCs",
            description:
              "Shop drawings from the approved design, and Turriva site supervision through snagging.",
          },
          {
            tag: "Hospitality",
            title: "Hotels & F&B chains",
            description:
              "Batch production for guest rooms, back-of-house, and public areas with consistent finishes across properties.",
          },
        ],
      },
      steps: [
        { title: "Programme brief", description: "Unit mix, BOQ scope, sample boards, and delivery phasing agreed upfront." },
        { title: "Shop drawings", description: "Execution drawings from the approved design, on an agreed timeline." },
        { title: "Manufacture & import", description: "Made to the drawings. Conformity marks stay with the supplier." },
        { title: "Phased install", description: "Turriva site teams, snagging lists, and handover documentation per phase." },
      ],
      highlights: [
        { title: "MOQ & volume pricing", description: "Structured discounts for residential towers, compounds, and hospitality batches." },
        { title: "Shop drawings", description: "Execution drawings from the approved design, on an agreed timeline." },
        { title: "Import & storage", description: "Import and staged delivery follow the programme. Conformity marks stay with the supplier." },
        { title: "Site teams", description: "Turriva supervisors through snagging and handover documentation." },
      ],
      programme: {
        eyebrow: "Phased delivery",
        title: "One programme lead from factory to floor plate",
        intro:
          "Multi-tower and hospitality programmes need more than a product. They need predictable phasing, compliant import, and install teams that show up when the slab is ready.",
        highlights: [
          {
            title: "Staged shipments",
            description: "Kitchen and wardrobe batches released per tower, floor, or zone, not one overwhelming delivery.",
          },
          {
            title: "Compliance pack",
            description: "We pass through the supplier's documents. We do not issue a Turriva conformity certificate.",
          },
          {
            title: "Snagging & sign-off",
            description: "Phase-by-phase punch lists and handover records your client and consultant can audit.",
          },
        ],
        cta: "Discuss your programme",
      },
      formSection: {
        title: "Request a B2B proposal",
        subtitle:
          "Share company details, unit count, and product scope. We respond within one business day with next steps for drawings, pricing, or a sample review.",
      },
      faq: {
        eyebrow: "FAQ",
        title: "B2B & developer questions",
        items: [
          {
            q: "What is the typical MOQ?",
            a: "It varies by product line and finish. Share your unit count and we structure volume pricing, often from 10 kitchens or an equivalent joinery batch.",
          },
          {
            q: "Do you work with our architect's drawings?",
            a: "Yes. We develop shop drawings from the approved design, or work to the consultant's layouts. We do not replace the designer.",
          },
          {
            q: "How is this different from Residential?",
            a: "Residential covers single-owner projects. This page is for developers, contractors, and multi-unit hospitality programmes with MOQ, phasing, and formal proposals.",
          },
          {
            q: "How do we start?",
            a: "Submit the brief below with unit count and product scope, or email info@turriva.com with your programme schedule.",
          },
        ],
      },
      formTitle: "Request B2B proposal",
      formCompany: "Company / developer name",
      formUnits: "Approx. units or area (sqm)",
      formProducts: "Products needed",
      formSubmit: "Submit B2B brief",
      formEmail: "Work email",
      productOptions: [
        { value: "kitchens", label: "Kitchens" },
        { value: "wardrobes", label: "Wardrobes" },
        { value: "doors", label: "Doors & panels" },
        { value: "whole", label: "Whole-house solution" },
      ],
    },
    design: {
      title: "Design consultation",
      intro: "Share your floor plan. We review the drawings and agree samples before fabrication.",
    },
    styles: {
      title: "Style directions",
      intro:
        "Italian, French, and contemporary whole-home palettes, reference boards for veneers, lacquers, stone-look panels, and joinery we can specify and deliver on your plan.",
      disclaimer:
        "Illustrative references for material direction and spatial quality, not a product catalogue. Your project is fully custom to approved drawings.",
      filters: {
        all: "All",
        italian: "Italian",
        french: "French",
        contemporary: "Contemporary",
        minimal: "Minimal",
      },
      cta: "Book a style review",
      lightboxOpen: "Enlarge image",
      lightboxClose: "Close",
      items: [
        {
          id: "italian-polynesia-house",
          category: "italian",
          title: "Italian · warm wood veneer",
          description: "Whole-home programme, living, dining, and built-ins in natural veneer with soft neutral walls.",
          materials: "Wood veneer · integrated lighting · stone-look accents",
        },
        {
          id: "italian-polynesia-kitchen",
          category: "italian",
          title: "Italian · island kitchen",
          description: "Central island layout with wood fronts and concealed storage, suited to open villa plans.",
          materials: "Wood cabinetry · quartz worktop · premium hardware",
        },
        {
          id: "italian-sylva-house",
          category: "italian",
          title: "Italian · dark wood suite",
          description: "Rich timber palette across living zones, strong lines with layered ambient light.",
          materials: "Dark wood veneer · metal trim · feature wall panels",
        },
        {
          id: "italian-sylva-kitchen",
          category: "italian",
          title: "Italian · grey & timber kitchen",
          description: "Two-tone kitchen combining grey lacquer with dark wood, high contrast for large kitchens.",
          materials: "Lacquer · wood veneer · under-cabinet lighting",
        },
        {
          id: "italian-titian",
          category: "italian",
          title: "Italian · gloss accent kitchen",
          description: "Bold high-gloss fronts with refined hardware, for statement entertaining spaces.",
          materials: "High-gloss lacquer · soft-close systems · island seating",
        },
        {
          id: "french-sicily",
          category: "french",
          title: "French · elegant cream",
          description: "Soft cream palette with classical proportion, living, dining, and bedroom coordination.",
          materials: "Painted fronts · brass details · moulded panels",
        },
        {
          id: "contemporary-tahiti",
          category: "contemporary",
          title: "Contemporary · cream & white oak",
          description: "Light whole-house scheme, open planning with oak warmth and clean sightlines.",
          materials: "White oak · matte lacquer · integrated handles",
        },
        {
          id: "contemporary-golden-years",
          category: "contemporary",
          title: "Contemporary · warm white & walnut",
          description: "Living and dining joinery with walnut feature walls, ideal for family villas.",
          materials: "Walnut veneer · warm white lacquer · TV wall system",
        },
        {
          id: "contemporary-seville",
          category: "contemporary",
          title: "Contemporary · walnut & grey",
          description: "Balanced neutral kitchen with island, light walnut paired with warm grey tones.",
          materials: "Walnut · grey lacquer · waterfall edge option",
        },
        {
          id: "minimal-urban-glow",
          category: "minimal",
          title: "Minimal · white & gold accent",
          description: "Crisp minimalist kitchen with subtle metallic highlights, for urban apartments and penthouses.",
          materials: "Matte white · brushed gold trim · handle-less fronts",
        },
      ],
    },
  },
};

const ar: LuxuryMessages = {
  ...getLuxuryPlatformMessages("ar"),
  brand: { name: "توريفا", tagline: "تصميم مكاني · تجربة · تنفيذ" },
  nav: {
    home: "الرئيسية",
    villas: "تنفيذ سكني",
    projects: "مشاريع ومعارض",
    design3d: "ناقش مشروعك",
    interiorDesign: "التصميم الداخلي",
    construction: "التنفيذ في الموقع",
    ourWork: "أعمالنا",
    developers: "تجربة المشروع",
    about: "من نحن",
    contact: "تواصل",
    professionals: "للمهندسين",
  },
  hero: {
    eyebrow: "إحدى شركات مجموعة تسامي · المملكة العربية السعودية",
    title: "من الفكرة إلى مساحة تدخلها.",
    subtitle:
      "توريفا تصمم وتنفذ المساحات للمنازل والأعمال والضيافة والعقار. نطاق واضح. فريق واحد. من المخططات إلى التسليم.",
    servicesLine: "تصميم مكاني · تجربة · تنفيذ",
    tags: ["تصميم مكاني", "تجربة", "تنفيذ"],
    ctaPrimary: "ناقش مشروعك",
    ctaSecondary: "تجربة المشروع",
    ctaSample: "أرسل المخططات",
  },
  intro: {
    eyebrow: "منهجنا",
    title: "تصميم بقصد. وتنفيذ بعناية.",
    body:
      "المساحة المكتملة يجب أن تبدو طبيعية — مواد وإضاءة وتفاصيل تعمل معاً. فريق واحد يتابع العمل من العينات إلى التسليم، مع تحديث واضح في كل مرحلة.",
  },
  stats: {
    items: [
      { value: "فريق واحد", label: "من التصميم حتى التسليم" },
      { value: "عينات", label: "تُعتمد قبل التصنيع" },
      { value: "موقع", label: "تسليم داخل السعودية" },
      { value: "نطاق", label: "يُتفق عليه قبل البدء" },
    ],
  },
  execution: {
    badge: "تصميم وتسليم ميداني",
    title: "ما تعتمدونه هو ما نبنيه.",
    subtitle:
      "النجارة والحجر والإضاءة والأثاث تتبع لوحات الاعتماد. تُنسَّق التخصصات في الموقع حتى تطابق المساحة التصميم المعتمد.",
    points: [
      "عينات واعتماد قبل الشراء بالجملة",
      "رسومات تنفيذ متوافقة مع فريق التصميم",
      "إشراف ميداني حتى إغلاق الملاحظات والتسليم",
    ],
    cta: "تواصل مع الفريق",
  },
  capabilities: {
    eyebrow: "القدرات",
    title: "ما الذي يمكن لتوريفا تنفيذه",
    items: [
      {
        title: "التصميم المكاني",
        description: "التخطيط والمواد وطريقة استخدام الغرفة. قدرة داخل منتج، لا منتج مستقل.",
      },
      {
        title: "التطوير الفني",
        description: "مخططات تنفيذ وكميات ومواصفات قابلة للبناء.",
      },
      {
        title: "النجارة والتصنيع",
        description: "نجارة وفق المخططات. دعم المطابخ والخزائن عندما تحتاجها الغرفة، لا كهوية للعلامة.",
      },
      {
        title: "التجهيز والتجربة",
        description: "تركيب وتسليم ودمج تجربة فقط عندما يحتاجها المشروع.",
      },
    ],
  },
  services: {
    eyebrow: "الخدمات",
    title: "مسارات التعاون مع توريفا",
    items: [
      {
        title: "التصميم الداخلي والديكور",
        description:
          "توزيع وخامات وإضاءة وتنسيق للفلل والشقق والقصور والمجالس، من المفهوم الأول إلى التركيب.",
        cta: "التصميم الداخلي",
        href: "/interior-design",
      },
      {
        title: "تنفيذ المشروع في الموقع",
        description:
          "تنسيق التخصصات وضبط الجودة وتوثيق التسليم، للحفاظ على التشطيبات المعتمدة حتى اكتمال البرنامج.",
        cta: "التنفيذ في الموقع",
        href: "/construction",
      },
      {
        title: "أجنحة المعارض",
        description:
          "مساحات عرض جاهزة للفعاليات: تصميم وتصنيع وتركيب ميداني، ثم إزالة منظمة بعد انتهاء الحدث.",
        cta: "اطلب عرضاً",
        href: "/contact",
      },
    ],
  },
  why: {
    eyebrow: "لماذا توريفا",
    title: "معايير رفيعة… وخدمة تليق بمشروعك",
    items: [
      {
        title: "رؤية معاصرة للمساحات",
        description: "لغة تصميم عالمية تُكيَّف لتفاصيل الإقامة والضيافة في المملكة، دون قوالب جاهزة.",
      },
      {
        title: "خامات موثوقة",
        description: "خشب وحجر ومعدن وأقمشة تُختار لمظهرها اليوم ولأدائها على مدى السنوات.",
      },
      {
        title: "فريق واحد متتابع",
        description: "مصممون ومسؤولون ميدانيون يتابعون ملف مشروعك، قرارات أوضح وتسليمات أقل.",
      },
      {
        title: "التزام حتى التسليم",
        description: "نطاق محدد بدقة، تواصل منتظم، وإغلاق كامل للملاحظات قبل التسليم النهائي.",
      },
    ],
  },
  projects: {
    eyebrow: "نطاقات معتادة",
    title: "مكان مكتمل، لا قائمة أثاث.",
    subtitle:
      "أعمال توضيحية: بيئات مبيعات وضيافة وتشطيب. الدراسات المسماة في أعمالنا تُوسم كخبرة فريق حتى يُؤكد عقد باسم توريفا.",
    cta: "تجربة المشروع",
    items: [
      { title: "معرض مبيعات وفيلا عرض", category: "مطورون" },
      { title: "استقبال وأجنحة ضيافة", category: "ضيافة" },
      { title: "تشطيب ونجارة من المخططات", category: "تنفيذ" },
    ],
  },
  process: {
    eyebrow: "مراحل العمل",
    title: "من أول لقاء إلى التسليم",
    steps: [
      {
        title: "نستمع ونفهم",
        description: "زيارة أو ورشة عمل، أسلوب حياتك، الجدول، وكيف تقيس نجاح المشروع.",
      },
      {
        title: "تصميم واعتماد",
        description: "أفكار ومخططات ولوحات خامات لاعتمادك قبل أي التزام مالي كبير.",
      },
      {
        title: "بناء وتنسيق",
        description: "ورشة وموقع ضمن برنامج توريفا واحد مع تحديثات دورية.",
      },
      {
        title: "تسليم ومتابعة",
        description: "ملاحظات وتنسيق نهائي وجولة تسليم قبل الاستلام أو الافتتاح.",
      },
    ],
  },
  testimonials: {
    eyebrow: "من الميدان",
    title: "ملاحظات من مشاريع حديثة",
    items: [],
  },
  cta: {
    title: "أخبرنا بالمكان، والموعد، وما يجب أن يُكتمل.",
    subtitle:
      "موجز قصير يكفي. نرد خلال يوم عمل، ونقول بصراحة إن كان النطاق ليس لنا.",
    button: "تواصل مع توريفا",
  },
  quoteForm: {
    title: "ناقش مشروعك",
    subtitle:
      "أرسل المخططات، أو صف المساحة. التكلفة تتبع النطاق. ليست سعراً يُرسل قبل قراءة العمل.",
    formName: "الاسم",
    formEmail: "البريد الإلكتروني",
    formPhone: "هاتف / واتساب",
    formCity: "المدينة",
    formCountry: "الدولة",
    formProducts: "ما هو العمل",
    formQuantity: "الكمية / المساحة",
    formFile: "تحميل الملف",
    formFileHint: "مخططات أو PDF أو صور (اختياري)",
    formMessage:
      "رسالة: هل المشروع تجاري أم سكني؟ يرجى تزويدنا بتفاصيل المشروع أو مخططات الطابق.",
    formSubmit: "إرسال",
    formSuccess: "شكراً. سنتواصل معك خلال 24 ساعة.",
    formError: "حدث خطأ. جرّب مرة أخرى، أو راسلنا على واتساب أو info@turriva.com.",
    products: [
      { value: "real-estate", label: "تجربة المشروع العقاري" },
      { value: "show-unit", label: "وحدة العرض" },
      { value: "design-build", label: "التصميم والتنفيذ" },
      { value: "fit-out", label: "التنفيذ والتجهيز" },
      { value: "commercial", label: "المساحات التجارية" },
      { value: "hospitality", label: "مساحات الضيافة" },
      { value: "renovation", label: "التجديد والتطوير" },
      { value: "other", label: "أخرى" },
    ],
    countries: [
      { value: "sa", label: "السعودية" },
      { value: "ae", label: "الإمارات" },
      { value: "om", label: "عُمان" },
      { value: "bh", label: "البحرين" },
      { value: "eg", label: "مصر" },
      { value: "other", label: "أخرى" },
    ],
  },
  footer: {
    about:
      "توريفا تصمم وتنفذ المساحات والتجارب. التنفيذ جزء من المنتج، لا الهوية كلها. تعاقد مع توريفا وحدها. استخدم المجموعة عندما يحتاجها المشروع.",
    quickLinks: "روابط سريعة",
    importantLinks: "أهم الروابط",
    servicesLinks: "القدرات",
    solutionsLinks: "الحلول",
    offices: "مكاتبنا",
    countries: {
      saudiArabia: "السعودية",
      oman: "سلطنة عُمان",
      bahrain: "مملكة البحرين",
      egypt: "مصر",
    },
    contact: "تواصل معنا",
    callNow: "اتصل الآن",
    followUs: "تابعنا على:",
    affiliation: "توريفا جزء من",
    affiliationLink: "مجموعة تسامي",
    affiliationSuffix: "",
    legalNotice: "© 2026 Turriva. All rights reserved | CR: 7054412114 | VAT: 314808998900003",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام",
    address: "جدة، حي الزهراء، المملكة العربية السعودية",
    email: "info@turriva.com",
    phone: "+966 50 278 6513",
    sponsoredBy: "شركة توريفا لتنفيذ المساحات",
    solutions: {
      modularKitchens: "مطابخ معيارية",
      wardrobes: "خزائن وغرف ملابس",
      b2bJoinery: "تشطيبات B2B",
    },
  },
  pages: {
    interiorDesign: {
      title: "التنفيذ الداخلي",
      intro:
        "تطوّر توريفا المفاهيم الداخلية المعتمدة إلى تفاصيل فنية وحزم خامات ونطاقات تصنيع وتركيب منسّق ومساحات مكتملة.",
    },
    construction: {
      title: "التجهيز والتسليم",
      intro:
        "تدير توريفا التسليم الميداني، وتنسّق التصنيع والتخصصات والتركيب وضبط الجودة وإغلاق الملاحظات والتسليم الموثق.",
    },
    ourWork: {
      title: "أعمالنا",
      intro:
        "خبرة فريق مختارة ونطاقات معتادة. البرامج المسماة لا تُعرض كعقود تاريخية باسم توريفا إلا بعد تأكيد النسبة.",
      caseStudyContactCta: "ناقش مشروعاً مشابهاً",
    },
    portfolio: {
      eyebrow: "بورتفوليو التنفيذ",
      title: "فوليو توريفا 2026",
      intro:
        "ملف PDF الكامل لعام 2026 متاح في هذه الصفحة فقط. سجّل ببريد شركتك الوظيفي للعرض أو التحميل. الملف يبقى مخفياً حتى يتم التحقق. لا نقبل البريد الشخصي.",
      gateEyebrow: "وصول مهني",
      gateTitle: "عرض فوليو توريفا",
      gateIntro:
        "أدخل بياناتك لفتح ملف PDF. نتحقق أن بريدك الإلكتروني تابع لنطاق شركة. لا نقبل العناوين الشخصية مثل Gmail وHotmail وiCloud.",
      gateNote: "نستخدم معلوماتك فقط للمتابعة مع فرص B2B ذات الصلة.",
      formName: "الاسم الكامل",
      formCompany: "الشركة / المؤسسة",
      formWorkEmail: "البريد الوظيفي",
      formWorkEmailPlaceholder: "you@yourcompany.com",
      formSubmit: "فتح البورتفوليو",
      formLoading: "جاري التحقق…",
      formError: "حدث خطأ. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.",
      formErrorPersonal:
        "يرجى استخدام بريد شركتك الإلكتروني. لا نقبل مزودي البريد الشخصي مثل Gmail وYahoo وHotmail وiCloud.",
      formErrorInvalid: "يرجى إدخال بريد وظيفي صحيح.",
      viewerEyebrow: "فوليو توريفا 2026",
      viewerTitle: "بورتفوليو التنفيذ",
      downloadCta: "تحميل PDF",
      fullscreenCta: "ملء الشاشة",
      exitFullscreenCta: "خروج من ملء الشاشة",
      footerNote: "تحتاج نسخة مطبوعة أو جولة مع فريقنا؟",
      footerContact: "تواصل مع توريفا",
    },
    about: {
      title: "عن توريفا",
      intro:
        "توريفا تصمم وتسلّم المساحات والتجارب — تصميم مكاني، تطوير فني، تجهيز، وتسليم. التنفيذ جزء من العرض، لا الهوية كلها. تعاقد مع توريفا وحدها؛ والمجموعة تُستدعى حين يحتاجها المشروع.",
    },
    contact: {
      title: "تواصل مع توريفا",
      intro: "أخبرنا عن المشروع، أو أرسل المخططات. النطاق أولاً. والتكلفة تتبعه.",
      formName: "الاسم",
      formEmail: "البريد الإلكتروني",
      formPhone: "الجوال / واتساب",
      formProjectType: "نوع المشروع",
      formMessage: "نبذة مختصرة عن المشروع",
      formSubmit: "إرسال الرسالة",
      formSuccess: "شكراً. نرد خلال يوم عمل.",
      formError: "حدث خطأ. أعد المحاولة، أو راسلنا على واتساب أو info@turriva.com.",
      projectTypes: [
        { value: "villa", label: "فيلا خاصة" },
        { value: "developer", label: "مطور / مشروع B2B" },
        { value: "hospitality", label: "فندق / ضيافة" },
        { value: "sample", label: "طلب حقيبة عينات" },
        { value: "other", label: "أخرى" },
      ],
    },
    villas: {
      title: "تنفيذ المساكن والضيافة والتجزئة",
      intro:
        "تدير توريفا التسليم الميداني للفلل والفنادق والمطاعم والتجزئة الفاخرة، من التطوير الفني واعتماد الخامات إلى التصنيع والتركيب والضمان المحلي.",
      steps: [
        { title: "جلسة تصميم 3D", description: "ارفع مخططك أو احجز زيارة. التخطيط يتبع المخططات، لا كتالوج مصنع." },
        { title: "عينات واعتماد", description: "تشطيبات ومفصلات فيزيائية قبل أمر التصنيع." },
        { title: "تصنيع واستيراد", description: "يُصنع وفق المخططات. علامات المطابقة تبقى لدى المورّد." },
        { title: "تركيب وضمان", description: "تركيب في الموقع ودعم ما بعد البيع محلياً." },
      ],
      ctaDesign: "ابدأ تصميم 3D",
      ctaContact: "احجز استشارة تأثيث",
      segments: {
        eyebrow: "من نخدم",
        title: "رحلة واحدة للمساكن والمساحات الفاخرة",
        subtitle:
          "سواء كنت تُنهي فيلا عائلية أو جناح فندق أو متجراً رئيسياً، يدير فريق تنفيذ توريفا العينات والتصنيع والتركيب والتسليم بمسؤولية واحدة.",
        items: [
          {
            tag: "سكني",
            title: "الفلل والمساكن الخاصة",
            description:
              "مجالس ومطابخ وغرف ملابس وتأثيث منزل كامل، بأسلوب معاصر يناسب المناخ والحياة اليومية في الخليج.",
          },
          {
            tag: "ضيافة",
            title: "الفنادق والمطاعم",
            description:
              "تشطيبات الردهات والأجنحة والمطاعم بخامات تتحمل الاستخدام التشغيلي الحقيقي دون فقدان الفخامة.",
          },
          {
            tag: "تجاري",
            title: "التجزئة وصالات العرض",
            description:
              "بووتiques ومساحات بيع فاخرة تحمل هوية علامتك من المفهوم الأول حتى يوم الافتتاح.",
          },
        ],
      },
      kitchens: {
        eyebrow: "عندما تحتاجها الغرفة",
        title: "مطابخ عندما تحتاجها الغرفة",
        intro:
          "أنظمة معيارية بقلب مقاوم للرطوبة، وتشطيبات PET وطلاء، ومفصلات إغلاق ناعم. تُحدَّد وتُعتمد بعينات ثم تُصنَّع وفق المخططات المعتمدة.",
        highlights: [
          {
            title: "جزيرة وممرات عمل",
            description: "جزائر مركزية، مسارات متوازية، وتخزين مخفي مُهندَس حسب المخطط المعتمد.",
          },
          {
            title: "تشطيبات تعتمدها قبل التصنيع",
            description: "لوحات خامات ومفصلات حقيقية قبل أمر الإنتاج، حتى لا يبدأ التركيب بمفاجآت.",
          },
          {
            title: "رفع مساحي وتركيب",
            description: "تحقق ميداني، تنسيق تخصصات، وملاحظات حتى يطابق المطبخ ما وقّعت عليه.",
          },
        ],
        cta: "ناقش مطبخك",
      },
      wardrobes: {
        eyebrow: "الخزائن وغرف الملابس",
        title: "غرف ملابس walk-in بفخامة هادئة",
        intro:
          "إضاءة مدمجة وزجاج ومفصلات هيدروليك في تخطيطات مبنية على طريقة عيشك، لا وحدات جاهزة تُفرض على مساحتك.",
        highlights: [
          {
            title: "برامج الجناح الرئيسي",
            description: "مناطق his/hers، جدران أحذية، وأدراج مجوهرات بإغلاق ناعم في كل التفاصيل.",
          },
          {
            title: "خزائن الفنادق والخدم",
            description: "وحدات متكررة لأجنحة الضيوف ومخازن back-of-house في مشاريع الضيافة boutique.",
          },
          {
            title: "وحدات متوافقة مع المصنع",
            description: "كل واجهة تُغذّي الإنتاج مباشرة، فتقل التعديلات في الموقع ويصبح التسليم أنظف.",
          },
        ],
        cta: "خطّط خزائنك",
      },
      gallery: {
        eyebrow: "من الموقع",
        title: "مساحات نفّذناها",
        subtitle: "نماذج من مطابخ وخزائن وبرامج نجارة في أنحاء المملكة.",
        items: [
          { category: "مطبخ", title: "فيلا خاصة، جدة" },
          { category: "walk-in", title: "جناح رئيسي، مكة" },
          { category: "joinery", title: "برنامج ضيافة" },
        ],
        cta: "شاهد المزيد من الأعمال",
      },
      formSection: {
        title: "ابدأ مشروعك مع توريفا",
        subtitle:
          "شاركنا مخططك ونوع المساحة والجدول الزمني. نرد خلال يوم عمل واحد بخطوات 3D أو العينات أو زيارة موقع.",
      },
      faq: {
        eyebrow: "أسئلة شائعة",
        title: "أسئلة عن تأثيث الفلل والفنادق والتجاري",
        items: [
          {
            q: "هل تعملون على الفلل فقط؟",
            a: "لا. هذه الصفحة لمشاريع مالك واحد: فلل، شقق، فنادق بوتيك، مطاعم، وتجزئة فاخرة. برامج المطورين متعددة الوحدات في صفحة المشاريع والمعارض.",
          },
          {
            q: "كم يستغرق من التصميم إلى التركيب؟",
            a: "عادة من 8 إلى 14 أسبوعاً بعد اعتماد العينات، حسب النطاق واستيراد المواد وجاهزية الموقع. نثبّت جدولاً عند اعتماد المخططات.",
          },
          {
            q: "هل أرى الخامات قبل الطلب؟",
            a: "نعم. يمكن إرسال مراجع التشطيب ومراجعة المخططات قبل أي تصنيع.",
          },
          {
            q: "ما الضمان المقدّم؟",
            a: "الضمان يتبع العقد على العمل الذي نسلّمه. درجة اللوح والمفصلات تتبع المواصفات. لا ننشر شهادة مصنع لم نصدرها.",
          },
          {
            q: "كيف أبدأ؟",
            a: "احجز جلسة تصميم، اطلب حقيبة عينات، أو أرسل النموذج أدناه مع مخططك. نوجّهك لمسؤول الاستوديو المناسب.",
          },
        ],
      },
    },
    projects: {
      title: "تنفيذ المشاريع التجارية والمعارض وB2B",
      intro:
        "تنفّذ توريفا المساحات التجارية وبيئات المعارض وبرامج المطورين والضيافة عبر تطوير فني وتصنيع وتركيب وتسليم مرحلي منسّق.",
      ctaBrief: "أرسل ملخص B2B",
      ctaSample: "اطلب حقيبة عينات",
      segments: {
        eyebrow: "من نخدم",
        title: "مبني لبرامج متعددة الوحدات",
        subtitle:
          "سواء كنت مطوراً أو مقاولاً أو مشغّل ضيافة يوسّع التأثيث على عدد كبير من الوحدات، نُهيكل التوريد والمخططات والتركيب حسب برنامجك.",
        items: [
          {
            tag: "مطورون",
            title: "أبراج سكنية ومجمعات",
            description:
              "تسعير MOQ للحجم، مواصفات وحدات متكررة، ولوجستيات مرحلية متوافقة مع جدول التسليم.",
          },
          {
            tag: "مقاولون",
            title: "مقاولون رئيسيون",
            description:
              "مخططات تنفيذ متوافقة مع المصنع، امتثال استيراد، وإشراف ميداني توريفا حتى الملاحظات.",
          },
          {
            tag: "ضيافة",
            title: "فنادق وسلاسل F&B",
            description:
              "إنتاج دفعي لغرف الضيوف والخدمات والمناطق العامة بتشطيبات متسقة عبر الفروع.",
          },
        ],
      },
      steps: [
        { title: "ملخص البرنامج", description: "مزيج الوحدات، نطاق BOQ، لوحات العينات، وجدول التسليم." },
        { title: "مخططات تنفيذ", description: "رسومات تنفيذ من التصميم المعتمد، ضمن جدول متفق عليه." },
        { title: "تصنيع واستيراد", description: "يُصنع وفق المخططات. علامات المطابقة تبقى لدى المورّد." },
        { title: "تركيب مرحلي", description: "فرق موقع توريفا، قوائم ملاحظات، ووثائق تسليم لكل مرحلة." },
      ],
      highlights: [
        { title: "تسعير MOQ", description: "خصومات هيكلية للأبراج والمجمعات والضيافة." },
        { title: "مخططات تنفيذ", description: "مخططات من التصميم المعتمد، ضمن جدول متفق عليه." },
        { title: "استيراد وتخزين", description: "الاستيراد والتسليم المرحلي يتبعان البرنامج. علامات المطابقة تبقى لدى المورّد." },
        { title: "فرق موقع", description: "إشراف توريفا حتى الملاحظات والتسليم." },
      ],
      programme: {
        eyebrow: "تسليم مرحلي",
        title: "قائد برنامج واحد، من التصنيع إلى الطابق",
        intro:
          "برامج الأبراج والضيافة تحتاج أكثر من منتج. تحتاج مراحل متوقعة، واستيراداً متوافقاً، وفرق تركيب تصل عند جاهزية البلاطة.",
        highlights: [
          {
            title: "شحنات مرحلية",
            description: "دفعات مطابخ وخزائن لكل برج أو طابق أو منطقة، دون توريد واحد مربك.",
          },
          {
            title: "حزمة امتثال",
            description: "نمرر وثائق المورّد. لا نصدر شهادة مطابقة باسم توريفا.",
          },
          {
            title: "ملاحظات وتسليم",
            description: "قوائم ملاحظات ومحاضر تسليم لكل مرحلة، قابلة للمراجعة من الاستشاري.",
          },
        ],
        cta: "ناقش برنامجك",
      },
      formSection: {
        title: "اطلب عرض B2B",
        subtitle:
          "شاركنا بيانات الشركة وعدد الوحدات ونطاق المنتجات. نرد خلال يوم عمل بخطوات المخططات أو التسعير أو مراجعة العينات.",
      },
      faq: {
        eyebrow: "أسئلة شائعة",
        title: "أسئلة المطورين و B2B",
        items: [
          {
            q: "ما الحد الأدنى للطلب MOQ؟",
            a: "يختلف حسب خط الإنتاج والتشطيب. شاركنا عدد الوحدات ونُهيكل التسعير، غالباً من عشرة مطابخ أو ما يعادلها من النجارة.",
          },
          {
            q: "هل تعملون مع مخططات مهندسنا؟",
            a: "نعم. نُنتج مخططات تنفيذ متوافقة مع المصنع من تصميمكم، أو نُكيّف وحداتنا المعيارية مع مخططات الاستشاري ضمن SLA.",
          },
          {
            q: "ما الفرق عن صفحة التنفيذ السكني؟",
            a: "صفحة التنفيذ السكني للمالك الفردي. هذه الصفحة للمطورين والمقاولين وبرامج الضيافة متعددة الوحدات مع حد أدنى للكميات وتسليم مرحلي.",
          },
          {
            q: "كيف نبدأ؟",
            a: "أرسل الملخص أدناه مع عدد الوحدات، أو راسل info@turriva.com مع جدول البرنامج.",
          },
        ],
      },
      formTitle: "طلب عرض B2B",
      formCompany: "اسم الشركة / المطور",
      formUnits: "عدد الوحدات أو المساحة (م²)",
      formProducts: "المنتجات المطلوبة",
      formSubmit: "إرسال ملخص B2B",
      formEmail: "البريد الوظيفي",
      productOptions: [
        { value: "kitchens", label: "مطابخ" },
        { value: "wardrobes", label: "خزائن" },
        { value: "doors", label: "أبواب وتكسيات" },
        { value: "whole", label: "حل منزل كامل" },
      ],
    },
    design: {
      title: "استشارة تصميم",
      intro: "شاركنا مخططك، فريق الاستوديو يُعد تخطيطات متوافقة مع المصنع وجلسة مراجعة للعينات. بدون رفع صور أونلاين.",
    },
    styles: {
      title: "اتجاهات الأنماط",
      intro:
        "لوحات إيطالية وفرنسية ومعاصرة للمنزل الكامل، مراجع للقشور والlacquer وتكسيات بديل الرخام والنجارة التي نحدّدها وننفّذها على مخططك.",
      disclaimer:
        "مراجع توضيحية لجودة الخامات والمساحة، وليست كتالوج منتجات. مشروعك مخصص بالكامل وفق المخططات المعتمدة.",
      filters: {
        all: "الكل",
        italian: "إيطالي",
        french: "فرنسي",
        contemporary: "معاصر",
        minimal: "بسيط",
      },
      cta: "احجز مراجعة نمط",
      lightboxOpen: "تكبير الصورة",
      lightboxClose: "إغلاق",
      items: [
        {
          id: "italian-polynesia-house",
          category: "italian",
          title: "إيطالي · قشرة خشب دافئة",
          description: "برنامج منزل كامل، معيشة وطعام ونجارة مدمجة بقشرة طبيعية وجدران محايدة.",
          materials: "قشرة خشب · إضاءة مدمجة · لمسات بديل رخام",
        },
        {
          id: "italian-polynesia-kitchen",
          category: "italian",
          title: "إيطالي · مطبخ جزيرة",
          description: "تخطيط جزيرة مركزية بواجهات خشبية وتخزين مخفي، يناسب الفلل المفتوحة.",
          materials: "خزائن خشب · كونترتوب · مفصلات فاخرة",
        },
        {
          id: "italian-sylva-house",
          category: "italian",
          title: "إيطالي · خشب داكن",
          description: "لوحة خشبية غنية في zones المعيشة، خطوط قوية مع إضاءة محيطية متعددة الطبقات.",
          materials: "قشرة خشب داكن · حواف معدنية · تكسيات جدار",
        },
        {
          id: "italian-sylva-kitchen",
          category: "italian",
          title: "إيطالي · مطبخ رمادي وخشب",
          description: "مطبخ ثنائي اللون يجمع lacquer رمادي مع خشب داكن، تباين عالٍ للمطابخ الكبيرة.",
          materials: "Lacquer · قشرة خشب · إضاءة تحت الخزائن",
        },
        {
          id: "italian-titian",
          category: "italian",
          title: "إيطالي · لمعان جريء",
          description: "واجهات lacquer لامعة مع مفصلات ر refined، لمساحات استقبال مميزة.",
          materials: "Lacquer لامع · soft-close · جلسة جزيرة",
        },
        {
          id: "french-sicily",
          category: "french",
          title: "فرنسي · كريم أنيق",
          description: "لوحة كريمية ناعمة بنسب كلاسيكية، تنسيق معيشة وطعام وغرف نوم.",
          materials: "واجهات مطلية · تفاصيل نحاس · ألواح زخرفية",
        },
        {
          id: "contemporary-tahiti",
          category: "contemporary",
          title: "معاصر · كريم وبلوط أبيض",
          description: "مخطط منزل فاتح، فتحات واسعة مع دفء البلوط وخطوط نظيفة.",
          materials: "بلوط أبيض · lacquer مطفي · مقابض مدمجة",
        },
        {
          id: "contemporary-golden-years",
          category: "contemporary",
          title: "معاصر · أبيض دافئ وجوز",
          description: "نجارة معيشة وطعام مع جدران جوز، مناسب للفلل العائلية.",
          materials: "قشرة جوز · lacquer أبيض دافئ · جدار تلفزيون",
        },
        {
          id: "contemporary-seville",
          category: "contemporary",
          title: "معاصر · جوز ورمادي",
          description: "مطبخ محايد متوازن مع جزيرة، جوز فاتح مع رمادي دافئ.",
          materials: "جوز · lacquer رمادي · حافة waterfall اختيارية",
        },
        {
          id: "minimal-urban-glow",
          category: "minimal",
          title: "Minimal · أبيض ولمسة ذهب",
          description: "مطبخ minimal نظيف مع لمسات معدنية خفيفة، للشقق والpenthouse الحضرية.",
          materials: "أبيض مطفي · حواف ذهبية · واجهات بدون مقابض",
        },
      ],
    },
  },
};

export function getLuxuryMessages(locale: Locale): LuxuryMessages {
  return locale === "ar" ? ar : en;
}

/** Gulf-leaning interiors & architecture, Unsplash (replace with Turriva project photos). */
const IMG_Q = "auto=format&fit=crop&q=90";
export const LUXURY_IMAGES = {
  hero: "/brand/luxury/hero-villa.jpg",
  contact: "/brand/turriva/turriva-office.png",
  intro: `https://images.unsplash.com/photo-1700306692751-1fd5f2b88443?${IMG_Q}&w=1600`,
  execution: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${IMG_Q}&w=1600`,
  interior: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${IMG_Q}&w=1400`,
  construction: `https://images.unsplash.com/photo-1600047509358-9dc75507daeb?${IMG_Q}&w=1400`,
  fitout: "/brand/turriva/makkah-charter-04.jpeg",
  cap1: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${IMG_Q}&w=900`,
  cap2: "/brand/turriva/hero-turriva.png",
  cap3: `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?${IMG_Q}&w=900`,
  cap4: `https://images.unsplash.com/photo-1600047509358-9dc75507daeb?${IMG_Q}&w=900`,
  /** Portfolio gallery — Unsplash (free license), matched to project titles */
  project1: `https://images.unsplash.com/photo-1565538810643-b5bdb714032a?${IMG_Q}&w=1200`,
  project2: `https://images.unsplash.com/photo-1649361811423-a55616f7ab11?${IMG_Q}&w=1200`,
  project3: `https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?${IMG_Q}&w=1200`,
  ctaBand: "/brand/turriva/turriva-sign-facade.png",
  heroInterior: "/brand/turriva/hero-interior.webp",
  heroBranded: "/brand/turriva/hero-branded.jpg",
  sampleKit: "/brand/turriva/sample-kit-showroom.webp",
  project4: `https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?${IMG_Q}&w=1200`,
} as const;

export const LUXURY_PROJECT_IMAGES = [
  LUXURY_IMAGES.project1,
  LUXURY_IMAGES.project2,
  LUXURY_IMAGES.project3,
] as const;

export const LUXURY_CAPABILITY_IMAGES = [
  LUXURY_IMAGES.cap1,
  LUXURY_IMAGES.cap2,
  LUXURY_IMAGES.cap3,
  LUXURY_IMAGES.cap4,
] as const;
