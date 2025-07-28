// this function and arrow function
// this always refer to the curent context
const user = {
    username:"anish",
    price:1234,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// use of this in global ScriptProcessorNode
// function chai(){
//     let username="hitesh"
//     console.log(this);
// }
// chai()

// this is an arrow function
const chai = () => {
    let username="hitesh"
    console.log(this);
}
// chai()

// const <variable name>=() => {}
// const addTwo = (num1+ num2)=>{
//     return num1+num2
// }
// // const addTwo = {num1,num2} => (num1+num2) -----3

// when the number in arrow function is taken inside the parenthesis then a return function is taken or
// and when it is outside the parenthesis is used as 3
// prefer parenthesis


// immidiately invoked function expressions [IIFE]
(function chai()
{
    console .log('DB CONNECTED');
})();

// ()()--first parenthesis is for definition and second one is used to wrap up the function

( ()=>{
    console.log
(`DB BAKCHODI ${"name"}`);
})
('jdsfsnifnsf')
// this is name iffi