import calculateAge from '../calculateAge';

export default function getFilteredPlayers(playersData, filters) {
  return playersData.filter((player) => (
    player.name.toLowerCase().includes(filters.name.trim().toLowerCase())
    && (filters.position.trim() === '' || player.position.trim().toLowerCase() === filters.position.trim().toLowerCase())
    && (filters.age.trim() === '' || calculateAge(player.dateOfBirth) === parseInt(filters.age, 10))));
}
