# memo

Quando o componente pai foi renderizado/renderizar ou algo dentro dele alterar,
antes de entrar no fluxo de renderização (Recriar a versão do DOM, fazer a comparação e fazer as mudanças)
ele irá comparar das props e estados desse componente e se nenhuma informação tiver mudando, o componente não entrará no fluxo de renderização.

Basicamente o memo funciona assim:

- Mudou alguma propriedade nesse componente? Não
- Mudou algum estado nesse componente? Não
- Mudou alguma informação que justificaria renderizar esse componente novamente? Não

  Caso todas as respostas sejam não, o componente não será renderizado novamente.

## Quando usar o memo?

- Pure Functional Components => Quando um componente é Puro funcional (ou seja, quando passamos props para ele)
- Render too often => quando o componente renderiza várias vezes (exemplo, quando colocamos um input e a props onChange nesse input, então o componente e irá renderizar várias vezes ao usuário digitar)
- Re-render com as mesmas propriedades (quando as props são as mesmas não é necessário)
- Components médios para grandes

# useMemo

- O useMemo só recuperará o valor memorizado quando o array receber uma atualização. Esta otimização ajuda a evitar cálculos caros em cada renderização.
- Se nenhum array for fornecida, um novo valor será calculado em cada renderização.
- Evitar re-calcular algo complexo

## Quando usar useMemo

- Para resolver problemas de igualdade referencial.
  - Igualdade referencial verifica se a função está na mesma posição da memória

# useCallback

- Irá memorizar a função, e só será atualizada quando uma das props do array de dependência for alterado, caso contrário será a mesma função desde o primeiro render.

## Quando usar useCallback

- Quando a função passa para vários outros components ou então essa função está dentro de um contexto
- Para resolver problemas de igualdade referencial.
  - Igualdade referencial verifica se a função está na mesma posição da memória

# Shallow Compare

- Usado no memo, useMemo
- Comparação rasa, apenas verificar se teve alguma alteração o componente, usando o operador ===

* Essa comparação se limita apenas string, inteiro, booleans, e float, visto que array comparado com array (ou objeto com objeto) retorna sempre false no javascript
