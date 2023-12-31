import { Minus, Plus } from 'lucide-react'

type CardButtonProps = {
  onClick: () => void
  type: 'minus' | 'plus'
}

export const CardButton = ({ props }: { props: CardButtonProps }) => {
  return (
    <button
      className={
        props.type == 'minus'
          ? 'h-min bg-orange-500 rounded-full  p-[3px] mr-2'
          : 'h-min bg-orange-500 rounded-full  p-[3px] ml-2'
      }
      onClick={props.onClick}
    >
      {props.type == 'minus' ? (
        <Minus color="white" strokeWidth={4} size={20} />
      ) : (
        <Plus color="white" strokeWidth={4} size={20} />
      )}
    </button>
  )
}
