import type { Metadata } from 'next'
import './globals.css'
import { OrderProvider } from '@/contexts/OrderContext'
import { ModalProvider } from '@/contexts/ModalContext'
import { PedidoProvider } from '@/contexts/PedidosContext'

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
    <PedidoProvider>
      <OrderProvider>
        <ModalProvider>
          <html lang="pt_BR">
            <body>{children}</body>
          </html>
        </ModalProvider>
      </OrderProvider>
    </PedidoProvider>
  )
}
