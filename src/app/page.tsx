import HeroSection from "./components/hero-section";
import AboutSection from "./components/aboutSection";
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
      </div>
    </main>
  );
}
