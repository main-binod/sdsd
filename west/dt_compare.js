//console.log("2">1);
//console.log("02">1);

//console.log(null > 0);false
//console.log(null == 0);falsw
//console.log(null >= 0);true

//comparisom and equality check is a different type read it from ggole

//console.log(undefined == 0);
//console.log(undefined > 0);

//=== checks the data types as well as the value
// always avoid these type of the code

//primitve or non primitive
/*primitive=tyes are pass by value a copy is sent to the work upon
7types:string, number, Boolean, null, undefined, symbol, BigInt
Non-Primitive or reference Type :they are used as the reference and the mainvalue id passed to work upon
3 types:Array and objects and functions*/

const score=true;
const score1=100;
const score2=100.3
const score3=500;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 5646464n//n is used in last to make a normal integer a big int

//js is dynamically typed language
const heros = ["shaktimann", "naagraj", "doga"]
let myObj = {
    name:"anish",
    age:22,
}
const myFunction=function(){
    console.log("HelloWorld")
}