import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Required'),
  name: Yup.object().shape({
    first: Yup.string().required('Required'),
    last: Yup.string().required('Required')
  }),
  password: Yup.string().required('Required')
});
