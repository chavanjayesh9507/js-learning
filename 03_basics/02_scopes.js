// let a = 10
// const b = 20
// var c = 30

//{} --> this is scope

// var c = 300
let a= 300

if(true){
    let a = 10
    const b = 20
    // console.log("Block Scope:", a);
}


//a and b will throw error as undefined as declared inside the scope
// console.log("Global Sccope: ", a);
// console.log(b);
// console.log(c); // though it is inside the scope var will get print and won't throw error

// --------------------- Nested Scope

function one(){
    const username = "Jayesh"

    function two(){
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website);    //this cannot be accessed because its outside the scope

    two()
}

one()

//  ++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++

addone(5)   //this will not give error though we are accessing it before declaration

function addone(num){
    return num + 1
}


addTwo(5)   // this will give error as it called before declaration because of the way the function is called.

const addTwo = function(num){
    return num + 2
}





