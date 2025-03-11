
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  var has_a = []
  var no_a = []
  for (let i=0; i < array.length; i++){
    var trigger = false
    for (const letter in array[i]){
      if (array[i][letter] === 'a') {
        trigger = true;
      };
    };
    if (trigger==true){
      has_a.push(array[i]);
    } else {
      no_a.push(array[i]);
    };
  };
  return [has_a, no_a]
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
