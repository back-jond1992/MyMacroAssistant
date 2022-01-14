const target = (selectedTarget, maintenance) => {
  let target;

  if (selectedTarget === 'deficit') {
    target = maintenance - 500;
  } else if (selectedTarget === 'surplus') {
    target = maintenance + 500;
  } else {
    target = maintenance;
  }

  return Math.round(target);
};

export default target;
