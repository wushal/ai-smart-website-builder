import { useAppStore } from "@/config/store";
import Hero from "@/sections/Hero/Hero";
import Features from "@/sections/Features/Features";
import Workflow from "@/sections/Workflow/Workflow";
import Cases from "@/sections/Cases/Cases";
import Pricing from "@/sections/Pricing/Pricing";
import FAQ from "@/sections/FAQ/FAQ";

export default function HomePage() {
  const { setChatOpen } = useAppStore();
  return (
    <>
      <Hero onConsultClick={() => setChatOpen(true)} />
      <Features />
      <Workflow />
      <Cases />
      <Pricing />
      <FAQ />
    </>
  );
}