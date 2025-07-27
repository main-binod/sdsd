///OBJECTS


/*//sigleton 
const mySym=Symbol("Key1")
//object literals
const JsUser = {
    name: "Anish",
    "Full name":"Anish Kumar",
    age: 21,
    [mySym]:"mykey1",// [] is used to declare symbols data type in js
    location: "Kolkata",
    email:"anishkaumar@delloite.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email)//method 1
console.log(JsUser["email"])//method 2
console.log(JsUser["full name"])//method 2 implementation in more parts
console.log(JsUser[mySym])

JsUser.email = "anishkumar@babayaga.com"
//Object.freeze(JsUser)
JsUser.email="osdfjasoidfj"
console.log(JsUser)

//how to form a ffunction

JsUser.greeting = function()
{
    console.log("Hello JS user");
}

console.log(JsUser.greeting());

//string interpolation in js (how to pass a name only from an object)
JsUser.greetingTwo = function()
{
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greetingTwo());*/

//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2,obj4)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email:"hagimaru@glass.com"

    },
    {
        id: 1,
        email:"hagimaru@glass.com"

    },
    {
        id: 1,
        email:"hagimaru@glass.com"

    }

]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//return data type as an arrays
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));//checks whether it is present or not


// deconstruct of the code 


const course = {
    coursename=" js in hindi",
    price: "999",
    courseInstructor:"Anish"
}

const {courseInstructor: instructor} = course

// conole.log(courseInstructor);
console.log(instructor);