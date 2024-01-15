const marvel_Heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_Heroes.push(dc_heroes)

// console.log(marvel_Heroes);
// console.log(marvel_Heroes[3][1]);

// const allHeros = marvel_Heroes.concat(dc_heroes)
// console.log(allHeros);

const all_new_heros = [...marvel_Heroes, ...dc_heroes]

// console.log(all_new_heros);

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_Array = another_Array.flat(Infinity)
console.log(real_another_Array);



console.log(Array.isArray("Jayesh"));
console.log(Array.from("Jayesh"));
console.log(Array.from({name: "hitesh"}));  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));