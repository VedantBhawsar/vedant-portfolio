import { useState } from "react";
import { Copy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";


const ContactLinks = () => {
  const [emailText, setEmailText] = useState("nirajrajput.dev@gmail.com");

  const copyEmail = () => {
    navigator.clipboard.writeText("nirajrajput.dev@gmail.com");
    setEmailText("Copied!");
    
    setTimeout(() => {
      setEmailText("nirajrajput.dev@gmail.com");
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
      icon: FaLinkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/nirajrajput/",
      ariaLabel: "Visit LinkedIn profile",
    },
    {
      icon: FaGithub,
      text: "GitHub",
      href: "https://github.com/nirajrajput-dev",
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
