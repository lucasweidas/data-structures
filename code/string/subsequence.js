function subsequence(string, i, seq) {
  if (i >= string.length) {
    if (seq.length) {
      console.log(seq.join(''));
    }
    return;
  }
  seq.push(string[i]);
  subsequence(string, i + 1, seq);
  seq.pop();
  subsequence(string, i + 1, seq);
}

subsequence('geeks', 0, []);
