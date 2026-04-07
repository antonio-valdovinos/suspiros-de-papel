import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"
import HeroBackground from "./HeroBackground"
import Container from "@/components/ui/Container"

export default function Hero() {
  return (
    <section className="line-art-bg relative min-h-[90vh] flex items-center overflow-hidden py-20">
      <HeroBackground />

      <Container>
        <div className="w-full grid lg:grid-cols-12 gap-8 items-center relative z-10">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>

    </section>
  )
}