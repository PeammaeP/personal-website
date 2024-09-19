import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <main className="flex g-10 p-10 flex-col min-h-screen bg-[#080808]">
      <div className="container">
        <HeroSection />
      </div>
    </main>
  );
}
