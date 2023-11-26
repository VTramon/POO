'use client'

import DishCard from '@/components/DishCard'
import ModalCart from '@/components/ModalCart'
import ModalMesas from '@/components/ModalMesas'
import ModalScreen from '@/components/ModalScreen'
import { ModalContext } from '@/contexts/ModalContext'
import { OrderContext } from '@/contexts/OrderContext'
import { mesas, pratos } from '@/utils'
import { useContext } from 'react'

export default function Home() {
  const handleDishes = () => {
    const list = []

    for (let index = 0; index < pratos.length; index++) {
      const item = pratos[index]
      list.push(
        <DishCard
          props={{
            id: item.id,
            name: item.name,
            value: item.value,
            img: item.img,
            rmFromCart: () => rmItem(item.id),
            addToCart: () =>
              addItem({
                id: item.id,
                name: item.name,
                value: item.value,
                img: item.img,
                table: 1,
              }),
          }}
        />
      )
    }
    return list
  }

  const handleTables = () => {
    return mesas.map((item, index) => {
      return (
        <button
          onClick={() => handleMesa(item)}
          className="flex justify-center items-center w-24 h-24 mr-6 border-black border-opacity-25 border-[1px] rounded-3xl bg-slate-200 shadow-lg hover:[transform:scale(1.1)] ease-in-out duration-100 relative z-[1]"
          key={index}
        >
          <h3>{item}</h3>
        </button>
      )
    })
  }

  const { list, addItem, rmItem } = useContext(OrderContext)
  const { handleMesa, handleScreen, mesa, screen, mesaId, cart } =
    useContext(ModalContext)

  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-8">Mesas</h1>
      <button
        className="absolute top-0 right-0 m-6 bg-orange-600 p-4 rounded-xl text-white font-bold"
        onClick={handleScreen}
      >
        Tela de pedidos
      </button>
      {cart ? <ModalCart /> : null}
      {mesa ? <ModalMesas props={{ id: mesaId }} /> : null}
      {screen ? <ModalScreen /> : null}
      <ul className="flex flex-row ">{handleTables()}</ul>
      {/* <ol>{handleDishes()}</ol> */}
    </main>
  )
}
