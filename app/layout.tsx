import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Candidatura CFN',
  description: 'Site de candidatura para o Grupo Casa das Fechaduras',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Providers>
          <Header/>
            <div className='min-h-[calc(100vh-144px)]'>{children}</div>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}