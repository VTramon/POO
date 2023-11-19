import { useContext } from 'react'
import DialogCard from './DialogCard'
import { OrderContext } from '@/contexts/OrderContext'

const DialogScreen = () => {
  const { list, rmOrder } = useContext(OrderContext)

  const handleList = () => {
    const data = []

    for (let index = 0; index < list.length; index++) {
      const item = list[index]
      // data.push(<DialogCard props={{dish: item.name, order: item.id, table: 1, onClick: () => }} />)
    }
  }

  return (
    <div className="absolute top-14 bottom-14 left-14 right-14">
      {/* <DialogCard props={{}} /> */}
    </div>
  )
}

export default DialogScreen
