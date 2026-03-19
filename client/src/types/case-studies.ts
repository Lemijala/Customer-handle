export interface CaseStudy {
  id: number;
  title: string;
  categories: string[];
  technologies: Array<{
    name: string;
    icon: string;
    title: string;
  }>;
  challenge: {
    icon: string;
    color: string;
    title: string;
    description: string;
  };
  solution: {
    icon: string;
    color: string;
    title: string;
    description: string;
  };
  result: {
    icon: string;
    color: string;
    title: string;
    description: string;
  };
  metrics: Array<{
    title: string;
    value: string;
    change?: string;
    unit?: string;
    trend?: 'up' | 'down';
    highlight?: boolean;
  }>;
  chartData?: {
    before: number;
    after: number;
    beforeLabel: string;
    afterLabel: string;
    title: string;
    subtitle: string;
  };
  backgroundDecoration?: {
    position: 'top-right' | 'bottom-left';
    color: string;
  };
}

export interface PerformanceMetric {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: string;
  iconColor: string;
  backgroundColor: string;
}

export interface CaseStudiesSectionData {
  tagline: string;
  title: string;
  description: string;
  caseStudies: CaseStudy[];
  performanceMetrics: PerformanceMetric[];
}

export const defaultCaseStudiesData: CaseStudiesSectionData = {
  tagline: "Engineering Leadership",
  title: "Strategic Impact & Case Studies",
  description: "Beyond code: A deep-dive into key engineering challenges, architectural decisions, and the quantifiable business results delivered through technical leadership.",
  caseStudies: [
    {
      id: 1,
      title: "Legacy System Modernization",
      categories: ["FinTech", "Infrastructure"],
      technologies: [
        { name: "Kubernetes", icon: "cloud", title: "Kubernetes" },
        { name: "Docker", icon: "deployed_code", title: "Docker" },
        { name: "Microservices", icon: "hub", title: "Microservices" }
      ],
      challenge: {
        icon: "warning",
        color: "text-red-400",
        title: "The Challenge",
        description: "Monolithic architecture was causing frequent downtime during peak transaction hours. Deployment cycles took 4+ hours, severely limiting feature velocity."
      },
      solution: {
        icon: "architecture",
        color: "text-blue-400",
        title: "The Solution",
        description: "Architected a strangler-fig migration to microservices using Docker & K8s. Implemented CI/CD pipelines to automate testing and deployment."
      },
      result: {
        icon: "trending_up",
        color: "text-success",
        title: "The Result",
        description: "Achieved 99.99% uptime. Deployment time reduced to 15 minutes. Infrastructure costs slashed by 50% via auto-scaling efficiency."
      },
      metrics: [
        {
          title: "Uptime Improved",
          value: "99.99%",
          change: "15%",
          trend: "up"
        },
        {
          title: "Cost Reduction",
          value: "50%",
          change: "20%",
          trend: "down"
        },
        {
          title: "Deployment Latency",
          value: "15 mins",
          unit: "4 hours",
          highlight: true
        }
      ],
      chartData: {
        before: 2,
        after: 45,
        beforeLabel: "Before",
        afterLabel: "After",
        title: "Deployments per Week",
        subtitle: "Before vs After"
      },
      backgroundDecoration: {
        position: "top-right",
        color: "bg-primary/5"
      }
    },
    {
      id: 2,
      title: "Real-time Logistics Dashboard",
      categories: ["Logistics", "Frontend"],
      technologies: [
        { name: "React", icon: "code", title: "React" },
        { name: "WebSockets", icon: "sync_alt", title: "WebSockets" },
        { name: "Data Viz", icon: "bar_chart", title: "Data Viz" }
      ],
      challenge: {
        icon: "visibility_off",
        color: "text-red-400",
        title: "The Challenge",
        description: "Operations teams relied on manual CSV reports generated once daily. Opaque supply chain data led to delayed responses to shipping incidents."
      },
      solution: {
        icon: "dashboard",
        color: "text-blue-400",
        title: "The Solution",
        description: "Built a high-performance React dashboard powered by WebSockets for sub-100ms data updates. Integrated interactive map visualizations."
      },
      result: {
        icon: "bolt",
        color: "text-success",
        title: "The Result",
        description: "Increased operational productivity by 30%. Reduced incident response time from 24 hours to minutes."
      },
      metrics: [
        {
          title: "Productivity Gain",
          value: "+30%",
          highlight: true
        },
        {
          title: "Daily Users",
          value: "73"
        },
        {
          title: "Data Points/Sec",
          value: "~50",
          trend: "up"
        }
      ],
      chartData: {
        before: 24,
        after: 0.1,
        beforeLabel: "Before (CSV)",
        afterLabel: "After (WebSockets)",
        title: "Data Freshness (Latency)",
        subtitle: "Lower is Better"
      },
      backgroundDecoration: {
        position: "bottom-left",
        color: "bg-purple-500/5"
      }
    }
  ],
  performanceMetrics: [
    {
      id: 1,
      title: "System Speed",
      value: "-400ms",
      description: "Average latency reduction across all managed services.",
      icon: "speed",
      iconColor: "text-primary",
      backgroundColor: "bg-primary/10"
    },
    {
      id: 2,
      title: "Cost Efficiency",
      value: "$120k/yr",
      description: "Total annual infrastructure savings achieved.",
      icon: "savings",
      iconColor: "text-success",
      backgroundColor: "bg-success/10"
    },
    {
      id: 3,
      title: "Reliability",
      value: "99.99%",
      description: "Consistent uptime maintained over 24 months.",
      icon: "verified_user",
      iconColor: "text-purple-400",
      backgroundColor: "bg-purple-500/10"
    }
  ]
};