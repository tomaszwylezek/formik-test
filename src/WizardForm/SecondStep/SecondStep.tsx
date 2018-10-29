import {Field} from "formik";
import * as React from "react";
import {InputComponent} from "../../shared/InputComponent";


export const SecondStep = ({setPage, isValid}) => {
  return (
    <div>
      <Field component={InputComponent} name="secondStep.firstName" label="secondStep.firstName"/>
      <button disabled={isValid('secondStep')} onClick={() => setPage(3)}>
        Submit
      </button>
    </div>
  )
};
