// // var generateName = require('sillyname');
// // var sillyname = generateName();
// import generateName from 'sillynam';
// for (let i = 1; i < 100; i++) {
//     // var generateName = require('sillyname');
//     var sillyname = generateName();
//     console.log(`my name is ${sillyname}.`);
// }

// import superheroes from "superheroes";
// import superhero from "superheroes";
// for (let i = 0; i<15;i++){
//     var superheroes = superheroes(); 
//     console.log(`${i}. I am ${superhero}!`);
// }

// const superheroes = require('superheroes');
// console.log(superheroes); // Check if `superheroes` object has the random function

import superheroes from 'superheroes';
import {randomSuperhero} from 'superheroes';
let i = randomSuperhero();
console.log(`I am ${i}`);




