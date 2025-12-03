import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactLinks from "@/components/ContactLinks";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import RecentWork from "@/components/RecentWork";
import Experience from "@/components/Experience";
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
      </main>
    </div>
  );
};

export default Index;
