class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        const len = nums.length;
        let i = 0, minLen = Infinity, currSum = 0;

        for(let j = 0; j < len; j++){
            currSum += nums[j];
            while(currSum >= target) {
                minLen = Math.min(minLen, j - i + 1);
                currSum -= nums[i];
                i++;
            }
        }

        if(minLen === Infinity) return 0;

        return minLen;
    }
}
