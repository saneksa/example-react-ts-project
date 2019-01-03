import react from 'react';
import enzyme, { mount, shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import Counter from './Counter';

enzyme.configure({ adapter: new enzymeAdapterReact16() });

describe('<Counter />', () => {
  test('Counter отрисовывается', () => {
    const wrapper = mount(
      <Counter value={5} increment={() => null} decrement={() => null} />
    );
    console.log(wrapper.debug());
  });
});
