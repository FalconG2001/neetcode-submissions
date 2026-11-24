class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        const len = nums.length;
        for(let i = 0; i < len; i++) {
            const hash = new Set<number>();
            hash.add(nums[i]);
            for (let j = i + 1; j < Math.min(len, i + k + 1); j++){
                if(hash.has(nums[j])) return true;
                hash.add(nums[j]);
            }
        }

        return false;
    }
}
