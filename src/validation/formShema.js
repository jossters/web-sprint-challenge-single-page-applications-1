import * as yup from 'yup';

export default yup.object().shape({
  name: yup
    .string()
    .required('Name is required.')
    .min(2, 'Name must be longer than 2 characters'),
  size: yup
    .string()
    .oneOf(['xtrasmall','small', 'medium', 'large'], 'Please select size'),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  pineapple: yup.boolean(),
  onions: yup.boolean(),
  chicken: yup.string(),
  special: yup.string(),
});
