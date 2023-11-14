import type { Metadata } from 'next'
import { Lato, Satisfy, Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Providers } from './components/Providers'

const lato = Lato({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--lato',
  fallback: ['sans-serif']
})

const satisfy = Satisfy({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--satisfy',
  fallback: ['cursive']
})

const fira_code = Fira_Code({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--fira-code',
  fallback: ['mono']
})

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
      <body className={`${lato.variable} ${satisfy.variable} ${fira_code.variable} max-w-full font-lato bg-hexagons-light dark:bg-hexagons-dark text-black-russian-950 dark:bg-black-russian-950 dark:selection:bg-black-russian-200 dark:text-[#FFFFFF] h-full selection:bg-alto-200`} >
        <Providers>
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
