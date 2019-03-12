import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import gameReducers from 'service_game/reducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  game: gameReducers,
});
