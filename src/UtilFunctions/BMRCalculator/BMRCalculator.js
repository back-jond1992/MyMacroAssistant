const BMRCalculator = (sex, weight, height, age) => {
  let BMR;

  if (sex === 'male') {
    BMR = 66 + 6.23 * weight + 12.7 * height - 6.8 * age;
  }
  if (sex === 'female') {
    BMR = 655 + 4.3 * weight + 4.7 * height - 4.7 * age;
  }

  return Math.round(BMR);
};

export default BMRCalculator;
