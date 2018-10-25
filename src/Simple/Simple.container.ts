import {FormikBag, withFormik} from "formik";
import * as Yup from "yup";
import { Simple} from "./Simple";
import {ISimpleFormValues, ISimpleProps} from "./Simple.types";


export const SimpleContainer =  withFormik<ISimpleProps, ISimpleFormValues>({
  displayName: 'SimpleForm',
  handleSubmit: (values: ISimpleFormValues, {setSubmitting, }: FormikBag<ISimpleProps, ISimpleFormValues>): void => {
    setTimeout(() => {
      console.log({values});
      setSubmitting(false);

    }, 2000);
  },
  mapPropsToValues: (props: ISimpleProps): ISimpleFormValues => ({
    email: ''
  }),
  // validate: (values: IFormHomeValues): FormikErrors<IFormHomeValues> => {
  //   const errors: FormikErrors<IFormHomeValues> = {};
  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (/\S+@\S+\.\S+/.test(values.email)) {
  //     errors.email = 'Invalid email addres';
  //   }
  //   return errors;
  // }, OR
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email addres').required('Required'),
  })
})(Simple)
