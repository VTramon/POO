import { useContext } from 'react'
import { OrderContext } from '@/contexts/OrderContext'
import { ModalContext, ModalProps } from '@/contexts/ModalContext'
import { pratos } from '@/utils'
import DishCard from './DishCard'
import { PedidoContext } from '@/contexts/PedidosContext'
import ModalCard from './ModalCard'

const ModalScreen = () => {
  const { handleScreen } = useContext(ModalContext)
  const { getPedidos, removePedido } = useContext(PedidoContext)

  const pedidos = getPedidos()

  // const total = getTotal().toFixed(2).toString().split('.')

  const handleList = () => {
    const data = []

    for (let index = 0; index < pedidos.length; index++) {
      const item = pedidos[index]
      data.push(
        <ModalCard
          props={{
            dish: item.nome,
            order: item.pedido,
            table: item.mesa,
            onClick: () => removePedido(item.pedido),
          }}
        />
      )
    }
    return data
  }

  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 flex justify-center items-center overflow-hidden"
      onClick={() => handleScreen()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col justify-center items-center relative w-5/6 h-5/6 bg-slate-100 rounded-3xl overflow-scroll"
      >
        <h2>Lista de pedidos realizados</h2>

        {handleList()}
      </div>
    </div>
  )
}

export default ModalScreen
