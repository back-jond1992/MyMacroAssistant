import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  weight: yup.number().required().typeError('This field must contain a number'),
  height: yup.number().required().typeError('This field must contain a number'),
  age: yup.number().required().typeError('This field must contain a number'),
  sex: yup.string().required(),
  BMR: yup.number().required(),
  TDEE: yup.number().required(),
  maintenance: yup.number().required(),
  target: yup.number().required(),
});

export default validationSchema;
