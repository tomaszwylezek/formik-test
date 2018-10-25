import * as React from "react";

import {Field, FormikProps } from 'formik';
import {InputComponent} from "../shared/InputComponent";
import {ISimpleFormValues, ISimpleProps} from "./Simple.types";


export class Simple extends React.Component<ISimpleProps & FormikProps<ISimpleFormValues>, {}> {
  public render() {

    const {
      dirty,
      isSubmitting,
      handleSubmit,
      handleReset,
    } = this.props;

    return (
      <div>
        <h1>Simple form</h1>
        <form onSubmit={handleSubmit}>
          <Field component={InputComponent} name="email" label="email"/>
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
      </div>
    )
  }
}
