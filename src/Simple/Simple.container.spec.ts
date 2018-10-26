import {FormikBag} from "formik";
import {getMockedFormikActions} from "../testUtils/formik";
import {handleSubmit} from "./Simple.container";
import {ISimpleFormValues, ISimpleProps} from "./Simple.types";

describe('It will test WithAsyncValidate.container container functions', (): void => {

  jest.useFakeTimers();

  it('test handleSubmit', () => {
    const formikBag: FormikBag<ISimpleProps, ISimpleFormValues> = {
      ...getMockedFormikActions(),
      props: {}
    };

    handleSubmit(
      {email: ''},
      formikBag
    );

    jest.runAllTimers();

    expect(formikBag.setSubmitting).toHaveBeenCalledWith(false);
  });
});
