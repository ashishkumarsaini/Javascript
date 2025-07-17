// cannnot redeclared in same scope, reassigned 
// const doesn't mean the constant value, 
// instead it reference to a constant reference which cannot be changes
// can change value of array/object constants
const name = "Ashish";
name = "John"; // TypeError: Assignment to constant variable

// constants are not hoisted
// should redeclare before use
console.log(check); // ReferenceError: Cannot access 'check' before initialization
const check = true;

// has block scope
// can be redeclare in another scope
const a = 10;
function checkScope() {
    const a = 15;
    console.log(a); // 15
};
console.log(a); // 10


