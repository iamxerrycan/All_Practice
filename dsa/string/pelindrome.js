// pelindrome or not
function pelindrome(str) {
  let n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[n - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(pelindrome('madama'));
