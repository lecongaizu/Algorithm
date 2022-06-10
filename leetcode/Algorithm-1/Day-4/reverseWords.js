/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    newString = s.split(" ")
    for (let i in newString){
        console.log(newString[i].split("").reverse().join(""))
        newString[i] = newString[i].split("").reverse().join("");
    }
    // console.log(newString.join(" "))
    return newString.join(" ");
    
};

reverseWords("Let's take LeetCode contest")