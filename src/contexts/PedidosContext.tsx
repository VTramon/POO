'use client'

import { Pedido } from '@/lib/models/Pedido'
import { ReactNode, createContext, useEffect, useState } from 'react'

type PedidoContextType = {
  qtdPedidos: number
  addPedido: (item: Pedido) => void
  removePedido: (id: number) => void
  getPedidos: () => ListPedidoType[]
}

type ListPedidoType = {
  nome: string
  pedido: number
  mesa: number
}

export const PedidoContext = createContext({} as PedidoContextType)

export const PedidoProvider = ({ children }: { children: ReactNode }) => {
  const [pedido, setPedido] = useState<Pedido[]>([])

  const addPedido = (item: Pedido) => {
    setPedido([...pedido, item])
  }

  const removePedido = (id: number) => {
    const rmItem = pedido.findIndex((item) => item.id == id)

    setPedido(pedido.filter((_, index) => index != rmItem))
  }

  const qtdPedidos = pedido.length

  const getPedidos = () => {
    var lista: ListPedidoType[] = []

    for (var index = 0; index < pedido.length; index++) {
      const element = pedido[index]

      for (var i = 0; i < element.list_itens.length; i++) {
        const item = element.list_itens[i]

        lista.push({
          nome: item.produto,
          pedido: element.id + item.id,
          mesa: element.mesa,
        })
      }
    }

    return lista
  }

  useEffect(() => console.log([pedido.length, pedido]), [pedido])

  return (
    <PedidoContext.Provider
      value={{ addPedido, removePedido, qtdPedidos, getPedidos }}
    >
      {children}
    </PedidoContext.Provider>
  )
}
