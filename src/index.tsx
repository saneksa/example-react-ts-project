import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import configStore, { history } from './store/configStore';
import { ConnectedRouter } from 'connected-react-router';
import CounterPage from './containers/CounterPage/CounterPage';

const store = configStore();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={CounterPage} />
          <Route path="*" render={() => <div>Страница не найдена</div>} />
        </Switch>
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
