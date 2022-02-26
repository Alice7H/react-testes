# React Testing Library

O React Testing Library surgiu com uma abordagem centrada no usuário e com padrões para enfatizar boas práticas de semântica e acessibilidade.

Hoje faz parte do pacote padrão de uma aplicação feita com o Create React App, por isso foi usada nesta aplicação.

Teste de funções de regra de negócio
Teste de componente de UI

O framework Jest já vem instalado e configurado por padrão nos projetos iniciados com Create React App.

Ao rodar o comando `npm test`, a aplicação entrará no modo watch, e toda vez que você alterar algo no seu código, ele rodará os testes novamente.

Os arquivos de testes tem a extensão .test.js.

`describe` é uma função de agrupamento lógico. Segundo a documentação, isso não é necessário e nem recomendado.

Porém no curso essa função foi utilizada para descrever melhor cada cenário de teste.

`it` ou `test` são blocos com o nome do teste e seu código.

`expect` é uma função global para fazer asserções.

Deve-se haver a separação entre implementação da função e o teste.

Criar vários casos de teste ajuda para que o valor esteja correto em vários cenários.

Função pura não muda qualquer estado na aplicação, ela precisa sempre gerar o mesmo resultado com os mesmos argumentos, ela não depende de nenhum fator externo ou faz alterações globais na aplicação e temos a previsão do resultado para poder escrever um teste unitário.

## Teste com snapshot

Teste de snapshot é uma ferramenta para garantir que a interface do usuário (UI)não seja alterada inesperadamente.

`toMatchSnapshot` é uma função para comparar o snapshot criado.

`container.firstChild` é o elemento raiz do elemento renderizado.

Na primeira execução do teste, o terminal aponta para um novo snapshot escrito e cria uma pasta com o arquivo snapshot em JSON.

Toda vez que eu rodar o teste novamente, haverá uma checagem se o novo snapshot é igual ao primeiro e o terminal só avisará se o teste passou ou não.

Clicando na tecla `u` para update, atualizamos o snapshot propositalmente.
