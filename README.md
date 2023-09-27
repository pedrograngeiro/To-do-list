# To-Do List App

Este é um projeto simples de uma aplicação To-Do List desenvolvida em HTML, CSS e JavaScript. Ele permite que os usuários criem, visualizem, editem e excluam tarefas em uma lista de afazeres.

## Funcionalidades

- Adicionar uma nova tarefa à lista ao preencher o campo de texto e clicar no botão "Add Item".
- Excluir uma tarefa da lista ao clicar no ícone de remoção ao lado da tarefa.

## Estrutura de Pastas e Arquivos

O projeto está organizado da seguinte forma:

- **assets**: Pasta que contém arquivos estáticos como CSS e JavaScript.
  - **css**: Contém os estilos da aplicação.
    - `style.css`: Estilos gerais para a aplicação.
  - **js**: Contém os scripts JavaScript da aplicação.
    - `app.js`: Script principal da aplicação.
    - `crud.js`: Funções para criar, ler, atualizar e excluir tarefas.
    - `dependencias.js`: Bibliotecas ou dependências necessárias.
    - `firebaseConfig.js`: Configuração para integração com Firebase (se aplicável).

- **components**: Pasta que contém os componentes da aplicação.
  - **container-esquerdo**: Componente para a parte esquerda da interface.
    - `container-esquerdo.css`: Estilos específicos para este componente.
    - `container-esquerdo.html`: Estrutura HTML para este componente.
    - `container-esquerdo.js`: Scripts específicos para este componente.
  - **footer**: Componente para o rodapé da aplicação.
    - `footer.html`: Estrutura HTML para este componente.
    - `footer.css`: Estilos específicos para este componente.
    - `footer.js`: Scripts específicos para este componente.
  - **header**: Componente para o cabeçalho da aplicação.
    - `header.css`: Estilos específicos para este componente.
    - `header.js`: Scripts específicos para este componente.
    - `header.html`: Estrutura HTML para este componente.
  - **painel**: Componente principal da aplicação.
    - **sistema-interno**: Subcomponente para o sistema interno.
      - **cards-sistema-interno**: Subcomponente para os cartões do sistema interno.
        - `cards-sistema-interno.css`: Estilos específicos para este subcomponente.
        - `cards-sistema-interno.html`: Estrutura HTML para este subcomponente.
        - `cards-sistema-interno.js`: Scripts específicos para este subcomponente.
  - **Tarefas**: Componente para a gestão das tarefas.
    - **container-main**: Subcomponente para o conteúdo principal.
      - `container-main.css`: Estilos específicos para este subcomponente.
      - `container-main.html`: Estrutura HTML para este subcomponente.
      - `container-main.js`: Scripts específicos para este subcomponente.
    - **container-middle**: Subcomponente para a exibição das tarefas.
      - `container-middle-output.css`: Estilos específicos para este subcomponente.
      - `container-middle-output.html`: Estrutura HTML para este subcomponente.
      - `container-middle-output.js`: Scripts específicos para este subcomponente.
    - **content**: Subcomponente para o conteúdo geral.
      - `content.css`: Estilos específicos para este subcomponente.
      - `content.html`: Estrutura HTML para este subcomponente.
      - `content.js`: Scripts específicos para este subcomponente.

- **index.html**: Página principal da aplicação.
- **painel.html**: Página que contém o painel principal da aplicação.

## Executando o Projeto

Para executar o projeto, siga estas etapas:

1. Clone este repositório em sua máquina local usando o seguinte comando:

   ```bash
   git clone https://github.com/pedrograngeiro/to-do-list.git
    ```
    Or
    
    ```bash
    git clone https://gitlab.com/pedrograngeiro/to-do-list
    ```



2. Navigate to the project directory:

<pre>
cd to-do-list
</pre>

3. Open the `index.html` file in your preferred browser.

## Contribution

Contributions are welcome! If you find any bug or have any improvements to suggest, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


