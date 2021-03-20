import * as yup from 'yup'

export type Data = yup.TypeOf<typeof schema>

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  gender: yup.string()
})

export default schema
