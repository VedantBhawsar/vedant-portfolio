import { ExternalLink } from "lucide-react";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  link: string;
}

const blogs: BlogPost[] = [
  {
    title: "Deploying Next.js on Kubernetes with Autoscaling: A Complete Guide",
    description: "Struggling to scale your Next.js app under traffic spikes? Learn how to Dockerize, deploy to Kubernetes, and set up HPA autoscaling.",
    date: "Jun 2025",
    link: "https://medium.com/@vedantbhavsar/deploying-next-js-on-kubernetes-with-autoscaling-a-complete-guide-9140612fd26f",
  },
  {
    title: "Docker to VPS Deployment Guide for Next.js Apps (Beginner-Friendly)",
    description: "Learn how to deploy a production-ready Next.js application using Docker, Docker Compose, Nginx reverse proxy, and custom domain mapping.",
    date: "May 2025",
    link: "https://medium.com/@vedantbhavsar/docker-to-vps-deployment-guide-for-next-js-apps-beginner-friendly-3cf32b4dbe3b",
  },
];

const Blogs = () => {
  return (
    <section id="blogs" className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">Writing</h2>

      <div className="flex flex-col divide-y divide-muted">
        {blogs.map((post, index) => (
          <div key={index} className="py-5 first:pt-0 last:pb-0">
            {post.link === "#" ? (
              <div className="opacity-50">
                <p className="text-sm md:text-base font-medium text-primary mb-1">{post.title}</p>
                <p className="text-sm text-muted-foreground">{post.description}</p>
              </div>
            ) : (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-4"
              >
                <div>
                  <p className="text-sm md:text-base font-medium text-primary mb-1 group-hover:underline underline-offset-4">
                    {post.title}
                  </p>
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 mt-0.5">
                  {post.date && (
                    <span className="text-xs text-muted-foreground/70">{post.date}</span>
                  )}
                  <ExternalLink size={14} className="text-muted-foreground" />
                </div>
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
