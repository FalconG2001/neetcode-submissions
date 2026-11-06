class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const obj = new Object({});
        for(let i = 0; i < nums.length; i++){
            if(obj[nums[i]]){
                return true;
            }
            obj[nums[i]] = 1;
        }
        
        return false;
    }
}
