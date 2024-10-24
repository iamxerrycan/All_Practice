// reverse the array

const arr = [1, 2, 3, 4, 5];

const reverse = (arr) => {
  return arr.reverse();
};

console.log(reverse(arr));

const reverse2 = function (arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

console.log('rev2', reverse2([1, 2, 3, 4, 5, 6]));

const reverse3 = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

console.log('rev3', reverse3([1, 2, 3, 4, 5, 6]));


