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
    return 2 * Math.PI * r;
}

/**
 * Calculate circle area
 * @param {number} r    radius of a circle
 * @returns {number}    area of a circle 
 */
function calculateCircleArea (r) {
    return  Math.PI * Math.pow(r,2)

    
}

// Write Square functions here
function calculateSquareAround (s) {
    return s * s

}

// Paste here the random number generator function 
function getRndInteger (min, max) {
    return Math.floor(math.random() * (max - min + 1)) + min;
}


// Button functions
function f01() {
    let radius1 = Number(document.getElementById("radius1").value);   
    

    let c_area = (Math.PI) * (Math.pow(radius1, 2))
    let c_around =2 * (Math.PI) * radius1;

    document.getElementById("c_around").innerHTML= (Math.round(c_around));
    document.getElementById("c_area").innerHTML= (Math.round(c_area));

}

function f02() {
    let side = Number(document.getElementById("side").value);
    let bottom = Number(document.getElementById("bottom").value);
    let half_bottom = bottom /2;
    let height = Math.sqrt((Math.pow(side, 2)) - (Math.pow(half_bottom, 2)));
    let area = 2 * ((half_bottom * height)/2);
    let around = side + side + bottom;

    document.getElementById("t_height").innerHTML = Math.round(height);
    document.getElementById("t_around").innerHTML =around;
    document.getElementById("t_area").innerHTML = Math.round(area);




}

function f03() {

//    how to find the element where to print and use it    
//    let p = document.getElementById('circle');
//    print(p, ...);    

let radius = Number(document.getElementById("radius2").value); 
let area = calculateCircleArea(radius);
let around = calculateCircleAround(radius);
let p = document.getElementById("circle");
print(p, "Circle:", (Math.round(area)), (Math.round(around)));




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
