object Solution {
  def calculateMinimumHP(dungeon: Array[Array[Int]]): Int = {
    // Caso a matriz dungeon esteja vazia ou sem colunas, retorna 1 (vida mínima para começar)
    if (dungeon.isEmpty || dungeon(0).isEmpty) return 1

    //  numero de linhas
    val rows = dungeon.length
    // numero de colunas
    val cols = dungeon(0).length

    // Matriz dp de tamanho (rows + 1) x (cols + 1) para facilitar o controle das bordas
    val dp = Array.ofDim[Int](rows + 1, cols + 1)

    // Inicializamos a "coluna extra" (coluna fictícia à direita) com infinito (Int.MaxValue)
    // Isso impede que o algoritmo tente ir além da última coluna
    for (i <- 0 to rows) {
      dp(i)(cols) = Int.MaxValue
    }

    // Inicializamos a "linha extra" (linha fictícia inferior) com infinito (Int.MaxValue)
    // Isso impede que o algoritmo tente ir além da última linha
    for (j <- 0 to cols) {
      dp(rows)(j) = Int.MaxValue
    }

    // Base do algoritmo: para chegar na última célula com vida ≥ 1
    // É como se o herói precisasse ter pelo menos 1 de vida ao "entrar" na célula final
    dp(rows)(cols - 1) = 1
    dp(rows - 1)(cols) = 1

    // preencher de tras pra frente (bottom-up)
    for (i <- (0 until rows).reverse; j <- (0 until cols).reverse) {
      // vida necessaria para sair da celula
      val minHealthNeeded = math.min(dp(i + 1)(j), dp(i)(j + 1))

      // Vida mínima ao entrar nesta célula:
      // Se dungeon(i)(j) for negativo, significa que há dano e precisamos de mais vida
      // Se for positivo, temos um bônus que reduz a necessidade de vida
      // Mas sempre precisamos de no mínimo 1 de vida!
      // dp(i)(j) -> vida minima para entrar na celula
      dp(i)(j) = math.max(1, minHealthNeeded - dungeon(i)(j))
    }

    // Valor minimo para iniciar na celula 1
    dp(0)(0)
  }
}
