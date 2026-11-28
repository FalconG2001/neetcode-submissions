class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let f = 0, s = 0;
        const len = nums.length;

        while(f < len){
            f = nums[nums[f]];
            s = nums[s];
            if(nums[f] === nums[s]) break;
        }

        let ss = 0;

        while(true){
            s = nums[s];
            ss = nums[ss];
            if(s === ss) return s;
        }
    }
}
