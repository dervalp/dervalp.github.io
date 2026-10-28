export type NavItem = {
  id: string;
  label: string;
  href?: string; // if present, used as link href directly instead of #id
};

export type Capability = {
  title: string;
  description: string;
};

export type CapabilityGroup = {
  label: string;
  items: Capability[];
};

export type Transformation = {
  eyebrow?: string;
  title: string;
  description: string[];
};

export type LogoItem = {
  name: string;
  logoPath: string;
  slug: string;
};

export type CredibilityItem = {
  company: string;
  relevance?: string;
  logoAlt: string;
  logoPath: string;
  slug: string;
};

export type CurrentWork = {
  id: string;
  label: string;
  name: string;
  role: string;
  years?: string;
  summary: string[];
  url: string;
  linkLabel: string;
};

export type CareerOutcome = {
  value: string;
  valueSub?: string;
  label: string;
};

export type CareerEntry = {
  years: string;
  company: string;
  location: string;
  role: string;
  detail: string;
};

export type SiteData = {
  seo: {
    title: string;
    description: string;
    siteName: string;
    locale: string;
    ogImage: string;
    ogImageAlt: string;
    ogImageWidth: number;
    ogImageHeight: number;
    favicon: string;
  };
  navigation: NavItem[];
  hero: {
    name: string;
    brandLine: string;
    eyebrow: string;
    headline: string;
    supportingText: string[];
    focusAreas: string[];
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
    quaternaryCtaLabel: string;
    tertiaryCtaLabel: string;
  };
  pointOfView: {
    titleLines: string[];
    paragraphs: string[];
    closing: string;
    workWithLabel: string;
    workWith: LogoItem[];
  };
  capabilities: {
    title: string;
    description: string;
    groups: CapabilityGroup[];
  };
  transformations: {
    title: string;
    description: string;
    items: Transformation[];
  };
  credibility: {
    title: string;
    description?: string;
    note?: string;
    items: CredibilityItem[];
  };
  career: {
    currentRole: string;
    currentEmployer: string;
    currentWork: CurrentWork[];
    priorOutcomesLabel: string;
    priorOutcomes: CareerOutcome[];
    timeline: CareerEntry[];
  };
  contact: {
    title: string;
    description: string;
    directMessage: string;
    secondaryMessage?: string;
    formTitle: string;
    formDescription: string;
    directTitle: string;
    directDescription: string;
    privacyNote?: string;
    unavailableMessage?: string;
    submitLabel: string;
    successMessage: string;
    errorMessage: string;
    footerNote: string;
  };
  socials: {
    linkedinUrl: string;
    githubUrl: string;
    xUrl: string;
    resumePath: string;
  };
};

export const siteData = {
  seo: {
    title: "Pierre Derval | AI Product Leadership for Enterprise Software",
    description:
      "Pierre Derval helps enterprise software teams turn AI ambition into shipped, governed products by aligning product, platform, and execution in complex B2B environments.",
    siteName: "Pierre Derval",
    locale: "en_BE",
    ogImage: "/og-image.png",
    ogImageAlt: "Pierre Derval — AI. Shipped.",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    favicon: "/favicon.svg"
  },
  navigation: [
    { id: "how-i-help", label: "How I help", href: "/how-i-help" },
    { id: "services", label: "Services", href: "/services" },
    { id: "about", label: "About", href: "/about" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "tools", label: "Diagnostics", href: "/tools" }
  ],
  hero: {
    name: "Pierre Derval",
    brandLine: "AI → shipped",
    eyebrow: "AI • Product Leadership • Platform Strategy",
    headline: "AI. Shipped.",
    supportingText: [
      "AI doesn't fail in the lab. It fails in production.",
      "I help enterprise teams turn AI ambition into shipped, governed products - by treating AI as a platform capability, not a feature.",
      "Built and scaled AI and data platforms in complex, regulated environments."
    ],
    focusAreas: [
      "Enterprise AI productization",
      "Platform modernization",
      "Executive alignment"
    ],
    primaryCtaLabel: "Start a conversation",
    secondaryCtaLabel: "View LinkedIn",
    quaternaryCtaLabel: "View GitHub",
    tertiaryCtaLabel: "Download resume"
  },
  pointOfView: {
    titleLines: ["AI is not", "a feature."],
    paragraphs: [
      "AI changes how a product behaves, how decisions are made, and how trust is built.",
      "The challenge is not adding AI. It is deciding where it belongs and how to ship it without breaking the system around it.",
      "Most teams treat AI as an add-on. That creates complexity, not value."
    ],
    closing:
      "I work with leaders to turn that into clear decisions and shipped outcomes.",
    workWithLabel: "Work with",
    workWith: [
      {
        name: "Anthropic",
        logoPath: "/logos/providers/anthropic.svg",
        slug: "anthropic"
      },
      {
        name: "OpenAI",
        logoPath: "/logos/providers/openai.svg",
        slug: "openai"
      },
      {
        name: "Gemini",
        logoPath: "/logos/providers/gemini.svg",
        slug: "gemini"
      }
    ]
  },
  capabilities: {
    title: "What I focus on",
    description:
      "Structured around what matters most in complex software environments.",
    groups: [
      {
        label: "Strategy",
        items: [
          {
            title: "Platform clarity",
            description:
              "Turn platform complexity into product decisions teams can execute."
          },
          {
            title: "AI productization",
            description:
              "Move AI from isolated experiments to reusable, governed product capabilities."
          }
        ]
      },
      {
        label: "Execution",
        items: [
          {
            title: "Leadership alignment",
            description:
              "Align product, platform, and engineering around one clear execution path."
          },
          {
            title: "Execution quality",
            description:
              "Drive faster decisions, cleaner prioritization, and stronger delivery in complex teams."
          }
        ]
      },
      {
        label: "AI",
        items: [
          {
            title: "Time to value",
            description:
              "Reduce time to value in complex SaaS environments."
          },
          {
            title: "Product structure",
            description:
              "Bring clarity to complex product landscapes so teams can scale without fragmentation."
          }
        ]
      }
    ]
  },
  transformations: {
    title: "What I've led",
    description:
      "A few of the operating shifts I’m most often asked to lead in complex software environments.",
    items: [
      {
        eyebrow: "AI",
        title: "From AI experiments to shipped product capabilities",
        description: [
          "Turned isolated AI work into reusable, governed product capabilities integrated into the platform.",
          "Reduced time to launch from weeks to hours and enabled consistent delivery across teams."
        ]
      },
      {
        eyebrow: "Platform",
        title: "From platform sprawl to scalable product structure",
        description: [
          "Reshaped complex SaaS and data platforms into clearer product structures with stronger boundaries and ownership.",
          "Enabled faster execution and reduced long-term fragmentation."
        ]
      },
      {
        eyebrow: "Adoption",
        title: "From slow onboarding to fast adoption",
        description: [
          "Reduced onboarding friction and shortened time to value from months to days.",
          "Made complex enterprise products easier to implement, use, and expand."
        ]
      },
      {
        eyebrow: "Alignment",
        title: "From misalignment to decisive execution",
        description: [
          "Aligned founders, executives, product, and engineering around clear priorities and tradeoffs.",
          "Improved decision speed and ensured plans held up in delivery."
        ]
      }
    ]
  },
  credibility: {
    title: "Proven in Enterprise",
    description: "20+ years building and scaling product, platform, and AI systems in complex B2B environments.",
    note: "Worked across data platforms, adtech, and enterprise SaaS in complex and regulated environments.",
    items: [
      {
        company: "Ikary",
        logoAlt: "Ikary logo",
        logoPath: "/logos/ikary.svg",
        slug: "ikary",
        relevance: ["Creator", "Open-Source AI Platform"]
      },
      {
        company: "CluedIn",
        logoAlt: "CluedIn logo",
        logoPath: "/logos/cluedin.png",
        slug: "cluedin",
        relevance: ["Chief Product Technical Officer", "AI & Data Platform"]
      },
      {
        company: "Adform",
        logoAlt: "Adform logo",
        logoPath: "/logos/adform.svg?v=3",
        slug: "adform",
        relevance: ["Principal Architect", "Adtech · Red Dot Award"]
      },
      {
        company: "Sitecore",
        logoAlt: "Sitecore logo",
        logoPath: "/logos/sitecore.svg",
        slug: "sitecore",
        relevance: ["Lead Developer", "Framework · Innovation Team"]
      },
      {
        company: "Amilia",
        logoAlt: "Amilia logo",
        logoPath: "/logos/amilia.svg",
        slug: "amilia",
        relevance: ["VP Product Development", "SaaS Platform"]
      }
    ]
  },
  // Career story. Source: Pierre_Derval_CV_AI_Product_Executive_2026_v5.pdf
  // (the public /Pierre_Derval_Resume.pdf). Keep dates and attribution aligned with it.
  career: {
    currentRole: "Head of AI",
    currentEmployer: "Vertuoza",
    currentWork: [
      {
        id: "vertuoza",
        label: "Current role",
        name: "Vertuoza",
        role: "Head of AI",
        years: "2026 – present",
        summary: [
          "I am Head of AI at Vertuoza, a B2B construction-management SaaS platform based in Belgium. I lead AI initiatives that span product, engineering and platform architecture.",
          "Together with the Platform team, I brought AI Advisor and Model Context Protocol (MCP) capabilities into production."
        ],
        url: "https://www.vertuoza.com/",
        linkLabel: "vertuoza.com"
      },
      {
        id: "omni-loop",
        label: "Created by me",
        name: "Omni-loop",
        role: "Creator",
        summary: [
          "I created Omni-loop, a loop engineering framework for AI-assisted software development and iterative product delivery. It is a delivery framework for coding agents, where every change still goes through human review.",
          "I built it as part of my work as Head of AI at Vertuoza, and it is publicly documented at omni-loop.xyz."
        ],
        url: "https://www.omni-loop.xyz/",
        linkLabel: "omni-loop.xyz"
      }
    ],
    priorOutcomesLabel: "Selected outcomes, before Vertuoza",
    priorOutcomes: [
      { value: "80%", label: "Customer adoption of new AI features within 6 months" },
      { value: "weeks", valueSub: "→ hours", label: "Time to launch AI agents" },
      { value: "3 months", valueSub: "→ days", label: "Enterprise installation and onboarding" },
      { value: "4 months", label: "Multi-tenant SaaS platform delivered" }
    ],
    timeline: [
      {
        years: "2026 – present",
        company: "Vertuoza",
        location: "Belgium",
        role: "Head of AI",
        detail:
          "B2B construction-management SaaS. Leads AI across product, engineering and platform architecture. Created Omni-loop; brought AI Advisor and MCP capabilities into production with the Platform team."
      },
      {
        years: "2020 – 2026",
        company: "CluedIn",
        location: "Brussels",
        role: "Chief Product Technical Officer",
        detail:
          "Enterprise data management and AI platform for regulated enterprises, ACV 300k+, 40-person organisation. Owned product strategy with the CEO, led a multi-tenant SaaS transformation in 4 months and built agentic AI workflows."
      },
      {
        years: "2016 – 2020",
        company: "Adform",
        location: "London",
        role: "Principal Architect",
        detail:
          "Cross-product architecture for an enterprise advertising platform: unified UX and front-end architecture, GraphQL federation. The broader FLOW initiative later received a Red Dot award."
      },
      {
        years: "2012 – 2016",
        company: "Sitecore",
        location: "Copenhagen",
        role: "Lead Developer",
        detail:
          "Innovation team. Helped build SPEAK, the framework used to accelerate vertical applications across Sitecore."
      },
      {
        years: "2010 – 2012",
        company: "Amilia",
        location: "Montreal",
        role: "VP Product Development",
        detail:
          "Led product development and the engineering team of a SaaS application, from architectural direction to hiring and delivery."
      },
      {
        years: "2005 – 2009",
        company: "Earlier roles",
        location: "Brussels",
        role: "Engineering and leadership roles",
        detail: "Aubay (AG Insurance) · Genivar · Experteam (BNP Paribas Fortis) · SME IT consulting"
      }
    ]
  },
  contact: {
    title: "Building AI in complex environments?",
    description:
      "If product, platform, and AI need to move together, I can help make that real.",
    directMessage:
      "I work with founders, CEOs, and senior leaders where AI, product, platform, and execution need to move together.",
    secondaryMessage:
      "I take on a small number of roles, advisory relationships, and selected conversations.",
    formTitle: "Start a conversation",
    formDescription:
      "A few lines of context are enough.",
    directTitle: "Start a conversation",
    directDescription:
      "LinkedIn is the simplest place to begin.",
    privacyNote: "Selected conversations only.",
    unavailableMessage: "",
    submitLabel: "Send message",
    successMessage: "Your message has been sent. I will review it and respond through the details you provided.",
    errorMessage:
      "The message could not be sent right now. Please try again in a moment or reach out on LinkedIn instead.",
    footerNote: "AI → shipped"
  },
  socials: {
    linkedinUrl: "https://be.linkedin.com/in/pierrederval",
    githubUrl: "https://github.com/dervalp",
    xUrl: "https://x.com/dervalp",
    resumePath: "/Pierre_Derval_Resume.pdf"
  }
} satisfies SiteData;
