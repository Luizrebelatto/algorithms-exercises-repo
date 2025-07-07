# JavaScript Exercises com Testes Unitários

Este diretório contém exercícios de JavaScript com testes unitários configurados usando Jest.

## Configuração

### Instalar dependências
```bash
npm install
```

### Executar testes
```bash
# Executar todos os testes
npm test

# Executar testes em modo watch (recomendado durante desenvolvimento)
npm run test:watch

# Executar testes com relatório de cobertura
npm run test:coverage
```

## Estrutura de Testes

### Convenções de nomenclatura
- Arquivos de teste devem terminar com `.test.js` ou `.spec.js`
- Ou estar dentro de uma pasta `__tests__`

### Exemplo de estrutura
```
exercicio/
├── funcao.js          # Código da função
├── funcao.test.js     # Testes da função
└── README.md          # Documentação
```

### Exemplo de teste
```javascript
import { minhaFuncao } from './minha-funcao.js';

describe('minhaFuncao', () => {
  test('deve retornar o resultado esperado', () => {
    expect(minhaFuncao(2, 3)).toBe(5);
  });

  test('deve lidar com casos especiais', () => {
    expect(minhaFuncao(0, 0)).toBe(0);
  });
});
```

## Comandos Úteis

### Executar testes de um arquivo específico
```bash
npm test -- hello-world.test.js
```

### Executar testes de uma pasta específica
```bash
npm test -- hello-world/
```

### Executar testes com output detalhado
```bash
npm test -- --verbose
```

## Configuração do Jest

O Jest está configurado para:
- Suportar módulos ES6 (ESM)
- Executar em ambiente Node.js
- Gerar relatórios de cobertura
- Usar padrões de nomenclatura flexíveis para arquivos de teste

## Dicas para Escrever Testes

1. **Teste casos positivos**: Verifique se a função funciona com entradas válidas
2. **Teste casos negativos**: Verifique como a função se comporta com entradas inválidas
3. **Teste casos extremos**: Teste com valores mínimos, máximos e edge cases
4. **Use descrições claras**: Os nomes dos testes devem explicar o que está sendo testado
5. **Um teste por comportamento**: Cada teste deve verificar apenas um aspecto da função 