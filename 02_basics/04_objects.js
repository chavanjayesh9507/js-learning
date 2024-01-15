//  Singleton

//const tinderUser = new Object()        //Singleton object

const tinderUser = {}

tinderUser.id = "1256hj"
tinderUser.name = "Sagar"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Jayesh",
            lastname: "Chavan"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const object1 ={
    1: "a",
    2: "b"
}
const object2 = {3:"a", 4:"b"}

// const object3 = {object1, object2}
// const object3 = Object.assign({},object1, object2)

const object3 = {...object1, ...object2}
// console.log(object3);

const users = [
    {

    },
    {

    },
    {

    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);