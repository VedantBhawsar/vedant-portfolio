import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { blogs } from "@/data/blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogsPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main className="container mx-auto max-w-[900px] px-4 pt-28 pb-20">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back
        </Link>

        <h1 className="text-2xl font-semibold text-primary mb-8">Writing</h1>

        <div className="flex flex-col divide-y divide-muted">
          {blogs.map((post, index) => (
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
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
