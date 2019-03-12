import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './:root_reducer';
import rootSaga from './:root_saga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const rootStore = createStore(
  createRootReducer(history), // root reducer with router state
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(rootSaga)
