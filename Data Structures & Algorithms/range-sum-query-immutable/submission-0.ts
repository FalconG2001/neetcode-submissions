class NumArray {
    nums = new Array() as number[];
    prefixSum = new Array() as number[];
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        this.nums = [...nums];
        let tempTotal = 0;
        for(let i = 0; i < nums.length; i++){
            tempTotal += nums[i];
            this.prefixSum.push(tempTotal);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        const rightVal = this.prefixSum[right];
        const leftVal = left > 0 ? this.prefixSum[left - 1] : 0;
        return rightVal - leftVal;
    }
}
