//find dublicate string

function findDublicate(str) {
  let dublicate = '';
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        dublicate = dublicate + str[i];
      }
    }
  }
  return dublicate;
}

console.log(findDublicate('rajshish'));
