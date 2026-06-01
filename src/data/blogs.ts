export interface BlogPost {
  title: string;
  description: string;
  date: string;
  link: string;
}

export const blogs: BlogPost[] = [
  {
    title: "How I Built a PDF Chat App Using LangChain Embeddings and pgvector",
    description: "You upload a 60-page research paper, ask it questions, and get precise answers with relevant excerpts — a deep dive into RAG with LangChain and pgvector.",
    date: "May 2026",
    link: "https://vedantbhavsar.medium.com/how-i-built-a-pdf-chat-app-using-langchain-embeddings-and-pgvector-cf3ee1cc12a6?source=rss-4338900299b1------2",
  },
  {
    title: "Docker Network Configuration for Deployment: How It Really Works",
    description: "Confused about Docker networking in production? Learn bridge, host, and overlay networks and when to use each for real-world deployments.",
    date: "May 2026",
    link: "https://vedantbhavsar.medium.com/docker-network-configuration-for-deployment-how-it-really-works-6456075fd63b?source=rss-4338900299b1------2",
  },
  {
    title: "Deploying Next.js on Kubernetes with Autoscaling: A Complete Guide",
    description: "Struggling to scale your Next.js app under traffic spikes? Learn how to Dockerize, deploy to Kubernetes, and set up HPA autoscaling.",
    date: "May 2026",
    link: "https://vedantbhavsar.medium.com/deploying-next-js-on-kubernetes-with-autoscaling-a-complete-guide-9140612fd26f?source=rss-4338900299b1------2",
  },
  {
    title: "Docker to VPS Deployment Guide for Next.js Apps (Beginner-Friendly)",
    description: "Learn how to deploy a production-ready Next.js application using Docker, Docker Compose, Nginx reverse proxy, and custom domain mapping.",
    date: "May 2026",
    link: "https://vedantbhavsar.medium.com/docker-to-vps-deployment-guide-for-next-js-apps-beginner-friendly-3cf32b4dbe3b?source=rss-4338900299b1------2",
  },
  {
    title: "Redefining Normal: 3 Life-Altering Habits I Incorporated in 2024",
    description: "Habits play a significant role in shaping our lives — here are 3 I built in 2024 that started to transform my daily routine.",
    date: "Mar 2024",
    link: "https://vedantbhavsar.medium.com/redefining-normal-3-life-altering-habits-i-incorporated-in-2024-b992f8bb611f?source=rss-4338900299b1------2",
  },
  {
    title: "Embracing Failures: The Pathway to Success",
    description: "Failures, often dreaded, are paradoxically beloved by many successful individuals — here's why embracing them is key to growth.",
    date: "Mar 2024",
    link: "https://vedantbhavsar.medium.com/embracing-failures-the-pathway-to-success-e8c1f38431da?source=rss-4338900299b1------2",
  },
  {
    title: "Unlocking Productivity: How to Study Books Effectively",
    description: "In the pursuit of knowledge and self-improvement, the act of reading often serves as a cornerstone — but only if done right.",
    date: "Feb 2024",
    link: "https://vedantbhavsar.medium.com/unlocking-productivity-how-to-study-books-effectively-b9c976ed626f?source=rss-4338900299b1------2",
  },
  {
    title: "Unlocking Success: Crafting Your Perfect Morning Routine",
    description: "Building a productive morning routine sets the cornerstone for a day of success — hydration, digital detox, and intentional habits.",
    date: "Jan 2024",
    link: "https://vedantbhavsar.medium.com/unlocking-success-crafting-your-perfect-morning-routine-7108aaaee2e0?source=rss-4338900299b1------2",
  },
];
