import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import Form, { Field } from '../form'
import Button from '../button'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  gender: z.string().optional()
})

type FormData = z.infer<typeof schema>

const NewsletterForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: zodResolver(schema),
  })

  const newUser = (user: FormData) => {
    console.log(user)
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
