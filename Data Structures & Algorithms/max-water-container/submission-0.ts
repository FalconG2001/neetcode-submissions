class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        const len = heights.length;
        let max = 0;
        let ptr1 = 0, ptr2 = len - 1;
        while(ptr1 < ptr2){
            const area = Math.min(heights[ptr1], heights[ptr2]) * (ptr2 - ptr1);
            max = Math.max(max, area);
            if(heights[ptr1] > heights[ptr2]){
                ptr2--;
            }else{
                ptr1++;
            }
        }

        return max;
    }
}
