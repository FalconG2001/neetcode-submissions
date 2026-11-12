class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsMap = new Map();
        for(let i = 0; i < nums.length; i++){
            const val = numsMap.get(nums[i]);
            if(!val){
                numsMap.set(nums[i], 1);
            }else{
                numsMap.set(nums[i], val + 1);
            }
        }

        console.log(numsMap);

        const sortedMapByValue = new Map(
            [...numsMap.entries()].sort((a, b) => b[1] - a[1])
        );

        console.log(sortedMapByValue);

        const resArr = [...sortedMapByValue.keys()].map((key: number | null, i) => {
            if(i<k) return key;
            return null
        }).filter((val) => val !== null);

        return resArr;
    }
}
