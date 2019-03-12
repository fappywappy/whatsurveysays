import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from "react-router-dom";
import { rootStore, history } from './:root_store';
import Landing from './scene_landing';
import NoMatch from './scene_nomatch';
import './styles.scss';

render(
  <Provider store={rootStore}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={Landing} path="/" exact />
        <Route component={Landing} path="/correct" exact />
        <Route component={Landing} path="/wrong" exact />
        <Route component={Landing} path="/waiting" exact />
        <Route component={Landing} path="/survey" exact />
        <Route component={NoMatch} />
      </Switch>
    </ConnectedRouter>
  </Provider>, 
  document.getElementById('root')
);