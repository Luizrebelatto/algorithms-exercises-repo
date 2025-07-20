object Solution {
  def calculateMinimumHP(dungeon: Array[Array[Int]]): Int = {
    val m = dungeon.length
    val n = dungeon(0).length
    
    val dp = Array.ofDim[Int](m, n)
    
    dp(m - 1)(n - 1) = math.max(1, 1 - dungeon(m - 1)(n - 1))
    
    for (j <- n - 2 to 0 by -1) {
      dp(m - 1)(j) = math.max(1, dp(m - 1)(j + 1) - dungeon(m - 1)(j))
    }
    
    for (i <- m - 2 to 0 by -1) {
      dp(i)(n - 1) = math.max(1, dp(i + 1)(n - 1) - dungeon(i)(n - 1))
    }
    
    for (i <- m - 2 to 0 by -1) {
      for (j <- n - 2 to 0 by -1) {
        dp(i)(j) = math.max(1, math.min(dp(i + 1)(j), dp(i)(j + 1)) - dungeon(i)(j))
      }
    }
    
    dp(0)(0)
  }
}