import BMRCalculator from '../src/UtilFunctions/BMRCalculator';

describe('BMRCalculator()', () => {
  test('returns correct BMR male', () => {
    let sex = 'male';
    let weight = 182;
    let height = 68;
    let age = 29;
    expect(BMRCalculator(sex, weight, height, age)).toBe(1866);
  });
  test('returns correct BMR female', () => {
    let sex = 'female';
    let weight = 182;
    let height = 68;
    let age = 29;
    expect(BMRCalculator(sex, weight, height, age)).toBe(1621);
  });
});
