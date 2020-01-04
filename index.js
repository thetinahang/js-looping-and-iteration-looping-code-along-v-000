// Code your solutions in this file
function writeCards(arrayOfNames, type) {
  let newArray = [];
  for (let counter = 0; counter < arrayOfNames.length; counter++) {
    newArray.push(`Thank you, ${arrayOfNames[counter]}, for the wonderful ${type} gift!`);
  }
  return newArray;
}

function countDown(number) {
    for (let counter = number; counter > number-1; counter--) {
      console.log(`${counter}`);
    }
}
