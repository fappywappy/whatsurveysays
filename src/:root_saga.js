import { all } from 'redux-saga/effects'
import { gameSagas } from 'service_game/sagas';

export default function* rootSaga() {
  yield all([
    ...gameSagas,
  ]);
}
