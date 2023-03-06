function replace(string, searchValue, replaceValue) {
  const searchLength = searchValue.length - 1;
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== searchValue[0] && string[i + searchLength] !== searchValue[searchLength]) {
      result += string[i];
      continue;
    }

    let substring = '';
    for (let j = i, c = 0; c <= searchLength; j++, c++) {
      substring += string[j];
    }

    if (substring === searchValue) {
      result += replaceValue;
      i += searchLength;
    }
  }
  return result;
}

console.log(replace('Replace something', 'Replace', 'Replacing'));
