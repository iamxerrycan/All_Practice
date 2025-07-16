// Practice: 1 array basics

const arr = [1, 2, 3, 4, 5];

// 1. Accessing elements
console.log(arr[0]); // 1


// 2. Modifying elements
arr[1] = 10;
console.log(arr); // [1, 10, 3, 4, 5

// 3. Adding elements
arr.push(6);
console.log(arr); // [1, 10, 3, 4, 5

// 4. Removing elements
arr.pop();
console.log(arr); // [1, 10, 3, 4]

// 5. Iterating through an array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1, 10, 3, 4
}

// 6. Finding the length of an array
console.log(arr.length); // 4 


// 7. Checking if a variable is an array
console.log(Array.isArray(arr)); // true

// 8. Concatenating arrays
const arr2 = [7, 8, 9];
const concatenated = arr.concat(arr2);
console.log(concatenated); // [1, 10, 3, 4, 7, 8, 9]


// 9. Slicing an array
const sliced = arr.slice(1, 3);
console.log(sliced); // [10, 3]

// 10. Reversing an array
const reversed = arr.reverse();
console.log(reversed); // [4, 3, 10, 1]   

// 11. Sorting an array
const unsortedArr = [5, 3, 8, 1, 2];
const sortedArr = unsortedArr.sort((a, b) => a - b);
console.log(sortedArr); // [1, 2, 3, 5,

// 12. Finding an element in an array
const found = arr.find(element => element > 2);
console.log(found); // 3

// 13. Filtering an array
const filtered = arr.filter(element => element > 2);
console.log(filtered); // [10, 3, 4]

// 14. Mapping an array
const mapped = arr.map(element => element * 2);
console.log(mapped); // [2, 20, 6, 8]

// 15. Reducing an array
const reduced = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
  0);
console.log(reduced); // 18

// 16. Checking if an array includes a value
const includesValue = arr.includes(3);
console.log(includesValue); // true

// 17. Finding the index of an element
const index = arr.indexOf(3);
console.log(index); // 2

// 18. Joining elements of an array into a string
const joined = arr.join(', ');
console.log(joined); // "1, 10, 3, 4"

// 19. Splicing an array
const spliced = arr.splice(1, 2, 20, 30);
console.log(arr); // [1, 20, 30, 4]
console.log(spliced); // [10, 3]

// 20. Filling an array with a value
const filled = arr.fill(0, 1, 3);
console.log(filled); // [1, 0, 0, 4]

// 21. Finding the last index of an element
const lastIndex = arr.lastIndexOf(0);
console.log(lastIndex); // 2  

// 22. Flattening a nested array
const nestedArr = [1, [2, 3], [4, 5]];
const flattened = nestedArr.flat();
console.log(flattened); // [1, 2, 3, 4, 5]

// 23. Checking if an array is empty
const isEmpty = arr.length === 0;
console.log(isEmpty); // false

// 24. Creating a new array from an existing one
const newArr = arr.map(element => element + 1);
console.log(newArr); // [2, 21, 31, 5]    

// 25. Finding the maximum value in an array
const max = Math.max(...arr);
console.log(max); // 30

// 26. Finding the minimum value in an array
const min = Math.min(...arr);
console.log(min); // 1

// 27. Checking if all elements in an array pass a test
const allGreaterThanZero = arr.every(element => element > 0);
console.log(allGreaterThanZero); // true

// 28. Checking if some elements in an array pass a test
const someGreaterThanFive = arr.some(element => element > 5);
console.log(someGreaterThanFive); // true

// 29. Creating a shallow copy of an array
const shallowCopy = arr.slice();
console.log(shallowCopy); // [1, 20, 30, 4]

// 30. Creating a deep copy of an array
const deepCopy = JSON.parse(JSON.stringify(arr));
console.log(deepCopy); // [1, 20, 30, 4]

// 31. Finding the first index of an element
const firstIndex = arr.findIndex(element => element > 2);
console.log(firstIndex); // 1

// 32. Finding the last index of an element
const lastIndexOfElement = arr.lastIndexOf(4);
console.log(lastIndexOfElement); // 3

// 33. Checking if an array is sorted
const isSorted = arr.every((element, index, array) => {
  return index === 0 || element >= array[index - 1];
});
console.log(isSorted); // false

// 34. Finding the intersection of two arrays
const arr1 = [1, 2, 3, 4];
const arr3 = [3, 4, 5, 6];
const intersection = arr1.filter(value => arr3.includes(value));
console.log(intersection); // [3, 4]

// 35. Finding the union of two arrays
const union = [...new Set([...arr1, ...arr2])];
console.log(union); // [1, 2, 3, 4, 5, 6]
// 36. Finding the difference between two arrays
const difference = arr1.filter(value => !arr2.includes(value)); 
console.log(difference); // [1, 2]

// 37. Finding the symmetric difference between two arrays
const symmetricDifference = [
  ...arr1.filter(value => !arr2.includes(value)),
  ...arr2.filter(value => !arr1.includes(value))
];
console.log(symmetricDifference); // [1, 2, 5, 6]

// 38. Checking if an array is a subset of another
const isSubset = arr1.every(value => arr2.includes(value));
console.log(isSubset); // false

// 39. Checking if an array is a superset of another
const isSuperset = arr2.every(value => arr1.includes(value));
console.log(isSuperset); // false

// 40. Finding the Cartesian product of two arrays
const cartesianProduct = arr1.flatMap(a => arr3.map(b => [a,  
b]));
console.log(cartesianProduct); // [[1, 3], [1, 4],

// [2, 3], [2, 4], [3, 3], [3, 4], [4, 3], [4, 4]]

// 41. Finding the index of an element in a sorted array
const sortedArray = [1, 2, 3, 4, 5];
const indexInSortedArray = sortedArray.indexOf(3);
console.log(indexInSortedArray); // 2

// 42. Finding the first element that satisfies a condition
const firstElement = arr.find(element => element > 20);
console.log(firstElement); // 30

