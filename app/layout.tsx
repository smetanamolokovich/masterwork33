import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aituar Abdiluly — Automatizace a aplikace na míru',
  description:
    'Automatizuji ruční práci a propojuji systémy. AI asistenti, integrace přes API, aplikace a interní nástroje na míru. Praha / Remote.',
  openGraph: {
    title: 'Aituar Abdiluly — Automatizace a aplikace na míru',
    description:
      'Místo hodin kopírování dat dostanete proces, který běží sám. AI, integrace a aplikace na míru.',
    locale: 'cs_CZ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}
