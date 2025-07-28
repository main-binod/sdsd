// this function and arrow function
// this always refer to the curent context
const user = {
    username:"anish",
    price:1234,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
