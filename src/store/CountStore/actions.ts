import { DECREMENT, INCREMENT } from './actionsTypes';

export const increment = (payload: number) => ({
  payload,
  type: INCREMENT
});
export const decrement = (payload: number) => ({
  payload,
  type: DECREMENT
});
