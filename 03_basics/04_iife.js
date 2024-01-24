// Immediately Invoked Function Expression

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //  unmamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})(`jayesh`)