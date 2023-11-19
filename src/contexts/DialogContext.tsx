'use client'
import { ReactNode, createContext, useState } from 'react'

export type DialogContextType = {
  view: 'client' | 'store'
  setView: () => void
}

export const DialogContext = createContext({} as DialogContextType)

export const DialogContexProvider = ({ children }: { children: ReactNode }) => {
  const [dialog, setDialog] = useState<'client' | 'store'>('client')

  const setView = () => {
    dialog == 'client' ? setDialog('store') : setDialog('client')
  }

  return (
    <DialogContext.Provider value={{ view: dialog, setView: setView }}>
      {children}
    </DialogContext.Provider>
  )
}
