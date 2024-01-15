//  Singleton
//  Object.create()

//  Object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Jayesh",
    "full-name":"Jayesh Chavan",
    [mySym]:"mykey1",
    age: 18,
    location: "Mumbai",
    email: "jayesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full-name"]) 
// console.log(JsUser[mySym]);

JsUser.email = "jay@google.com"
//Object.freeze(JsUser)
JsUser.email = "abc@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


