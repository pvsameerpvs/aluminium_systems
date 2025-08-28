import Hero from "@/components/Hero";
import Materials from "@/components/Materials";
import Systems from "@/components/Systems";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import VideoRow from "@/components/VideoRow";
import MaterialsFeature from "@/components/MaterialsFeature";
import InquiryStrip from "@/components/InquiryStrip";
import HeroSecondary from "@/components/HeroSecondary";
import FaqSection from "@/components/FaqSection";
import OtherService from "@/components/OtherService";

export default function Page() {
  return (
    <>
      <Hero />
      <Materials />
      <Systems />
      <Projects />
      <Services />
      <HeroSecondary />
      <VideoRow />
      <MaterialsFeature />
      <InquiryStrip />
      <FaqSection />
      <OtherService />
    </>
  );
}
