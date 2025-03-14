// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  let lowest_balance = [];
  let lowest_so_far = array[0].balance;
  for (const bank in array){
    if (array[bank].balance > 0 && array[bank].balance < lowest_so_far) {
      lowest_balance = [array[bank]];
      lowest_so_far = array[bank].balance;
    };
  };
  return lowest_balance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function