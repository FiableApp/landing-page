import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const brSonoma = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-br-sonoma",
})

export const metadata: Metadata = {
  title: "Fiable - Tu Copiloto Financiero",
  description:
    "Olvídate de registros manuales y deja que Fito se encargue. Para personas que quieren tomar control de sus finanzas de forma inteligente y sin complicaciones.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${brSonoma.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
