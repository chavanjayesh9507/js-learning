// function sayMyName(){
//     console.log("J");
//     console.log("A");
//     console.log("Y");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

// addTwoNumbers(4, 5)

function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNumbers(4, 5)
// console.log("Result: ", result);


function loginUserMessage(username = "Sagar"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Jayesh"));
// console.log(loginUserMessage());

// REST Operator ...num1 ==> this gives array back 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(2));
// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "Jayesh",
    price : 999
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sagar",
    price: 199
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 200, 120]));
