A Stack **matter-web-nextjs** provê Templates e Plugins para a inicialização e o desenvolvimento de projetos **NextJs** **monorepo** com **turbo**.

A Stack vem preparada para o desenvolvimento de aplicações **`microfrontend`**, utilizando o **`multi zones`**.

Para atingir o objetivo de prover a inicialização rápida de projetos multizones, a Stack **matter-web-nextjs** disponibiliza o template:

1. O **app-shell**, que cria uma aplicação **NextJS** com o **Turbo**. O template gera uma pasta de `packages` com três pastas: uma para configuração de eslint, uma para configurações de tsconfig e uma de shared que pode ser utilizada para shared components. Além disso, na pasta `apps` uma aplicação nextjs é gerada;

### **Visão Geral**

O template **app-shell** cria um projeto **NextJS** na versão 12.2.5 com o React 17.0.2 pronto para o desenvolvimento de aplicações web. O template é instalado com a biblioteca do **Citric** que é o design system da StackSpot.

Este projeto é preparado para a escrita e execução de testes unitários por meio das bibliotecas **Jest** e **Testing Library**. O projeto também tem o **`eslint`** e o **`prettier`** já configurados para garantir a padronização de escrita de código entre os desenvolvedores.

### Pré-requisitos

Para utilizar este template, é preciso ter instalado na sua máquina os itens abaixo:

- Ter o [**STK CLI**](https://stackspot.com.br/) baixado;
- NodeJS;
- Yarn ou NPM;

## Execução do projeto criado

1. Depois de criar o projeto, acesse o diretório do projeto criado e execute um dos comandos abaixo:

```bash
    yarn
```

```bash
    npm install
```

2. Após instalar as dependências do projeto, execute um dos comandos para executar o projeto:

```bash
    yarn dev
```

```bash
    npm run dev
```

3. Depois de executar o projeto, abra o browser em `http://localhost:3000`

4. Para realizar a execução dos testes unitários, execute um dos comandos abaixo:

```bash
yarn test
```

```bash
npm run test
```

Para saber mais sobre como adicionar novas Zonas no seu projeto, confira a documentação do plugin.
