# Projeto com Sass com Observação

Este projeto é configurado para utilizar Sass e observação de arquivos. A observação automática é realizada nativamente com o próprio compilador Sass. Isso simplifica o fluxo de trabalho, permitindo a compilação automática dos estilos sempre que os arquivos Sass são modificados.

## Conteúdo do Projeto

O projeto inclui os seguintes arquivos e diretórios:

- **style/in/:** Este diretório contém os arquivos Sass, como `estilos.scss`.
- **style/out/:** Os arquivos compilados serão gerados neste diretório.

## Como Utilizar o Projeto

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/alvesxdani/exercicios_ebac_frontend.git
   git checkout exercicio-sass
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd exercicios_ebac_frontend
   ```

3. Instale o compilador Sass globalmente (se ainda não estiver instalado):

   ```bash
   npm install -g sass
   ```

4. Execute a observação Sass para compilar automaticamente os arquivos:

   ```bash
   sass --watch src/estilos.scss dist/estilos.css
   ```

5. Abra o arquivo `index.html` em seu navegador para visualizar a aplicação com os estilos Sass aplicados.

## Personalização

- **Adição de Estilos Sass:** Edite os arquivos Sass em `src/` para adicionar ou modificar estilos.

## Contribuições

Contribuições são bem-vindas! Se você encontrar maneiras de melhorar o projeto, corrigir erros ou adicionar recursos, sinta-se à vontade para criar uma _pull request_.

## Aviso

Este projeto é destinado a demonstrar o uso do compilador Sass com observação nativa e pode ser expandido conforme suas necessidades específicas.
