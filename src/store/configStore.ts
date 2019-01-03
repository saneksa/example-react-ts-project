import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { createBrowserHistory } from 'history';
import reduxLogger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducer';

export const history = createBrowserHistory();

const enhancerDev: StoreEnhancer = compose(
  applyMiddleware(routerMiddleware(history), reduxPromise, reduxThunk, reduxLogger),
  devToolsEnhancer({})
);

const enhancerProd = compose(
  applyMiddleware(routerMiddleware(history), reduxPromise, reduxThunk)
);

export default function configStore() {
  const env = process.env.NODE_ENV;
  const devMode = env === 'development';

  return createStore(rootReducer(history), devMode ? enhancerDev : enhancerProd);
}
