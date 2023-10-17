
  // Write your algorithm here
  

function isPalindrome(word) {
  // Remove any non-alphabet characters and convert to lowercase
  word = word.replace(/[^a-z]/gi, '').toLowerCase();

  // Initialize pointers
  let left = 0;
  let right = word.length - 1;

  // Loop through the string and compare characters
  while (left < right) {
    if (word[left] !== word[right]) {
      return false; // Non-matching characters found
    }
    left++;
    right--;
  }

  // Return true if the loop completes, indicating it's a palindrome
  return true;
}

// Test cases
console.log(isPalindrome("racecar")); // Expecting: true
console.log(isPalindrome("mom"));     // Expecting: true
console.log(isPalindrome("abba"));    // Expecting: true
console.log(isPalindrome("a"));       // Expecting: true
console.log(isPalindrome("hi"));      // Expecting: false
console.log(isPalindrome("robot"));   // Expecting: false

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
