// String used to store text

//can be wrapped in "" or '' or ``(Template String ES6)

const singleQuotedText = 'this is a single quoted string';
const doubleQuotedText = "this is a double quoted string";
const templateStringText = `this is a templated string`;

const addedSingleQuoteInText = "this contains ' as a text";
const doubleQuoteInText = 'this contains " as a text';
const templateStringWithQuote = `this contains both ' and " as a text`;

const singleQuotedTextWithSingleQuote = 'this contain \' single quote';
const doubleQuotedTextWithDoubleQuote = "this contain \" double quote";
const templateStringWithTilde = `this contain \``;

// Strings as Object
// strings are primitive
// also define using new keyword, complicate the code and slows dows the execution

'text' == new String('text') // true
'text' === new String('text') // false

// Comparing two JavaScript objects always returns false
const stringObj = new String('text');
const stringObj2 = new String('text');
stringObj == stringObj // false
stringObj === stringObj // false

// String Methods
// Javascript strings are primitive and immutable, all methods produce a new string without altering actual string.

// 1. string.length -> return length of string


// extracting string charcter

// 2. string.chatAt(position) -> return character at given position
'hey'.chatAt() // default 0 -> 'h'
'hey'.chatAt(100) // wrong position -> ''


// 3. string.chatCodeAt(position) -> returns ASCII code of character at given position
'hey'.charCodeAt() // default 0 -> 104
'hey'.charCodeAt(100) // wrong position -> NaN


// 4. string.at(position) -> return character at given position
// chatAt does not support negative position value. use of this allows to target string from the last letter.

'hey, this is a String'.at(-6) // last 6th letter -> S
'hey'.at(-100) // wrong position -> undefined 
'hey'.at(100) // wrong position -> undefined


// 5. String[position] Property Access
'hey'[0] // 'h'
'this is a text'[100] // undefined
const a = "string";
a[0] = 'b'; // read-only, no code error but does not work.


// 5. string.concat(...strings) -> joins two or more strings
'this is a '.concat('message'); // 'this is a message'
'hey!'.concat('how are you?', ' ', 'hope you\'re well.'); // 'hey! how are you? hope you're well.'
'hey!'.concat(['hello!', ' ', 'namaste', ' ', 'bye']); // 'hey! hello! namastey bye'


// Extracting string

// 6. string.slice(start, end) -> extract the part of string and returns the new string
'this is text'.slice() // 'this is text'
'this is text'.slice(0) // 'this is text'
'this is text'.slice(0, 6) // 6 position not included -> 'this i'
'this is text'.slice(-1) // extract string with 1 position not included -> 'this is tex'
'this is text'.slice(-1, 5) // end would not be valid if start is negative -> ''
'this is text'.slice(-1, -3) // end would not be valid if start is negative -> ''
'this is text'.slice(1, -2) // extract from 1 to 2 position from the last -> 'his is te'


// 7. string.substring(start, end) -> same as slice, negative positions are consider as 0
'this is text'.substring(0, 6) // 'this i'
'this is text'.substring(-1) // substring(0) -> 'this is text'
'this is text'.substring(-1 , 5) // substring(0, 5) -> 'this '


// 8. atring.toLowerCase -> convert string into lowercase


// 9. string.toUpperCase -> convert string into uppercase


// 10. string.isWellFormed()


// 11. string.toWellFormed()


// 12. string.trim() -> removes whitespaces space from start and end in the string


// 13. string.trimStart() -> removes whitespaces spaces from start only


// 14. string.trimEnd() -> removes whitespaces spaces from end only


// 15. string.padStart(maxLength, fillString) -> it padds the starting of the string with fill String
'this is text'.padStart(2, '!'); // '!!this is text'
'this is text'.padStart(2); // 'this is text'


// 16. string.padEnd(maxLength, fillString) -> it padds the end of the string with fill String
'this is text'.padStart(2, '!'); // 'this is text!!'
'this is text'.padStart(2); // 'this is text'


// 17. string.repeat(count) -> returns the repeated text
'this is text'.repeat(0) // ''
'this is text'.repeat(1) // 'this is text'
'this is text'.repeat(0) // 'this is textthis is text'


// 18. string.replace(searchValue, replaceValue) -> replace first search value with replaceValue
'this is string'.replace() // 'this is string'
'ABC'.replace('') // 'undefinedABC'
'this is string'.replace('','') // 'this is text'
'this is string'.replace(' ', '!') // 'this!is text'


// 19. string.replaceAll(searchValue, replaceValue) -> replace all search value with replaceValue
'this is string'.replace() // 'this is string'
'ABC'.replace('') // 'undefinedAundefinedBundefinedCundefined'
'this is string'.replace('','') // 'this is text'
'this is string'.replace(' ', '!') // this!is!text


// 20. string.split(splitter, limit) -> splits the text into multiple strings into an array
'this is string'.split() // ['this is string']
'this is string'.split('') // ['t', 'h', 'i', 's', ' ', 'i', 's', ' ', 's', 't', 'r', 'i', 'n', 'g']
'this is string'.split(' ' , 2) // ['this', 'is']
