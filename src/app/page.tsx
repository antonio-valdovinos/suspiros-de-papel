import type { Metadata } from "next"
import { SITE } from "@/constants/site"
import Hero       from "@/components/sections/Hero/Hero"
import { PortfolioPreview } from "@/components/sections/Portfolio"
import Services   from "@/components/sections/Services"
import HowItWorks from "@/components/sections/HowItWorks"
import CTA        from "@/components/sections/CTA"

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
}

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioPreview />
      <Services />
      <HowItWorks />
      <CTA />
    </>
  )
}
