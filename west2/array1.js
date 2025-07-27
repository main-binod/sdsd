// arrays in js are resaizeable
// and cannot be fixed to any data type i.e. open to all

const arr=[0,1,2,3,4,5,6,7,8,9]
// console.log(arr[0]);

const myHeros = ["saktiman","naagraj"]

const myarr2 =new Array(1,2,3,4)
// console.log(arr[1]);

//array methods

// arr.push(7)
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.unshift(9)//insert in front of the array
// console.log(arr)

// arr.shift()

// console.log(arr.includes(9));
// console.log(arr.indexOf(9));
const narr = arr.join()

// console.log(narr);
// console.log(typeof(narr))

// slice,splice
// console.log("A ",arr);

const myn1=arr.slice(1,3)
// console.log(myn1);
// console.log("B ",arr);

const myn2=arr.splice(1,3);
// console.log("C ",arr);
// console.log(myn2);

const marvel_heros=["thor","Ironamn","Spiderman"]
const dc_heroes=["Superman","Flash","Batman"]

//marvel_heros.push(dc_heroes);
//console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heroes)
// console.log(allHeros)

const all_new_heros = [...marvel_heros,...dc_heroes]//works same as concat known as "spread array"

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"}))//interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));