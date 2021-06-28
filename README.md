## API Valoriza
Aplicação para cadastro de usuários, tags e elogios utilizando Node.JS, Typescript e alguns frameworks e bibliotecas como express (web), typeorm (mapeamento banco de dados) e JWT (autenticação com Web Tokens). 

## Regras

- Cadastro de usuário
    -  Não é permitido cadastrar mais de um usuário com o mesmo e-mail
    - Não é permitido cadastrar usuário sem e-mail

&nbsp;
- Cadastro de TAG

    - Não é permitido cadastrar mais de uma tag com o mesmo nome
    - Não é permitido cadastrar tag sem nome
    - Não é permitido o cadastro por usuários que não sejam administradores

&nbsp;
- Cadastro de elogios
    - Não é permitido um usuário cadastrar um elogio para si
    - Não é permitido cadastrar elogios para usuários inválidos
    - O usuário precisa estar autenticado na aplicação

&nbsp;
- Extras:
    - Serviço de e-mail que notifica que o usuário recebeu um elogio
    - Serviços para colocar em produção (heroku)
    - Front end com a biblioteca cors + @types/cors -D
    - Classe handler para capturar erros e uma exceção customizável
    - Sentry para monitorar os erros da aplicação