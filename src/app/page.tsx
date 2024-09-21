import HeroSection from "./components/hero-section";
import AboutSection from "./components/aboutSection";
import ProjectSection from "./components/projectSection";
import ContactSection from "./components/contactSection";
import FooterSection from "./components/footerSection";
import NavBar from "./components/navBar";

export default function Home() {
  return (
    <main className="flex g-10 p-10 flex-col min-h-screen bg-[#080808]">
      <header>
        <NavBar />
      </header>
      <div className="container mx-auto px-12 py-10">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}
