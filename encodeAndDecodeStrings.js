/**
 * Encodes an array of strings to a single string.
 *
 * @param {string[]} strs - Array of strings to be encoded.
 * @return {string} - Encoded string.
 */
function encode(strs) {
    // Use a special character (e.g., '#') to separate individual strings
    const delimiter = '#';

    // Join the array of strings into a single string with the delimiter
    return strs.join(delimiter);
}

/**
 * Decodes a single string to an array of strings.
 *
 * @param {string} s - Encoded string.
 * @return {string[]} - Decoded array of strings.
 */
function decode(s) {
    // Split the encoded string using the delimiter to retrieve individual strings
    const delimiter = '#';
    return s.split(delimiter);
}

// Example of usage:
const originalStrings = ["apple", "banana", "cherry"];
const encodedString = encode(originalStrings);

console.log("Encoded String:", encodedString);

const decodedStrings = decode(encodedString);
console.log("Decoded Strings:", decodedStrings);
