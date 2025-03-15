import type React from "react"
import "@/app/globals.css"
import { Space_Mono } from "next/font/google"
import { cn } from "@/lib/utils"
import { AuthProvider } from "@/components/auth-provider"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-typewriter",
})

export const metadata = {
  title: "Your Name - Notes & Projects",
  description: "A collection of my work and thoughts",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-paper text-neutral-900 antialiased", spaceMono.variable)}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}

