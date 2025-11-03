import { PanelsTopLeft, Server, LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  heading: string;
  description: string;
}

const services: Service[] = [
  {
    icon: PanelsTopLeft,
    heading: "Modern Web Development",
    description: "Crafting responsive, scalable websites with performance and pixel perfection"
  },
  {
    icon: Server,
    heading: "Backend API Development",
    description: "Robust REST APIs built for scale, speed, and real-world logic"
  }
];

const Services = () => {
  return (
    <section className="container mx-auto max-w-[900px] mt-16 md:mt-20 pb-12 md:pb-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">
        Here's How I Can Help You
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-card border border-muted rounded-md p-6 md:p-8 transition-all duration-300 hover:border-primary/50"
            >
              <Icon size={32} className="text-muted-foreground mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-3">
                {service.heading}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
