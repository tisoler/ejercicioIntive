
export default function getPlayers() {
  return fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty');
}
