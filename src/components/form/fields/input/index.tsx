import { useContext } from 'react'
import styled from 'styled-components'

import Label from '../label'
import { InputFieldProps } from '../types'
import Context from '../../form.context'

const InputField = styled.input``

const Input = ({ label, name, ...inputProps }: InputFieldProps) => {
  const { errors, register } = useContext(Context)

  return (
    <>
      <Label>{label}</Label>
      <InputField name={name} ref={register} {...inputProps} />
      {errors?.[name]?.message}
    </>
  )
}

export default Input
