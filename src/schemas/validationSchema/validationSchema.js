import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),

  weight: yup.string().required(),
  height: yup.string().required(),
  age: yup.string().required(),
  sex: yup.string().required(),
  BMR: yup.required(),
  TDEE: yup.required(),
  maintenance: yup.required(),
  target: yup.required(),
});

export default validationSchema;
