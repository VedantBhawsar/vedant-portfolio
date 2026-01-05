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
    location: "Pune, India",
    company: "DD Solutions",
    role: "Front-End Developer",
    timePeriod: "March 2025 - July 2025",
    description: [
      "Built and maintained responsive, mobile-first web interfaces using React.js, Bootstrap, and MUI, improving cross-device usability and reducing UI-related issues by ~15%.",
      "Integrated RESTful APIs into frontend components, handling asynchronous data flows, validation errors, and loading states to ensure consistent and reliable user experiences.",
      "Improved frontend performance and on-page SEO by implementing recommended optimizations, contributing to ~15–20% faster page load times and improved search visibility.",
      "Worked on a Laravel-based backend, implementing routes, controllers, and Blade templates; performed CRUD operations using Eloquent ORM and MySQL; and assisted in implementing authentication and role-based access control using Laravel and Spatie Permissions.",
      "Used Git for version control and Postman for API testing and debugging during development cycles."
    ]
  }
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