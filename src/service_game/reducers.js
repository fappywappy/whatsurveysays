import Action from 'action_types';

const initialState = {
  score: 0,
  finalScore: 0,
};

const socketConnectionReducers = (state = initialState, action) => {
  let {score } = state;
  switch (action.type) {
    case Action.INCREMENT_SCORE:
      score++;
      return { ...state, 
        score
      }
    case Action.GAME_OVER:
      let finalScore = score;
      return { ...state, 
        finalScore
      }
    case Action.RESET_SCORE:
      score = 0;
      return { ...state, 
        score
      }
    default:
      return state;
  }
};

export default socketConnectionReducers;