//1 Reverse String
function reverseString (str) {
    let newString = "";
    for (let i= str.length-1; i>=0; i--) {
        newString+=str[i];
    }
return newString;
}

console.log(reverseString("PLAYWRIGHT")); //THGIRWYALP

//2 Palindrome 

function isPalindrome(str) {
  // Reverse the string using the previous function logic
  const reversed = reverseString(str);

  // 1. Check if both strings are the same
  if (str === reversed) {
    // 2. Return true if same
    return true;
  } else {
    // else return false
    return false;
  }
}

console.log(isPalindrome("MAM")); // true
console.log(isPalindrome("home")); // false