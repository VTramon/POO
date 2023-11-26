'use client'

import { ItemPedido } from '@/lib/models/ItemPedido'
import { Pedido } from '@/lib/models/Pedido'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'

type PedidoContextType = {
  qtdPedidos: number
  addPedido: (item: Pedido) => void
  removePedido: (id: number) => void
  removeItemPedido: (id: number) => void
  itemPedido: ItemPedido[]
  // setItemPedido: Dispatch<SetStateAction<ItemPedido[]>>
  addItemPedido: (item: ItemPedido) => void
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
  const [itemPedido, setItemPedido] = useState<ItemPedido[]>([])

  const addPedido = (item: Pedido) => {
    setPedido([...pedido, item])
  }

  const addItemPedido = (item: ItemPedido) => {
    setItemPedido((prevState) => [...prevState, item])
  }

  const removeItemPedido = (id: number) => {
    setItemPedido((preState) => preState.filter((item) => item.id != id))
  }

  const removePedido = (id: number) => {
    // console.log('aiduyrbghujsdrb')
    const rmItem = pedido.findIndex((item) =>
      item.list_itens.findIndex((e) => e.id == id) == -1 ? false : true
    )
    console.log(pedido[rmItem])

    setPedido((prevState) => {
      const list: Pedido[] = prevState.map((item) => {
        if (item.list_itens.find((element) => element.id == id)) {
          item.list_itens = item.list_itens.filter(
            (element) => element.id != id
          )
          return item
        }
        return item
      })
      // prevState[rmItem].list_itens.filter((item) => item.id != id)

      return list
    })
    // setPedido(pedido.filter((_, index) => index != rmItem))
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
          pedido: item.id,
          mesa: element.mesa,
        })
      }
    }

    return lista
  }

  useEffect(() => console.log(itemPedido), [itemPedido])

  return (
    <PedidoContext.Provider
      value={{
        addPedido,
        removePedido,
        qtdPedidos,
        getPedidos,
        addItemPedido,
        itemPedido,
        removeItemPedido,
        // setItemPedido,
      }}
    >
      {children}
    </PedidoContext.Provider>
  )
}
