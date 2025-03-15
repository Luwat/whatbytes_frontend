import Header from "@/components/Header";
import MainSection from "@/components/main-section";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="w-screen min-h-screen md:overflow-x-hidden">
      <Header />
      <section className="md:flex">
      <Sidebar />
      <MainSection />
      </section>
    </main>
  );
}
