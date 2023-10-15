"use strict";
/**
 * @returns true if the input string is a palindrome
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPallindrome = void 0;
function isPallindrome(str) {
    return str === str.split('').reverse().join('');
}
exports.isPallindrome = isPallindrome;
