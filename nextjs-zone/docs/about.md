O plugin **nextjs-zone** adiciona na aplicação criada pela stack **matter-web-nextjs** uma nova zona já configurada.

Ao aplicar o plugin, serão solicitadas algumas informações para a criação da zona. Essas informações são:

- App name zone: nome do projeto a ser criado. Esse nome é utilizado para o package da aplicação e também para o nome da pasta a ser criado dentro de `apps`.
- Zone run port: porta que a aplicação vai rodar. Lembre-se que essa porta deve ser diferente das demais portas que as outras aplicações rodam.
- Zone base path: A url que será utilizada para acessar essa zona. Todas as rotas dessa zona terão esse base path como prefixo.

Todas as aplicações criadas com o plugin utilizam o arquivo .env que está na raíz. Desta forma, não é necessário gerenciar múltiplos envs para cada zona para executar e desenvolver as aplicações. Apenas para buildar as aplicações, envs específicos são necessários.
