import target from '../src/UtilFunctions/Target/target';

describe('target()', () => {
  test('returns correct target calories deficit', () => {
    let selectedTarget = 'deficit';
    let maintenance = 2000;
    expect(target(selectedTarget, maintenance)).toBe(1500);
  });
  test('returns correct target calories surplus', () => {
    let selectedTarget = 'surplus';
    let maintenance = 2000;
    expect(target(selectedTarget, maintenance)).toBe(2500);
  });
  test('returns correct target calories maintenance', () => {
    let selectedTarget = 'maintenance';
    let maintenance = 2000;
    expect(target(selectedTarget, maintenance)).toBe(2000);
  });
});
