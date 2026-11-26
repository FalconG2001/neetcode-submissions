class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        const len = nums.length;
        if(len === 1) return nums[0];
        let maxSum = -Infinity, currSum = 0;
        for(let i = 0; i < len; i++){
            currSum += nums[i];
            maxSum = Math.max(currSum, maxSum);
            if(currSum <= 0) currSum = 0;
        }

        return maxSum;
    }
}
