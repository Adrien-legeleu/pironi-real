import { Hero } from "@/components/hero";
import ServicesSection from "@/components/blocks/services-section";
import Features from "@/components/blocks/features-section";
import { HowItWorks } from "@/components/how-it-works";
import { TestimonialsSection } from "@/components/testimonials-section";
import CTASection from "@/components/blocks/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <Features />
      <HowItWorks />
      <TestimonialsSection />
      <CTASection />

    </div>
  );
}
