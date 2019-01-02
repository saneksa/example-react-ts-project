import { Store } from 'redux';
import { IStoreCounter } from '../../containers/CounterPage/CounterPage.d';

export const getCount = (state: IStoreCounter) => state.counter.count;
