class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const len = s.length;
        let i = 0, maxLen = -Infinity, maxF = 0;
        const map = new Map<string, number>();

        for(let j = 0; j < len; j++) {
            map.set(s[j], (map.get(s[j]) || 0) + 1);
            maxF = Math.max(maxF, map.get(s[j]));

            while((j - i + 1) - maxF > k){
                map.set(s[i], map.get(s[i]) - 1);
                i++;
            }

            maxLen = Math.max(maxLen, j - i + 1);
        }

        return maxLen === -Infinity ? 0 : maxLen;
    }
}
