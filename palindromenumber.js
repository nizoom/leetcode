const isPalindrome = function(x) {
    if(x < 0) {
        return false;
    }
    const numLength = x.toString().length;

    // split the number in halfs 
    const middleNum = numLength % 2 === 0 ? null : Math.floor(numLength / 2);
    const editedNumString = x.toString().split('')
    if(middleNum !== null){
           // for numbers with a length that is odd number 
        editedNumString.splice(middleNum, 1);
    }

    const firstHalf = editedNumString.slice(0, editedNumString.length / 2)
    const secondHalf = editedNumString.slice(editedNumString.length / 2)
    // console.log(firstHalf)
    // console.log(secondHalf.reverse())
    const result =  (firstHalf.toString() === secondHalf.reverse().toString() ? true : false)
    console.log(result)
    return result
    // reverse the second half and see if it === the first half 
    // const reversedSecondHalf = secondHalf.map((el, index) => {
        
    // })
    // if yes then return true / else false 
};

isPalindrome(121)