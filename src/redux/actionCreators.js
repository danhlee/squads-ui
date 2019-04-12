// action types
export const SET_ROSTER = 'SET_ROSTER';
export const SET_ROSTER_IDS = 'SET_ROSTER_IDS';

// Action Creators
export function setRoster(payload) {
  return { type: SET_ROSTER, payload }
}
export function setRosterIds(payload) {
  return { type: SET_ROSTER_IDS, payload }
}




export const mapStateToProps = (state) => {
  return {
    roster: state.squadsReducer.roster,
    rosterIds: state.squadsReducer.rosterIds
  }
}

export const mapDispatchToProps = {
  setRoster,
  setRosterIds
};