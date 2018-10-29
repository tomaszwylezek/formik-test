import {Field} from "formik";
import * as React from "react";
import {InputComponent} from "../../shared/InputComponent";


export const FirstStep = ({setPage, isValid}) => {
  return (
    <div>
      <Field component={InputComponent} name="firstStep.email" label="firstStep.email"/>
      <button disabled={isValid('firstStep')} onClick={() => setPage(2)}>
        Submit
      </button>
    </div>
  )
};
