import { Minus } from 'lucide-react'
import { CartButton } from './CartButton'
import { OrderContext } from '@/contexts/OrderContext'
import { useContext } from 'react'
import { ModalContext } from '@/contexts/ModalContext'

type CartCardType = {
  id: number
  img: string
  name: string
  value: number
  qtd: number
}

const CartCard = ({ props }: { props: CartCardType }) => {
  const { getTotal, list, rmItem, addItem, sendOrder, clear } =
    useContext(OrderContext)
  const { handleMesa, mesa, mesaId, handleCart } = useContext(ModalContext)

  const addItemToCart = () => {
    var tempItem = list.filter((item) => item.id == props.id)[0]
    tempItem.id == list.length + 1
    addItem(tempItem)
  }

  return (
    <div className="flex justify-between w-1/4">
      <div className="mr-4 mb-6">
        <p className="font-bold text-zinc-700">{props.name}</p>
        <p className="text-orange-500 font-bold">R$ {props.value.toFixed(2)}</p>
      </div>
      <CartButton
        props={{
          qtd: props.qtd,
          remove: () => rmItem(props.id),
          add: () => addItemToCart(),
        }}
      />
    </div>
  )
}

export default CartCard
