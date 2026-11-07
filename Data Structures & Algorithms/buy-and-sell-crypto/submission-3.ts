class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let i = 0;
        let res = 0;
        const len = prices.length;
        for(let j = 0; j < len; j++){
            if(j+1 === len){
                if(i === j || prices[i] > prices[j]) continue;
                res = Math.max(prices[j] - prices[i], res);
            }else if(prices[j] > prices[j+1]){
                res = Math.max(prices[j] - prices[i], res);
                if(prices[j+1] <= prices[i]) i = j + 1;
            }
        }

        return res;
    }
}
