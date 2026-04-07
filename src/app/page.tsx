import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="min-h-screen flex items-center justify-center">
          <p className="font-headline text-primary text-4xl">
            Secciones próximamente...
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}