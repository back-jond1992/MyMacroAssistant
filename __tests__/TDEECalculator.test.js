import TDEECalculator from '../src/UtilFunctions/TDEECalculator/TDEECalculator';

describe('TDEECalculator()', () => {
  test('returns correct TDEE', () => {
    let option = {option: 'little to no exercise and work a desk job'};
    expect(TDEECalculator(option)).toBe(1.2);
  });
  test('returns correct TDEE', () => {
    let option = {option: 'light exercise 1-3 days per week'};
    expect(TDEECalculator(option)).toBe(1.375);
  });
  test('returns correct TDEE', () => {
    let option = {option: 'moderate exercise 3-5 days per week'};
    expect(TDEECalculator(option)).toBe(1.55);
  });
  test('returns correct TDEE', () => {
    let option = {option: 'heavy exercise 6-7 days per week'};
    expect(TDEECalculator(option)).toBe(1.725);
  });
  test('returns correct TDEE', () => {
    let option = {option: 'strenuous training 2 times a day'};
    expect(TDEECalculator(option)).toBe(1.9);
  });
});
