import * as React from 'react';
import { ICounterProps, ICounterState } from './Counter.d';
import {
  containerStyle,
  buttonsStyle,
  buttonsContainerStyle,
  inputStyle
} from './Counter.style';
import { Input, Button, Icon } from 'antd';

class Counter extends React.PureComponent<ICounterProps, ICounterState> {
  constructor(props: ICounterProps) {
    super(props);
  }

  static defaultProps = {
    disabled: false
  };

  render() {
    return (
      <React.Fragment>
        <div className={`${containerStyle}`}>
          <Input
            value={this.props.value}
            className={inputStyle}
            disabled={this.props.disabled}
          />
        </div>
        <div className={`${buttonsContainerStyle}`}>
          <div className={`${buttonsStyle}`}>
            <Button type="primary" onClick={this.props.increment}>
              <Icon type="plus" />
            </Button>
          </div>
          <div className={`${buttonsStyle}`}>
            <Button type="primary" onClick={this.props.decrement}>
              <Icon type="minus" />
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
