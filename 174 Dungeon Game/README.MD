# 174 Dungeon Game [Link](https://leetcode.com/problems/dungeon-game/)

1. Define rows and colums, we are working with a rectangular matrix
  - `m` -> represents line
  - `n` -> represents columns 

```scala
// to get the number of rows, take the size of the matrix
val m = dungeon.length
// to get number of columns, take one specific line and take your size
val n = dungeon(0).length
```

2. Create a 2D array of the type that takes rows and columns as parameters

 - `dp[i][j]` -> represents the minimum health required to reach the princess
 - for each position in the dungeon, it will store the value needed to survive in that specific position


```scala
val dp = Array.ofDim[Int](m, n)
```

3. calculate variable that calculates the minimum health needed for the knight to survive in the princess position
 - `dp(m - 1)(n - 1)` -> cell in the bottom right corner of the dp matrix
 - the minimum amount of life needed to leave the room is 1


```scala
dp(m - 1)(n - 1) = math.max(1, 1 - dungeon(m - 1)(n - 1))
```

4.  Fill the last row (can only move right)
 - `m - 1` -> represents last row
 - `j` ->  column index in the last row
```scala
for (j <- n - 2 to 0 by -1) {
  dp(m - 1)(j) = math.max(1, dp(m - 1)(j + 1) - dungeon(m - 1)(j))
}
```

5.  Fill the last column (can only move down)
 - `n - 1` -> represents ultima linha
 - `i` ->  line index in the last column
```scala
for (i <- m - 2 to 0 by -1) {
  dp(i)(n - 1) = math.max(1, dp(i + 1)(n - 1) - dungeon(i)(n - 1))
}
```

6. Fill the rest of the DP table
```scala
    for (i <- m - 2 to 0 by -1) {
      for (j <- n - 2 to 0 by -1) {
        dp(i)(j) = math.max(1, math.min(dp(i + 1)(j), dp(i)(j + 1)) - dungeon(i)(j))
      }
    }
```

7. The result is the minimum initial health 
```scala
 dp(0)(0)
```