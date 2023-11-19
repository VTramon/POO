import { DialogContext, DialogContextType } from '@/contexts/DialogContext'
import { useContext } from 'react'

const DialogButton = () => {
  const { setView, view } = useContext(DialogContext)
  return (
    <button onClick={setView}>{view == 'client' ? 'Tablet' : 'Tela'}</button>
  )
}

export default DialogButton
