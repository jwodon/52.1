// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Constraints:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true
function constructNote(message, letters) {
    const letterCount = {};
  
    for (let char of letters) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
  
    for (let char of message) {
      if (!letterCount[char]) return false;
      letterCount[char]--;
    }
  
    return true;
  }
  
