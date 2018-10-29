import {Field} from "formik";
import * as React from "react";
import {InputComponent} from "../../shared/InputComponent";


export const ThirdStep = ({setPage, isValid}) => {
  return (
    <div>
      <Field component={InputComponent} name="thirdStep.lastName" label="thirdStep.lastName"/>
      <button disabled={isValid('thirdStep')} onClick={() => setPage(1)}>
        Submit
      </button>
    </div>
  )
};
