import { OrderContext } from '@/contexts/OrderContext'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'
import { CardButton } from './CardButton'

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
    <li className="flex justify-center items-center w-2/5" key={props.id}>
      <div className="flex flex-col h-60 w-48 items-center border-2 border-gray-300 rounded-2xl p-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden">
          <Image src={props.img} alt={props.name} fill objectFit="cover" />
        </div>

        <p className="mt-3 text-center">{props.name}</p>

        <div className="flex flex-row justify-between mt-2 w-full">
          <p>{props.value}</p>

          <div>
            {list.filter((item) => item.name == props.name).length > 0 ? (
              <CardButton
                props={{
                  onClick: props.rmFromCart as () => void,
                  type: 'minus',
                }}
              />
            ) : null}

            <CardButton
              props={{ onClick: props.addToCart as () => void, type: 'plus' }}
            />
          </div>
        </div>
      </div>
    </li>
  )
}

export default DishCard
