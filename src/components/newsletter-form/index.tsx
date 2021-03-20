import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Form, { Field } from '../form'
import Button from '../button'

type User = {
  name: string,
  email: string
}

const schema: yup.SchemaOf<User> = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required()
})

const NewsletterForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  const newUser = (user: User) => {
    console.log(user)
  }

  return (
    <Form onSubmit={handleSubmit<User>(newUser)}>
      <Field.Input label="Name" name="name" ref={register} />
      {errors.name?.message}
      <Field.Input label="E-mail" name="email" ref={register} />
      {errors.email?.message}
      <Button>Submit</Button>
    </Form>
  )
}

export default NewsletterForm
