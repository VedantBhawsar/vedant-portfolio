import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
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

  const links = [
    {
      icon: Mail,
      text: emailText,
      onClick: copyEmail,
      href: undefined,
      ariaLabel: "Copy email to clipboard",
    },
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

  return (
    <div className="container mx-auto mt-8 md:mt-12">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 lg:gap-10 items-center md:items-start md:justify-end">
        {links.map((link, index) => {
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
        })}
      </div>
    </div>
  );
};

export default ContactLinks;
