console.log("I'm working!");



// my commented answer
// What is the difference between a parameter and an argument?
// Parameter is what the function accept while an argument is what we manupulite to execute the function.
//
// Within a function, what is the difference between return and console.log?
// outputs given by return could be stored while console.log outputs are only for the console.

// Write a function checkPalindrome that accepts a single argument, a string. The function should return true (Boolean) if the string is a palindrome, false if it is not. Make sure your function will give the correct answer for words with capital letters.

// const checkPalindrome = (name) => {
//   name == name.split(" ").reverse().join(" ")
//     return true;
//   }
//   else {
//     return false;
//   }
// }
//
// checkPalindrome("Anna");


const checkPalindrome = (word) => {
  let newWord = word.toLowerCase();
	return newWord === newWord.split("").reverse().join("");
}

console.log(checkPalindrome("Ma"));

// .split("").reverse().join("")


// Write a function sumDigits that accepts a number and returns the sum of its digits.


const sumDigits = (num) => {
  return num.toString().split();
}

sumDigits(45);
