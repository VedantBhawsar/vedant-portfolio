import { FileText, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto max-w-[900px] pt-24 md:pt-32 pb-12">
      <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto] md:gap-6 lg:gap-8 md:items-start">
        <div className="w-full md:w-auto flex justify-center md:justify-start mb-6 md:mb-0 md:self-start">
          <img
            src="https://i.pinimg.com/1200x/73/7e/02/737e021ae6c86a719f32281e1bcb550a.jpg"
            alt="Niraj Rajput"
            className="w-20 h-20 md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] object-cover rounded-md"
            draggable={false}
          />
        </div>

        <div className="text-center md:text-left w-full md:flex md:flex-col md:justify-between md:h-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg md:text-[24px] lg:text-[30px] font-medium text-primary leading-tight">
              Niraj Rajput
            </h1>
            <p className="text-sm md:text-[18px] lg:text-[20px] font-medium text-muted-foreground">
              Full Stack Developer
            </p>
            <p className="text-sm md:text-[15px] lg:text-base text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={16} className="shrink-0" />
              <span>Navi Mumbai</span>
            </p>
          </div>

          <div className="flex items-center gap-2 mt-2 md:mt-0 justify-center md:justify-start">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm text-muted-foreground">Available for work</span>
          </div>
        </div>

        <div className="mt-6 md:mt-0 flex items-end w-full md:w-auto justify-center md:justify-end md:self-end">
          <a
            href="https://drive.google.com/file/d/1qwHwk0nRL1azodoE2_27JKaRpbV96Sgp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-underline inline-flex items-center gap-2 text-[15px] text-primary font-medium focus-ring rounded-sm px-2 py-1"
            aria-label="Download resume PDF"
          >
            <FileText size={16} className="shrink-0" />
            <span>View Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;