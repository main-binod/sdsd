const name="hitesh";
const repoCount = 50; 

//console.log(name + repoCount + "value");

console.log(`my name is ${name} and my repo scount is ${repoCount}`);

const gameName=new String("Ansigoigmsvk")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('v'));

// learn in mdm and write of all of it in one time to crack an interview

const newstr = gameName.substring(0,4)
console.log(newstr);

const anotherString = gameName.slice(-2,-9)//negative values can also be taken in this unlike substring
console.log(anotherString)

const newStringOne = "  anish   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anish.com/sdkjkvfdvndnjkdsanjkanf"
console.log(url.replace('jk','-'))

console.log(url.includes('sunder'))
