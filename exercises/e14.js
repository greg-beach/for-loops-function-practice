
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let balance_list = []
  for (const bank of array) {
    if (!bank.hasOwnProperty('deposits') || !bank.hasOwnProperty('withdrawals')){
      continue;
    };
    const total = bank.balance;
    let withdrawal_sum = 0;
    for (let withdrawal of bank.withdrawals){
      withdrawal_sum += withdrawal;
    }
    let deposit_sum = 0;
    for (let deposit of bank.deposits){
      deposit_sum += deposit;
    }
    if (total != deposit_sum - withdrawal_sum){
      balance_list.push(bank);
    };
  };
  return balance_list;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
