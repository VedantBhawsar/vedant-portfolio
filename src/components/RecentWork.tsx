import { ArrowUpRight } from "lucide-react";
import Project1Image from "@/assets/Project_1.png";

const RecentWork = () => {
  const projects = [
    {
      image: Project1Image,
      heading: "AI-Powered Writing Tool",
      description: "Modern website built with React.js and Tailwind CSS.",
      link: "https://ai-writing-tool-blush.vercel.app/",
      isComingSoon: false,
    },
    {
      image: null,
      heading: "Coming Soon",
      description: "Work in Progress",
      link: null,
      isComingSoon: true,
    },
  ];

  return (
    <section id="work" className="container mx-auto max-w-[900px] mt-16 md:mt-20 pb-12 md:pb-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">Recent Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => {
          const CardWrapper = project.isComingSoon ? "div" : "a";
          const cardProps = project.isComingSoon
            ? {
                "aria-disabled": true,
                className: "group block bg-card border border-muted rounded-md overflow-hidden opacity-60 cursor-default",
              }
            : {
                href: project.link,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `View ${project.heading} project`,
                className: "group block bg-card border border-muted rounded-md overflow-hidden transition-all duration-300 hover:border-primary/50 cursor-pointer",
              };

          return (
            <CardWrapper key={index} {...cardProps}>
              {/* Image Section */}
              <div className="aspect-video w-full overflow-hidden bg-muted">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.heading}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      !project.isComingSoon ? "group-hover:scale-110" : ""
                    }`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">
                    {project.heading}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {!project.isComingSoon && (
                  <div className="ml-4 transition-transform duration-300 group-hover:-rotate-45">
                    <ArrowUpRight size={24} className="text-muted-foreground" />
                  </div>
                )}
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </section>
  );
};

export default RecentWork;
