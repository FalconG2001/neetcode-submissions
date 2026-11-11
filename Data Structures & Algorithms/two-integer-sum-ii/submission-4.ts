class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const len = numbers.length;
        let ptr1 = 0, ptr2 = len - 1;
        while(ptr2 > ptr1){
            const sum = numbers[ptr1] + numbers[ptr2];
            if(sum === target) return [ptr1+1, ptr2+1];
            if(sum < target){
                ptr1++;
            }else{
                ptr2--;
            }
        }

        return [];
    }
}
