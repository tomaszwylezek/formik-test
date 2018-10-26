import {FormikBag} from "formik";
import {getMockedFormikActions} from "../testUtils/formik";
import {handleSubmit, validate} from "./WithAsyncValidate.container";
import {IWithAsyncValidateFormValues, IWithAsyncValidateProps} from "./WithAsyncValidate.types";

describe('It will test WithAsyncValidate.container container functions', (): void => {

  it('test handleSubmit', async () => {
    const formikBag: FormikBag<IWithAsyncValidateProps, IWithAsyncValidateFormValues> = {
      ...getMockedFormikActions(),
      props: {
        loadPosts: (): Promise<never[]> => Promise.resolve([]),
      }
    };

    await handleSubmit(
      {email: ''},
      formikBag
    );

    expect(formikBag.setErrors).toHaveBeenCalledWith({"email": "sorry mate"});
    expect(formikBag.setSubmitting).toHaveBeenCalledWith(false);
  });

  it('test handleSubmit with error', async () => {
    const formikBag: FormikBag<IWithAsyncValidateProps, IWithAsyncValidateFormValues> = {
      ...getMockedFormikActions(),
      props: {
        loadPosts: (): Promise<never[]> => Promise.reject({}),
      }
    };

    await await handleSubmit(
      {email: ''},
      formikBag
    );

    expect(formikBag.setErrors).toHaveBeenCalled();
  });

  it('test validate when email empty', (): void => {
    expect(validate({email: ''})).toEqual({"email": "Invalid email addres"});
  });

  it('test validate when email equal to xdd', (): void => {
    expect(validate({email: 'xdd'})).toEqual({});
  })
});
