type DialogCardType = {
  dish: string
  order: number
  table: number
  onClick: () => void
}

const DialogCard = ({ props }: { props: DialogCardType }) => {
  return (
    <div>
      <p>{props.dish}</p>
      <p>{props.order}</p>
      <p>{props.table}</p>
      <button onClick={() => onclick}>Finalizar</button>
    </div>
  )
}

export default DialogCard
