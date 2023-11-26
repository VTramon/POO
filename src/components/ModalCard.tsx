type ModalCardType = {
  dish: string
  order: number
  table: number
  onClick: () => void
}

const ModalCard = ({ props }: { props: ModalCardType }) => {
  return (
    <div className="w-[60%] flex  items-center px-4 my-4 h-10 rounded-xl bg-orange-300">
      <p className="flex-1 text-zinc-800">
        <strong>{props.dish}</strong>
      </p>
      <p className="mr-6 text-zinc-800">
        Nº pedido: <strong>{props.order}</strong>
      </p>
      <p className="mr-6 text-zinc-800">
        Mesa: <strong>{props.table}</strong>
      </p>
      <button onClick={props.onClick}>Finalizar</button>
    </div>
  )
}

export default ModalCard
