import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactLinks from "@/components/ContactLinks";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import RecentWork from "@/components/RecentWork";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <Hero />
        <ContactLinks />
        <AboutMe />
        <Services />
        <RecentWork />
        <Experience />
        <Skills />
        <Education />
      </main>
    </div>
  );
};

export default Index;
