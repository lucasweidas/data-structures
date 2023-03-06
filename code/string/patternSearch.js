function patternSearch(string, pattern) {
  const patternLength = pattern.length - 1;
  const patternPositions = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== pattern[0] && string[i + patternLength] !== pattern[patternLength]) {
      continue;
    }

    let substring = '';
    for (let j = i, c = 0; c <= patternLength; j++, c++) {
      substring += string[j];
    }

    if (substring === pattern) {
      patternPositions.push(i);
    }
  }
  return patternPositions;
}

console.log(patternSearch('AABAACAADAABAABA', 'AABA'));
