const accountId = 14453
let accountEmail = "jayesh@google.com"
var accountPassword = "Jayesh@123"
accountCity = "Mumbai"
let accountState;

// accountId = 2

accountEmail = "jay@gmail.com"
accountPassword = "12345"
accountCity="Delhi"

/*
    Prefer not to use var 
    because of the issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])