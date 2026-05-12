import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiKubernetes,
  SiNestjs,
  SiGit,
  SiGithub,
  SiPostman,
  SiGraphql,
  SiNginx,
  SiGithubactions,
  SiTurborepo,
  SiRedux,
  SiStripe,
  SiBun,
  SiLinux,
  SiAnthropic,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface Skill {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
}

const skills: Skill[] = [
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiReact, name: "React.js" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiShadcnui, name: "shadcn/ui" },
  { icon: SiRedux, name: "Redux" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiNestjs, name: "NestJS" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiGraphql, name: "GraphQL" },
  { icon: SiBun, name: "Bun" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiRedis, name: "Redis" },
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiStripe, name: "Stripe" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiKubernetes, name: "Kubernetes" },
  { icon: SiNginx, name: "Nginx" },
  { icon: FaAws, name: "AWS" },
  { icon: SiTurborepo, name: "Turborepo" },
  { icon: SiGithubactions, name: "GitHub Actions" },
  { icon: SiLinux, name: "Linux" },
  { icon: SiGit, name: "Git" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiAnthropic, name: "Claude Code" },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">Skills & Tools</h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 bg-card border border-muted rounded-md p-6 md:p-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="flex flex-col items-center gap-3">
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
