import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";

const PREVIEW_COUNT = 3;

const Blogs = () => {
  const preview = blogs.slice(0, PREVIEW_COUNT);

  return (
    <section id="blogs" className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">Writing</h2>

      <div className="flex flex-col divide-y divide-muted">
        {preview.map((post, index) => (
          <div key={index} className="py-5 first:pt-0 last:pb-0">
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
          </div>
        ))}
      </div>

      {blogs.length > PREVIEW_COUNT && (
        <div className="mt-6">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View all {blogs.length} posts
            <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </section>
  );
};

export default Blogs;
