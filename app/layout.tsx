import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: '--font-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Samara Residence | Perumahan Subsidi Terjangkau & Berkualitas',
  description: 'Rumah subsidi modern dan terjangkau untuk keluarga Indonesia. Lokasi strategis, DP ringan, dan kemudahan pembiayaan. Konsultasi gratis sekarang!',
  generator: 'v0.app',
  keywords: 'perumahan subsidi, rumah terjangkau, rumah subsidi Indonesia, hunian keluarga, DP ringan, perumahan bersubsidi, rumah murah berkualitas',
  authors: [{ name: 'Samara Residence' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Samara Residence | Perumahan Subsidi Terjangkau',
    description: 'Rumah berkualitas dengan harga terjangkau untuk keluarga. Program subsidi dengan DP ringan dan cicilan mudah.',
    type: 'website',
    url: 'https://samara-residence.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
