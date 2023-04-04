// Define a function that returns an array of alphabets in either uppercase or lowercase
function getAlphabets(caseType = "upper") {
    const alphabets = [];

    // Determine the starting and ending Unicode code points based on the case type
    const startCode = caseType === "upper" ? 65 : 97;
    const endCode = startCode + 25;

    // Loop through the Unicode code points for the letters and add them to the alphabets array
    for (let codePoint = startCode; codePoint <= endCode; codePoint++) {
        alphabets.push(String.fromCharCode(codePoint));
    };

    return alphabets;
};

// Define a function that returns the position of an alphabet in the alphabets array after shifting it by 13 places
function position(alphabets, alphabet) {
    let newPosition = alphabets.indexOf(alphabet) - 13;
    if (0 <= newPosition && newPosition <= 26) {
        return newPosition;
    } else {
        return newPosition + 26;
    };
};

// Define the main function that implements the ROT13 cipher
function rot13(str) {
    const alphabets = getAlphabets("upper");
    let strList = str.split('');
    let newString = [];

    // Loop through each character in the input string
    for (let char of strList) {
        if (alphabets.includes(char)) {  // If the character is an alphabet, shift it by 13 places and add it to the new string
            newString.push(alphabets[position(alphabets, char)]);
        } else {  // If the character is not an alphabet, add it to the new string as it is
            newString.push(char);
        };
    };
    
    return newString.join('');  // Return the new string with the ROT13 cipher applied to it
}
const assert=require('assert')
assert.equal(rot13("SERR PBQR PNZC"),'FREE CODE CAMP');
assert.equal(rot13("SERR CVMMN!"),'FREE PIZZA!');
assert.equal(rot13("SERR YBIR?"),'FREE LOVE?');
assert.equal(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."),'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.');

