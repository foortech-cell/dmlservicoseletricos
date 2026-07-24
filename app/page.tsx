import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ElectricCircuitBg from "@/components/ElectricCircuitBg";
import EnergyDivider from "@/components/EnergyDivider";
import VoltageSimulator from "@/components/VoltageSimulator";

export default function Home() {
  return (
    <>
      <ElectricCircuitBg />
      <ScrollProgressBar />
      <Header />
      <main className="relative z-10">
        <Hero />
        <EnergyDivider label="GRID DE SERVIÇOS" badge="HIGH-VOLTAGE" />
        <Services />
        <EnergyDivider label="DIAGNOSTICO DIGITAL" badge="MEDIDOR DE CARGA" />
        <VoltageSimulator />
        <EnergyDivider label="SOBRE A DML" badge="ENGENHARIA" />
        <About />
        <Categories />
        <EnergyDivider label="ETAPAS DE ATENDIMENTO" badge="PROCESSO 24H" />
        <Process />
        <Portfolio />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

