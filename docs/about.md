A Stack **matter-web-nextjs** provê Templates e Plugins para a inicialização e o desenvolvimento de projetos **NextJs** utilizando monorepo com o **turbo**.

A Stack vem preparada para o desenvolvimento de aplicações **`microfrontend`**, utilizando o [**`multizones`**](https://nextjs.org/docs/advanced-features/multi-zones).

Para atingir o objetivo de prover a inicialização rápida de projetos multizones, a Stack **matter-web-nextjs** disponibiliza um template:

1. O **app-shell**, que cria uma aplicação **NextJS** com o **Turbo**. O template gera uma pasta de `packages` com três pastas: uma para configuração de eslint, uma para configurações de tsconfig e uma de shared que pode ser utilizada para shared components. Além disso, na pasta `apps` uma aplicação nextjs é gerada;

O template já tem as bibliotecas do [**Citric**](https://citric.stackspot.com/), que é o design system da StackSpot, instaladas. Além disso, já está preparado para executar testes unitários utilizando as bibliotecas de testes **Jest** e **Testing Library** e possui o **`eslint`** e o **`prettier`** já configurados para garantir o padrão de escrita de código entre os desenvolvedores.

Além do template, a stack possui alguns plugins:

1. O Plugin **`nextjs-zone`** adiciona e configura uma nova zona. Esse plugin vai criar uma nova pasta dentro de `app` com uma aplicação next e já configura essa aplicação no **next.config** da aplicação shell. Além de, similar ao template, o plugin tem o citric já instalado e está preparado para testes.
