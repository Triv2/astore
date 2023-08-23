import Footer from '@/components/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import AOS from 'aos';




const font = Source_Code_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Data Store',
  description: 'Your source for all data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider/>
        <ToastProvider/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
