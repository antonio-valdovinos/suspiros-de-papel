import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-8 py-20 overflow-hidden line-art-bg">

      {/* BLOBS */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary opacity-10 blur-3xl" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-tertiary opacity-10 blur-3xl" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-4 items-center">

        <HeroContent />
        <HeroImage />

      </div>

    </section>
  )
}