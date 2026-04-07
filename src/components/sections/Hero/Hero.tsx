import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"
import HeroBackground from "./HeroBackground"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-8 py-20">
      
      <HeroBackground />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 items-center relative z-10">
        <HeroContent />
        <HeroImage />
      </div>

    </section>
  )
}