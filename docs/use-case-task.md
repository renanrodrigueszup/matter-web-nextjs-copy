A Stack **matter-web-nextjs** provê uma task, além dos templates e plugins. A task é utilizada para atualizar o arquivo `.env` de forma automática a partir do arquivo `.env.template`.

### **Visão Geral**

A task adiciona as variáveis que existem no `.env.template` e não existem no `.env` com os respectivos valores. É importante reforçar que caso a variável exista nos dois arquivos com valores diferentes ela não será atualizada, isto porque podem existir informações que estão apenas no .env por questões de segurança e não desejamos que a task as substitua com valores de exemplo.

A sugestão é que o arquivo `.env.template` seja realmente um template das variáveis de ambiente do projeto, contendo as variáveis com dados não sensíveis e para casos onde os dados são sensíveis, apenas a key deve ser colocada, indicando que aquela variável deve ser informada para o correto funcionamento da aplicação.

### Pré-requisitos

Para utilizar este template, é preciso ter instalado na sua máquina os itens abaixo:

- Ter o [**STK CLI**](https://stackspot.com.br/) baixado;
- Uma Aplicação criada com a stack **matter-web-nextjs**;
- NodeJS;

## Execução da task

1. Na raíz do projeto execute o comando abaixo:

```bash
   stk run update-env
```

Pronto, o .env da aplicação foi atualizado com os dados do .env.template. Caso o .env não exista antes da execução da task ele será criado.
