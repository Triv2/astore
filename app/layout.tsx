import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import { ThemeProvider } from '@/providers/theme-provider'





const font = Source_Code_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'STAR MART',
  description: 'Your source for all things space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ModalProvider/>
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  )
}
