import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/layout/Header'
import PerformanceMonitor from '@/components/ui/PerformanceMonitor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MovieHub - Discover Your Next Favorite Movie',
  description: 'Find and discover movies with personalized recommendations, ratings, and detailed information.',
  keywords: 'movies, recommendations, ratings, TMDB, entertainment',
  authors: [{ name: 'MovieHub Team' }],
  openGraph: {
    title: 'MovieHub - Discover Your Next Favorite Movie',
    description: 'Find and discover movies with personalized recommendations, ratings, and detailed information.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MovieHub - Discover Your Next Favorite Movie',
    description: 'Find and discover movies with personalized recommendations, ratings, and detailed information.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>{children}</main>
            <PerformanceMonitor />
          </div>
        </Providers>
      </body>
    </html>
  )
}