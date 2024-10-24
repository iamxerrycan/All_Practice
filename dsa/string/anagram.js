//fin anagram or not

function anagram(str1, str2) {
  let normalisedStr1 = str1
    .replace(/ /g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  let normalisedStr2 = str2
    .replace(/ /g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  if (normalisedStr1 === normalisedStr2) {
    return true;
  }
  return false;
}

console.log(anagram('listen', 'silen'));
