class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const obj = new Object();

        for(let i = 0; i < nums.length; i++){
            if(!obj[nums[i]]){
                obj[target - nums[i]] = i + 1;
            }else{
                return [i, obj[nums[i]] - 1];
            }
        }

        return [];
    }
}
