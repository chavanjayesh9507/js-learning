// array

const myArray = [0, 1, 2, 3, 4]
const myHeros = ["shaktiman","hero"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArray[2]);

// Array method

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift(9)

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));


const newArray = myArray.join()

// console.log(myArray);
// console.log(typeof newArray);

//  slice, splice

console.log("A", myArray);

//  slice returns a piece of the array but it doesn't affect the original array
const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B", myArray);

//  splice changes the original array by removing, replacing or adding values and returns the affected values
const myn2 = myArray.splice(1,3)
console.log("C", myArray);
console.log(myn2);