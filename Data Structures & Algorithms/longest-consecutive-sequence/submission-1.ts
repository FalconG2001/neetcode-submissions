class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const len = nums.length;
        if(!len || len === 1) return len;
        const sorted = nums.sort((a, b) => a - b);
        let longest = 0, tempLongest = 0;
        for(let i = 0; i < len; i++){
            const nextEl = sorted[i + 1];
            const currEl = sorted[i];
            if(nextEl === currEl) continue;
            else if(nextEl === currEl + 1){
                tempLongest++;
            }else{
                longest = Math.max(longest, tempLongest);
                tempLongest = 0;
            }
        }

        return Math.max(longest, tempLongest) + 1;
    }
}
