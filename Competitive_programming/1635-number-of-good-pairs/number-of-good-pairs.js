/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    answer = 0
    for(i = 0;i <= nums.length;i++){
        for (j = 0;j <= nums.length;j++){
            if(nums[i]==nums[j]){
                if (i == j){
                    continue
                } else{
                    console.log(i,j)
                answer++
                }
            }
        }
    }
    return answer / 2
};