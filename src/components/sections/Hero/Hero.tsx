import HeroBackground from "./HeroBackground"
import HeroContent from "./HeroContent"
import HeroImage from "./HeroImage"

/**
 * Hero — sección principal
 * Layout idéntico al boceto sublim.html:
 *   - min-h-[90vh] para ocupar casi toda la pantalla
 *   - grid lg:grid-cols-12 col-span-7 / col-span-5
 *   - px-8 en la sección, max-w-7xl centrado
 */
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