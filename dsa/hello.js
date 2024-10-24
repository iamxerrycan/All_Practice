// DSA practice

function greet(name) {
  return `Hello, ${name}`;
} 

console.log(greet("World"))

let arr = [ 1,2,3,4,5,]

const filterd = arr.filter((val) => {
  return val > 2
})

console.log(filterd)


const mapped = arr.map((val) => {
  return val * 2
})

console.log(mapped)

const reduced = arr.reduce((acc, val) => {  
  return acc + val
})  

console.log(reduced)

// map filter and reduce difference 