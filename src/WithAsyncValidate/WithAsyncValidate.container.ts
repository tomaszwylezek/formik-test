import {FormikBag, FormikErrors, withFormik} from "formik";
import {connect} from "react-redux";
import {compose} from "redux";
import {loadPosts} from "../reducers/form/actions";
import {WithAsyncValidate} from "./WithAsyncValidate";
import {IWithAsyncValidateFormValues, IWithAsyncValidateProps} from "./WithAsyncValidate.types";


export const WithAsyncValidateContainer = compose(
  connect(null, {loadPosts}),
  withFormik<IWithAsyncValidateProps, IWithAsyncValidateFormValues>({
    displayName: 'HomeFotm',
    handleSubmit: (values: IWithAsyncValidateFormValues, {setSubmitting, props, setErrors}: FormikBag<IWithAsyncValidateProps, IWithAsyncValidateFormValues>) => {


      props.loadPosts().then((valuess): any => {
        console.log({valuess});

        setErrors({
          email: 'sorry mate'
        });

        setSubmitting(false);
      });
    },
    mapPropsToValues: (props: IWithAsyncValidateProps): IWithAsyncValidateFormValues => ({
      email: ''
    }),
    validate: (values: IWithAsyncValidateFormValues): FormikErrors<IWithAsyncValidateFormValues> => {
      const errors: FormikErrors<IWithAsyncValidateFormValues> = {};
      if (values.email !== 'xdd') {
        errors.email = 'Invalid email addres';
      }
      return errors;
    }
  })
)(WithAsyncValidate)
