function isIsogram(str) {
    // Check for empty string edge case, if empty string is present then it is assumed to be an isogram
    if(str === ""){
        return true
    }

    else {
        // string is adjusted to lowercase since we are ignoring case
        const adjStr = str.toLowerCase()
        // string is split into an array of substrings and sorted alphabetically, the sort method will make it easier to check for characters that are the same ["a", "b", "c", "d", "a"] => ["a", "a", "b", "c", "d"]
        const strArray = adjStr.split('').sort()
        
        // this for loop begins at the 2nd element(index of 1) and checks its value against the 1st element(index of 0), it will return false if there is a duplicated character because of the sort method we previously applied which made it easier to group any characters, the loop continues for the entire length of the array
        for(let i = 1; i < strArray.length; i++){
            if(strArray[i] === strArray[i - 1]){
                return false
            }
        }

        // if no duplicated characters are detected in the loop then the loop will end and the function will return true to indicate that the string in the argument indeed is an isogram

        return true
        
    }
}

console.log(isIsogram(""))
console.log(isIsogram("abac"))
console.log(isIsogram("hello"))
console.log(isIsogram("friend"))