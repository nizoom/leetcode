/**
 * @param {number[]} stones
 * @return {number}
 */
 const lastStoneWeight = function(stones) {
   
      // find the 2 heaviest stones 

        //1. sort array from highest to lowest 
    let finalReturn = []
    function sortStonesByWeight(stones){
        return stones.sort(function(a, b){
            return b - a
        })
    }

    const sortedStones = sortStonesByWeight(stones)

    // 2. declare const where heaviestStones = first and second heaviest stones 

    let [heaviest, nextHeaviest] = sortedStones;
 
    // if x == y then destroy both stones
    // remove the initial two stones from the list 
    if(heaviest === nextHeaviest){
        sortedStones.splice(0, 2)
        console.log(sortedStones)
        if(gameOver(sortedStones)){
            return sortedStones[0]
        } else {
            lastStoneWeight(sortedStones)
        }
        
    } else {  // else y - x = new stone 
        // remove the initial two stones from the list 
        sortedStones.splice(0, 2)


        // add the remainder from the last 
        sortedStones.push(heaviest - nextHeaviest) 

        let unsortedStones = [...sortedStones]
        

        if(gameOver(unsortedStones)){
            return unsortedStones[0]
        } else {
            lastStoneWeight(unsortedStones)
        }
        
    }
   
    function gameOver(stones){
        // console.log(stones.length)
        // if(stones.length == 1){
        //     finalReturn.push(stones[0])
        // } if(stones.length == 0 ){
        //    finalReturn === 0;
        // } else {
        //     return false 
        // }
    }
    return finalReturn;
};

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.


console.log(lastStoneWeight([2,7,4,1,8,1]))