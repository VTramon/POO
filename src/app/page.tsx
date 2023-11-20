'use client'

import DialogButton from '@/components/DialogButton'
import DishCard from '@/components/DishCard'
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
          className="flex justify-center items-center w-24 h-24 mr-6 rounded-3xl bg-slate-200 shadow-lg"
          key={index}
        >
          <h3>{item}</h3>
        </button>
      )
    })
  }

  const { list, addItem, rmItem } = useContext(OrderContext)
  const { handleMesa, handleScreen, mesa, screen, mesaId } =
    useContext(ModalContext)

  return (
    <main>
      <h1>{list ? list.length : 0}</h1>
      <br />
      <button onClick={handleScreen}>Screen</button>
      <br />
      {/* <DialogButton /> */}
      {mesa ? <ModalMesas props={{ id: mesaId }} /> : null}
      {screen ? <ModalScreen /> : null}
      <ul className="w-1/3 flex flex-row flex-wrap">{handleTables()}</ul>
      {/* <ol>{handleDishes()}</ol> */}
    </main>
  )
}
