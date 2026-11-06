class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let ptr1 = 0;
        let ptr2 = s.length - 1;
        const ss = s.toLowerCase();

        while(ptr1 <= ptr2){
            if(!this.alphaNum(ss[ptr1])){
                ptr1++;
                continue;
            }
            if(!this.alphaNum(ss[ptr2])){
                ptr2--;
                continue;
            }
            if(ss[ptr1] !== ss[ptr2]){
                return false;
            }
            ptr1++;
            ptr2--;
        }

        return true;
    }

    alphaNum(c: string) {
        return (
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
