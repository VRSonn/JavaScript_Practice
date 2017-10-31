// Valerie Sonntag
// 2143282

/* Write a program called crypto.js that encrypts passwords containing
uppercase/lowercase characters, digits, and special characters. Use Pizza2Day!
For the password. */

// Pseudocode
/* Display to the user the password that will be encrypted
display a message so they know that it is being encrypted
create an array that contains the original value key
create an array that contains the encrypted value key
create an array for the password
itterate through the password array for each char at each index
for each character find the index value of that character in the original value array
for each index find the character corresponding to that index in the encrypted value key
display the new encrypted password to the user
*/

/*
This code will take Pizza2Day! and it will calculate an encrypted password.
this program will then show the encrypted password to the user.
*/

console.log("Passwrod: Pizza2Day!"); // display the password to encrypt
console.log("Encrypting........."); // display the encrypting line


var origValue = ['a', 'b', 'c', 'D', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'P', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '2', '!'
];
// array for the original letters

var encryptedValue = ['m', 'h', 't', 'F', 'g', 'k', 'b', 'p', 'j', 'w', 'e', 'r', 'q', 's',
    'l', 'N', 'i', 'u', 'o', 'x', 'z', 'y', 'v', 'd', 'c', 'a', '2', '!'
];
// array for the encrypted letters at the index we will want to output


// create an array for the password that will loop through
var passwordArray = ['P', 'i', 'z', 'z', 'a', '2', 'D', 'a', 'y', '!'];

var encryptedPassword = [];
//console.log(encryptedPassword.toString());
//encryptedPassword.toString()

// want to loop for each chat at index value < array length. i is index value
for (i = 0; i < passwordArray.length; i++) {
    var passwordChar = passwordArray[i];
    // var that calls to the password array and goes to the char at i
    var resultIndex = findIndex(passwordChar); // call on the findIndex function
    var resultEncrypt = findNewLetter(resultIndex);
    // call the findNewLetter function and pass in the resultIndex value
    //process.stdout.write(`${resultEncrypt}`); // displays the output on one line
    //return resultEncrypt;
    encryptedPassword[i] = resultEncrypt; // add at index i the result of encrypt
}
console.log("Encrypted Password: " + encryptedPassword.join(""));

function findIndex(origLetters) {
    //find the letter that matched from the password and return the index position
    var index = origValue.indexOf(origLetters);
    return index; // return the index value
}

function findNewLetter(indexOfOrig) {
    //pass in the index from the previous function and find the correlating
    //letter in the second array at that index
    var encrypedLetter = encryptedValue[indexOfOrig]; // find the char at the index
    if (passwordArray[i] === undefined){
      var encrypedLetter = 5;
    }
    return encrypedLetter; // return the new letter
}
