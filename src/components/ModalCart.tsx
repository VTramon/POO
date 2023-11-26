import { ModalContext } from '@/contexts/ModalContext'
import { PedidoContext } from '@/contexts/PedidosContext'
import { useContext } from 'react'
import CartCard from './CartCard'
import { OrderContext } from '@/contexts/OrderContext'
import { X } from 'lucide-react'
import { pratos } from '@/utils'

const ModalCart = () => {
  //   const pedidos = getPedidos()

  // const total = getTotal().toFixed(2).toString().split('.')

  const handleList = () => {
    const names = list
    const data = []

    for (let index = 0; index < pratos.length; index++) {
      const item = pratos[index]

      if (names.findIndex((el) => el.name == item.name) != -1) {
        data.push(
          <CartCard
            props={{
              name: item.name,
              id: item.id,
              qtd: list.filter((i) => i.name == item.name).length,
              value: item.value,
              img: item.img,
            }}
          />
        )
        names.filter(
          (_, index) => index == names.findIndex((el) => el.name == item.name)
        )
      }
    }
    return data
  }

  const { handleMesa, mesa, mesaId, handleCart } = useContext(ModalContext)
  const { getTotal, list, rmItem, addItem, sendOrder, clear } =
    useContext(OrderContext)

  const handleSubmitOrder = () => {
    sendOrder(mesaId)
    clear()
    handleMesa(mesaId)
    handleCart()
  }
  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 flex justify-center items-center overflow-hidden z-10"
      onClick={() => handleCart()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center items-center relative w-5/6 h-5/6 bg-slate-100 rounded-3xl overflow-scroll"
      >
        <button
          className="absolute top-0 right-0 w-9 h-9 mr-4 mt-4"
          onClick={() => handleCart()}
        >
          <X width={36} height={36} />
        </button>
        <h2 className="text-3xl mb-4">Carrinho</h2>

        {handleList()}

        <button onClick={handleSubmitOrder}>Enviar pedido</button>
      </div>
    </div>
  )
}

export default ModalCart
