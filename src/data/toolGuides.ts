// The readable explanation under each diagnostic: who it is for, what it
// measures, how to read the result, and common questions. The tools themselves
// render with JavaScript, so this text is what a search engine can read.

export type ToolGuide = {
  name: string;
  path: string;
  title: string;
  description: string;
  whoFor: string[];
  measuresIntro: string;
  measures: { term: string; detail: string }[];
  howToRead: string[];
  faqs: { question: string; answer: string }[];
};

const REPORT_ANSWER =
  "Yes. The tool is free and runs in your browser with no account. The downloadable report asks for an email address, and your scores are sent with it so I can follow up if you want to talk them through.";

export const TOOL_GUIDES = {
  "ai-readiness-checklist": {
    name: "AI Readiness Checklist",
    path: "/tools/ai-readiness-checklist",
    title: "AI Readiness Checklist: Free Self-Assessment | Pierre Derval",
    description:
      "A free AI readiness checklist: 28 questions on business priority, data, architecture, governance and delivery, with a live readiness score.",
    whoFor: [
      "Use this checklist before you scope or fund an AI initiative. It is written for the person who has to say whether the organisation is ready: a CTO, a head of product, a head of data, or a consultant preparing an engagement.",
      "It takes about fifteen minutes alone. It is more useful in a room with the business sponsor and the technical lead, because the disagreements are where the real gaps are.",
    ],
    measuresIntro:
      "The 28 questions are grouped into five dimensions. A serious gap in any one of them can stall the whole initiative.",
    measures: [
      {
        term: "Business priority",
        detail:
          "Whether there is a named use case, a senior sponsor with budget, and a definition of success you can measure.",
      },
      {
        term: "Data readiness",
        detail:
          "Whether the data is accessible, its quality is known, someone owns it, and it can be refreshed once the system is live.",
      },
      {
        term: "Architecture maturity",
        detail:
          "Whether the platform can host, integrate and observe a system that real users depend on.",
      },
      {
        term: "Governance maturity",
        detail:
          "Who owns AI outputs in production, how they are reviewed, and whether the risks have been accepted by the right people.",
      },
      {
        term: "Delivery capability",
        detail:
          "Whether the team can build the solution and, above all, keep it running after go-live.",
      },
    ],
    howToRead: [
      "Tick each question you can honestly answer yes to. The score is the share of questions ticked, shown per dimension and in total.",
      "80% or more reads as ready to proceed. 55% to 79% means proceed with caution. 30% to 54% means significant gaps. Below 30% means not ready.",
      "Look at the flags before the total. Each question is marked Critical, Important or Watch. One unticked Critical question matters more than a high overall score, so treat those as blockers to resolve before you commit a timeline.",
    ],
    faqs: [
      {
        question: "What is an AI readiness assessment?",
        answer:
          "It is a structured check of whether an organisation can take an AI use case to production: a real business problem, usable data, a platform that can host it, clear ownership and a team that can sustain it. It is done before scoping so that gaps surface while they are still cheap to fix.",
      },
      {
        question: "What score do I need before starting an AI project?",
        answer:
          "There is no pass mark. A team at 60% with every Critical question ticked is in a better position than a team at 85% with no sponsor. Use the score to decide what to fix first, not whether to feel confident.",
      },
      {
        question: "How is this different from the Data Readiness Checklist?",
        answer:
          "This checklist covers the whole organisation in five dimensions, with data as one of them. The Data Readiness Checklist goes deeper on the data alone, with 27 questions. Start here, and run the data checklist if the data dimension is your weakest.",
      },
      { question: "Is it free?", answer: REPORT_ANSWER },
    ],
  },

  "data-readiness": {
    name: "Data Readiness Checklist",
    path: "/tools/data-readiness",
    title: "Data Readiness Checklist for AI Projects | Pierre Derval",
    description:
      "A free data readiness checklist for AI projects: 27 questions on accessibility, quality, ownership, compliance and freshness, with a live score.",
    whoFor: [
      "Use this checklist when you already have an AI use case in mind and need to know whether your data can support it. It suits data leads, architects and product owners who have to commit to a timeline.",
      "Run it against one specific use case and the data it needs. Answering for the organisation in general gives a comfortable score and tells you little.",
    ],
    measuresIntro:
      "The 27 questions cover five dimensions of the data that will feed the system.",
    measures: [
      {
        term: "Accessibility",
        detail:
          "Whether the data can actually be reached, or is trapped in legacy systems and approval queues.",
      },
      {
        term: "Quality",
        detail:
          "Whether completeness, accuracy and consistency are known and documented.",
      },
      {
        term: "Ownership",
        detail:
          "Whether a named person is responsible for the data and its ongoing quality.",
      },
      {
        term: "Compliance",
        detail:
          "Whether personal data, sensitivity and regulatory constraints have been identified.",
      },
      {
        term: "Freshness",
        detail:
          "Whether the data can be kept current once the system is in production.",
      },
    ],
    howToRead: [
      "Tick each question you can answer yes to for the use case in front of you. The score is the share of questions ticked, per dimension and in total.",
      "80% or more reads as ready to proceed. 55% to 79% means proceed with caution. 30% to 54% means significant gaps. Below 30% means not ready.",
      "The weakest dimension sets your real position. AI amplifies whatever data quality exists, so one empty dimension is a reason to pause even when the total looks healthy.",
    ],
    faqs: [
      {
        question: "What does data readiness for AI mean?",
        answer:
          "It means the data a use case depends on is reachable, good enough, owned by someone, legal to use and able to stay current. A model can be swapped in a week. Data problems take months, which is why they are worth finding first.",
      },
      {
        question: "How much data do I need?",
        answer:
          "It depends on the approach. Training a model needs labelled history. A generative AI use case built on retrieval needs far less, but the documents still have to be accessible, accurate and permitted for that use. The AI Approach Finder helps decide which case you are in.",
      },
      {
        question: "Should I run this before or after the AI Readiness Checklist?",
        answer:
          "After. The AI Readiness Checklist tells you whether data is your weak point among five dimensions. This one tells you exactly where in the data the problem sits.",
      },
      { question: "Is it free?", answer: REPORT_ANSWER },
    ],
  },

  "ai-business-case-scorecard": {
    name: "AI Business Case Scorecard",
    path: "/tools/ai-business-case-scorecard",
    title: "AI Business Case Scorecard: Score Your Case | Pierre Derval",
    description:
      "Score an AI business case before it reaches leadership. Nine questions across strategy, value, feasibility, stakeholders and risk. Free.",
    whoFor: [
      "Use this scorecard when you are about to ask for budget. It is for the person writing or defending the case: a product leader, a head of AI, or an executive deciding whether a proposal is ready for the board.",
      "It takes five minutes. Answer for the case as it stands today, not as you hope it will look after the next workshop.",
    ],
    measuresIntro:
      "Each of the nine answers contributes to five dimensions, and each dimension is scored from 0 to 100.",
    measures: [
      {
        term: "Strategic alignment",
        detail:
          "Whether the initiative serves a stated business objective and has a sponsor with authority.",
      },
      {
        term: "Value clarity",
        detail:
          "How success will be measured and how well the expected value is supported by evidence.",
      },
      {
        term: "Feasibility",
        detail:
          "How complex the implementation is and how soon the first measurable value is expected.",
      },
      {
        term: "Stakeholder readiness",
        detail:
          "How much the initiative changes the way people work, and whether that has been assessed.",
      },
      {
        term: "Risk awareness",
        detail:
          "Whether the biggest risk has been named and the alternatives to AI have been considered.",
      },
    ],
    howToRead: [
      "Each dimension is rated Strong (75 and above), Solid (55 to 74), Partial (35 to 54) or Weak (below 35).",
      "The overall verdict uses both the average and the weakest dimension. A Strong Business Case needs an average of at least 72 with no dimension below 50. Promising But Incomplete needs an average of 55 with nothing below 35. Below that, the case is Early Stage, or Not Yet a Business Case.",
      "This is deliberate. A case with excellent value projections and no sponsor is not a strong case, and an average would hide that. Work on the lowest dimension first.",
    ],
    faqs: [
      {
        question: "What should an AI business case include?",
        answer:
          "A business objective, a measure of success, a sponsor, an estimate of value with its evidence, a view of implementation complexity, the main risk, the alternatives considered and the effect on the people who will use it. The nine questions map to exactly these.",
      },
      {
        question: "Why does one weak dimension lower the verdict so much?",
        answer:
          "Because that is how these initiatives fail. Funding is rarely withdrawn over the average quality of a proposal. It is withdrawn because one thing was missing: the sponsor moved on, the data was not there, or nobody adopted the result.",
      },
      {
        question: "Is this a replacement for a financial model?",
        answer:
          "No. It tells you whether the case is complete enough to be worth modelling and presenting. If value clarity scores low, the financial model is the next piece of work.",
      },
      { question: "Is it free?", answer: REPORT_ANSWER },
    ],
  },

  "ai-approach-finder": {
    name: "AI Approach Finder",
    path: "/tools/ai-approach-finder",
    title: "AI Approach Finder: ML, GenAI, RAG or Agents? | Pierre Derval",
    description:
      "Eight questions to choose between business rules, machine learning, deep learning and generative AI, and between direct integration, RAG and agents.",
    whoFor: [
      "Use this tool when a team has a problem to solve and the conversation has jumped straight to a technology. It is for architects, product managers and engineering leads who need a reasoned starting point before choosing a vendor or a framework.",
      "It takes about three minutes and gives a recommendation you can challenge, which is more useful than a preference nobody has examined.",
    ],
    measuresIntro:
      "Eight questions about the task, your data, autonomy, explainability, latency, input complexity and team constraints produce a scored recommendation on two layers.",
    measures: [
      {
        term: "The reasoning layer",
        detail:
          "Business rules, machine learning, deep learning or generative AI. This is the kind of intelligence the problem needs.",
      },
      {
        term: "The architecture layer",
        detail:
          "Direct integration, retrieval-augmented generation (RAG) or agents. This is how that intelligence reaches your data and takes action.",
      },
    ],
    howToRead: [
      "Every answer adds weight to the options it favours. The result shows a score for each option on both layers, so you see the runner-up as well as the winner.",
      "A clear winner means your constraints point one way. Two close scores mean the choice depends on something the questions could not capture, usually cost or the skills you already have. That is the discussion to have with your team.",
      "Take a recommendation of business rules seriously. If the logic is fixed and explainability is critical, a deterministic solution is cheaper, faster and easier to audit than a model.",
    ],
    faqs: [
      {
        question: "When should I use RAG instead of agents?",
        answer:
          "Use RAG when the system needs to answer from your private documents or knowledge base and only has to respond. Use agents when it has to plan and carry out several steps with tools. Agents add cost, latency and failure modes, so choose them only when the task needs that autonomy.",
      },
      {
        question: "Do I always need generative AI?",
        answer:
          "No. Predicting a number or classifying structured records is a machine learning problem. Applying fixed validation logic is a rules problem. Generative AI earns its complexity when the input or output is natural language.",
      },
      {
        question: "What if I have no labelled data?",
        answer:
          "That rules out training your own model for now and points to rules or to a pre-trained generative model. The tool accounts for this in its second question.",
      },
      { question: "Is it free?", answer: REPORT_ANSWER },
    ],
  },

  "ai-project-scoper": {
    name: "AI Project Scoper",
    path: "/tools/ai-project-scoper",
    title: "AI Project Scoper: Free AI Roadmap Generator | Pierre Derval",
    description:
      "Scope an AI project across six dimensions and get a phased roadmap, a prioritised task list, a risk view and an Excel workbook. Free.",
    whoFor: [
      "Use this tool when the decision to build is made and you need a first plan. It is for the person who has to turn an approved idea into phases, tasks and roles: a programme lead, an engineering manager or a head of AI.",
      "Set the context first: the AI approach, your domain, team size, timeline and budget. Then answer the scoping questions. Allow fifteen to twenty minutes.",
    ],
    measuresIntro:
      "The scoping questions cover six dimensions, and the plan is tailored to the approach and context you selected.",
    measures: [
      {
        term: "Data and infrastructure",
        detail: "Sources, quality, pipelines and the platform they run on.",
      },
      {
        term: "Model and approach fit",
        detail:
          "Whether the chosen approach suits the problem, and what it takes to prototype it.",
      },
      {
        term: "Architecture and integration",
        detail:
          "The systems the AI component connects to and the non-functional requirements.",
      },
      {
        term: "Governance, ethics and risk",
        detail: "Regulation, privacy, fairness and risk ownership.",
      },
      {
        term: "Team and change management",
        detail: "Skills, roles and the effect on existing ways of working.",
      },
      {
        term: "Evaluation and testing",
        detail: "Success metrics, baselines and how quality is verified.",
      },
    ],
    howToRead: [
      "The result is a roadmap in five phases: discovery, prototype, validate, deploy and scale. Each phase lists the tasks that apply to your answers, with a suggested role and a size.",
      "Tasks in your weakest dimensions are raised in priority, so the work that reduces the most risk comes first. The risk view groups the main risks by dimension.",
      "Export the plan as an Excel workbook with a summary, the roadmap, the task list and the risks. Treat it as a first draft to adapt with your team, not a commitment.",
    ],
    faqs: [
      {
        question: "How do you scope an AI project?",
        answer:
          "Fix the approach and the constraints first, then assess each area that can block delivery: data, model fit, architecture, governance, team and evaluation. The plan follows from the gaps. Scoping from the technology outward is how projects end up with a working demo and no path to production.",
      },
      {
        question: "What are the phases of an AI project?",
        answer:
          "Discovery to frame the problem and audit the data, a prototype to prove the approach, validation against real cases and success metrics, deployment into production, and scaling with monitoring and governance in place.",
      },
      {
        question: "I have not chosen an AI approach yet. Where do I start?",
        answer:
          "Run the AI Approach Finder first. It recommends an approach in a few minutes, and you can bring that choice into the scoper.",
      },
      { question: "Is it free?", answer: REPORT_ANSWER },
    ],
  },
} satisfies Record<string, ToolGuide>;

export type ToolGuideKey = keyof typeof TOOL_GUIDES;
