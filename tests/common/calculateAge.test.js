import calculateAge from '../../src/common/calculateAge';

test('caculate age from birthdate', () => {
  expect(calculateAge('1983-02-22')).toBe(36);
});
