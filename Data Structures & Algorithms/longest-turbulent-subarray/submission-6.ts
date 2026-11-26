class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr: number[]): number {
        const len = arr.length;
        if(len === 0 || len === 1) return len;
        let maxLen = -Infinity;
        let last = null as string | null;
        let i = 0;

        for(let j = 1; j < len; j++){
            if(arr[j] > arr[j - 1]) {
                if(last === null) {
                    last = ">";
                }
                else if(last === "<") {
                    last = ">"
                }else if(last === ">"){
                    i++;
                    j = i;
                    last = null;
                }
            }else if(arr[j] < arr[j-1]){
                if(last === null) {
                    last = "<";
                } else if(last === ">") {
                    last = "<"
                } else if(last === "<"){
                    i++;
                    j = i;
                    last = null;
                }
            }else if(arr[j] === arr[j-1]){
                i++;
                j = i;
                last = null;
            }
            maxLen = Math.max(maxLen, j - i + 1);
        }

        return maxLen === -Infinity ? 0 : maxLen;
    }
}
