const AboutMe = () => {
  return (
    <section className="container mx-auto mt-12 md:mt-16">
      {/* Divider line */}
      <div className="border-t border-muted mb-12 md:mb-16" />

      <div className="max-w-[800px]">
        <h2 className="text-2xl font-semibold text-primary mb-6">About me</h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Full Stack Web Developer with hands-on experience building responsive, user-friendly interfaces and collaborating on end-to-end projects. Skilled in creating web applications, integrating APIs, and implementing scalable solutions with optimized performance. Currently expanding backend expertise and leveraging strong frontend skills to deliver efficient, modern, and seamless digital experiences.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
