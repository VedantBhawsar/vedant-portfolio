import { useState } from "react";
import { Copy } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const ContactLinks = () => {
  const [emailText, setEmailText] = useState("Vedxntbhavsar@gmail.com");

  const copyEmail = () => {
    navigator.clipboard.writeText("Vedxntbhavsar@gmail.com");
    setEmailText("Copied!");
    setTimeout(() => setEmailText("Vedxntbhavsar@gmail.com"), 1000);
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
      href: "https://linkedin.com/in/vedantbhawsar",
      ariaLabel: "Visit LinkedIn profile",
    },
    {
      icon: FaGithub,
      text: "GitHub",
      href: "https://github.com/VedantBhawsar",
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
        <span className={`text-sm md:text-[15px] transition-opacity duration-200 ${link.text === "Copied!" ? "opacity-100" : ""}`}>
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
      <div className="border-t border-muted mb-2 md:mb-4" />

      <div className="flex flex-col md:hidden gap-4 items-center">
        {renderLink(emailLink, 0)}
        {socialLinks.map((link, index) => renderLink(link, index + 1))}
      </div>

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