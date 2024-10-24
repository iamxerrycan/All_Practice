function movenagativeoneside(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}

console.log(movenagativeoneside([-1, 2, -3, 4, 5, 6, -7, 8, 9]));
