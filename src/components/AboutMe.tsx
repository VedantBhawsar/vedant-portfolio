const AboutMe = () => {
  return (
    <section className="container mx-auto mt-12 md:mt-16">
      {/* Divider line */}
      <div className="border-t border-muted mb-12 md:mb-16" />

      <div className="max-w-[800px]">
        <h2 className="text-2xl font-semibold text-primary mb-6">About me</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Seasoned Full Stack Developer with 10+ years of experience across insurance, fintech, SaaS, and
          B2C/B2B products. With 4 years in leadership roles, I bring a strategic mindset, strong
          cross-functional collaboration, and a focus on solving complex problems through clear,
          user-centred design. Skilled in end-to-end product design from research and user journey
          to prototyping and usability testing. I thrive in fast-paced environments where empathy
          meets business impact.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
