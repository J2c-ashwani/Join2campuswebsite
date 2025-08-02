"use client"

import HeroSection from "@/components/HeroSection"
import GlobalNetworkSection from "@/components/GlobalNetworkSection"
import UniversityPartnershipSection from "@/components/UniversityPartnershipSection"
import PartnershipBenefitsSection from "@/components/PartnershipBenefitsSection"
import CountriesSection from "@/components/CountriesSection"
import InteractiveEuropeMap from "@/components/InteractiveEuropeMap"
import AboutUsSection from "@/components/AboutUsSection"
import TeamSection from "@/components/TeamSection"
import ServicesSection from "@/components/ServicesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactUsSection from "@/components/ContactUsSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <GlobalNetworkSection />
      <UniversityPartnershipSection />
      <PartnershipBenefitsSection />
      <CountriesSection />
      <InteractiveEuropeMap />
      <AboutUsSection />
      <TeamSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactUsSection />
    </>
  )
}
