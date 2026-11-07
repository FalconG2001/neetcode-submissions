class Solution {
    pairs = {
        "[": "]",
        "(": ")",
        "{": "}"
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const len = s.length;
        if(len % 2 !== 0) return false;

        const stack = new Array();

        for(let i = 0; i < len; i++){
            if(this.pairs[s[i]]) stack.push(s[i]);
            else if(!this.bracketPairs(stack.pop(), s[i])) {
                return false
            }
        }

        return stack.length === 0;
    }

    bracketPairs(a: string, b: string): boolean {
        if(this.pairs[a] === b) {
            return true;
        }
        return false;
    }
}
