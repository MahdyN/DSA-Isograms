function isIsogram(str) {
    // Check for empty string edge case, if empty string is present then it is assumed to be an isogram
    if(str === ""){
        return true
    }

    else {
        // string is adjusted to lowercase since we are ignoring case
        const adjStr = str.toLowerCase()
        //
        const strArray = adjStr.split('').sort()
        
        for(let i = 1; i < strArray.length; i++){
            if(strArray[i] === strArray[i - 1]){
                return false
            }
        }

        return true
        
    }
}

console.log(isIsogram(""))