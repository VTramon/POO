import { ButtonHTMLAttributes } from 'react'

type TotalButtonProps = {
  itens: number
  value: string
}

const TotalButton = ({
  dataProps,
  buttonProps,
}: {
  dataProps: TotalButtonProps
  buttonProps: ButtonHTMLAttributes<HTMLButtonElement>
}) => {
  return (
    <button onClick={buttonProps.onClick}>
      <p>{dataProps.itens} itens</p>
      <p>R$ {dataProps.value}</p>
    </button>
  )
}

export default TotalButton
