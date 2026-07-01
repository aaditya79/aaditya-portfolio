/**
 * Single source of truth for all site content.
 * Edit this file to update the portfolio; components read from here.
 */

export type SocialLink = {
  label: string;
  href: string;
  /** lucide-react icon name resolved in the UI layer */
  icon: "linkedin" | "github" | "scholar" | "mail";
};

export type Publication = {
  title: string;
  /** Full author list; the UI bolds "Aaditya Pai" wherever it appears. */
  authors: string;
  year: string;
  venue: string;
  href: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export type Project = {
  name: string;
  org?: string;
  period?: string;
  description: string;
  /** GitHub URL; omit to hide the repo link/icon. */
  href?: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  period: string;
};

export type Credential = {
  name: string;
  issuer: string;
};

export type NavItem = { label: string; id: string };

export const identity = {
  name: "Aaditya Pai",
  title: "ML Researcher, LLM Agent Security",
  tagline:
    "Columbia MS Data Science · Purdue BS Computer Engineering · New York, NY",
  email: "aup2005@columbia.edu",
} as const;

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aaditya-pai/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/aaditya79",
    icon: "github",
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=YYfwugIAAAAJ&hl=en",
    icon: "scholar",
  },
];

export const scholarUrl =
  "https://scholar.google.com/citations?user=YYfwugIAAAAJ&hl=en";

/** Bolded in the UI wherever it appears in an author list. */
export const authorHighlight = "Aaditya Pai";

export const about =
  "I'm an ML researcher focused on the security of LLM agent systems, where I build attacks, defenses, and evaluation frameworks for agents deployed in the real world. I'm currently a Graduate Researcher at Columbia's DAPLab (Data, Agents, and Processes Lab), where I work on prompt injection, unsafe tool use, and policy enforcement across multi-step workflows, and a Software Engineer Intern at CodeIntegrity. Alongside the security work, I'm drawn to quantitative finance and to problems where careful evaluation meets real deployment constraints.";

export const publications: Publication[] = [
  {
    title:
      "Evaluating Prompting-Based Defenses Against Domain-Camouflaged Injection Attacks",
    authors: "Aaditya Pai",
    year: "2026",
    venue: "arXiv:2606.18530",
    href: "https://arxiv.org/abs/2606.18530",
  },
  {
    title:
      "Blind Spots in the Guard: How Domain-Camouflaged Injection Attacks Evade Detection in Multi-Agent LLM Systems",
    authors: "Aaditya Pai",
    year: "2026",
    venue: "arXiv:2605.22001",
    href: "https://arxiv.org/abs/2605.22001",
  },
  {
    title:
      "PARSE: Provenance-Aware Retrieval Sanitization for Professional Domain LLM Agents",
    authors: "Aaditya Pai",
    year: "2026",
    venue: "arXiv:2606.17467",
    href: "https://arxiv.org/abs/2606.17467",
  },
  {
    title:
      "Deterministic Data Flow Control Improves Agent Utility and Reduces Safety Violations",
    authors:
      "Charlie Summers, Prajwal Raghunath, Aaditya Pai, Mayur Kulkarni, Zhuo Zhang, Oliver Kennedy, Eugene Wu",
    year: "2026",
    venue: "OpenReview",
    href: "https://openreview.net/pdf?id=V5WU7pCCVF",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    org: "CodeIntegrity",
    location: "New York, NY",
    period: "Jul 2026 – Present",
    current: true,
    bullets: [
      "Funded AI agent security startup. Building next-generation agent security benchmarking and evaluation infrastructure.",
    ],
  },
  {
    role: "Graduate Researcher",
    org: "Columbia DAPLab (Data, Agents, and Processes Lab)",
    location: "New York, NY",
    period: "Feb 2026 – Present",
    current: true,
    bullets: [
      "Researching adversarial robustness and security of LLM agent systems: prompt injection, unsafe tool use, and policy enforcement across multi-step workflows.",
      "Built evaluation infrastructure and attack pipelines across AgentDojo, WebArena, InjecAgent, and ToolBench to measure detector failure modes, attack transferability, and agent vulnerability under adversarial conditions.",
      "Designed domain-camouflaged injection attacks and provenance-aware defenses for multi-agent systems.",
    ],
  },
  {
    role: "Data Engineer",
    org: "Cummins Inc.",
    location: "Chicago, IL",
    period: "Jul 2023 – Jul 2025",
    bullets: [
      "Engineered anomaly detection and validation pipelines over millions of enterprise telemetry records using Python and SQL; generated automated action lists that reduced annual spend by $550K through systematic identification of inactive licenses and unused resources.",
      "Built scalable ETL automation frameworks with Python, SQL, PowerShell, and REST APIs; defined data quality checks for missing values, anomalous distributions, and schema drift across staging and production workflows.",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "ADVANCE.AI",
    location: "Singapore",
    period: "May 2022 – Aug 2022",
    bullets: [
      "Deployed CI/CD workflows and service routing infrastructure for distributed ML services; integrated Istio service mesh within Kubeflow across 3+ microservices to improve observability and deployment reliability.",
      "Engineered real-time monitoring and anomaly detection for a 10+ node Kubernetes cluster on Linux; defined threshold-based alerting rules for latency, request size, and data transfer.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    org: "Autonomous Motorsports Purdue (AMP)",
    location: "West Lafayette, IN",
    period: "Aug 2022 – May 2023",
    bullets: [
      "Built a CNN with ELU activations for real-time steering prediction in a simulated autonomous driving environment, with a hybrid FAST-ORB feature pipeline and a regression steering model trained on 45K+ frames of sensor data, reaching under 5 degrees mean absolute error at 30 FPS and improving obstacle avoidance accuracy by 30% under real-time latency constraints.",
      'Won the "Share with the World" VIP Award at the Purdue Undergraduate Research Conference; benchmarked feature extraction methods, evaluated model stability across simulation conditions, and optimized the inference pipeline for real-time deployment.',
    ],
  },
  {
    role: "Undergraduate Researcher",
    org: "Lunabotics (NASA Robotic Mining Competition)",
    location: "West Lafayette, IN",
    period: "Aug 2021 – Dec 2021",
    bullets: [
      "Benchmarked object detection and tracking algorithms under noisy visual conditions across varied lighting and terrain, analyzing accuracy, stability, and failure modes; selected the MOSSE filter through systematic evaluation, reaching 95% tracking accuracy under real-time constraints.",
      "Built an end-to-end OpenCV perception pipeline integrating detection and tracking for autonomous navigation in the NASA Lunabotics Mining Competition environment, validated across edge cases with documented, reproducible evaluation methodology.",
    ],
  },
];

export const featuredProjects: Project[] = [
  {
    name: "NBA Betting Multi-Agent Reasoning System",
    org: "Columbia University",
    period: "Jan 2026 – May 2026",
    description:
      "Multi-agent debate system for pre-game NBA line prediction. Ingested live odds, statistical, and contextual data across six sources, implemented a ReAct-style agent loop with ChromaDB retrieval, and benchmarked multi-agent debate against single-agent chain-of-thought using Brier scores and calibration curves. Ran ablations isolating each data source and backtested against closing line value on a held-out season.",
    href: "https://github.com/aaditya79/MatchOdds-AI",
  },
  {
    name: "Statistical Arbitrage Research Platform",
    org: "Columbia University",
    period: "Jan 2026 – May 2026",
    description:
      "Reimplemented the Avellaneda and Lee (2010) statistical arbitrage framework from scratch: PCA factor decomposition, OU residual modeling, s-score signal generation, HMM regime filtering, and Almgren-Chriss execution. Extended it with HMM regime filtering to suppress signals in trending markets, volatility-targeted position sizing, and optimal execution modeling. Interactive React frontend for backtesting with automated Sharpe ratio, drawdown, and turnover reporting.",
    href: "https://github.com/arnavahuja/StatArb-Research",
  },
  {
    name: "ZK-KYA: Zero-Knowledge Identity Layer for AI Agents",
    org: "Columbia University",
    period: "Jan 2026 – May 2026",
    description:
      "Privacy-preserving authorization protocol for autonomous AI agents using zk-SNARKs. Agents prove compliance with identity and scope constraints without revealing credentials. Implemented Groth16 circuits in circom, deployed Solidity verifier contracts on an Ethereum testnet, and benchmarked proof generation time, R1CS constraints, and on-chain gas costs.",
    href: "https://github.com/aaditya79/ZK-KYA-Auth-Layer",
  },
  {
    name: "Low-Latency Order Book Engine",
    org: "Columbia University",
    period: "Jan 2026 – Mar 2026",
    description:
      "High-performance limit order book in C++ with price-time priority matching, a custom object-pool allocator, and an Avellaneda-Stoikov market maker. Achieved 166ns median and 750ns p99 matching latency across 10M+ order events. Validated reconstructed book state against LOBSTER NASDAQ tick data over 400K real market events, and implemented a FIX 4.2 protocol parser with an end-to-end order round-trip demo.",
    href: "https://github.com/aaditya79/order-book-engine",
  },
];

export const earlierProjects: Project[] = [
  {
    name: "Sentiment AI",
    description:
      "CNN image classifier (happy/sad) reaching 100% train/val accuracy after 20 epochs; ~3.7M-parameter pipeline with 3 conv layers + max pooling.",
    href: "https://github.com/aaditya79/SentientAI",
  },
  {
    name: "WhiskerPixel",
    description:
      "Probabilistic pixel classifier (cat vs. grass) with 94–95% validation accuracy across two models.",
    href: "https://github.com/aaditya79/WhiskerPixel",
  },
  {
    name: "AES Implementation",
    description:
      "256-bit AES in Python with full encrypt/decrypt for text and images (14 rounds).",
  },
  {
    name: "Custom Compiler + VM",
    description:
      "Parser, symbol table, instruction buffer, and virtual machine for a custom assembly language in C++.",
    href: "https://github.com/aaditya79/Compiler-and-Virtual-Machine",
  },
  {
    name: "Genome Assembly Algorithm",
    description:
      "De Bruijn graph traversal in C to reconstruct DNA sequences from k-mers.",
  },
  {
    name: "Sorting Algorithm Visualizer",
    description:
      "Tkinter GUI visualizing selection/insertion/bubble/quick/shell sort with adjustable speed and data size.",
    href: "https://github.com/aaditya79/Sorting-Algorithm-Visualizer",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "C++",
      "C",
      "SQL",
      "R",
      "SAS",
      "MATLAB",
      "Solidity",
      "PowerShell",
      "Embedded C",
      "System Verilog",
      "VHDL",
      "Assembly",
    ],
  },
  {
    category: "ML & AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "pandas",
      "NumPy",
      "statsmodels",
      "LangChain",
      "ChromaDB",
      "OpenCV",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    items: [
      "AWS",
      "GCP",
      "Azure",
      "Vertex AI",
      "Docker",
      "Kubernetes",
      "Kubeflow",
      "Helm",
      "Amazon EKS",
      "CI/CD",
      "Git",
      "Linux",
      "Grafana",
      "Prometheus",
      "BigQuery",
      "Firebase",
    ],
  },
  {
    category: "Frontend & Visualization",
    items: ["React", "Power BI", "Tableau", "Matplotlib", "Jupyter"],
  },
  {
    category: "Focus Areas",
    items: [
      "LLM agent security",
      "prompt injection",
      "adversarial robustness",
      "RAG",
      "multi-agent systems",
      "quantitative modeling",
      "backtesting",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "Columbia University",
    degree: "M.S. in Data Science",
    location: "New York, NY",
    period: "Aug 2025 – Dec 2026",
  },
  {
    school: "Purdue University",
    degree: "B.S. in Computer Engineering",
    location: "West Lafayette, IN",
    period: "Aug 2019 – May 2023",
  },
];

export const awards: Credential[] = [
  {
    name: "Share with the World ML Research Award",
    issuer: "Purdue Undergraduate Research Exposition",
  },
  {
    name: "Eta Kappa Nu (IEEE-HKN), Beta Chapter",
    issuer: "ECE Honor Society",
  },
  {
    name: "Dean's List & Semester Honors",
    issuer: "7 of 8 semesters",
  },
  {
    name: "Charles W. Brown ECE Scholarship",
    issuer: "Purdue ECE",
  },
  {
    name: "Eli Shay Electrical Engineering Scholarship",
    issuer: "Purdue ECE",
  },
];

export const certifications: Credential[] = [
  {
    name: "Advanced Calculus for Financial Engineering",
    issuer: "Baruch College, CUNY",
  },
  {
    name: "Financial Markets",
    issuer: "Yale University",
  },
  {
    name: "Managing ML Projects with Google Cloud",
    issuer: "Google",
  },
  {
    name: "Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co.",
  },
  {
    name: "Intermediate C++",
    issuer: "Microsoft",
  },
];

export const navItems: NavItem[] = [
  { label: "About", id: "about" },
  { label: "Research", id: "research" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Awards", id: "awards" },
];
