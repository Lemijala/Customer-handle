export interface SkillRow {
  id: number;
  name: string;
  category: string;
  description: string;
  proficiency: number; // 0-100
  level: 'Expert' | 'Advanced' | 'Proficient' | 'Beginner';
  experience: string;
  scale: {
    label: string;
    color: string;
    icon: string;
  };
  icon: string;
  iconColor: string;
}

export interface Certification {
  id: number;
  title: string;
  subtitle: string;
  issuer: string;
  status: 'Active' | 'Expired' | 'Pending';
  issueDate: string;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
}

export interface FilterCategory {
  id: string;
  label: string;
  count?: number;
}

export interface SkillsSectionData {
  title: string;
  description: string;
  lastUpdated: string;
  filters: FilterCategory[];
  skills: SkillRow[];
  certifications: Certification[];
}

export const defaultSkillsData: SkillsSectionData = {
  title: "Technical Competency Matrix",
  description: "A quantitative breakdown of technical proficiency, scale management, and professional certifications across 4 years of software development.",
  lastUpdated: "Mar 2026",
  filters: [
    { id: 'all', label: 'All' },
    { id: 'cloud', label: 'Cloud Infrastructure' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'devops', label: 'DevOps' }
  ],
  skills: [
    {
      id: 1,
      name: "React / Next.js",
      category: "frontend",
      description: "Frontend Architecture",
      proficiency: 95,
      level: "Expert",
      experience: "4 Years",
      scale: {
        label: "Production Apps",
        color: "bg-primary/10 border-primary/20 text-primary",
        icon: "groups"
      },
      icon: "code_blocks",
      iconColor: "text-blue-400"
    },
    {
      id: 2,
      name: "AWS Architecture",
      category: "cloud",
      description: "Cloud Infrastructure",
      proficiency: 85,
      level: "Advanced",
      experience: "3 Years",
      scale: {
        label: "Cloud Deployments",
        color: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
        icon: "hub"
      },
      icon: "cloud",
      iconColor: "text-yellow-500"
    },
    {
      id: 3,
      name: "Node.js / Backend",
      category: "backend",
      description: "Server-side runtime",
      proficiency: 90,
      level: "Advanced",
      experience: "4 Years",
      scale: {
        label: "REST & WebSocket APIs",
        color: "bg-purple-500/10 border-purple-500/20 text-purple-400",
        icon: "monitoring"
      },
      icon: "dns",
      iconColor: "text-green-500"
    },
    {
      id: 4,
      name: "Kubernetes",
      category: "devops",
      description: "Orchestration",
      proficiency: 80,
      level: "Proficient",
      experience: "4 Years",
      scale: {
        label: "Container Orchestration",
        color: "bg-orange-500/10 border-orange-500/20 text-orange-400",
        icon: "view_comfy_alt"
      },
      icon: "deployed_code",
      iconColor: "text-blue-300"
    },
    {
      id: 6,
      name: "Python",
      category: "backend",
      description: "Scripting & Automation",
      proficiency: 82,
      level: "Advanced",
      experience: "4 Years",
      scale: {
        label: "Data & Automation",
        color: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
        icon: "smart_toy"
      },
      icon: "code",
      iconColor: "text-yellow-400"
    },
    {
      id: 5,
      name: "Go (Golang)",
      category: "backend",
      description: "Systems Programming",
      proficiency: 75,
      level: "Proficient",
      experience: "3 Years",
      scale: {
        label: "High-Concurrency",
        color: "bg-red-500/10 border-red-500/20 text-red-400",
        icon: "bolt"
      },
      icon: "terminal",
      iconColor: "text-cyan-400"
    }
  ],
  certifications: [
    {
      id: 1,
      title: "B.Sc. Information Technology",
      subtitle: "GPA 3.6 / 4.0",
      issuer: "Haramaya University",
      status: "Active",
      issueDate: "2024",
      icon: "school",
      gradientFrom: "from-green-500/20",
      gradientTo: "to-emerald-600/20",
      iconColor: "text-green-400"
    },
    {
      id: 2,
      title: "Full-Stack Portfolio",
      subtitle: "React · Node.js · AWS · Docker",
      issuer: "Self-built & Deployed",
      status: "Active",
      issueDate: "2025",
      icon: "rocket_launch",
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-cyan-600/20",
      iconColor: "text-blue-400"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      subtitle: "TypeScript · GitHub",
      issuer: "github.com/Lemijala",
      status: "Active",
      issueDate: "2025",
      icon: "code",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-violet-600/20",
      iconColor: "text-purple-400"
    }
  ]
};