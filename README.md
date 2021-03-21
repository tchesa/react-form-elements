# React Form Elements

A simple project describing a pattern to use forms in React.

## Dependencies

- [React](https://github.com/facebook/react)
- [Typescript](typescriptlang.org)
- [React Hook Form](https://github.com/react-hook-form/react-hook-form)
- [Yup](https://github.com/jquense/yup)

## Proposal

- [x] [Simplify the usage of resolvers](#simplify-the-usage-of-resolvers)
- [ ] Improve Form's schema & onSubmit types

### Simplify the usage of resolvers

Turn this

```tsx
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  gender: yup.string(),
});

const MyForm = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data: FormData) => {
    // console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Field.Input label="Name" name="name" ref={register} />
      {errors.name?.message}
      <Field.Input label="E-mail" name="email" ref={register} />
      {errors.email?.message}
      <Button>Submit</Button>
    </Form>
  );
};
```

into this

```tsx
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
});

const MyForm = () => {
  const handleSubmit = (data: FormData) => {
    // console.log(data)
  };

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Field.Input label="Name" name="name" />
      <Field.Input label="E-mail" name="email" />
      <Button>Submit</Button>
    </Form>
  );
};
```

## How to run

- `yarn`
- `yarn start`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
