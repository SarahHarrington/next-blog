import type { Metadata } from 'next'
import { Satisfy, Lato } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Providers } from './components/Providers'

const lato = Lato({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SarahDoesBlog',
  description: 'Sarah Does Tech Blog',
  icons: {
    icon: './favicon.ico',
    apple: './favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lato.className} bg-hexagons-light dark:bg-hexagons-dark text-dark-russian-950 dark:bg-black-russian-950 dark:selection:black-russian-100 dark:text-white h-full selection:bg-alto-400`} >
        <Providers>
          <Navbar />
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
