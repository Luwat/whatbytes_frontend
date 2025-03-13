import Header from "@/components/Header";
import MainSection from "@/components/main-section";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Header />
      <section className="flex">
      <Sidebar />
      <MainSection />
      </section>
    </main>
  );
}
