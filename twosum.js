function twoSum (nums, target) {

    let finalIndexes = []

    const lastIndex = nums.length - 1;
    
    nums.forEach((num, index) => {
        
        // try every next number 

        let selectingBPosition = nums.indexOf(num) === 0 ? 1 : 0 ; // can't land on the current index of num / has to skip it! 

        while(selectingBPosition <= lastIndex && finalIndexes.length < 1){

            selectingBPosition === index ? selectingBPosition ++ : selectingBPosition;

            if(testCombo(num, nums[selectingBPosition])){

                // console.log(num, nums[selectingBPosition])

                finalIndexes.push(index, selectingBPosition)

                break;
                
            }  else {
                selectingBPosition++
            }         

        }
     
    })

    console.log(finalIndexes)

    function testCombo(a, b){
      console.log('fired');
       return a + b === target
    }

    return finalIndexes;
};

twoSum([3,2,3], 6)








// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// if(num + nums[index + 1] === target){
//     finalIndexes.push(index, index + 1) 
// }