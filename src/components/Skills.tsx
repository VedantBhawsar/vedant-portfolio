import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiTypescript,
  SiReact, 
  SiTailwindcss,
  SiMui,
  SiShadcnui,
  SiFramer,
  SiLaravel,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel
} from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri"; 

interface Skill {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
}

const skills: Skill[] = [
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React.js" },
  { icon: RiBearSmileFill, name: "Zustand" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiMui, name: "Material UI" },
  { icon: SiShadcnui, name: "shadcn/ui" },
  { icon: SiFramer, name: "Motion" },
  { icon: SiLaravel, name: "Laravel" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiVercel, name: "Vercel" },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">Skills & Tools</h2>
      
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 bg-card border border-muted rounded-md p-6 md:p-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              <Icon size={24} />
              <span className="text-sm md:text-base text-muted-foreground text-center">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
