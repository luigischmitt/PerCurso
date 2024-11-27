<div align="center">
  <h1>Guia de Conversão PDF para Markdown</h1>
  <img src="public/PerCurso2.svg" alt="PerCurso" width="350px">
  <hr>
</div>

Olá! Que ótimo ver você engajado em ajudar a comunidade do **PerCurso** com a conversão de PDFs para Markdown (MD). Saiba que você também pode anexar o PDF ao PR caso não queira seguir esse passo a passo. Esse guia foi criado para facilitar o processo e garantir que o conteúdo seja bem estruturado e acessível para todos. Caso tenha dúvidas, não hesite em entrar em contato com a equipe responsável ou abrir uma issue no repositório.
<hr>

# Provas e Listas de Exercícios

1. Informações no topo do arquivo
2. Inclua as seguintes informações no início do arquivo, nesta ordem:
- Nome da disciplina (Obrigatório).
- Período de realização (se informado no PDF), por exemplo: 2021.1, 2020.2.
- Tipo de atividade (Prova ou Lista de Exercícios).
- Etapa (1º/2º/3º etapa ou outras, se informado).

Exemplo:
```shell
Disciplina: Cálculo I
Período: 2023.2  
Tipo: Prova  
Etapa: 2º etapa
```

# Seção "Questões"

1. Crie uma seção chamada Questões usando o Heading Level 3 (### Questões).
2. Insira as questões na mesma ordem e numeração do PDF, mantendo o enunciado original.
3. Use parágrafos comuns para os textos das questões.

# Seção "Resolução" (se disponível no PDF)

- Caso o material inclua resoluções, adicione a seção Resolução no final do arquivo, também utilizando Heading Level 3 (### Resolução).
- Inclua as resoluções das questões na mesma ordem e numeração. Você pode usar parágrafos comuns, listas com bullet points ou elementos de Markdown para organizar melhor.

# Acessibilidade e formatação

- Priorize o uso de Markdown puro sempre que possível (para fórmulas, tabelas, etc.).
- Utilize imagens apenas quando forem indispensáveis.
- Certifique-se de que o conteúdo seja claro e legível para todos os usuários.

# Outra opção

Se você não quiser ou não puder converter o PDF para Markdown, pode **enviá-lo como anexo no Pull Request**. Nossa equipe cuidará de linkar o arquivo ao nosso Drive e deixá-lo bem organizado no site para você! 

Muito obrigado por contribuir com o PerCurso! 🚀
