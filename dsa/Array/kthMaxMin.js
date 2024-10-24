function kthmaxmin(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  console.log('shortd arr: ', arr);

  if (k > 0 && k <= arr.length) {
    let kthmin = arr[k - 1];
    let kthmax = arr[arr.length - k];
    return { kthmin, kthmax };
  } else {
    return 'invalid input';
  }
}

console.log(kthmaxmin([1, 9, 8, 7, 6, 5, 4, 10], 3));
