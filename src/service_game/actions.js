import { createAction } from 'redux-actions';
import Action from 'action_types';

export const startGame = createAction(Action.START_GAME);
export const initSurvey = createAction(Action.INIT_SURVEY);
export const getResults = createAction(Action.GET_RESULTS, (selected) => ({ selected }));
export const continueGame = createAction(Action.CONTINUE_GAME);
export const incrementScore = createAction(Action.INCREMENT_SCORE);

 