import * as React from "react";
import * as Yup from 'yup';

import {Field, Formik, FormikProps,} from 'formik';
import {InputComponent} from "../shared/InputComponent";
import {ISimpleWithRenderProps, ISimpleWithRenderPropsFormValues} from "./SimpleWithRenderProps.types";


export class SimpleWithRenderProps extends React.Component<ISimpleWithRenderProps> {
  public render() {
    return (
      <div>
        <h1>SimpleWithRenderProps form</h1>
        <Formik
          onSubmit={(_: ISimpleWithRenderPropsFormValues, props: FormikProps<ISimpleWithRenderPropsFormValues>) => {
            setTimeout(() => {
              console.log({_});
              props.setSubmitting(false);

            }, 2000);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email addres').required('Required'),
            name: Yup.string().min(3, 'too short').required('Required'),
          })}
          initialValues={{
            email: '',
            name: ''
          }}
          render={({handleReset, handleSubmit, dirty, isSubmitting}: FormikProps<ISimpleWithRenderPropsFormValues>) => (
            <form onSubmit={handleSubmit}>
              <Field component={InputComponent} name="email" label="email"/>
              <Field component={InputComponent} name="name" label="name"/>
              <button
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </button>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        />
      </div>
    )
  }
}
