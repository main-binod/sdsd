//  var c = 300
// let a=300//global scope of the js
//  if(true)
//  {
//     let a = 10
//     const b = 20
//     // console.log("Inner:",a);
//  }

//  console.log(a);//block scope
//  console.log(b);
//  console.log(c); 

function one(){
    const username = "anish"

    function two(){
            const webser = "defcon1"
            console.log(username);
        }
        // console.log(webser);

        two()
}
one()

console.log("anisend");

/*******************************interst */
function addone(num){
    return num+1
}
addone(5)