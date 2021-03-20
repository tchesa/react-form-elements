import { forwardRef } from 'react'
import styled from 'styled-components'

import Label from '../label'
import { InputFieldProps } from '../types'

const InputField = styled.input``

const Input = forwardRef<HTMLInputElement, InputFieldProps>(({ label, ...inputProps }, ref) => (
  <>
    <Label>{label}</Label>
    <InputField ref={ref} {...inputProps} />
  </>
))

export default Input
