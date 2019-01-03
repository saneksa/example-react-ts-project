import * as React from 'react';
import { ICounterProps, ICounterState } from './Counter.d';
import {
  containerStyle,
  buttonsStyle,
  buttonsContainerStyle
} from './Counter.style';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { Add, Remove } from '@material-ui/icons';

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
          <Input value={this.props.value} disabled={this.props.disabled} />
        </div>
        <div className={`${buttonsContainerStyle}`}>
          <div className={`${buttonsStyle}`}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.increment}
            >
              <Add />
            </Button>
          </div>
          <div className={`${buttonsStyle}`}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.decrement}
            >
              <Remove />
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
