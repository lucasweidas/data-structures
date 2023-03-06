function isPalindrome(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed === string;
}

console.log(isPalindrome('abba'));
console.log(isPalindrome('abbc'));
