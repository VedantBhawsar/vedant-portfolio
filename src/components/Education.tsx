interface EducationEntry {
  degree: string;
  timePeriod: string;
  institution: string;
}

const education: EducationEntry[] = [
  {
    degree: "B.E. in Computer Science & Engineering — CGPA 7.9/10",
    timePeriod: "Feb 2021 – Jun 2025",
    institution: "SSBT College of Engineering & Technology, Jalgaon"
  }
];

const Education = () => {
  return (
    <section className="container mx-auto max-w-[900px] mt-12 md:mt-16">
      <h2 className="text-2xl font-semibold text-primary mb-6">Education</h2>

      <div className="space-y-6 md:space-y-8">
        {education.map((edu, index) => (
          <div key={index} className="flex gap-6 md:gap-8">
            <div className="w-[2px] bg-muted flex-shrink-0" />

            <div className="flex-1 pb-2">
              <h3 className="text-sm md:text-base font-semibold text-primary mb-2">
                {edu.degree}
              </h3>
              <p className="text-sm md:text-base font-medium text-muted-foreground mb-1">
                {edu.timePeriod}
              </p>
              <p className="text-sm md:text-base font-medium text-muted-foreground">
                {edu.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;