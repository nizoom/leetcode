function twoSum (nums, target) {

//   matching pair = target = firstNum
    let finalPair;

    for(let i = 0 ; i < nums.length ; i++ ){
        const matchingPair = target -  nums[i];
        const arrCopyWithElRemoved = [...nums];
        arrCopyWithElRemoved.splice(i, 1);

        if(arrCopyWithElRemoved.includes(matchingPair)){
            console.log(i)
            finalPair = [i, arrCopyWithElRemoved.indexOf(matchingPair) + 1]
            i += 100
          
        }
    }   

    console.log(finalPair)
    return finalPair
};


twoSum([3,2,3,4,6,7], 11)


// let testArr = [1,2,3,4,5]
// testArr.splice(1, 1)
// console.log(testArr)





// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// if(num + nums[index + 1] === target){
//     finalIndexes.push(index, index + 1) 
// }