import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";

interface SocialLink {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: FaGithub,
    url: "https://github.com/nirajrajput-dev",
    label: "GitHub"
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/nirajrajput/",
    label: "LinkedIn"
  },
  {
    icon: FaXTwitter,
    url: "https://twitter.com/yourusername",
    label: "X (Twitter)"
  },
  {
    icon: FaInstagram,
    url: "https://instagram.com/yourusername",
    label: "Instagram"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto max-w-[900px] mt-12 md:mt-16 pb-12 md:pb-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">
        Let's Connect
      </h2>
      
      <div className="flex flex-col items-center gap-6 md:gap-8">
        {/* Subtext */}
        <p className="text-base md:text-lg text-muted-foreground text-center max-w-[600px]">
          Drop me a DM, always up for Tech Talk, Side Hustles, and Opportunities.
        </p>
        
        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 focus-ring rounded-sm p-1"
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
