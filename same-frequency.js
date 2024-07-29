// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Examples:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
function sameFrequency(num1, num2) {
    const countDigits = (num) => {
      let count = {};
      for (let digit of num.toString()) {
        count[digit] = (count[digit] || 0) + 1;
      }
      return count;
    };
  
    const count1 = countDigits(num1);
    const count2 = countDigits(num2);
  
    if (Object.keys(count1).length !== Object.keys(count2).length) {
      return false;
    }
  
    for (let key in count1) {
      if (count1[key] !== count2[key]) return false;
    }
  
    return true;
  }
  
