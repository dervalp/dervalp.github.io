export type NavItem = {
  id: string;
  label: string;
  href: string;
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

export type ProofPanel = {
  number: string;
  role: string;
  context: string;
  name: string;
  logoPath: string;
  logoStyle: "plaque" | "crest";
  logoWidth: number;
  logoHeight: number;
  headlineHtml: string;
  subline: string;
  points: string[];
  url: string;
};

export type HomeOutcome = {
  value: string;
  label: string;
  source: string;
};

export type Engagement = {
  id: string;
  title: string;
  summary: string;
  situation: string;
  workOn: string[];
  approach: string[];
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
    supportingText: string;
    primaryCtaLabel: string;
    headerCtaLabel: string;
    resumeCtaLabel: string;
  };
  career: {
    currentRole: string;
    currentEmployer: string;
    currentWork: CurrentWork[];
    proofPanels: ProofPanel[];
    engineeringLeadership: { label: string; text: string }[];
    homeOutcomes: HomeOutcome[];
    priorOutcomesLabel: string;
    priorOutcomes: CareerOutcome[];
    timeline: CareerEntry[];
  };
  engagements: Engagement[];
  contact: {
    title: string;
    description: string;
    directMessage: string;
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
    title: "Pierre Derval | Technology & Product Executive, Head of AI at Vertuoza",
    description:
      "Pierre Derval is a technology and product executive: six years as CPTO of CluedIn, now Head of AI and Business Transformation at Vertuoza. 20+ years leading engineering, product and AI in enterprise software.",
    siteName: "Pierre Derval",
    locale: "en_BE",
    ogImage: "/og-image.png",
    ogImageAlt: "Pierre Derval, Technology & Product Executive and Head of AI at Vertuoza",
    ogImageWidth: 1200,
    ogImageHeight: 630,
    favicon: "/favicon.svg?v=2"
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
    brandLine: "Strategy. Craft. Delivery.",
    eyebrow: "Technology & Product Executive · Belgium",
    supportingText:
      "I lead engineering, platform and AI, with a product eye, to turn complex technology into products people use.",
    primaryCtaLabel: "Discuss your challenge",
    headerCtaLabel: "Let’s talk",
    resumeCtaLabel: "Download CV"
  },
  // Career story. Source: Pierre_Derval_CV_AI_Product_Executive_2026_v5.pdf
  // (the public /Pierre_Derval_Resume.pdf). Keep dates and attribution aligned with it.
  career: {
    currentRole: "Head of AI and Business Transformation",
    currentEmployer: "Vertuoza",
    currentWork: [
      {
        id: "vertuoza",
        label: "Current role",
        name: "Vertuoza",
        role: "Head of AI and Business Transformation",
        years: "2026 – present",
        summary: [
          "I am Head of AI and Business Transformation at Vertuoza, a B2B construction-management SaaS platform based in Belgium, reporting to the CEO. I lead AI initiatives that span engineering, platform architecture and product.",
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
    // Metrics stated by Pierre for the current-work panels (PRD #29, 2026-10-28).
    proofPanels: [
      {
        number: "01",
        role: "Head of AI",
        context: "Engineering delivery · Construction SaaS",
        name: "Vertuoza",
        logoPath: "/logos/vertuoza.svg",
        logoStyle: "plaque",
        logoWidth: 184,
        logoHeight: 56,
        headlineHtml: "From <em>65 days</em> to 6.",
        subline: "Median time to market, cut by 10×.",
        points: [
          "AI Advisor and MCP shipped inside the product",
          "Support and bug fixing automated with AI"
        ],
        url: "https://www.vertuoza.com/"
      },
      {
        number: "02",
        role: "Created by me",
        context: "Engineering throughput · Coding agents",
        name: "Omni-loop",
        logoPath: "/logos/omni-loop.svg",
        logoStyle: "crest",
        logoWidth: 122,
        logoHeight: 18,
        headlineHtml: "<em>10×</em> more pull requests.",
        subline: "Same human review on every one.",
        points: [
          "40% of merged work written by agents",
          "Product managers and non-technical teammates ship to the product"
        ],
        url: "https://www.omni-loop.xyz/"
      }
    ],
    // Engineering leadership facts. Team size stated by Pierre (2026-11-10); the rest restates the timeline below.
    engineeringLeadership: [
      {
        label: "Teams led",
        text: "30 engineers at CluedIn, where everyone in product and technology reported to me. Earlier, the engineering team at Amilia, from hiring to delivery."
      },
      {
        label: "Architecture owned",
        text: "A multi-tenant SaaS transformation delivered in 4 months at CluedIn. Cross-product architecture and GraphQL federation at Adform. The SPEAK application framework at Sitecore."
      },
      {
        label: "In production",
        text: "Agentic AI workflows for regulated enterprises at CluedIn. AI Advisor and MCP inside the Vertuoza product, with the Platform team."
      },
      {
        label: "Still building",
        text: "Omni-loop, a delivery framework for coding agents, and Ikary Manifest, an open-source manifest runtime."
      }
    ],
    homeOutcomes: [
      { value: "80%", label: "Customer adoption of new AI features within six months.", source: "Prior-career outcome" },
      { value: "4 months", label: "To deliver a multi-tenant SaaS platform transformation.", source: "CluedIn" },
      { value: "Weeks → hours", label: "Time to launch AI agents with reusable deployment patterns.", source: "CluedIn" }
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
        role: "Head of AI and Business Transformation",
        detail:
          "B2B construction-management SaaS. Leads AI across engineering, platform architecture and product. Created Omni-loop; brought AI Advisor and MCP capabilities into production with the Platform team."
      },
      {
        years: "2020 – 2026",
        company: "CluedIn",
        location: "Brussels",
        role: "Chief Product & Technology Officer (CPTO)",
        detail:
          "Enterprise data management and AI platform for regulated enterprises, ACV 300k+, 40-person organisation. Everyone in product and technology reported to me, including 30 engineers. Owned product strategy with the CEO, led a multi-tenant SaaS transformation in 4 months and built agentic AI workflows."
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
  engagements: [
    {
      id: "ai-product-direction",
      title: "Technology & AI direction",
      summary: "Decide where AI belongs, what is worth building and how it supports your business.",
      situation:
        "There is pressure to ship AI, and more ideas than certainty. Shipping the wrong thing, at the wrong time, for the wrong reasons creates more debt than it resolves.",
      workOn: [
        "Which problems are worth solving with AI, and which are better served by automation or simpler tooling",
        "Build-versus-buy framing, and a case that holds up under leadership scrutiny",
        "A technology and product direction grounded in business priority rather than enthusiasm"
      ],
      approach: [
        "I help leadership teams define what they are actually trying to achieve with AI, then turn that into a small number of decisions the organisation can act on.",
        "The result is a clear direction: what to build, what to leave alone, and why."
      ]
    },
    {
      id: "platform-delivery-assessment",
      title: "Platform & delivery assessment",
      summary: "Find the architectural and operating constraints between your ambition and production.",
      situation:
        "The ambition is clear but delivery has stalled. Pilots do not reach production, and it is hard to tell whether the cause is the data, the architecture, the governance or the way teams are organised.",
      workOn: [
        "Data, architecture and governance readiness, and the gaps that carry real risk",
        "Ownership, accountability and decision rights across engineering, data and the business",
        "A prioritised view of what is blocking production and what to change first"
      ],
      approach: [
        "AI changes how software teams need to be organised and how products need to be governed. Most operating models were not designed for this.",
        "I look at the platform and the operating model together, and give you an honest account of what stands between the plan and production."
      ]
    },
    {
      id: "hands-on-executive-advisory",
      title: "Fractional CTO & executive advisory",
      summary: "Technology leadership on a fractional, interim or advisory basis, close to the teams and systems that deliver.",
      situation:
        "A programme is already in motion and the decisions are live. You need experienced technology leadership now, before or instead of a permanent hire.",
      workOn: [
        "A fractional or interim CTO or Head of AI mandate, embedded with the engineering team",
        "Direct, practical input into architecture, product and delivery decisions already under way",
        "Alignment between founders, executives, product and engineering around priorities and tradeoffs",
        "Working practices that let teams adopt AI-assisted delivery while keeping human review"
      ],
      approach: [
        "This is not a strategy exercise. I stay close to the decisions and the people making them, not only the deck reviews.",
        "I am not sold on any particular vendor, platform or methodology. The only goal is execution that holds."
      ]
    }
  ],
  contact: {
    title: "What needs to move forward?",
    description:
      "If engineering, platform and AI need to move together, I can help make that real.",
    directMessage:
      "Tell me what you are trying to change, where things stand and what is getting in the way.",
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
