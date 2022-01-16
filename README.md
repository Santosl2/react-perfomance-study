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

# useCallback

- Irá "cachear" a função, e só será atualizada quando uma das props do array de dependência for alterado, caso contrário será a mesma função desde o primeiro render.
