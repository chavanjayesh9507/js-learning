const myobj = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
}

// for (const key in myobj) {
//     console.log(`${key} shortcut is for ${myobj[key]}`);  
// }

const programming = ["js", "rb", "c++", "swift"]

for (const key in programming) {
   console.log(programming[key]);
}
