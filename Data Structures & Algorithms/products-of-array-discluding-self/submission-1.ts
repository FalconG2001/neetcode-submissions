class Solution {
    prefixProducts = new Array() as number[];
    postfixProducts = new Array() as number[];
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const len = nums.length;
        let currProd = 1;
        for (let i = 0; i < len; i++) {
            currProd *= nums[i]
            this.prefixProducts.push(currProd);
        }
        currProd = 1;
        for (let i = len - 1; i >= 0 ; i--) {
            currProd *= nums[i]
            this.postfixProducts.push(currProd);
        }

        this.postfixProducts.reverse();

        let res = new Array() as number[];

        for (let i = 0; i < len; i++) {
            const leftVal = i > 0 ? this.prefixProducts[i - 1] : 1;
            const rightVal = i < len - 1 ? this.postfixProducts[i + 1] : 1;

            res.push(leftVal * rightVal);
        }

        return res;
    }
}
