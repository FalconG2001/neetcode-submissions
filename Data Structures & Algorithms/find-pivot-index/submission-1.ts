class Solution {
    len = 0;
    prefixSum = new Array() as number[];
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        this.len = nums.length;
        let currSum = 0;
        for(let i = 0; i < this.len; i++){
            currSum += nums[i];
            this.prefixSum.push(currSum);
        }

        for(let i = 0; i < this.len; i++){
            const lIdxr = i - 1;
            const rIdxl = i + 1, rIdxr = this.len - 1;

            const pivotLeft = lIdxr >= 0 ? this.prefixSum[lIdxr] : 0
            const pivotRight = this.rangeSum(rIdxl, rIdxr);

            if(pivotLeft === pivotRight) return i;
        }

        return -1;
    }

    rangeSum(l: number, r: number): number {
        if(r < 0 || (l == this.len - 1)) return 0;
        const leftVal = l > 0 ? this.prefixSum[l - 1] : 0;
        const rightVal = this.prefixSum[r];

        return rightVal - leftVal;
    }
}
