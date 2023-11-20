type ModalCardType = {
  dish: string
  order: number
  table: number
  onClick: () => void
}

const ModalCard = ({ props }: { props: ModalCardType }) => {
  return (
    <div>
      <p>{props.dish}</p>
      <p>{props.order}</p>
      <p>{props.table}</p>
      <button onClick={() => onclick}>Finalizar</button>
    </div>
  )
}

export default ModalCard
