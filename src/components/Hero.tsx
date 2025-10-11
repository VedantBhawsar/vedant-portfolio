import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto pt-24 md:pt-32 pb-12">
      {/* Desktop: grid layout, Mobile: stacked */}
      <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto] md:gap-8 items-start">
        {/* Avatar - centered on mobile */}
        <div className="w-full md:w-auto flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src="https://via.placeholder.com/160"
            alt="Niraj Rajput"
            className="w-24 h-24 md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] object-cover rounded-[10px]"
          />
        </div>

        {/* Text content - center on mobile */}
        <div className="text-center md:text-left w-full">
          <h1 className="text-2xl md:text-[32px] lg:text-[40px] font-bold text-primary leading-tight">
            Niraj Rajput
          </h1>
          <p className="text-base md:text-[18px] lg:text-[20px] font-medium text-primary mt-1">
            Full Stack Web Developer
          </p>
          <p className="text-sm md:text-[15px] lg:text-base text-muted-foreground mt-2">
            📍 Jalgaon, India
          </p>
          <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm text-accent">Available for work</span>
          </div>
        </div>

        {/* Download Resume CTA - centered on mobile, right-aligned on desktop */}
        <div className="mt-6 md:mt-0 md:flex md:items-start w-full md:w-auto justify-center md:justify-end">
          <a
            href="https://drive.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-underline inline-flex items-center gap-2 text-[15px] text-primary font-medium focus-ring rounded-sm px-2 py-1"
            aria-label="Download resume PDF"
          >
            <Download size={18} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
