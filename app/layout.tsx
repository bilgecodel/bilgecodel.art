import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./styles/globals.css"

const dm_sans = DM_Sans({ subsets: [ "latin" ] })

export const metadata: Metadata = {
    title: "Bilge Codel | UI/UX Designer",
    description: "A Product Designer focused on creating user-centric, impactful, and innovative products.",
}

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={dm_sans.className}>
                {children}
                <Analytics />
            </body>
        </html>
    )
}
