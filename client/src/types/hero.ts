export interface Persona {
  id: number;
  name: string;
  isActive: boolean;
}

export interface TechStackItem {
  id: number;
  name: string;
  icon: string;
  color: string;
}

export interface DashboardMetric {
  id: number;
  title: string;
  value: string;
  icon: string;
  change?: string;
}

export interface HeroSectionProps {
  personas?: Persona[];
  techStack?: TechStackItem[];
  metrics?: DashboardMetric[];
}

export const defaultPersonas: Persona[] = [
  { id: 1, name: 'Recruiter', isActive: true },
  { id: 2, name: 'Client', isActive: false },
  { id: 3, name: 'Developer', isActive: false }
];

export const defaultTechStack: TechStackItem[] = [
  { id: 1, name: "React.js", icon: "data_object", color: "text-primary" },
  { id: 2, name: "AWS Cloud", icon: "cloud", color: "text-blue-400" },
  { id: 3, name: "Node.js", icon: "javascript", color: "text-yellow-400" },
  { id: 4, name: "TypeScript", icon: "code", color: "text-blue-500" },
  { id: 5, name: "MongoDB", icon: "database", color: "text-green-400" },
  { id: 6, name: "Docker", icon: "deployed_code", color: "text-purple-400" },
  { id: 7, name: "HTML5", icon: "html", color: "text-orange-400" },
  { id: 8, name: "TailwindCSS", icon: "css", color: "text-cyan-400" }
];

export const defaultMetrics: DashboardMetric[] = [
  { id: 1, title: "System Uptime", value: "99.98%", icon: "dns" },
  { id: 2, title: "GitHub Contributions", value: "3,450+", icon: "code", change: "+12% vs last mo" }
];
