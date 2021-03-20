import { useForm } from 'react-hook-form'

import Form, { Field } from '../form'
import Button from '../button'

const NewsletterForm = () => {
  const { register, handleSubmit  } = useForm()

  const newUser = (user) => {
    console.log(user)
  }

  return (
    <Form onSubmit={handleSubmit(newUser)}>
      <Field.Input label="name" name="name" ref={register} />
      <Field.Input label="name" name="email" type="email" ref={register} />
      <Button>Submit</Button>
    </Form>
  )
}

export default NewsletterForm
