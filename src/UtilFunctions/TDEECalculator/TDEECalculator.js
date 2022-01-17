const TDEECalculator = option => {
  let TDEE;

  if (option === 'little to no exercise and work a desk job') {
    TDEE = 1.2;
  }
  if (option === 'light exercise 1-3 days per week') {
    TDEE = 1.375;
  }
  if (option === 'moderate exercise 3-5 days per week') {
    TDEE = 1.55;
  }
  if (option === 'heavy exercise 6-7 days per week') {
    TDEE = 1.725;
  }
  if (option === 'strenuous training 2 times a day') {
    TDEE = 1.9;
  }
  return TDEE;
};

export default TDEECalculator;
