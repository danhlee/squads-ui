// action types
export const SET_ROSTER = 'SET_ROSTER';
export const SET_ROSTER_IDS = 'SET_ROSTER_IDS';
export const SET_MODEL_EVAL_DATA = 'SET_MODEL_EVAL_DATA';

// Action Creators
export function setRoster(payload) {
  return { type: SET_ROSTER, payload }
}
export function setRosterIds(payload) {
  return { type: SET_ROSTER_IDS, payload }
}
export function setModelEvalData(payload) {
  return { type: SET_MODEL_EVAL_DATA, payload }
}


export const mapStateToProps = (state) => {
  return {
    roster: state.squadsReducer.roster,
    rosterIds: state.squadsReducer.rosterIds,
    modelEvalData: state.squadsReducer.modelEvalData
  }
}

export const mapDispatchToProps = {
  setRoster,
  setRosterIds,
  setModelEvalData
}