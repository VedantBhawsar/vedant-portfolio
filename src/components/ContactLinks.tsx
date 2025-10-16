import { useState } from "react";
import { Copy, Linkedin, Github } from "lucide-react";
import { toast } from "sonner";

const ContactLinks = () => {
  const [emailText, setEmailText] = useState("rajputniraj167@gmail.com");

  const copyEmail = () => {
    navigator.clipboard.writeText("rajputniraj167@gmail.com");
    setEmailText("Copied!");
    toast.success("Email copied to clipboard!");
    
    setTimeout(() => {
      setEmailText("rajputniraj167@gmail.com");
    }, 1000);
  };

  const emailLink = {
    icon: Copy,
    text: emailText,
    onClick: copyEmail,
    href: undefined,
    ariaLabel: "Copy email to clipboard",
  };

  const socialLinks = [
    {
      icon: Linkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/niraj-rajput-0a36b12a6/",
      ariaLabel: "Visit LinkedIn profile",
    },
    {
      icon: Github,
      text: "GitHub",
      href: "https://github.com/RajputNiraj",
      ariaLabel: "Visit GitHub profile",
    },
  ];

  const renderLink = (
    link: { icon: any; text: string; onClick?: () => void; href?: string; ariaLabel: string },
    index: number
  ) => {
    const Icon = link.icon;
    const content = (
      <>
        <Icon size={18} className="shrink-0" />
        <span
          className={`text-sm md:text-[15px] transition-opacity duration-200 ${
            link.text === "Copied!" ? "opacity-100" : ""
          }`}
        >
          {link.text}
        </span>
      </>
    );

    return link.href ? (
      <a
        key={index}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 focus-ring rounded-sm px-2 py-1 w-fit"
        aria-label={link.ariaLabel}
      >
        {content}
      </a>
    ) : (
      <button
        key={index}
        onClick={link.onClick}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 focus-ring rounded-sm px-2 py-1 w-fit text-left"
        aria-label={link.ariaLabel}
      >
        {content}
      </button>
    );
  };

  return (
    <div className="container mx-auto max-w-[900px] mt-2 md:mt-4">
      {/* Divider line */}
      <div className="border-t border-muted mb-2 md:mb-4" />
      
      {/* Mobile/Tablet: Stack all links centered */}
      <div className="flex flex-col md:hidden gap-4 items-center">
        {renderLink(emailLink, 0)}
        {socialLinks.map((link, index) => renderLink(link, index + 1))}
      </div>

      {/* Desktop: Email left, Social links right */}
      <div className="hidden md:flex md:items-center md:justify-between">
        <div>{renderLink(emailLink, 0)}</div>
        <div className="flex items-center gap-8 lg:gap-10">
          {socialLinks.map((link, index) => renderLink(link, index + 1))}
        </div>
      </div>
    </div>
  );
};

export default ContactLinks;
