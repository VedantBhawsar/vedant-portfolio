const AboutMe = () => {
  return (
    <section className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <div className="max-w-[800px]">
        <h2 className="text-2xl font-semibold text-primary mb-6">About Me</h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-3">
          Full Stack Engineer focused on scalable SaaS systems, AI integrations, and event-driven
          backend architecture. Specialized in Next.js, NestJS, TypeScript, and PostgreSQL, with
          hands-on experience in event-driven architecture (BullMQ/Redis), AWS (S3, EC2), and
          monorepo systems. Shipped features across two live products at a product company.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;