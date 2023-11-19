import { OrderContext } from '@/contexts/OrderContext'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'

type DishCardType = {
  id: number
  img: string
  name: string
  value: number
  addToCart?: () => void
  rmFromCart?: () => void
}

const DishCard = ({ props }: { props: DishCardType }) => {
  const { list } = useContext(OrderContext)

  const dishList = []

  // dishList.push(list.filter((item) => (item.name = props.name)))

  // console.log(dishList)
  return (
    <li key={props.id}>
      <div className="">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image src={props.img} alt={props.name} fill objectFit="cover" />
        </div>
        <p>{props.name}</p>
        <div>
          <p>{props.value}</p>

          {list.filter((item) => item.name == props.name).length > 0 ? (
            <button onClick={props.rmFromCart}>
              <Minus />
            </button>
          ) : null}

          <button onClick={props.addToCart}>
            <Plus />
          </button>
        </div>
      </div>
    </li>
  )
}

export default DishCard
