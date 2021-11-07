'use strict';

/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

 

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"
*/

/* #1

const toLowerCase = function(str) {
    let toLow = ''
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            toLow += String.fromCharCode(str.charCodeAt(i) + 32)
        } else {
            toLow += str[i]
        }
    }
    return toLow
};

*/

// #2
const toLowerCase = function(str) {

    return str.toLowerCase();
}





console.log(toLowerCase('hELLO'));
console.log(toLowerCase('here'));
console.log(toLowerCase('LOVELY'));