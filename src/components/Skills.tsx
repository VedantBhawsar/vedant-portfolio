import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman
} from "react-icons/si";

interface Skill {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
}

const skills: Skill[] = [
  { icon: SiHtml5, name: "HTML" },
  { icon: SiCss3, name: "CSS" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiBootstrap, name: "Bootstrap" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiPostman, name: "Postman" },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">Skills & Tools</h2>
      
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="group flex flex-col items-center gap-3 transition-transform duration-300 hover:scale-110"
            >
              <Icon 
                size={40} 
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300" 
              />
              <span className="text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary text-center transition-colors duration-300">
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
