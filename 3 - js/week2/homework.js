//1
console.log('Exercise 1');
console.log("Hello World! // English");
console.log("Γειά Κόσμε! // Greek");
console.log("Hola, mundo! // Spanish");

//2
console.log('Exercise 2');
console.log("I'm awesome");

//3
console.log('Exercise 3');
let x;
console.log('the value of my variable x will be: undefined');
console.log(typeof(x));
x = 10;
console.log('the value of my variable x will be: number');
console.log(typeof(x));

//4
console.log('Exercise 4');
let y = "dark";
console.log('the value of my string will be: dark');
console.log(y);
y = "syd barrett";
console.log('the value of my string will be: syd barrett');
console.log(y);

//5
console.log('Exercise 5');
let z = 7.25;
console.log(z);
a = Math.round(z);
console.log(a);
let max_num;

if (a > z){
     max_num = a;
}
else {
     max_num = z;
}
console.log("highest value: ", max_num);

//6
console.log('Exercise 6');
let arr = [];
console.log('the value of my array will be: empty array');
console.log(arr);
let arrZoo = ["dogs","monkeys","kangaroos"];
console.log(arrZoo);
arrZoo.push("baby pig");
console.log(arrZoo);

//7
console.log('Exercise 7');
let myString = "this is a test";
console.log(myString);
console.log("Length: ", myString.length);

//8
console.log('Exercise 8');
let n = 200;
console.log(n);
console.log('the value of my variable n will be: number');
console.log(typeof(n));
let m = 9.5;
console.log(m);
console.log('the value of my variable m will be: number');
console.log(typeof(m));
let text = "how to save a life";
console.log(text);
console.log('the value of my variable text will be: string');
console.log(typeof(text));
let bin = true;
console.log(bin);
console.log('the value of my variable bin will be: boolean');
console.log(typeof(bin));

function cmpType(v1,v2) {
    console.log("comparing " + v1 + " with " + v2);
    if (typeof v1 === typeof v2) {
        return console.log("SAME TYPE")
    }
    else {
        return console.log("NOT SAME TYPE");
    }     
  }

cmpType(n,m);
cmpType(n,text);
cmpType(n,bin);
cmpType(m,text);
cmpType(m,bin);
cmpType(text,bin);

//9
console.log('Exercise 9');
x = undefined;
x = 7;
x = x % 3;
console.log("%: the remainder of the division between 7 and 3.");
console.log("we can multiply 3 up to 2 times to proceed the divison.");
console.log("7-6=1, so the value of x will be 1.");
console.log("x: ", x);

//10
console.log('Exercise 10');
console.log('Using the Exercise 8 variables');
let arr8 = [n, m, text, bin];
console.log(arr8);
console.log("6/0 === 10/0: ", 6/0 === 10/0);
