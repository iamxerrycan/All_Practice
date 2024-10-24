let arr = [1, 2, 3, 4, 5, 6];

function minmax(a) {
  let min = a[0];
  let max = a[0];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
      max = a[i];
    }
    if (a[i] < min) {
      min = a[i];
    }
  }
  return { max, min };
}

console.log(minmax(arr));
