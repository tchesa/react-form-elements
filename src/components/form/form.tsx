import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AnyObjectSchema, object, TypeOf } from 'yup'

import Context from './form.context'

export interface Props {
  children?: ReactNode
  onSubmit: (data: TypeOf<AnyObjectSchema>) => void
  schema?: AnyObjectSchema,
}

const Form = ({ children, onSubmit, schema = object() }: Props) => {
  const useFormAttributes = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <Context.Provider value={useFormAttributes}>
      <form onSubmit={useFormAttributes.handleSubmit(onSubmit)}>
        {children}
      </form>
    </Context.Provider>
  )
}

export default Form
