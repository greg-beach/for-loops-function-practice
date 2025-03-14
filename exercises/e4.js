// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  let min_so_far = array[0]
  for (const num in array){
    if (array[num] < min_so_far) {
      min_so_far = array[num];
    };
  };
  return min_so_far;
}

export function findMaxValueInArray(array) {
  // Your code goes here...
  let max_so_far = array[0]
  for (const num in array){
    if (array[num] > max_so_far) {
      max_so_far = array[num];
    };
  };
  return max_so_far;
}

console.log(findMinValueInArray([1, 2, 3, 4]))
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
