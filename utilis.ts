/**
 * @returns true if the input string is a palindrome
 */

export function isPallindrome(str: string): boolean {
    return str === str.split('').reverse().join('');
}