function substring(string) {
  for (let i = 0; i < string.length; i++) {
    let sub = '';
    for (let j = i; j < string.length; j++) {
      console.log((sub += string[j]));
    }
  }
}

substring('geeks');
