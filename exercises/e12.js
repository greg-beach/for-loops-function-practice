
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  var deposit_list = [];
  for (const bank in array){
    for (const deposit in array[bank].deposits) {
      if (array[bank].deposits[deposit] > 100) {
        deposit_list.push(array[bank].deposits[deposit]);
      };
    };
  };
  return deposit_list;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
