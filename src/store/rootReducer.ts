import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { counter } from './CountStore/reducers';
import { History } from 'history';

export default (history: History) =>
  combineReducers({
    counter,
    router: connectRouter(history)
  });
