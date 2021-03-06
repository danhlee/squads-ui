import {
  SET_ROSTER,
  SET_ROSTER_IDS,
  SET_MODEL_EVAL_DATA
} from './actionCreators'

const initialState = {
  roster: {
    b_top: '',
    b_jung: '',
    b_mid: '',
    b_bot: '',
    b_sup: '',
    r_top: '',
    r_jung: '',
    r_mid: '',
    r_bot: '',
    r_sup: ''
  },
  rosterIds: {
    b_top: '0',
    b_jung: '0',
    b_mid: '0',
    b_bot: '0',
    b_sup: '0',
    r_top: '0',
    r_jung: '0',
    r_mid: '0',
    r_bot: '0',
    r_sup: '0'
  },
  modelEvalData: {
    avgAccuracy: 0,
    confusionMatrix: ['','','',''],
    modelName: ''
  }
}

function squadsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROSTER:
      console.log('SET_ROSTER payload is ...');
      console.log(action.payload);

      return Object.assign({}, state, {
        roster: Object.assign({}, state.roster, action.payload)
      });
    case SET_ROSTER_IDS:
      console.log('SET_ROSTER_IDS payload is ...');
      console.log(action.payload);

      return Object.assign({}, state, {
        rosterIds: Object.assign({}, state.rosterIds, action.payload)
      });
    case SET_MODEL_EVAL_DATA:
      console.log('SET_MODEL_EVAL_DATA payload is ...');
      console.log(action.payload);

      return Object.assign({}, state, {
        modelEvalData: Object.assign({}, state.modelEvalData, action.payload)
      });
  }

  return state;
}

export default squadsReducer;