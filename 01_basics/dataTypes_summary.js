//  Primitive

//  7 types: String, Number, Boolean, null, undefined, Symbol,
//  BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

const bigNumber = 455126658999855662n


//  Reference Type (Non Primitive)

//  Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "jayesh",
    age: 28

}


const myFunc = function() {
    console.log("Hello Jayesh");
}

//console.log(typeof heros);



// *****************************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYotubeName = "Jayeshdotcom"

let anotherYoutubeName = myYotubeName
anotherYoutubeName = "traderchannel"

console.log(myYotubeName);
console.log(anotherYoutubeName);

let userOne = {
    email: "user@gmail.com",
    upi: "jay@oksbi"
}

let userTwo = userOne

userTwo.email = "jayesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);