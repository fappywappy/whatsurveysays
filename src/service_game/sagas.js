import { push } from 'connected-react-router'
import {
  //  delay,
   put,
  //  take, 
   takeLatest,
} from 'redux-saga/effects'
import Action from '../_action_types';

function* startGame() {
  console.log('startGame called');
  yield put(push('/survey'));
}

function* initSurvey() {
  yield console.log('initSurvey called');
}

function* getResults(selectedRadio) {
  console.log('getResults called');
  const payload = selectedRadio.payload;
  if (payload.selected === 'option1') {
    yield put({type: Action.INCREMENT_SCORE});
    yield put(push('/correct'));
  } else if (payload.selected === 'option2') {
    yield put({type: Action.GAME_OVER});
  } else 
    yield put({type: Action.GAME_OVER});
}

function* continueGame() {
  console.log('continueGame called');
  yield put(push('/survey'));
}

function* incrementScore() {
  yield console.log('incrementScore called');
}

function* gameOver() {
  console.log('gameOver called');
  yield put(push('/wrong'));
  yield put({type: Action.RESET_SCORE});
}

function* resetScore() {
  yield console.log('resetScore called');
}

export const gameSagas = [
   takeLatest(Action.START_GAME, startGame),
   takeLatest(Action.INIT_SURVEY, initSurvey),
   takeLatest(Action.GET_RESULTS, getResults),
   takeLatest(Action.CONTINUE_GAME, continueGame),
   takeLatest(Action.INCREMENT_SCORE, incrementScore),
   takeLatest(Action.GAME_OVER, gameOver),
   takeLatest(Action.RESET_SCORE, resetScore),
];
