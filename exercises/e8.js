
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  var highest_balance = [];
  var highest_so_far = Number.NEGATIVE_INFINITY;
  for (const bank in array) {
    if (array[bank].balance > highest_so_far){
      highest_balance = [array[bank]];
      highest_so_far = array[bank].balance;
    };
  };
  return highest_balance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
