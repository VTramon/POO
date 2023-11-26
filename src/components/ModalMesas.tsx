import { pratos } from '@/utils'
import { useContext } from 'react'
import DishCard from './DishCard'
import { OrderContext } from '@/contexts/OrderContext'
import { ModalContext, ModalProps } from '@/contexts/ModalContext'
import { X } from 'lucide-react'

const ModalMesas = ({ props }: { props: ModalProps }) => {
  const { handleMesa, mesa, mesaId, handleCart } = useContext(ModalContext)
  const { addItem, rmItem, list, getTotal, sendOrder, clear } =
    useContext(OrderContext)

  const total = getTotal().toFixed(2).toString().split('.')

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

  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 flex justify-center items-center overflow-hidden z-[2]"
      onClick={() => handleMesa(props.id)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center items-center relative w-5/6 h-5/6 bg-slate-100 rounded-3xl overflow-scroll"
      >
        <button
          className="absolute top-0 right-0 w-9 h-9 mr-4 mt-4"
          onClick={() => handleMesa(props.id)}
        >
          <X width={36} height={36} />
        </button>

        <ol className="w-3/5 h-full flex justify-center flex-row flex-wrap ">
          {handleDishes()}
        </ol>

        <button
          onClick={handleCart}
          className="flex justify-around items-center w-2/5 h-11 bg-orange-500 rounded-t-xl rounded-b-[50px] mb-9"
        >
          <p className="text-white font-bold text-xl">
            {list.length == 1 ? list.length + ' item' : list.length + ' itens'}
          </p>
          <p className="text-white  text-xl">
            <strong>R$ {total[0]},</strong>
            {total[1]}
          </p>
        </button>
      </div>
    </div>
  )
}

export default ModalMesas
