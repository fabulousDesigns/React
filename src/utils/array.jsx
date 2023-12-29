// Generate an array with 10 million random values
const arraySize = 10000000;
const randomArray = new Array(arraySize);

for (let i = 0; i < arraySize; i++) {
  randomArray[i] = Math.random(); // You can modify this to generate values as per your requirement
}

// Get and print the last element of the array
export const selectedValue = randomArray[arraySize - 1];
