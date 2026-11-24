class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums: number[], k: number): boolean {
        const len = nums.length;
        const hash = new Set<number>();
        let i = 0;

        for(let j = 0; j < len; j++){
            if(j - i > k){
                hash.delete(nums[i]);
                i++;
            }

            if(hash.has(nums[j])){
                return true;
            }

            hash.add(nums[j]);
        }

        return false;
    }
}
