import { Minus, Plus } from 'lucide-react'

type CartButtonProps = {
  add: () => void
  remove: () => void
  qtd: number
}

export const CartButton = ({ props }: { props: CartButtonProps }) => {
  return (
    <div className="flex w-20 h-5">
      <button
        className={
          'flex justify-center items-center h-5 w-5 bg-zinc-500 rounded-sm'
        }
        onClick={props.remove}
      >
        <Minus color="white" strokeWidth={6} size={16} />
      </button>
      <div className="bg-zinc-300 w-10 text-center">{props.qtd}</div>

      <button
        className={
          'flex justify-center items-center h-5 w-5 bg-orange-500 rounded-sm'
        }
        onClick={props.add}
      >
        <Plus color="white" strokeWidth={6} size={16} />
      </button>
    </div>
  )
}
