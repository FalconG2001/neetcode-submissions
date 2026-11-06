class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const obj1 = new Object({});

        for(let i = 0; i < s.length; i++){
            if(!obj1[s[i]]){
                obj1[s[i]] = 0;
            }

            obj1[s[i]]++;
        }

        for(let i = 0; i < t.length; i++){
            if(!obj1[t[i]]){
                return false;
            }
            
            obj1[t[i]]--;
        }

        if(Object.values(obj1).some((val) => val !== 0)){
            return false
        }

        return true;
    }
}
