export interface MethodologyItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  step: number;
}

export interface CoreValue {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  id: number;
  title: string;
  provider: string;
  icon: string;
  iconColor: string;
}

export interface Recognition {
  id: number;
  title: string;
  organization: string;
  year: string;
  isHighlighted: boolean;
}

export interface AboutSectionData {
  philosophy: {
    tagline: string;
    title: string;
    quote: string;
  };
  methodology: MethodologyItem[];
  coreValues: CoreValue[];
  profile: {
    name: string;
    title: string;
    image: string;
    location: string;
    email: string;
  };
  education: {
    institution: string;
    degree: string;
    gpa: string;
  };
  certifications: Certification[];
  recognitions: Recognition[];
}

export const defaultAboutData: AboutSectionData = {
  philosophy: {
    tagline: "Professional Philosophy",
    title: "Solving human problems with elegant logic.",
    quote: "Engineering is not just about writing lines of code; it's about architecture, maintainability, and creating systems that scale with the user's needs. I believe in a user-first approach backed by solid, secure, and clean technical foundations."
  },
  methodology: [
    {
      id: 1,
      title: "Discover",
      description: "Deep-dive requirement gathering, user research, and feasibility analysis to understand the core problem.",
      icon: "search",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiu4oJGWC3_AW1qH4QCFj6PnJOkC84l-NGWLGgfz4kd_GnYEORWxGtvmcMM3lqz3qYcDHQds9kqkUeYfUkukyVeruvcZH-XX8DpRws72uX0di_D_tfcxNI_87psAE5u8qZZannY_4s7VDFqxzsOkhyD2yjUjVBTtJAxC0vda_kO4LlR9opfHtQmrPik57CWWgJIR0209FW9agUEutcHgysd9EfDcX8bSrmAaDQAZqIEw_DqrOMzXO9Gky05MFeDSEI7tHzfSHbTpYH",
      step: 1
    },
    {
      id: 2,
      title: "Design",
      description: "System architecture planning, database modeling, and UI/UX prototyping to blueprint the solution.",
      icon: "architecture",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0L4H_oEsM5cXjw3V3L70MOwXqgDQqnvhwnWRidqRRHtHLKrhJGiriWBxs747wlV-f1LunD1GqT81wTAQnd0iUVZPD3tfmEiU6kwBKRPac-hwUAeC4S-4SwcwoOs9arTpRLkuAsBfNWoxIv7xbflHUC27JQA0RK3JkSBl4637lslD7RTseIEAcWNOtCA3j2UjlRzQ_inUM5InFqFL4Q74dTxxMjzhSIfXF1BM_ochqfxVqZqCX0b2KmSa64ryFLOMXhH-Yh1hlC74g",
      step: 2
    },
    {
      id: 3,
      title: "Develop",
      description: "Agile implementation using clean coding practices, unit testing, and iterative sprints.",
      icon: "terminal",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIeZGxnHahJpwyG6ZDXq1_9UG2Ok2KfKnd2-rFYh-mteOvja2C6VTjeTROHleb8OlUf97saCSHU9mInHRz7piGODe-dl9zkEj0MvM3e3LhtooQICGUMnEJkMQkQJr4mAYioXpARZIZCtHTtKQLtCLw_RQjGxy9URiFvQWkw8k2ShjA0pGvNuIgcfo10YATpJrzz-9_GInC3yXTiX2i0zXut7HtP24VaXSY9tN6Mq7twSF8DqXDDxYT93gkhJtOcf_77iALq-WiHJo3",
      step: 3
    },
    {
      id: 4,
      title: "Deliver",
      description: "CI/CD deployment, rigorous QA testing, documentation handoff, and performance monitoring.",
      icon: "rocket_launch",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC0W9hczN2cdiMcTj26g96jG3KK7IeY3KoAL-0hgEJ8RHHz8mZVL9B3ERTkci9kww5t1VH6TDJo5Blipmf72jFfvFnZqqzVohCqdJGfhOtngM4R1Omh36MSiRxsRm9SnR1QRjiVJqhfhayQiGHlW_gp1iX6E9s49HUfmva-nK9s-6nvGnQsvsoB_eBssV_4MAnbhHbUEzA1QZDjZWVLFef21miO_c1tn1YuvuQM7BgN5h4dMj7L1QviA8z-e-7ZqdSrO5W8j81nHcQP",
      step: 4
    }
  ],
  coreValues: [
    {
      id: 1,
      title: "Scalability First",
      description: "Designing systems that grow seamlessly with business demands.",
      icon: "database"
    },
    {
      id: 2,
      title: "User-Centric",
      description: "Prioritizing UX and accessibility in every architectural decision.",
      icon: "group"
    },
    {
      id: 3,
      title: "Clean Code",
      description: "Writing self-documenting, maintainable, and efficient logic.",
      icon: "integration_instructions"
    },
    {
      id: 4,
      title: "Security Focused",
      description: "Embedding security best practices from the first line of code.",
      icon: "lock"
    }
  ],
  profile: {
    name: "Lemesa Girma",
    title: "Senior Developer",
    image: "/profile.png",
    location: "Addis Ababa, Ethiopia",
    email: "lemesa@example.com"
  },
  education: {
    institution: "Haramaya University",
    degree: "B.Sc. in Information Technology",
    gpa: "3.6 / 4.0"
  },
  certifications: [
    {
      id: 1,
      title: "AWS Certified",
      provider: "Solutions Architect",
      icon: "cloud",
      iconColor: "#FF9900"
    },
    {
      id: 2,
      title: "Google Cloud",
      provider: "Professional Engineer",
      icon: "cloud_circle",
      iconColor: "#4285F4"
    },
    {
      id: 3,
      title: "Kubernetes",
      provider: "CKA Administrator",
      icon: "anchor",
      iconColor: "#326CE5"
    }
  ],
  recognitions: [
    {
      id: 1,
      title: "Employee of the Year",
      organization: "TechCorp Solutions",
      year: "2022",
      isHighlighted: true
    },
    {
      id: 2,
      title: "Innovation Hackathon Winner",
      organization: "FinTech Global",
      year: "2021",
      isHighlighted: false
    },
    {
      id: 3,
      title: "Top Mentor Award",
      organization: "DevCommunity",
      year: "2023",
      isHighlighted: false
    }
  ]
};