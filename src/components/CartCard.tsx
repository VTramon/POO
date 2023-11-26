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

  const handleSubmitOrder = () => {
    sendOrder(mesaId)
    clear()
    handleMesa(props.id)
  }

  return (
    <div>
      <div>
        <div>
          <p>{props.name}</p>
          <div>
            <CartButton
              props={{ type: 'minus', onClick: () => rmItem(props.id) }}
            />
            <div>{props.qtd}</div>
            <CartButton
              props={{ type: 'plus', onClick: () => addItemToCart() }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard
