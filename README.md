# Projeto com LESS via Node.js

Este projeto utiliza LESS, um pré-processador de CSS, via Node.js para facilitar o desenvolvimento e organização de estilos. Ele permite escrever estilos de forma mais eficiente e modular.

## Conteúdo do Projeto

O projeto inclui os seguintes arquivos e diretórios:

- **src/:** Este diretório contém os arquivos LESS, como `estilos.less`.
- **dist/:** Os arquivos compilados serão gerados neste diretório.
- **package.json:** Arquivo de configuração do Node.js que inclui dependências e scripts.
- **index.html:** Página HTML principal que utiliza os estilos compilados.
- **node_modules/:** Diretório que contém as dependências do Node.js (ignorado no repositório).

## Como Utilizar o Projeto

1. Clone o repositório para sua máquina local:

   ```bash
   git clone https://github.com/alvexdani/exercicio_ebac_frontend.git
   git checkout exercicio_less
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd exercicio_ebac_frontend
   ```

3. Instale as dependências do Node.js:

   ```bash
   npm install
   ```

4. Execute o script de compilação para converter os arquivos LESS em CSS:

   ```bash
   npm run build
   ```

5. Abra o arquivo `index.html` em seu navegador para visualizar a aplicação.

## Personalização

- **Adição de Estilos:** Edite os arquivos LESS em `src/` para adicionar ou modificar estilos.
- **Configuração do Build:** Personalize as configurações de compilação no arquivo `package.json` conforme necessário.

## Contribuições

Contribuições são bem-vindas! Se você encontrar maneiras de melhorar o projeto, corrigir erros ou adicionar recursos, sinta-se à vontade para criar uma _pull request_.

## Aviso

Este projeto é destinado a mostrar o uso do LESS via Node.js e pode ser expandido para atender às suas necessidades específicas de estilos.
