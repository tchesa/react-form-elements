import { createContext } from 'react'
import { UseFormMethods } from 'react-hook-form'

const Context = createContext<Partial<UseFormMethods>>({})

export default Context
