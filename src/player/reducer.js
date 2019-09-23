import getPositions from '../common/selectors/getPositions';
import getFilteredPlayers from '../common/selectors/getFilteredPlayers';

const initialState = {
  wholeData: [],
  dataFiltered: [],
  positions: []
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'SET_PLAYERS':
      return {
        wholeData: payload,
        dataFiltered: payload,
        positions: getPositions(payload)
      };
    case 'FILTER_PLAYERS':
      return {
        ...state,
        dataFiltered: getFilteredPlayers(state.wholeData,
          { name: payload.name, position: payload.position, age: payload.age })
      };
    default:
      return state;
  }
};

export default reducer;
