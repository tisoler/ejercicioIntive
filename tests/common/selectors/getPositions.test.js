/* eslint-disable quotes */
/* eslint-disable quote-props */
import getPositions from '../../../src/common/selectors/getPositions';

const playerData = [
  {
    contractUntil: '2022-06-30',
    dateOfBirth: '1993-05-13',
    jerseyNumber: 9,
    name: 'Romelu Lukaku',
    nationality: 'Belgium',
    position: 'Centre-Forward'
  }, {
    contractUntil: '2019-06-30',
    dateOfBirth: '1990-11-07',
    jerseyNumber: 1,
    name: 'David de Gea',
    nationality: 'Spain',
    position: 'Keeper'
  }, {
    contractUntil: '2021-06-30',
    dateOfBirth: '1987-02-22',
    jerseyNumber: 20,
    name: 'Sergio Romero',
    nationality: 'Argentina',
    position: 'Keeper'
  }, {
    contractUntil: '2020-06-30',
    dateOfBirth: '1994-04-12',
    jerseyNumber: 3,
    name: 'Eric Bailly',
    nationality: "Cote d'Ivoire",
    position: 'Centre-Back'
  }
];

test('Retrieve different positions', () => {
  expect(getPositions(playerData)).toStrictEqual([
    { "id": "Centre-Back", "name": "Centre-Back" },
    { "id": "Centre-Forward", "name": "Centre-Forward" },
    { "id": "Keeper", "name": "Keeper" }
  ]);
});
