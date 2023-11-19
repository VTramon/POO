import type { Metadata } from 'next'
import './globals.css'
import { DialogContexProvider } from '@/contexts/DialogContext'
import { OrderProvider } from '@/contexts/OrderContext'

export const metadata: Metadata = {
  title: 'POO',
  description: 'Trabalho de POO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DialogContexProvider>
      <OrderProvider>
        <html lang="pt_BR">
          <body>{children}</body>
        </html>
      </OrderProvider>
    </DialogContexProvider>
  )
}
