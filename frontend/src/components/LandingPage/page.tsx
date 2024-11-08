import React from "react";
import Header from "@/components/LandingPage/Header";
import HeroSection from "@/components/LandingPage/HeroSection";
import AboutSection from "@/components/LandingPage/AboutSection";
import FeaturesSection from "@/components/LandingPage/FeaturesSection";
import TestimonialsSection from "@/components/LandingPage/TestimonialsSection";
import ClientesSection from "@/components/LandingPage/ClientesSection";
import CTASection from "@/components/LandingPage/CTASection";
import PlanosSection from "@/components/LandingPage/PlanosSection";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ClientesSection />
      <PlanosSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;

