import { MapPin } from "lucide-react";

interface ExperienceEntry {
  location: string;
  company: string;
  role: string;
  timePeriod: string;
  description: string[];
}

const experiences: ExperienceEntry[] = [
  {
    location: "Remote",
    company: "Sparrowhost Pvt. Ltd.",
    role: "Full Stack Developer",
    timePeriod: "Apr 2025 – Present",
    description: [
      "Delivered core product pages for likelife.ai, an AI voice agent SaaS — built agent configuration system, workflow builder UI, and a call dashboard with polling refresh backed by PostgreSQL.",
      "Architected AI conversational training modules for SimuPhish, a phishing awareness platform, using Claude-powered question generation, dynamic course sequencing, and a Next.js frontend connected to a Python AI backend.",
      "Built customizable analytics dashboards and reporting interfaces, collaborating with designers and backend teams to maintain responsive multi-feature UI consistency.",
    ]
  },
  {
    location: "Pune, India · Hybrid",
    company: "ContractFlo Technologies",
    role: "Full Stack Developer Intern",
    timePeriod: "Jun 2024 – Oct 2024",
    description: [
      "Developed and maintained responsive web applications using React.js for the frontend and Express.js for the backend.",
      "Optimized application performance and ensured seamless integration between frontend and backend systems.",
      "Worked with MongoDB, Redux, and Docker across the full stack.",
    ]
  },
  {
    location: "Chandigarh, India · Remote",
    company: "BizzyKa",
    role: "Frontend Developer Intern",
    timePeriod: "Jan 2024 – May 2024",
    description: [
      "Developed and optimized an ERP platform using Next.js, improving performance and user experience.",
      "Integrated Express.js backend APIs for seamless data flow across the platform.",
      "Improved page load times through code refactoring and performance best practices using TypeScript and Tailwind CSS.",
    ]
  },
  {
    location: "Jalgaon, India · Remote",
    company: "D Path Labs",
    role: "Full Stack Developer Intern",
    timePeriod: "Aug 2023 – Oct 2023",
    description: [
      "Built full-stack features using Node.js, Express.js, TypeScript, and MongoDB.",
      "Implemented UI components with Chakra UI and contributed to project management workflows.",
    ]
  },
  {
    location: "Jalgaon, India · Remote",
    company: "We Are Engineer (WAE)",
    role: "Full Stack Developer Intern",
    timePeriod: "Mar 2023 – Oct 2023",
    description: [
      "Built and maintained full-stack web applications using Next.js, Node.js, and MongoDB.",
      "Created responsive UI components with Material UI and collaborated on designs using Figma.",
    ]
  },
];

const Experience = () => {
  return (
    <section className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">Experience</h2>

      <div className="flex gap-6 md:gap-8">
        <div className="w-[2px] bg-muted flex-shrink-0" />

        <div className="flex-1">
          {experiences.map((exp, index) => (
            <div key={index} className="pb-8 md:pb-10">
              <div className="flex items-center gap-2 mb-1">
                <MapPin size={16} className="text-muted-foreground" />
                <span className="text-sm md:text-base text-muted-foreground">
                  {exp.location}
                </span>
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm md:text-base font-semibold text-primary">
                  {exp.company}
                </h3>
                <span className="text-sm md:text-base text-muted-foreground whitespace-nowrap ml-4">
                  {exp.timePeriod}
                </span>
              </div>

              <p className="text-sm md:text-base font-medium text-muted-foreground mb-4">
                {exp.role}
              </p>

              <ul className="space-y-3">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;