// function call

// function fun (){
//     return "hello"
// }

// console.log(fun())

// function that can call its self

// (function(){
//     console.log('hello')
// })()

// function can refer a variable

// const fun = function(){
//     console.log('function expression')

//     return 2;
// }

// console.log(fun() + 2)



// funciton argument

// const sum = function (number1, number2){
//     return number1 +number2;
// }

// console.log(sum(1,2))


// // iife
// (function (){
//     return 'hello hello'
// })()


//arrow function
//  (()=>{
// console.log('arrow function')
// })()

//  const arro = ()=>{
// console.log('arrow function')
// }

// arro()

// method 

// const obj = {
//     name: "zo",
//     getName: function(){
//         console.log(obj.name)
//     }
// }
// obj.getName()

// higer order funciton

// function greet (){
//     return "good afternoon"
// }

// function display(outherfun){
//     console.log(outherfun())
// }

// display(greet)

// callback

// function greet(para1){
//     const number = 10;

//    para1(number) 
// }

// greet(function(num){
//         console.log(num)
//     return "hi"})
// //-------------------------------------------

// function greet (para){
//     console.log("good evening")
//     console.log(para('hello hello'))
// }

// greet(function(value) { 
//         console.log(value)
//     return'dslkfl'})         
 // good evening
// dslkfl


// last example of callback

// function math (x, y, callback){
//     const result = x * y;
//     callback(result)

// }

// math(3,3, function(rs){
//     const num2 = 5;
//     const finalResult = num2 +rs;
//     console.log(finalResult)
// })


//undefined

// let greet;


// console.log(greet)
//---------------------------
// array

// let str = "hello";
// let num = 1234567;
// let yes = true;
// let dataIsNotThere = undefined;
// let response = null;
// let obj = {class: 'six'}
// //----------------------------------
// let arr = [str, num, yes, dataIsNotThere, response,obj]
let arr = ['hello', 12345, true, undefined, null, {name: "zo"}]
// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i])
// }
// console.log(typeof('hello'))
const resultOfMap = arr.map(function(value, index){
   
    if(typeof(value) === 'string'){
        return value;
    }
   
})
// 1st one is string 
// ['hello', ]

const resultOfFilter = arr.filter(function(value){
    if(typeof(value) === 'string') return true;
})

console.log(resultOfMap)
console.log(resultOfFilter)





// length of an empty array

// const arr = []
// console.log(arr.length)











































// const fun =function (){
//     console.log('regular funciton')
// }

// fun()


















// anonymous function

// named function

//Immediately Invoked Function Expressions

//arrow function expression
