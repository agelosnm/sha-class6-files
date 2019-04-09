// 1. Strings
console.log("Exercise Strings")
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log("len: ", myString.length);
myString = myString.replace(/,/g, " ");
console.log(myString);

// 2.Arrays
console.log("Exercise Arrays");
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
console.log('["blowfish", "meerkat", "capricorn", "giraffe", "turtle"]')
favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);
console.log('The array has a length of: ' + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
favoriteAnimals.splice(favoriteAnimals.indexOf("meerkat"), 1);
console.log(favoriteAnimals);

// More JavaScript
// 1
console.log("Exercise More JavaScript");
console.log("Exercise 1");
function sum(x, y, z) {
    return x + y + z;
}
sum(1, 2, 3);

// 2
console.log("Exercise 2");
function colorCar(color) {
    if (typeof (color) != 'string') {
        return "error!";
    }
    return "A " + color + " car";
}
colorCar("red");

// 3
console.log("Exercise 3");
let my_details = {
    firstname: "Angelos",
    lastname: "Naoum",
    country: "Greece",
};

function objShow(obj) {
    return obj;
}

objShow(my_details);

// 4
console.log("Exercise 4");
function vehicleType(color, vehicle) {
    if (typeof (color) != 'string' || typeof (vehicle) != 'number' || vehicle > 2 || vehicle <= 0) {
        return "error!";
    }

    if (vehicle === 1) {
        return "A " + color + " car";
    }
    else {
        return "A " + color + " motorbike";
    }
}

vehicleType("blue", 2)

// 5
console.log("Exercise 5");
console.log(3 === 3 ? "yes" : "no");

// 6
console.log("Exercise 6");
function vehicle(color, typevehicle, years) {
    if (typeof (color) != 'string' || typeof (typevehicle) != 'number' || typevehicle > 2 || typevehicle <= 0 || typeof (years) != 'number') {
        return "error!";
    }

    switch (typevehicle) {
        case 1:
            if (years <= 5) {
                return "A " + color + " used car";
            }
            else {
                return "A " + color + " new car";
            }
        case 2:

            if (years <= 5) {
                return "A " + color + " used motorbike";
            }
            else {
                return "A " + color + " new motorbike";
            }
    }

}
vehicle("blue", 1, 5)

// 7
console.log("Exercise 7");
let arrVehicle = ["motorbike", "caravan", "bike"];
console.log(arrVehicle);
// 8
console.log("Exercise 8");
console.log("3rd Element: ", arrVehicle[2]);

// 9
console.log("Exercise 9");
function vehicleArr(color, index, years) {
    if (typeof (color) != 'string' || typeof (index) != 'number' || (index > 3) || typeof (years) != 'number') {
        return "error!";
    }

    let arrVehicle = ["motorbike", "caravan", "bike"];
    switch (index) {
        case 1:
            if (years <= 5) {
                return "A " + color + " new " + arrVehicle[index - 1];
            }
            else {
                return "A " + color + " used " + arrVehicle[index - 1];
            }
        case 2:
            if (years <= 5) {
                return "A " + color + " new " + arrVehicle[index - 1];
            }
            else {
                return "A " + color + " used " + arrVehicle[index - 1];
            }
        case 3:
            if (years <= 5) {
                return "A " + color + " new " + arrVehicle[index - 1];
            }
            else {
                return "A " + color + " used " + arrVehicle[index - 1];
            }
    }

}
vehicle("green", 3, 1);

//10
console.log("Exercise 10");
console.log("Amazing Joe's Garage, we service " + arrVehicle.join('s, ') + "s.");

//11
console.log("Exercise 11");
arrVehicle.push("ship", "truck");
console.log("Amazing Joe's Garage, we service " + arrVehicle.join('s, ') + "s.");

//12 - 13 - 14
console.log("Exercise 12 - 13 - 14");
let myObj = {};
let teachersObj = {
    thanos: "CSS",
    kostas: "JavaScript",
    ahmed: "HTML"
}

// 15 
console.log("Exercise 15");
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
console.log("x==y will compare if the two arrays have the same values, but what js engine will do is to compare one of the arrays as an object element and the other one as an array. So the result will be false", x == y);
console.log("x===y will compare the two arrays as an element of an object with an array, so the result will be false", x === y);
console.log("Comparing 'z' and 'y', both are true since they have the same values  will be compared both as objects elements. z==y:", z == y, "z===y:", z === y);

//16
console.log("Exercise 16");
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log("o1: ", o1, "o2: ", o2, "o3: ", o3);
o2 = { cast: "casper" };
o1 = { give: "fuel" };
console.log("o1: ", o1, "o2: ", o2, "o3: ", o3);

//17
console.log("Exercise 17");
let bar = 42;
console.log("It will return 'string' because we are asking for the type OF the typeof OF a variable. typeof bar will return the value 'number' and the type of this value is a string. typeof typeof bar: ", typeof typeof bar);
