
    function calculateMinimumHP(dungeon: number[][]): number {
    if (!dungeon || dungeon.length === 0 || dungeon[0].length === 0) {
        return 1;
    }
    
    const rows = dungeon.length;
    const cols = dungeon[0].length;
    

    const dp: number[][] = Array(rows).fill(0).map(() => Array(cols).fill(Number.MAX_SAFE_INTEGER));
    
    
    for (let i = rows - 1; i >= 0; i--) {
        for (let j = cols - 1; j >= 0; j--) {
         
            if (i === rows - 1 && j === cols - 1) {
                dp[i][j] = Math.max(1, 1 - dungeon[i][j]);
                continue;
            }
            
        
            let minHealthFromRight = Number.MAX_SAFE_INTEGER;
            let minHealthFromDown = Number.MAX_SAFE_INTEGER;
            
            if (j + 1 < cols) {
                minHealthFromRight = Math.max(1, dp[i][j + 1] - dungeon[i][j]);
            }
            
            if (i + 1 < rows) {
                minHealthFromDown = Math.max(1, dp[i + 1][j] - dungeon[i][j]);
            }
            
            dp[i][j] = Math.min(minHealthFromRight, minHealthFromDown);
        }
    }
    return dp[0][0];
};
