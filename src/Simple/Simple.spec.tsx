import {shallow} from "enzyme";
import * as React from 'react';
import {Simple} from './Simple';
import {FormikProps} from "formik";
import {ISimpleFormValues} from "./Simple.types";
import {getMockedFormikConfig} from "../testUtils/formik";

describe('Simple component', () => {
  it('should have basic snapshoot', () => {
    const options: FormikProps<ISimpleFormValues> = getMockedFormikConfig<ISimpleFormValues>({
      errors: {
        email: ''
      },
      initialValues: {
        email: ''
      },
      touched: {
        email: false
      },
      values: {
        email: ''
      },
    });

    const component = shallow(<Simple {...options}/>);

    component.find('form').simulate('submit');
    expect(component).toMatchSnapshot();
  });
});
