
export interface IWizardFormFormValues {
  firstStep:{
    email: string
  };
  secondStep:{
    firstName: string
  };
  thirdStep:{
    lastName: string
  };
}

export interface IWizardFormProps {}

export interface IWizardFormState {
  page: number;
}
