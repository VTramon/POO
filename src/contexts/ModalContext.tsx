'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { OrderContext } from './OrderContext'

export type ModalContextType = {
  cart: boolean
  handleCart: () => void
  sent: boolean
  handleSending: () => void
  screen: boolean
  handleScreen: () => void
  mesa: boolean
  mesaId: number
  handleMesa: (id: number) => void
}

export type ModalProps = {
  id: number
}

export const ModalContext = createContext({} as ModalContextType)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState(false)
  const [screen, setScreen] = useState(false)
  const [mesa, setMesa] = useState(false)
  const [sent, setSent] = useState(false)
  const [mesaId, setMesaId] = useState<number>(0)

  const handleCart = () => {
    setCart(!cart)
  }

  const handleSending = () => {
    setSent(true)

    setTimeout(() => {
      setSent(false)
    }, 2000)
  }

  const handleScreen = () => {
    setScreen(!screen)
  }

  const { clear } = useContext(OrderContext)
  const handleMesa = (id: number) => {
    mesa == true ? clear() : null
    setMesa(!mesa)
    setMesaId(id)
  }

  // useEffect(() => console.log([mesa, mesaId]), [mesa])

  return (
    <ModalContext.Provider
      value={{
        cart,
        handleCart,
        screen,
        handleScreen,
        mesa,
        mesaId,
        handleMesa,
        sent,
        handleSending,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
