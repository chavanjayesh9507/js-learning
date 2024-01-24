const user ={
    username: "Jayesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username= "Jayesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username= "Jayesh"
//     console.log(this.username);
// }

const chai = () => {
    let username= "Jayesh"
    // console.log(this.username);
}

chai()

//-----------------Arrow Function-----------------

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//  ----------------- Implicit Return------------------------------

//const addTwo = (num1, num2) => num1 + num2  //In implicit return we dont have to declare the return keyword

//const addTwo = (num1, num2) => (num1 + num2) 

const addTwo = (num1, num2) => ({username: "Jayesh"})   //to return object need wrap the values in curly braces

console.log(addTwo(4, 5));