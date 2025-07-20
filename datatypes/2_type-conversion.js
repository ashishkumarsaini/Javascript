// String

let name = "Ashish";
typeof name // 'string'

Number(name); // NaN
Number('11'); // 11
Boolean(name); // true
BigInt('') // 0n

// Number

let count = 12;
typeof count // 'number'

String(count) // '12'
Boolean(count); // true
BigInt(count) // 12n

// Bigint

let bigNumber = 111n;
typeof bigNumber // 'bigint'

String(bigNumber) // '111'
Number(bigNumber) // 111
Boolean(1n) // true
Boolean(0n) // false

// Boolean

let flag = true;
typeof flag // boolean

String(true) // 'true'
Number(true) // 1
BigInt(true) // 1n

// Undefined

let check;
typeof check // 'undefined'

String(undefined) // 'undefined'
Number(undefined) // NaN
Boolean(undefined) // false

// Null

let value = null;
typeof value // 'null'

String(null) // 'null'
Number(null) // 0
Boolean(null) // false

// Symbol



// Object

const objectExample = {key: "value"};
typeof a // 'object'

Number(objectExample) // NaN
Boolean(objectExample) // true
String(objectExample) // '[object Object]'
