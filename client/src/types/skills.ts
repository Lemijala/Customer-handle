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
  description: "A quantitative breakdown of technical proficiency, scale management, and professional certifications across 10+ years of enterprise engineering.",
  lastUpdated: "Oct 2023",
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
      experience: "6 Years",
      scale: {
        label: "1M+ MAU",
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
      proficiency: 90,
      level: "Advanced",
      experience: "8 Years",
      scale: {
        label: "50+ Microservices",
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
      proficiency: 85,
      level: "Advanced",
      experience: "7 Years",
      scale: {
        label: "500k DAU",
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
      experience: "5 Years",
      scale: {
        label: "20+ Clusters",
        color: "bg-orange-500/10 border-orange-500/20 text-orange-400",
        icon: "view_comfy_alt"
      },
      icon: "deployed_code",
      iconColor: "text-blue-300"
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
      title: "AWS Certified Solutions Architect",
      subtitle: "Professional Level",
      issuer: "Amazon Web Services",
      status: "Active",
      issueDate: "Nov 2022",
      icon: "cloud_circle",
      gradientFrom: "from-orange-500/20",
      gradientTo: "to-yellow-600/20",
      iconColor: "text-orange-400"
    },
    {
      id: 2,
      title: "Certified Kubernetes Administrator",
      subtitle: "CKA - Linux Foundation",
      issuer: "Linux Foundation",
      status: "Active",
      issueDate: "Mar 2023",
      icon: "deployed_code",
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-cyan-600/20",
      iconColor: "text-blue-400"
    },
    {
      id: 3,
      title: "Google Professional Cloud Architect",
      subtitle: "Google Cloud",
      issuer: "Google",
      status: "Active",
      issueDate: "Jan 2023",
      icon: "security",
      gradientFrom: "from-red-500/20",
      gradientTo: "to-rose-600/20",
      iconColor: "text-red-400"
    }
  ]
};