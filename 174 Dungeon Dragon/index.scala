object Solution {
  def calculateMinimumHP(dungeon: Array[Array[Int]]): Int = {
    if (dungeon.isEmpty || dungeon(0).isEmpty) return 1
    
    val rows = dungeon.length
    val cols = dungeon(0).length
    
    var dp = Array.fill(cols)(Int.MaxValue)
    
    dp(cols - 1) = math.max(1, 1 - dungeon(rows - 1)(cols - 1))
    
    for (j <- (0 until cols - 1).reverse) {
      dp(j) = math.max(1, dp(j + 1) - dungeon(rows - 1)(j))
    }
    
    for (i <- (0 until rows - 1).reverse) {
      dp(cols - 1) = math.max(1, dp(cols - 1) - dungeon(i)(cols - 1))
      
      for (j <- (0 until cols - 1).reverse) {
        val minHealthNeeded = math.min(dp(j), dp(j + 1))
        dp(j) = math.max(1, minHealthNeeded - dungeon(i)(j))
      }
    }
    
    dp(0)
  }
}