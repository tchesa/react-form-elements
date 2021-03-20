import Form, { Field } from '../form'
import Button from '../button'
import schema, { Data as FormData } from './newsletter-form.schema'

const NewsletterForm = () => {
  const newUser = (user: FormData) => {
    console.log(user)
  }

  return (
    <Form schema={schema} onSubmit={newUser}>
      <Field.Input label="Name*" name="name" />
      <br />
      <Field.Input label="E-mail*" name="email" />
      <br />
      <Field.Input label="Gender (male/female)" name="gender" />
      <br />
      <Button>Submit</Button>
    </Form>
  )
}

export default NewsletterForm
