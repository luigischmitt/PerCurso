<div align="center">
  <h1>Script para Criar uma Nova Disciplina</h1>
  <img src="../public/PerCurso2.svg" alt="PerCurso" width="350px">
  <hr>
</div>

Este script automatiza a criação de uma nova disciplina dentro da estrutura `./content` e a geração de arquivos README dentro dessa pasta. É útil caso você deseje adicionar uma nova disciplina ao nosso site.

## Funcionalidades

- **Criação de Pastas**: O script cria uma nova pasta dentro do diretório `./content`.
- **Criação de Arquivos Markdown**: O script gera automaticamente os seguintes arquivos dentro da nova pasta:
  - `dicas.md`: Contém dicas úteis sobre o percurso.
  - `dificuldades.md`: Descreve as dificuldades comuns enfrentadas ao longo do percurso.
  - `extras.md`: Inclui conteúdos extras relacionados ao percurso.
  - `listas.md`: Contém listas úteis para quem está seguindo o percurso.
  - `provas.md`: Reúne provas ou testes antigos relacionados ao percurso.

## Como Usar

1. **Instalação**:
   Não é necessário instalar pacotes para usar este script. Apenas certifique-se de ter Python 3 instalado no seu sistema.

2. **Execução**:
   Execute o script no terminal com o seguinte comando:

    ```bash
   cd scripts
   ```
   ```bash
   python script.py
   ```

3. **Personalização**:
O nome da pasta não pode conter caracteres especiais, apenas caracteres alfanuméricos (letras e números).

## Considerações Finais

Este script é uma maneira simples e eficiente de organizar novas cadeiras do curso. Sinta-se à vontade para adaptá-lo conforme as suas necessidades :)
