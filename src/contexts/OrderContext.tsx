'use client'
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { PedidoContext } from './PedidosContext'
import { Pedido } from '@/lib/models/Pedido'
import { ItemPedido } from '@/lib/models/ItemPedido'

type DishType = {
  id?: number
  table: number
  img: string
  name: string
  value: number
}

// type OrderType = {
//   mesa: number
//   order: {
//     list: DishType[]
//     sendOrder?: () => void
//     addItem: (item: DishType) => void
//     rmItem: (id: number) => void
//   }
// }

export type OrderContextType = {
  list: DishType[]
  sendOrder: (mesa: number) => void
  addItem: (item: DishType) => void
  rmItem: (id: number) => void
  getTotal: () => number
  clear: () => void
}

export const OrderContext = createContext({} as OrderContextType)

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<DishType[]>([])

  const { addPedido, qtdPedidos, addItemPedido, itemPedido } =
    useContext(PedidoContext)

  function addItem(item: DishType) {
    // for (let index = 0; index < list.length; index++) {
    //   if(list[index].mesa == mesa){
    //     setList(list.slice(index+1))
    //   }
    // }
    setList([...list, item])
  }

  function rmItem(id: number) {
    const rmItem = list.findIndex((item) => item.id == id)

    setList(list.filter((_, index) => index != rmItem))
  }

  const clear = () => {
    setList([])
  }

  const getTotal = () => {
    var total = 0

    for (let index = 0; index < list.length; index++) {
      total += list[index].value
    }

    return total
  }

  const sendOrder = (mesa: number) => {
    const pedido = new Pedido(qtdPedidos + 1, mesa)

    for (let index = 0; index < list.length; index++) {
      const item = new ItemPedido(
        itemPedido.length + 1 + index,
        list[index].name,
        1,
        ''
      )

      // console.log(item)
      pedido.addItem(item)
      addItemPedido(item)
    }
    console.log(pedido)

    var temp: ItemPedido[] = []
    temp.concat(itemPedido)
    temp.concat(pedido.list_itens)

    // setItemPedido(temp)

    addPedido(pedido)
  }

  // useEffect(() => console.log([list.length, list]), [list])

  return (
    <OrderContext.Provider
      value={{
        list,
        addItem,
        rmItem,
        clear,
        getTotal,
        sendOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
