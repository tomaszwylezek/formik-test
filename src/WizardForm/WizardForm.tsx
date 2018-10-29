import * as React from "react";

import {FormikProps } from 'formik';
import {FirstStep} from "./FirstStep/FirstStep";
import {SecondStep} from "./SecondStep/SecondStep";
import {ThirdStep} from "./ThirdStep/ThirdStep";
import {IWizardFormFormValues, IWizardFormProps, IWizardFormState} from "./WizardForm.types";


export class WizardForm extends React.Component<IWizardFormProps & FormikProps<IWizardFormFormValues>, IWizardFormState> {

  public state = {
    page: 1
  };

  public renderPage(page) {
    switch (page) {
      case 1:
        return <FirstStep setPage={this.setPage} isValid={() => {console.log()}} />;
      case 2:
        return <SecondStep setPage={this.setPage} isValid={() => {console.log()}} />;
      case 3:
        return <ThirdStep setPage={this.setPage} isValid={() => {console.log()}} />;
      default:
        return null;
    }
  }

  public setPage = (page) => {
    this.setState({
      page
    })
  }

  public render() {

    const {
      dirty,
      isSubmitting,
      handleSubmit,
      handleReset,
      isValid
    } = this.props;

    return (
      <div>
        <h1>WizardForm form</h1>
        <form onSubmit={handleSubmit}>
          {
            this.renderPage(this.state.page)
          }
          <button
            type="button"
            className="outline"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button type="submit" disabled={isSubmitting || !isValid}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}
