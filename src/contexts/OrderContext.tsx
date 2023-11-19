'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'

type DishType = {
  id: number
  table: number
  img: string
  name: string
  value: number
}

export type OrderContextType = {
  list: DishType[]
  addOrder: (item: DishType) => void
  rmOrder: (id: number) => void
}

export const OrderContext = createContext({} as OrderContextType)

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [list, setList] = useState<DishType[]>([])

  function addOrder(item: DishType) {
    setList([...list, item])
  }

  function rmOrder(id: number) {
    setList(list.filter((item) => item.id !== id))
  }

  useEffect(() => console.log(list), [list])

  return (
    <OrderContext.Provider
      value={{
        list,
        addOrder,
        rmOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
