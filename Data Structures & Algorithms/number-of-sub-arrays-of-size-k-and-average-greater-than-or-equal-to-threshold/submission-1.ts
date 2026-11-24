class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr: number[], k: number, threshold: number): number {
        const len = arr.length;
        let i = 0;
        let currAvg = 0, currSum = 0, res = 0;

        for(let j = 0; j < len; j++){
            if(j - i + 1 < k){
                currSum += arr[j];
                continue;
            }
            currSum += arr[j];
            currAvg = Math.floor(currSum / k);
            if(currAvg >= threshold) res++;
            currSum -= arr[i];
            i++;
        }

        return res;
    }
}
