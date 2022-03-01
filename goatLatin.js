/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    // create a dictionary of vowels
    const vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    const ma = "ma"
    let newStr = ""
    let container = ""
    let counter = 1
    // loop through sentence and see if the 1st letter of word starts with any vowels then append "ma"
    for (letter in sentence) {

        if (vowel.includes(sentence[letter])) {
            newStr += sentence[letter]
            console.log(newStr)
        }

        if (sentence[letter] === " ") {
            newStr += container + "ma"
            container = ""
            // newStr += "ma"
            // newStr = newStr + sentence[letter]
            // Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
            for (let i = 0; i < counter; i++) {
                newStr += "a"
            }
            counter += 1

        }
        // if not a vowel, remove the 1st letter of the word and append that letter to the end of the word and add "ma"
        if (!vowel.includes(sentence[letter]) && ((sentence[letter - 1] === " ") || (letter == 0))) {
            container = sentence[letter]

        } else if (!vowel.includes(sentence[letter])) {
            newStr += sentence[letter]
            console.log(newStr)
        }
        // if(!vowel.includes(sentence[letter])){
        //     newStr = newStr + sentence[letter]
        //     console.log(newStr)
        // }
    }
    newStr += container + ma
    for (let i = 0; i < counter; i++) {
        newStr += "a"
    }
    console.log(newStr)
    return newStr
};

let sentence1 = "I speak Goat Latin"
let sentence2 = "The quick brown fox jumped over the lazy dog"
toGoatLatin(sentence2)
/**The rules of Goat Latin are as follows:

// If a word begins with a vowel ('a', 'e', 'i', 'o', or 'u'), append "ma" to the end of the word.
// For example, the word "apple" becomes "applema".
// If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".
// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end, and so on.
*/
/** Example 1:
Input: sentence = "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
Example 2:
Input: sentence = "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
*/
