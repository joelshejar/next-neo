import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import { Syne } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  metadataBase: new URL('https://joelrajesh.dev'),
  title: {
    template: '%s | Joel',
    default: 'Joel Rajesh',
  },
  description: 'Frontend developer. My blog, projects, and more.',
  keywords:
    'joel rajesh, frontend developer, web developer, next.js, react, mixpanel',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f5' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
  openGraph: {
    title: 'Joel Rajesh',
    description: 'My personal website and blog',
    url: 'https://joelrajesh.dev',
    siteName: "Joel Rajesh's website",
    locale: 'en_US',
    type: 'website',
    // images: [
    //   {
    //     url: `https://joelrajesh.dev/api/og?title=${encodeURIComponent(
    //       "Joel Rajesh's site"
    //     )}`,
    //     width: 1200,
    //     height: 630,
    //     alt: "Joel Rajesh's site",
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: 'Joel Rajesh',
    card: 'summary_large_image',
    creator: '@joelrajesh13',
  },
  icons: {
    shortcut: 'https://joelrajesh.dev/favicons/favicon.ico',
  },
  // alternates: {
  //   types: {
  //     'application/rss+xml': 'https://joelrajesh.dev`  /feed.xml',
  //   },
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
