class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const len = nums.length;
        let prod = 1;
        let zero = 0;
        for(let num of nums){
            if(num !== 0){
                prod *= num;
            }else{
                zero++;
            }
        }

        if(zero > 1) {
            return new Array(len).fill(0);
        }

        const res = new Array(len) as number[];

        for(let i = 0; i < len; i++){
            if(zero > 0){
                res[i] = nums[i] === 0 ? prod : 0;
            }else{
                res[i] = prod / nums[i];
            }
        }

        return res;
    }
}
