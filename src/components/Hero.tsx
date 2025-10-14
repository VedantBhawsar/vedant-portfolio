import { Download, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto max-w-[900px] pt-24 md:pt-32 pb-12">
      {/* Desktop: grid layout, Mobile: stacked */}
      <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto] md:gap-8 items-start">
        {/* Avatar - centered on mobile */}
        <div className="w-full md:w-auto flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src="https://i.pinimg.com/1200x/73/7e/02/737e021ae6c86a719f32281e1bcb550a.jpg"
            alt="Niraj Rajput"
            className="w-24 h-24 md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] object-cover rounded-[10px]"
          />
        </div>

        {/* Text content - center on mobile */}
        <div className="text-center md:text-left w-full">
          <h1 className="text-xl md:text-[28px] lg:text-[36px] font-medium text-primary leading-tight">
            Niraj Rajput
          </h1>
          <p className="text-base md:text-[18px] lg:text-[20px] font-medium text-muted-foreground mt-1">
            Full Stack Web Developer
          </p>
          <p className="text-sm md:text-[15px] lg:text-base text-muted-foreground mt-2 flex items-center gap-2 justify-center md:justify-start">
            <MapPin size={16} className="shrink-0" />
            <span>Jalgaon, India</span>
          </p>
          <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00FF3C' }} />
            <span className="text-sm text-muted-foreground">Available for work</span>
          </div>
        </div>

        {/* Download Resume CTA - centered on mobile, bottom-aligned on desktop */}
        <div className="mt-6 md:mt-0 flex md:items-end w-full md:w-auto justify-center md:justify-end">
          <a
            href="https://drive.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-underline inline-flex items-center gap-2 text-[15px] text-primary font-medium focus-ring rounded-sm px-2 py-1"
            aria-label="Download resume PDF"
          >
            <Download size={16} className="shrink-0" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
