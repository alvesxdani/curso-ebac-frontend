# Projeto com Automação Gulp para Processamento de Sass

Este projeto é configurado com Gulp, uma ferramenta de automação de tarefas em JavaScript, para facilitar o processamento de arquivos Sass. Essa configuração permite uma compilação eficiente de estilos Sass para CSS, melhorando o fluxo de trabalho de desenvolvimento.

## Conteúdo do Projeto

O projeto inclui os seguintes arquivos e diretórios:

- **style/in/:** Este diretório contém os arquivos Sass, como `estilos.scss`.
- **style/out/:** Os arquivos compilados serão gerados neste diretório.
- **gulpfile.js:** O arquivo de configuração do Gulp, que define as tarefas de automação.
- **package.json:** Arquivo de configuração do Node.js que inclui dependências e scripts.

## Como Utilizar o Projeto

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/alvesxdani/exercicios_ebac_frontend.git
   git checkout exercicio-gulp
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd exercicios_ebac_frontend
   ```

3. Instale as dependências do Node.js:

   ```bash
   npm install
   ```

4. Execute a tarefa de compilação do Gulp para processar os arquivos Sass:

   ```bash
   npm run build
   ```

5. Abra o arquivo `index.html` em seu navegador para visualizar a aplicação com os estilos Sass aplicados.

## Personalização

- **Adição de Estilos Sass:** Edite os arquivos Sass em `style/in/` para adicionar ou modificar estilos.
- **Configuração do Gulp:** Personalize as configurações de compilação no arquivo `gulpfile.js` conforme necessário.

## Contribuições

Contribuições são bem-vindas! Se você encontrar maneiras de melhorar o projeto, corrigir erros ou adicionar recursos, sinta-se à vontade para criar uma _pull request_.

## Aviso

Este projeto é destinado a demonstrar a automação de tarefas com Gulp para processamento de Sass e pode ser expandido conforme suas necessidades específicas.
