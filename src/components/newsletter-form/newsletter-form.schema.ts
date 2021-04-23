import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().default('').min(2).required(),
  email: yup.string().default('').email().required(),
  gender: yup.string()
})

export type Data = yup.TypeOf<typeof schema>

export default schema
