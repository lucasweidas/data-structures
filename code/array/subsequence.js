function getSubsequenceTotal(arr) {
  const n = arr.length;
  const total = 2 ** n - 1;
  return total;
}

function printAllSubsequences(arr, i, seq) {
  if (i >= arr.length) {
    console.log(seq);
    return;
  }

  seq.push(arr[i]);
  printAllSubsequences(arr, i + 1, seq);
  seq.pop();
  printAllSubsequences(arr, i + 1, seq);
}

const arr = [1, 2, 3, 4, 5];
console.log(`Total of Subsequences: ${getSubsequenceTotal(arr)}`);
printAllSubsequences(arr, 0, []);
