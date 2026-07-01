/**
 * Single source of truth for all site content.
 * Edit this file to update the portfolio — components read from here.
 */

export type SocialLink = {
  label: string;
  href: string;
  /** lucide-react icon name resolved in the UI layer */
  icon: "linkedin" | "github" | "scholar" | "mail";
};

export type Publication = {
  title: string;
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
  stack?: string;
  description: string;
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

export type NavItem = { label: string; id: string };

export const identity = {
  name: "Aaditya Pai",
  title: "ML Researcher — LLM Agent Security",
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

export const about =
  "ML researcher working on LLM agent security — building attacks, defenses, and evaluation frameworks for LLM agents in real-world deployment settings. Currently a graduate researcher at Columbia's DAPLab (Data, Agents, and Processes Lab), focused on prompt injection, unsafe tool use, and policy enforcement across multi-step agent workflows. Always happy to connect.";

export const publications: Publication[] = [
  {
    title:
      "Evaluating Prompting-Based Defenses Against Domain-Camouflaged Injection Attacks",
    authors: "A. Pai",
    year: "2026",
    venue: "arXiv:2606.18530",
    href: "https://arxiv.org/abs/2606.18530",
  },
  {
    title:
      "Blind Spots in the Guard: How Domain-Camouflaged Injection Attacks Evade Detection in Multi-Agent LLM Systems",
    authors: "A. Pai",
    year: "2026",
    venue: "arXiv:2605.22001",
    href: "https://arxiv.org/abs/2605.22001",
  },
  {
    title:
      "PARSE: Provenance-Aware Retrieval Sanitization for Professional Domain LLM Agents",
    authors: "A. Pai",
    year: "2026",
    venue: "arXiv:2606.17467",
    href: "https://arxiv.org/abs/2606.17467",
  },
  {
    title:
      "Deterministic Data Flow Control Improves Agent Utility and Reduces Safety Violations",
    authors: "A. Pai",
    year: "2026",
    venue: "OpenReview",
    href: "https://openreview.net/pdf?id=V5WU7pCCVF",
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    org: "CodeIntegrity",
    location: "Remote",
    period: "Jul 2026 – Present",
    current: true,
    bullets: [
      "AI agent security startup. Building next-generation agent security benchmarking and evaluation infrastructure.",
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
      "Designed domain-camouflaged injection attacks and provenance-aware defenses for multi-agent systems, leading to first-author EMNLP submissions on agent robustness and runtime safeguards.",
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
    role: "ML Researcher",
    org: "Autonomous Motorsports Purdue (AMP)",
    location: "West Lafayette, IN",
    period: "Aug 2022 – May 2023",
    bullets: [
      'Won the "Share with the World" ML Research Award at the Purdue Undergraduate Research Exposition for simulating autonomous vehicle navigation using deep learning (CNNs for steering-angle prediction, hybrid FAST + ORB object detection).',
    ],
  },
  {
    role: "ML Researcher",
    org: "Lunabotics (NASA Robotic Mining Competition)",
    location: "West Lafayette, IN",
    period: "Aug 2021 – Dec 2021",
    bullets: [
      "Built high-performance object detection with OpenCV and ROS for terrain mapping in a simulated extraterrestrial environment; evaluated MOSSE tracking and FAST/ORB detection methods.",
    ],
  },
];

export const featuredProject: Project = {
  name: "ZK-KYA: Privacy-Preserving Identity Layer for AI Agents",
  stack: "Solidity, circom, snarkjs, Ethereum",
  description:
    "Zero-knowledge Know-Your-Agent protocol enabling AI agents to prove compliance with identity and authorization constraints without revealing credentials. Built zk-SNARKs in circom; deployed verifier contracts on Ethereum testnet.",
};

export const earlierProjects: Project[] = [
  {
    name: "Sentiment AI",
    description:
      "CNN image classifier (happy/sad) reaching 100% train/val accuracy after 20 epochs; ~3.7M-parameter pipeline with 3 conv layers + max pooling.",
  },
  {
    name: "WhiskerPixel",
    description:
      "Probabilistic pixel classifier (cat vs. grass) with 94–95% validation accuracy across two models.",
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
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      "Python",
      "SQL",
      "C/C++",
      "Embedded C",
      "PowerShell",
      "R",
      "MATLAB",
      "System Verilog",
      "VHDL",
      "Assembly",
      "React Native",
    ],
  },
  {
    category: "Data / ML",
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
      "Matplotlib",
      "Power BI",
      "Jupyter",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Git",
      "Linux",
      "AWS",
      "Docker",
      "Kubernetes",
      "Kubeflow",
      "Helm",
      "Amazon EKS",
      "CI/CD",
      "Grafana",
      "Prometheus",
      "BigQuery",
      "Firebase",
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

export const awards: string[] = [
  "Share with the World ML Research Award (Purdue Undergraduate Research Exposition)",
  "Eta Kappa Nu (IEEE-HKN), Beta Chapter — ECE Honor Society",
  "Dean's List & Semester Honors (7 of 8 semesters)",
  "Charles W. Brown ECE Scholarship",
  "Eli Shay Electrical Engineering Scholarship",
];

export const certifications: string[] = [
  "Advanced Calculus for Financial Engineering — Baruch College, CUNY",
  "Financial Markets — Yale University",
  "Managing ML Projects with Google Cloud — Google",
  "Software Engineering Virtual Experience — JPMorgan Chase & Co.",
  "Intermediate C++ — Microsoft",
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
