function trim(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') continue;
    result += string[i];
  }
  return result;
}

console.log(trim('   So  met h  in  g i s wr  o n g  !  '));
