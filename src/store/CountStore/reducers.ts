import { DECREMENT, INCREMENT } from './actionsTypes';
import { IActionCount } from './CountStore.d';

const initialState = { count: 0 };

export const counter = (state = initialState, action: IActionCount) => {
  switch (action.type) {
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload
      };
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      };
    default:
      return state;
  }
};
