import "./globals.css"
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google"
import localFont from "next/font/local"
import { SITE } from "@/constants/site"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
})

const champagne = localFont({
  src: "./fonts/ChampagneLimousinesBold.ttf",
  variable: "--font-champagne",
})

export const metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
  description: SITE.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${notoSerif.variable} ${plusJakarta.variable} ${champagne.variable}`}>
      <body className="bg-background">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}