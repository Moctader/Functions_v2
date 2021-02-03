/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

let whatShape = 1;
/**
 * What is selected, circle or square?
 * @param {number} i    1 = circle, 2 = square
 */
function shape(i) {
    whatShape = i;
    document.getElementById('result').innerHTML = "";
}

/**
 * Print result on the page
 * @param {element} place   where to print
 * @param {string} shape    shape as text
 * @param {number} area     area of the shape
 * @param {number} around   around of the shape
 */
function print(place, shape, area, around) {
    place.innerHTML = shape + " area is " + area + ", around is " + around + ".";
}

/**
 * Calculate circle around
 * @param {number} r    radius of a circle
 * @returns {number}    around of a circle
 */
function calculateCircleAround (r) {
    
}

/**
 * Calculate circle area
 * @param {number} r    radius of a circle
 * @returns {number}    area of a circle 
 */
function calculateCircleArea (r) {
    let area = (Math.PI) * (Math.pow(radius2,2)); 

    
}

// Write Square functions here


// Paste here the random number generator function 


// Button functions
function f01() {
    let radius1 = Number(document.getElementById("radius1").value);   
    

    let c_area = (Math.PI) * (Math.pow(radius1,2))
    let c_around =2 * (Math.PI) * radius1;

    document.getElementById("c_around").innerHTML= (Math.round(c_around));
    document.getElementById("c_area").innerHTML= (Math.round(c_area));

}

function f02() {





}

function f03() {

//    how to find the element where to print and use it    
//    let p = document.getElementById('circle');
//    print(p, ...);    

let radius2 = Number(document.getElementById("radius2").value); 
console.log(radius2);
let area = (Math.PI) * (Math.pow(radius2,2)); 
let around = 2*Math.PI* radius2;
let place = document.getElementById("circle");
let shape = document.getElementById("")

print (place, area, around)



}

function f04() {
    
}

function f05() {

}

function f06(min, max) {
    document.getElementById("dice").innerHTML =
    Math.floor(Math.random() * 6) + 1;
}

function f07() {

}

// Write getCharacter and getDigit functions here

function f08() {
    // write here the user id and password by hand to have an example of 
    // the desired result of the task, use your own name
    // first name:  
    // last name: 
    // user id: 
    // password: 
    
    
}

// Write checkDate and luckyNumber functions here

function f09() {

}
