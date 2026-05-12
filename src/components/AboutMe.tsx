const AboutMe = () => {
  return (
    <section className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <div className="max-w-[800px]">
        <h2 className="text-2xl font-semibold text-primary mb-6">About Me</h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-3">
          Full Stack Developer with 1.5+ years of experience building production-grade SaaS
          applications. Currently working at{" "}
          <a
            href="https://sparrowhost.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 underline decoration-muted-foreground decoration-1 underline-offset-8"
          >
            Sparrowhost
          </a>
          , where I ship AI-powered platforms and scalable backend systems using Next.js, Node.js,
          NestJS, TypeScript, PostgreSQL, and Redis.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          I enjoy owning products end-to-end — from backend architecture and async pipelines to
          polished frontend experiences. Outside work — chess and exploring new places.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;