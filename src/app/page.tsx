'use client'

import DialogButton from '@/components/DialogButton'
import DishCard from '@/components/DishCard'
import { OrderContext } from '@/contexts/OrderContext'
import { dishes } from '@/utils'
import { useContext } from 'react'

export default function Home() {
  const handleDishes = () => {
    const list = []

    for (let index = 0; index < dishes.length; index++) {
      const item = dishes[index]
      list.push(
        <DishCard
          props={{
            id: index,
            name: item.name,
            value: item.value,
            img: item.img,
            rmFromCart: () => rmOrder(index),
            addToCart: () =>
              addOrder({
                id: index,
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

  const { list, addOrder, rmOrder } = useContext(OrderContext)
  // const prato = {
  //   id: 1,
  //   img: 'string',
  //   name: 'string',
  //   value: 1,
  // }

  return (
    <main>
      <h1>{list ? list.length : 0}</h1>
      <br />
      <DialogButton />
      <ol>{handleDishes()}</ol>
    </main>
  )
}
