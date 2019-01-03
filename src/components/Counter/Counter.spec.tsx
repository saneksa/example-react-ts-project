import * as React from 'react';
import enzyme, { mount } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import Counter from './Counter';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

enzyme.configure({ adapter: new enzymeAdapterReact16() });

const mockProps = {
  value: 5,
  increment: () => null,
  decrement: () => null
};

describe('<Counter />', () => {
  test('Counter отрисовывается', () => {
    const wrapper = mount(<Counter {...mockProps} />);
    expect(wrapper.find(Counter).prop('value')).toEqual(mockProps.value);
  });

  test('Все компоненты Counter отрисовываются', () => {
    const wrapper = mount(<Counter {...mockProps} />);
    expect(wrapper.find(Button).length).toEqual(2);
    expect(wrapper.find(Input).length).toEqual(1);
  });

  test('Клик по кнопкам обрабатывается', () => {
    mockProps.increment = jest.fn();
    mockProps.decrement = jest.fn();

    const wrapper = mount(<Counter {...mockProps} />);
    wrapper
      .find(Button)
      .first()
      .simulate('click');
    wrapper
      .find(Button)
      .last()
      .simulate('click');

    expect(mockProps.increment).toHaveBeenCalledTimes(1);
    expect(mockProps.decrement).toHaveBeenCalledTimes(1);
  });
});
