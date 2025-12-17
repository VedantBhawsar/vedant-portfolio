const AboutMe = () => {
  return (
    <section className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <div className="max-w-[800px]">
        <h2 className="text-2xl font-semibold text-primary mb-6">About me</h2>
        <p className="text-base leading-relaxed text-muted-foreground mb-3">
          22 y/o front-end developer, previously worked at{" "}
          <a
            href="https://dddigitalsolution.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300 underline decoration-muted-foreground decoration-1 underline-offset-8"
          >
            DD Solutions
          </a>
          , building responsive and user-focused web interfaces.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          Writing code since 2019. Outside work (actually outside code) — movies and traveling somewhere new.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;