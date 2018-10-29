import {FormikBag, withFormik} from "formik";
import * as Yup from "yup";
import {WizardForm} from "./WizardForm";
import {IWizardFormFormValues, IWizardFormProps} from "./WizardForm.types";

export const handleSubmit = (values: IWizardFormFormValues, {setSubmitting,}: FormikBag<IWizardFormProps, IWizardFormFormValues>) => {
  setTimeout(() => {
    setSubmitting(false);

  }, 2000);
};


export const WizardFormContainer = withFormik<IWizardFormProps, IWizardFormFormValues>({
  displayName: 'WizardForm',
  handleSubmit,
  mapPropsToValues: (props: IWizardFormProps): IWizardFormFormValues => ({
    firstStep: {
      email: ''
    },
    secondStep: {
      firstName: ''
    },
    thirdStep: {
      lastName: ''
    },
  }),

  validationSchema: Yup.object().shape({
    firstStep: Yup.object().shape({
      email: Yup.string().email('Invalid email addres').required('Required'),
    }),
    secondStep: Yup.object().shape({
      firstName: Yup.string().min(3, 'Too short name').max(10, 'too logn').required('Required'),
    }),
    thirdStep: Yup.object().shape({
      lastName: Yup.string().min(3, 'Too short lastName').required('Required'),
    }),
  })
})(WizardForm)
