import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContactLinks from "@/components/ContactLinks";
import AboutMe from "@/components/AboutMe";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <Hero />
        <ContactLinks />
        <AboutMe />
      </main>
    </div>
  );
};

export default Index;
