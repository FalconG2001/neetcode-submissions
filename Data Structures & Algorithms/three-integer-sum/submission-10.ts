class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const sortedNums = nums.sort((a,b) => a - b);
        console.log(sortedNums);
        const len = sortedNums.length;
        if(len < 3) return [];
        let i = 0;
        const resArr = new Array() as number[][];
        for(i = 0; i < len; i++ ) {
            const iEl = sortedNums[i];
            const twoSumCheckArr = [...nums.slice(0, i), ...nums.slice(i+1)];
            const twoSums = this.getAllTwoSum(twoSumCheckArr, -1 * iEl);
            const candidates = twoSums.map((x) => [iEl,...x]);
            candidates.forEach((candidate) => {
                if(candidate.length >= 3) this.pushIfUnique(resArr, candidate.sort());
            }) 
        }

        return resArr;
    }

    getAllTwoSum(nums: number[], target: number): number[][] {
        const len = nums.length;
        if(len < 2) return [];
        let ptr1 = 0, ptr2 = len - 1;
        const resArr = new Array() as number[][]
        while(ptr1 < ptr2){
            const sum = nums[ptr1] + nums[ptr2];
            if(sum === target) {
                this.pushIfUnique(resArr,[nums[ptr1], nums[ptr2]].sort());
                ptr1++;
                ptr2--;
            }
            else if (sum < target) {
                ptr1++;
            }else if (sum > target) {
                ptr2--;
            }
        }

        return resArr;
    }

    pushIfUnique(list: number[][], candidate: number[]): void {
        const exists = list.some(
            (item) =>
            item.length === candidate.length &&
            item.every((val, index) => val === candidate[index])
        );

        if (!exists) {
            list.push(candidate);
        }
    }
}
