import {shallow} from "enzyme";
import * as React from 'react';
import {Simple} from './Simple';

describe('Simple component', () => {
  it('should have basic snapshoot', () => {
    const mock = jest.fn();
    const component = shallow(<Simple handleSubmit={mock} values={{email: '' }}/>);

    component.find('form').simulate('submit');
    expect(component).toMatchSnapshot();
    expect(mock).toHaveBeenCalled();
  });
});
