import getPlayers from '../lib/getPlayers';

export const setPlayers = (data) => ({
  type: 'SET_PLAYERS',
  payload: data
});

export const loadInitialPlayers = () => ((dispatch) => {
  getPlayers()
    .then((response) => response.json())
    .then((data) => dispatch(setPlayers(data)));
});

export const filterPlayers = (filter) => ({
  type: 'FILTER_PLAYERS',
  payload: { name: filter.name, position: filter.position, age: filter.age }
});
