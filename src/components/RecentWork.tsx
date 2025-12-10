import Project1Image from "@/assets/Project_1.png";
import Project2Image from "@/assets/Project_2.png";

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
      image: Project2Image,
      heading: "Spectrasynth Pharmachem",
      description: "Pharmaceutical website built with React.js and Bootstrap.",
      link: "https://www.spectrasynth.com/",
      isComingSoon: false,
    },
  ];

  return (
    <section id="work" className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">Recent Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => {
          if (project.isComingSoon) {
            return (
              <div 
                key={index}
                className="group block bg-card border border-muted rounded-md overflow-hidden opacity-60 cursor-default h-full flex items-center justify-center p-6"
              >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary">
                  Coming Soon
                </h3>
              </div>
              </div>
            );
          }

          return (
            <a 
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.heading} project`}
              className="group block bg-card border border-muted rounded-md overflow-hidden cursor-pointer p-6 md:p-8"
            >
              {/* Image Section */}
              <div className="aspect-[2/1] w-full overflow-hidden bg-muted rounded-md mb-4">
                <img
                  src={project.image}
                  alt={project.heading}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

{/* Content Section */}
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {project.heading}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default RecentWork;
