import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import Form, { Field } from '../form'
import Button from '../button'

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  gender: yup.string()
})

const NewsletterForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  const newUser = (user: yup.TypeOf<typeof schema>) => {
    console.log(user.name, user.email, user.gender)
  }

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Field.Input label="Name*" name="name" ref={register} />
      {errors.name?.message}<br />
      <Field.Input label="E-mail*" name="email" ref={register} />
      {errors.email?.message}<br />
      <Field.Input label="Gender (male/female)" name="gender" ref={register} />
      {errors.gender?.message}<br />
      <Button>Submit</Button>
    </Form>
  )
}

export default NewsletterForm
