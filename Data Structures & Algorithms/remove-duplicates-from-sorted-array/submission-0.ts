class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums: number[]): number {
        const len = nums.length;
        let l = 0, r = 0;

        for(r = 0; r < len; r++){
            if(nums[l] === nums[r]) continue;
            if(l + 1 < len) {
                const temp = nums[l + 1];
                nums[l + 1] = nums[r];
                nums[r] = temp;
            }
            l++;
        }

        return l + 1;
    }
}
