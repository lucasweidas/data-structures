function getSubarraysTotal(arr) {
  const n = arr.length;
  const total = parseInt((n * (n + 1)) / 2);
  return total;
}

function printAllSubarrays(arr) {
  const n = arr.length;
  let start = 0;
  let end = n - 1;
  while (start < n) {
    console.log(arr.slice(start, end + 1));
    if (start === end) {
      start = start + 1;
      end = n - 1;
    } else {
      end -= 1;
    }
  }
}

const arr = [1, 2, 3, 4, 5];
console.log(`Total of Subarrays: ${getSubarraysTotal(arr)}`);
printAllSubarrays(arr);
