<div align="center">
  <h1>Guia do Primeiro PR</h1>
  <img src="public/PerCurso2.svg" alt="PerCurso" width="350px">
  <hr>
</div>

Bem-vindo ao **Guia do Primeiro Pull Request (PR) do PerCurso!** Estamos empolgados com sua contribuição para ajudar estudantes a explorar e planejar percursos acadêmicos da melhor forma. Este guia foi feito para facilitar o processo de envio do seu primeiro PR, mesmo que você nunca tenha contribuído para projetos de open source (código aberto) antes. Vamos lá?
<hr>

## 1. Entendendo o PerCurso

O [PerCurso](https://percurso.vercel.app/) é um site estático open-source que organiza e apresenta os percursos acadêmicos de diferentes áreas de estudo, ajudando estudantes a entender melhor as disciplinas e suas interconexões. Ele é alimentado por arquivos Markdown (.md) no GitHub, que são renderizados em páginas HTML no site.

## 2. Requisitos Básicos

Antes de começar, você precisa:

1. Criar uma conta no [GitHub](https://github.com/signup?source=login).
2. Conhecimento básico de Git e Markdown (não se preocupe, é simples!).
3. Node.js e npm/yarn instalados (Opcional, caso vá rodar o site localmente para validar as mudanças.)

<br />
<p align="center">
  <img src="gifs/criando-conta.gif" alt="Criar conta no Github" height="320">
</p>

## 3. Fazendo seu Primeiro Pull Request
**Passo 1: Faça o Fork do Repositório.**

1. Acesse o [repositório oficial](https://github.com/luigischmitt/PerCurso) do PerCurso no GitHub.
2. Clique no botão Fork no canto superior direito.
3. Agora você terá sua cópia do repositório no seu perfil.

<br />
<p align="center">
  <img src="gifs/fork.gif" alt="Primeiro Fork" height="320">
</p>

**Passo 2: Clone o Repositório para sua Máquina.**

1. Copie o link HTTPS ou SSH do seu fork.
2. No terminal, clone o repositório:

```shell
git clone https://github.com/seu-usuario/PerCurso
```

**Passo 3:** Crie uma Branch para sua Contribuição

Antes de editar, crie uma nova branch para organizar suas mudanças:

```shell
git checkout -b nome-da-sua-branch
```

**Passo 4: Edite os Arquivos Necessários.**

Adicionar ou atualizar disciplinas:
1. Navegue até a pasta [/content](https://github.com/luigischmitt/PerCurso/tree/main/content).
2. Localize o arquivo .md da disciplina que deseja editar ou crie um novo arquivo.
3. Edite usando o formato Markdown. Siga os padrões do que já foi feito.

**Passo 5: Teste o Site Localmente (Esse passo é opcional!).**
1. Instale as dependências:
```shell
npm install
```
2. Rode o site localmente:
```shell
npm run dev
```
3. Acesse o site no navegador: http://localhost:3000.
4. Confira se as suas mudanças aparecem corretamente.

**Passo 6: Commit das Mudanças.**
1. Adicione os arquivos editados:
```shell
git add .
```
2. Faça o commit com uma mensagem descritiva:
```shell
git commit -m "Uma breve descrição sobre as mudanças feitas"
```

**Passo 7: Antes de enviar o Pull Request, verifique se o seu repositório remoto (no seu GitHub) está atualizado.**
```shell
git pull origin main
```

**Passo 8: Envie sua Branch para o Fork.**
```shell
git push origin nome-da-sua-branch
```

**Passo 9: Abra o Pull Request.**
1. Volte ao repositório no GitHub.
2. Clique no botão Compare & Pull Request.
3. Adicione um título descritivo e uma explicação clara do que você mudou.
4. Envie o PR para revisão.

**Passo 10: Aguarde a revisão e aceitação :)**

Seu Pull Request foi criado com sucesso e a curadoria do PerCurso já foi notificada sobre sua contribuição. Agora, é só aguardar a revisão das suas alterações. Caso sejam necessárias, os revisores poderão solicitar ajustes, e você terá a oportunidade de corrigir e aprimorar sua contribuição.

Assim que tudo estiver revisado e aprovado, seu PR será aceito e suas mudanças serão incorporadas ao projeto.

🎉 **Parabéns! Você acaba de enviar seu primeiro Pull Request!** 🚀

## Dicas adicionais

- Antes de contribuir para um projeto, tire um tempo para ler  o [código de conduta](/Código_de_conduta.md). Isso ajudará você a alinhar suas alterações com as expectativas da gente ;)

- Procure manter seu Pull Request simples e focado em uma única tarefa ou melhoria. Alterações menores são mais fáceis de revisar e têm maiores chances de serem aceitas rapidamente.

- Sempre mantenha uma postura respeitosa e receptiva ao feedback. Contribuir em projetos de código aberto é, acima de tudo, um trabalho em equipe, onde todos aprendem e crescem juntos.

