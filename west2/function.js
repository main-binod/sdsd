// function is a package which can be used as a block any number of time
// console.log("H")
// console.log("I")
// console.log("T")
// console.log("E")
// console.log("S")
// console.log("H")

function sayMyName(){
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}//same output as the function

// sayMyName()

function addTwoNumbers(number1,number2)
{
    a=10
    b=2
    c=a+b
    console.log(c)
    let result=number1+number2
    console.log(result)//can be directictly added in the return value
    return result
}
/*const result = addTwoNumbers(3,5)
console.log("Result",result)*/
// parameter is the value taken into the function in its first line

function loginUserMessage(username){
    if(username === undefined)//undefined is also treated as a false value
    {
        console.log("please enter a username")
        return
    }
    return`${username}just loggged in`
}
// console.log(loginUserMessage("hitesh"))

// shoping card problems where we dont know how many items are ther in the cart, thera can be an unlimited no. of items in the cart
function calculateCartPrice(...num1)// these three dots are used as rest and these denotes that more number can be passed into the functions
{
    return num1//rest operator converts the nummber in the form of a array
}
// console.log(calculateCartPrice(200,400,500))

function calculateCartPrice(val1,val2,...num1)// these three dots are used as rest and these denotes that more number can be passed into the functions
{
    return num1//rest operator converts the nummber in the form of a array
}
// console.log(calculateCartPrice(200,400,500,200))
// here we can say that 200 is vaken by val1,400 is taken by val2,500 and further value is then passed into the array

const user={
    username:"anish",
    price:199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);

}
// handleObject(user) ->this method is used but
// handleObject({
//      username:"hagimaru",
//     price:199
// })but here is another method to pass object directly in the function

const mynewArray = [200,300,455,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,300,455,600]));
// array can also be passed through the functions

