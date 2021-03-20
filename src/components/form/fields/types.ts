import { InputHTMLAttributes } from 'react'

export interface FieldProps {
  label: string
}

export interface InputFieldProps extends FieldProps, InputHTMLAttributes<HTMLInputElement> {
  name: string
}
