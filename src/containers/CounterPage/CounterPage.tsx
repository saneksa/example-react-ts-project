import * as React from 'react';
import Counter from '../../components/Counter/Counter';
import { ICounterPageProps, ICounterPageState, IStoreCounter } from './CounterPage.d';
import connectComponents from '../../decoraters/connectComponents';
import * as selectors from '../../store/CountStore/selectors';
import { Dispatch } from 'redux';
import * as actions from '../../store/CountStore/actions';
import { containerCounter } from './CounterPage.style';

class CounterPage extends React.PureComponent<ICounterPageProps, ICounterPageState> {
  constructor(props: ICounterPageProps) {
    super(props);
  }

  static mapStateToProps = (state: IStoreCounter) => {
    return {
      count: selectors.getCount(state)
    };
  };

  static mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: (value: number) => dispatch(actions.increment(value)),
    decrement: (value: number) => dispatch(actions.decrement(value))
  });

  incrementClick = () => {
    this.props.increment(1);
  };

  decrementClick = () => {
    this.props.decrement(1);
  };

  render() {
    return (
      <div className={`${containerCounter}`}>
        <Counter
          value={this.props.count}
          increment={this.incrementClick}
          decrement={this.decrementClick}
        />
      </div>
    );
  }
}

export default connectComponents(CounterPage);
