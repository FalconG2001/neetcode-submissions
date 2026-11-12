class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const strMaps = new Object();
        for(let i = 0; i < strs.length; i++){
            const str = strs[i].split("").sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
            if(!strMaps[str]){
                strMaps[str] = new Array(strs[i]);
            }else{
                strMaps[str].push(strs[i]);
            }
        }

        return Object.values(strMaps).map((x: string[]) => x)
    }
}
