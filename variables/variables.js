// LET

// cannot redeclare in same scope
// can be reassigned
let name = "Ashish";
name = "John"; // name: "John"

// let are not hoisted
// should redeclare before use
// console.log(check); // ReferenceError: Cannot access 'check' before initialization
// let check = true;

// has block scope
// can be redeclare in another scope
let a = 10;
let b = 20;
function checkScope() {
    let a = 15;
    b = 20
    console.log(a); // 15
    console.log(b); // 20
};
console.log(a); // 10
console.log(b) // 20

/*--------------------------------------------------------------------------------------------- */

// VAR

// can redeclare in same scope
// can be reassigned
var age = "10";
var age = "50"; // name: "50"

// var are hoisted
console.log(check); // no error, check: undefined
var check = true;

// does not has block scope
{
    var xyz = 100;
}
console.log(xyz); // xyz: 100


// not use let/var/const -> declared globally
function declareGlobal(params) {
    globalXYZ = 4000;
}
declareGlobal();
console.log(globalXYZ); // globalXYZ: 4000
