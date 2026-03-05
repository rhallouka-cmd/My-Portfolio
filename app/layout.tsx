import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rabab HALLOUKA - Software Engineering Portfolio',
  description: 'Portfolio of Rabab HALLOUKA, Software Engineering Student at ESISA. Passionate about AI and Web Development.',
  keywords: 'Portfolio, Software Engineering, AI, Web Development, Next.js, React',
  authors: [{ name: 'Rabab HALLOUKA', url: 'https://github.com/rhallouka-cmd' }],
  creator: 'Rabab HALLOUKA',
  openGraph: {
    type: 'website',
    url: 'https://rabab-portfolio.vercel.app',
    title: 'Rabab HALLOUKA - Software Engineering Portfolio',
    description: 'Portfolio of Rabab HALLOUKA, Software Engineering Student at ESISA.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabab HALLOUKA - Software Engineering Portfolio',
    description: 'Portfolio of Rabab HALLOUKA, Software Engineering Student at ESISA.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%233b82f6'>R</text></svg>" />
      </head>
      <body className="bg-primary text-light">
        {children}
      </body>
    </html>
  )
}
