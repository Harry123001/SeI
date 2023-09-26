// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
 

 //  Here are the functions: 
  
 // 1. (_completed above_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a [ternary expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) -  the Math.max method is not allowed.
  
 /* 2. Define a function, as a function expression, `maxOfThree` that takes 
three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
*/


const maxOfThree = function(x, y, z) {
    let num = x;
    if (y > num) {
      num = y;
    }
    if (z > num) {
      num = z;
    }
    return num;
  };
  console.log(maxOfThree(16, 17, 15));
  

 /* 3. Define a function, as a function declaration, `isCharAVowel` 
  that takes a character as an argument and returns true if it is a vowel, false otherwise.
*/


function isCharAVowel(char) {
    const vowel = char.toLowerCase();
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';
}
console.log(isCharAVowel('e'));


 /* 4. Define a function, as a function expression, `sumArray` that takes 
  an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
*/

const sumArray = function (numbers) {
    let sum = 0;
    for (let i = 0; i<numbers.length; i++ ) { 
        sum += numbers[i];
    }
    console.log(sum)
};
sumArray([2,5,9]);


 /* 5. Define a function, as a function declaration, `multiplyArray` 
  that takes an array of numbers and returns the product those numbers. 
For example, `multiplyArray([2, 4, 5]);` would return `40`.
*/

function multiplyArray(num) {
    let product = 0;
    for (i = 0; i < num.length; i++){
        product *= num[i];
    }
    console.log(product);
}
multiplyArray([3,4,10]);

 /* 6. Define a function, as a function expression, `numArgs` 
  that returns the number of arguments passed to the function when called.
  
*/
const numArgs = function number (...whatever) {
    return whatever.length;
};
console.log(numArgs('thanos', 'avengers'))


 /* 7. Define a function, as a function declaration, `reverseString` 
 that takes a string, reverses the characters, and returns it. 
 For example, `reverseString('rockstar');` would return the string "ratskcor".
*/
function reverseString(character) {
    return character.split('').reverse().join('')
}
reverseString("rockstar");

 /* 8. Define a function, as a function expression, 
    `longestStringInArray` that takes an array of strings as an 
     argument and returns the length of the longest string.\

*/

const longestStringInArray = function(arr){
  longest = 0; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest){
      longest = arr[i].length
    }
  }
retunr = longest
}
 
console.log(longestStringInArray( 'hello' , 'Goodbye' , 'Dog'))


 /* 9. Define a function, as a function declaration, 
  `stringsLongerThan` that takes an array of strings and a number as arguments; 
 and returns an array of the strings that are longer than the number passed in. 
 For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.
 */
 
 function stringsLongerThan(arr, num) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i].length > num) result.push(arr[i])
  }
  return result
}

console.log(
stringsLongerThan(['hello', 'How', 'you', 'doin', 'BabyGirl'], 3)
)