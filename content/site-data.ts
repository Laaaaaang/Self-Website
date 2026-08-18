export type NavigationItem = {
  index: string;
  label: string;
  href: string;
  description: string;
};

export type ResearchProject = {
  title: string;
  description: string;
};

export type ResearchTheme = {
  slug: string;
  title: string;
  year: string;
  statement: string;
  description: string;
  image: string;
  alt: string;
  marker: string;
  metadata: string[];
  imageAspect: string;
  projects: ResearchProject[];
};

export type WorkEntry = {
  title: string;
  year: string;
  kind: string;
  theme: string;
  description: string;
  url: string;
};

export type TraceEntry = {
  slug: string;
  image: string;
  alt: string;
  title: string;
  location: string;
  year: string;
  caption: string;
  aspectClass: string;
  frameClass: string;
  captionClass: string;
};

export type SelfDetail = {
  label: string;
  value: string;
};

export type CvSection = {
  title: string;
  items: string[];
};

export const navigationItems: NavigationItem[] = [
  {
    index: "01",
    label: "STRUCTURES",
    href: "/structures",
    description: "Research themes organized around invariance, reduction, and redesign."
  },
  {
    index: "02",
    label: "WORKS",
    href: "/works",
    description: "Selected lines of work in modeling, generation, and intelligent systems."
  },
  {
    index: "03",
    label: "TRACES",
    href: "/traces",
    description: "Perceptual studies in line, tension, interval, and light."
  },
  {
    index: "04",
    label: "FRAGMENTS",
    href: "/fragments",
    description: "Short essays and notebook entries on structure, representation, and emergence."
  },
  {
    index: "05",
    label: "SELF",
    href: "/self",
    description: "Research trajectory, interests, and the person behind the methods."
  },
  {
    index: "06",
    label: "CV",
    href: "/cv",
    description: "Formal information for readers who need a conventional summary."
  }
];

export const researchThemes: ResearchTheme[] = [
  {
    slug: "modeling",
    title: "MODELING",
    year: "2026",
    statement: "Reduced representations clarify which dynamics are essential and which are incidental.",
    description:
      "I use mathematical compression to ask what a complex physical system must retain in order to remain causally faithful under change.",
    image: "/images/research-modeling.svg",
    alt: "Abstract structural image suggesting reduced dynamical contours.",
    marker: "INVARIANT",
    metadata: ["model-order reduction", "physical systems", "causal compression"],
    imageAspect: "aspect-[4/5]",
    projects: [
      {
        title: "Low-dimensional transient models",
        description: "State-space reductions for nonlinear circuit behavior without discarding dominant modes."
      },
      {
        title: "Graph surrogates for timing structure",
        description: "Representations that preserve delay relationships while simplifying full simulations."
      }
    ]
  },
  {
    slug: "generation",
    title: "GENERATION",
    year: "2026",
    statement: "Synthesis becomes reliable when constraints are treated as structure rather than afterthought.",
    description:
      "Instead of generating arbitrary form and repairing it later, I study how valid systems can be produced directly from relational and physical requirements.",
    image: "/images/research-generation.svg",
    alt: "Abstract structural image suggesting modular arrangement and synthesis.",
    marker: "CONSTRAINT",
    metadata: ["constraint synthesis", "repair", "validity"],
    imageAspect: "aspect-[5/4]",
    projects: [
      {
        title: "Constraint-preserving redesign",
        description: "Search procedures that keep electrical and topological feasibility visible during modification."
      },
      {
        title: "Composable structural priors",
        description: "Ways of encoding design rules so generated systems remain coherent across scales."
      }
    ]
  },
  {
    slug: "intelligence",
    title: "INTELLIGENCE",
    year: "2026",
    statement: "Intelligent systems matter when they reason over relationships, not only outputs.",
    description:
      "I am interested in agents and learning systems that inspect, transform, and redesign structured artifacts by modeling their latent dependencies.",
    image: "/images/research-intelligence.svg",
    alt: "Abstract structural image suggesting reasoning over graph topology.",
    marker: "LATENT",
    metadata: ["agents", "graph reasoning", "design automation"],
    imageAspect: "aspect-[4/5]",
    projects: [
      {
        title: "Agents that inspect hardware graphs",
        description: "Procedures for locating fragile or underconstrained regions before failure manifests."
      },
      {
        title: "Reasoning under representation shift",
        description: "Methods that remain stable across schematic, graph, and simulation views of the same system."
      }
    ]
  },
  {
    slug: "evolution",
    title: "EVOLUTION",
    year: "2026",
    statement: "Adaptive systems reveal structure by the way they reorganize under feedback.",
    description:
      "Feedback does more than correct error: it exposes which internal relations are robust enough to persist through repeated revision.",
    image: "/images/research-evolution.svg",
    alt: "Abstract structural image suggesting feedback loops and adaptive reorganization.",
    marker: "FEEDBACK",
    metadata: ["adaptation", "feedback", "self-improving systems"],
    imageAspect: "aspect-[5/4]",
    projects: [
      {
        title: "Closed-loop model revision",
        description: "Pipelines that update internal abstractions in response to mismatch between prediction and behavior."
      },
      {
        title: "Structural memory in iterative design",
        description: "Mechanisms for retaining useful invariants while exploring alternate system organizations."
      }
    ]
  }
];

export const selectedWorks: WorkEntry[] = [
  {
    title: "S-Crescendo: A Nested Transformer Weaving Framework for Scalable Nonlinear System in S-Domain Representation",
    year: "2025",
    kind: "Conference paper",
    theme: "NeurIPS 2025",
    description: "Poster presentation at NeurIPS 2025 in Mexico City.",
    url: "https://neurips.cc/virtual/2025/loc/mexico-city/poster/117448"
  },
  {
    title: "RA²L-NAND: Risk-Aware Active Learning for High-Sigma Exploration in 3D NAND",
    year: "2026",
    kind: "Conference paper",
    theme: "ICCAD 2026",
    description: "Risk-aware active learning for high-sigma exploration in 3D NAND.",
    url: "https://iccad2026.hotcrp.com/paper/764"
  }
];

export const traceEntries: TraceEntry[] = [];

export const selfOpening =
  "I work on mathematical and computational ways of understanding complex systems.";

export const selfDetails: SelfDetail[] = [
  {
    label: "Research background",
    value: "Applied mathematics, system representation, modeling, and intelligent tools for structured technical domains."
  },
  {
    label: "Current institution",
    value: "Carnegie Mellon University"
  },
  {
    label: "Interests",
    value: "AI for design, circuit and graph abstractions, scientific imaging, philosophy of representation."
  },
  {
    label: "Location",
    value: "Pittsburgh, 2026"
  },
  {
    label: "Contact",
    value: "hjl86300040@gmail.com"
  }
];

export const cvSections: CvSection[] = [
  {
    title: "Focus",
    items: [
      "Model-order reduction and reduced representations of physical systems",
      "Graph-based reasoning for circuits and design automation",
      "Intelligent agents that inspect, modify, and redesign structured artifacts"
    ]
  },
  {
    title: "Trajectory",
    items: [
      "Current position: [Institution / Lab placeholder]",
      "Previous training: [Degree / Department placeholder]",
      "Selected methods: modeling, simulation, representation learning, tool-using systems"
    ]
  },
  {
    title: "Materials",
    items: [
      "Download CV (PDF)",
      "Publication list placeholder",
      "Reference links placeholder"
    ]
  }
];
