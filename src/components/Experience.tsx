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
      "Collaborated with the development team to build a fully responsive, mobile-first client-side interface using React.js, Bootstrap, and MUI, ensuring a seamless user experience across various devices and browsers.",
      "Integrated RESTful APIs provided by the backend team, effectively utilizing Postman for endpoint testing and ensuring accurate and dynamic data rendering on the front end.",
      "Improved performance and implemented on-page SEO based on guidelines from the SEO team, enhancing load times and search visibility.",
      "Contributed to a Laravel-based project by implementing UI components, routes, controllers, and Blade templates; managed roles and permissions using Spatie, and worked with Eloquent models and basic authentication."
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