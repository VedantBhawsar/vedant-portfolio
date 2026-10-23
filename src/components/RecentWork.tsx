import { FaGithub } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

interface Project {
  heading: string;
  description: string;
  stack: string;
  github?: string;
  live?: string;
  ongoing?: boolean;
}

const RecentWork = () => {
  const projects: Project[] = [
    {
      heading: "Revolution Fuel & Fitness",
      description:
        "Production e-commerce store for a sports nutrition brand shipping across India, with goal-based shopping, product bundles, customer accounts, wishlist and order tracking, fitness guides, and Razorpay checkout supporting UPI, cards, and net banking.",
      stack: "Next.js · TypeScript · Razorpay · Cloudinary · Tailwind CSS",
      live: "https://revolutionfuelandfitness.com",
      ongoing: true,
    },
    {
      heading: "ClipFlow",
      description:
        "Publishing console for YouTube creators: upload a finished video once and ClipFlow handles the rest. Direct-to-S3 presigned uploads, an FFmpeg worker for audio and frame extraction, resumable YouTube Data API publishing with scheduled releases and crash recovery, and live job progress over SSE.",
      stack: "Next.js · React 19 · Express · BullMQ · Redis · PostgreSQL · Prisma · FFmpeg · Cloudflare R2 · Turborepo",
      github: "https://github.com/VedantBhawsar/clipflow",
      live: "https://clip-flow-web-five.vercel.app",
    },
    {
      heading: "DocSense",
      description:
        "Full-stack RAG platform enabling semantic search over user-uploaded documents using Next.js, NestJS, PostgreSQL + pgvector, and Claude API. Features a vector similarity search pipeline with sub-100ms retrieval latency and an async document ingestion pipeline with BullMQ and Redis.",
      stack: "Next.js · NestJS · PostgreSQL · pgvector · OpenAI · BullMQ · Redis · AWS S3 · Docker",
      github: "https://github.com/VedantBhawsar/DocSense",
      live: "https://docsense.vedxnt.com",
    },
    {
      heading: "HookScope",
      description:
        "Webhook observability platform for Stripe & GitHub with HMAC signature verification, real-time event inspector, live failure alerts, and a high-throughput Redis queue ingestion pipeline backed by LocalStack S3.",
      stack: "Next.js · Express · Fastify · Redis · PostgreSQL · Docker",
      github: "https://github.com/VedantBhawsar/HookScope",
    },
    {
      heading: "Sniplink",
      description:
        "Full-stack URL shortener SaaS with click analytics, geo/device tracking, subscription billing, and a Redis + LRU cache redirect pipeline achieving ~0.2ms hot-path lookup latency.",
      stack: "React 19 · Express v5 · Bun · PostgreSQL · Redis · Stripe · Turborepo",
      github: "https://github.com/VedantBhawsar/Sniplink",
      live: "https://sniplink-web.vercel.app",
    },
    {
      heading: "Reddit Thread Summarizer",
      description:
        "Browser extension that summarizes Reddit threads using ChatGPT, saving time by condensing long comment threads into key insights.",
      stack: "TypeScript · Browser Extension API · OpenAI",
      github: "https://github.com/VedantBhawsar/reddit-thread-summarizer",
      live: 'https://addons.mozilla.org/en-US/firefox/addon/reddit-thread-to-chatgpt'
    },
    {
      heading: "Letterflow",
      description:
        "Newsletter and email campaign platform with subscriber management, rich email composition, and delivery tracking.",
      stack: "Next.js · TypeScript · PostgreSQL · Tailwind CSS",
      github: "https://github.com/VedantBhawsar/letterflow",
      live: "https://letterai.vercel.app",
    },
    {
      heading: "Crypto Wallet",
      description:
        "Web-based cryptocurrency wallet with real-time price tracking, portfolio management, and transaction history.",
      stack: "TypeScript · Next.js · Tailwind CSS",
      github: "https://github.com/VedantBhawsar/crypto-wallet",
      live: "https://crypto-wallet-seven-azure.vercel.app",
    },
    {
      heading: "VertoDesk",
      description:
        "Comprehensive business management dashboard with analytics, reporting, and team collaboration features.",
      stack: "TypeScript · Next.js · Tailwind CSS",
      github: "https://github.com/VedantBhawsar/VertoDesk",
      live: "https://advance-dashboard-ui.vercel.app",
    },
    {
      heading: "Bankai",
      description:
        "Full-stack web application built with modern TypeScript tooling and a clean, responsive UI.",
      stack: "TypeScript · Next.js · Tailwind CSS",
      github: "https://github.com/VedantBhawsar/Bankai",
      live: "https://bankai-v2.vercel.app",
    },
    
  ];

  return (
    <section id="work" className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">Recent Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col bg-card border border-white/20 hover:border-white/30 transition-colors duration-300 rounded-md overflow-hidden p-6 md:p-8"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-lg font-semibold text-primary">{project.heading}</h3>
              {project.ongoing && (
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Ongoing
                </span>
              )}
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <p className="text-xs text-muted-foreground/70 font-mono mb-5">{project.stack}</p>
            <div className="flex items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.heading} GitHub repository`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <FaGithub size={15} />
                  <span>GitHub</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.heading} live demo`}
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  <ExternalLink size={14} />
                  <span>Live</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWork;