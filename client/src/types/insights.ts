export interface Article {
  id: number;
  title: string;
  source: 'Medium' | 'Dev.to' | 'Blog' | 'Personal';
  sourceIcon: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  tags?: string[];
}

export interface EngineeringPrinciple {
  id: number;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface SpeakingEngagement {
  id: number;
  title: string;
  event: string;
  type: 'Conference' | 'Meetup' | 'Interview';
  date: string;
  location: string;
  description: string;
  image: string;
  actions: {
    watch?: boolean;
    slides?: boolean;
    recording?: boolean;
  };
}

export interface InsightsSectionData {
  hero: {
    tagline: string;
    title: string;
    description: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
  };
  articles: Article[];
  principles: EngineeringPrinciple[];
  speakingEngagements: SpeakingEngagement[];
  footer: {
    name: string;
    title: string;
    socialLinks: Array<{
      platform: string;
      icon: string;
      href: string;
    }>;
  };
}

export const defaultInsightsData: InsightsSectionData = {
  hero: {
    tagline: "Thought Leadership",
    title: "Thoughts on Code & Culture",
    description: "Sharing actionable knowledge on distributed systems, team scaling, and building software resilience in a chaotic world.",
    newsletterPlaceholder: "Enter your email",
    newsletterButton: "Subscribe"
  },
  articles: [
    {
      id: 1,
      title: "Scaling Node.js Microservices",
      source: "Medium",
      sourceIcon: "logo_dev",
      date: "Jan 15, 2025",
      readTime: "8 min read",
      excerpt: "A deep dive into managing high-throughput systems with Node.js clusters, handling backpressure, and optimizing garbage collection.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcq9Kvrr94jKcRrxa0cVQdsXZQxvCtNH3RGpdM2Tm2aCP_CHdkRIbCDn00ia0x8VSqbnV7AhvftrCIfaAKUoIkaZb4hJvELEzOFLhpCFPM_cXkD4aJYuL47pttrtRK23vZ9PSRjQEWtuYtQDHStSY2p-VpSuwXd84Q5E8zB8gKLaxjGxDDvANNMUxzxE5nC64gtINwfP2qqzTHw6TBx6uKSRYFeWGcNUbhAmfmh9tco79SgiWyPdDHjLQXm2wObMOgtygrvLb11jJy"
    },
    {
      id: 2,
      title: "The Myth of Perfect Code",
      source: "Dev.to",
      sourceIcon: "code",
      date: "Mar 08, 2025",
      readTime: "5 min read",
      excerpt: "Why striving for perfection kills velocity. Embracing technical debt strategically and understanding the 'Good Enough' principle.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApa5xb8ERRdVuz81mFHIZV_A5HHuL9lbAx7jeMNrQzvHIOzkG8mNoAUzMd3JnFmYFhSBM1ZxEpazZk4QZP_A1Y8FA-ozPszvBrJ6pvOtaJUf6hUnkqc4DO4DxxbxErrUz0MKRtVBqAjpLrVoCQotp7Drktjtf7tVsRJf5COdctQKSm56xcHdrtXs22LPj-dvRQ5IAsRLP4kTvl21Stnlk153-RIzOGH9f7BJmwOnCVg1jkBJtCwigNizVSsWDgXYYjiQXhKTiWTHiP"
    },
    {
      id: 3,
      title: "Building REST APIs with Node.js & TypeScript",
      source: "Blog",
      sourceIcon: "person",
      date: "May 20, 2025",
      readTime: "10 min read",
      excerpt: "A practical guide to structuring scalable Express APIs with TypeScript, covering routing, middleware, validation, and error handling patterns.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI3ZhpjgB9c48XTVZpNnLOJPQI0WayETp7jg9usAyKBWuioHuhm4Hsh6yfIOPWhUAPAamjnotlU4KNSFZKSNIV5aG7Je5e_MY1S3C0s1XK0ABhnf2PDXgSaWGnNdPnrfDV8XMq3Ll3HiJF-3qmIoqI-roYDA7IUghWcu9FLKl9LYnBe9dNdMhQo2oufa76hSX-JJ1Fvg1SH0RHp33yQu-bh9vKCXrrJd1pVwMtor__nW27zoSbCDOc0fCqvClK1Or665Zp47vVcWEz"
    }
  ],
  principles: [
    {
      id: 1,
      title: "The 3 C's of Scale",
      description: "Consistency, Consensus, and CAP Theorem. Prioritizing data integrity over availability when necessary, but always designing for eventual consistency where possible.",
      icon: "grid_view",
      tags: ["System Design", "Architecture"]
    },
    {
      id: 2,
      title: "Failure Budgets",
      description: "Embracing risk intelligently. 100% uptime is too expensive and slows innovation. We use error budgets to balance reliability with feature velocity.",
      icon: "trending_down",
      tags: ["SRE", "DevOps"]
    },
    {
      id: 3,
      title: "Radical Candor",
      description: "Code reviews are not just for catching bugs, but for knowledge sharing. Honest, direct, yet kind feedback accelerates team growth more than politeness does.",
      icon: "rate_review",
      tags: ["Culture", "Leadership"]
    }
  ],
  speakingEngagements: [
    {
      id: 1,
      title: "Advanced Async Patterns in Node.js",
      event: "JSConf EU 2023",
      type: "Conference",
      date: "June 2023",
      location: "Berlin, DE",
      description: "Exploring the limits of the event loop and how to avoid blocking the main thread in high-load applications.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4Latzx8jVEA3ptAXktLbl9Ow3rMMYbPUSh6IQ9_ja-bKj_p_jX2k7yPZyXB0YDCdm0afxntcR79tudryYeTK0cqh7zKCvyc3ZBoTXigvex2P9zdARim8JHnKts22QRDiGMl6TrbV8l7dZZRxBNzTkSJKIhR8peb2QPKBnUcxHOgHWBVT2gXxOBoreicU-pYXfb4E6EaA3GgUJMpOfza_mbMxPfkdwYz1DeuB2b47pm0MEpAy2YFu5704o4y4mln3zlXgwOscfJ6ov",
      actions: {
        watch: true,
        slides: true
      }
    },
    {
      id: 2,
      title: "State Management at Scale",
      event: "React Advanced London",
      type: "Conference",
      date: "Oct 2022",
      location: "London, UK",
      description: "Moving beyond Redux: When to use Context, Zustand, or simple hooks for complex enterprise dashboards.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnwkU5pnrgKULUSY_5ZU8GYf5uDWAwQSyoUjz0qKMaunxsq3sOQ81S3SwiX1ZJS8dC7MBHCbxUITC96iXcd-kTZsrEZVHtvi8cGi12Ny9FKDecoHAX60Yz1_dieJhMK4QeTUpm4ooGd999NkdrTLybiUblEsWLYI2vO-sXIZpjNe0p16vBTZwp5Zn9gtrb6L2TN31JhbXtlKfH5_M1R3jnBt3QKMJCHxEm0hP_dOmkLg0yNXWUjJmvcnPsNhWKOJG2Bl4XkH9zJWtC",
      actions: {
        watch: true,
        slides: true
      }
    },
    {
      id: 3,
      title: "Event-Driven Architecture 101",
      event: "Node.js Global Summit",
      type: "Meetup",
      date: "Feb 2022",
      location: "Online",
      description: "Decoupling monolithic services for better scalability and maintenance.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsVAVA4NdBjOFgeH_gZjP9el9wFAbjA6tmahvCxmx9pxSbQhmtYMAKOz-YTNc4eINnY47IBricYG_zXfGoe1h7OmQ-3bdkR4cZXsI1IVHjbM5Qekdnfpy5tTDGsEZ4B2iGIh50Gv-1nFF3R6htgLY3k7ZrP1Heholm0GPzFvUpNfY7xmTRRL3m5KdDAc6XDUrGLmxDkXkVoAc-qQzNhxIvsswwWQ5pjZ2DrbG6zDayj4hwK2CRtAyh-ZoMQox0_KZ5ohHNnVJQajjX",
      actions: {
        recording: true,
        slides: true
      }
    }
  ],
  footer: {
    name: "Lemesa Girma",
    title: "Senior Software Developer",
    socialLinks: [
      {
        platform: "Twitter",
        icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
        href: "#"
      },
      {
        platform: "GitHub",
        icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        href: "#"
      }
    ]
  }
};