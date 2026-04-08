import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>

        <Navbar />

        <main className="pt-24">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}