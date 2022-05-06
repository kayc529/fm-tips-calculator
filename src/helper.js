export const isValidNumOfPeople = (number) => {
  let num = 0;

  try {
    num = parseInt(number);
  } catch (err) {
    console.log(err);
    return false;
  }

  return num > 0;
};
