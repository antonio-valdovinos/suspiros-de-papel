import HeroBackground from "./HeroBackground"
import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-visible px-8 py-20 line-art-bg">

      <HeroBackground />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-4 items-center relative z-10">
        <HeroContent />
        <HeroImage />
      </div>

    </section>
  )
}