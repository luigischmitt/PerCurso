import os

class TextStyles:
    INFO = '\033[96m'      # Cyan
    SUCCESS = '\033[32m'   # Green
    ERROR = '\033[31m'     # Red
    HIGHLIGHT = '\033[93m' # Yellow
    RESET = '\033[0m'      # Reset to default
    BOLD = '\033[1m'       # Bold text
    UNDERLINE = '\033[4m'  # Underlined text

BASE_PATH = './content'

FILES = {
    'dicas.md': '''
## Dicas

Dicas sobre a disciplina.
'''.strip(),

    'dificuldades.md': '''
## Dificuldades

Dificuldades comuns dessa disciplina.
'''.strip(),

    'extras.md': '''
## Extras

Conteúdos extras sobre a disciplina.
'''.strip(),

    'listas.md': '''
## Listas

Listas dessa disciplina.
'''.strip(),

    'provas.md': '''
## Provas

Provas antigas da disciplina.
'''.strip(),
}

def _create_folder(folder_name):
    path = os.path.join(BASE_PATH, folder_name)
    os.makedirs(path, exist_ok=True)

def _create_file(folder_name, filename):
    path = os.path.join(BASE_PATH, folder_name, filename)
    with open(path, 'w', encoding='utf-8') as file:
        file.write(FILES[filename])

def create_files(folder_name):
    for filename in FILES:
        _create_file(folder_name, filename)
        print(f'  {TextStyles.SUCCESS}-{filename}{TextStyles.RESET}')

def check_folder_name(folder_name):
    if not folder_name.isalnum():
        raise Exception(f'{TextStyles.ERROR}Erro: O nome da pasta não pode conter caracteres especiais!{TextStyles.RESET}')

if __name__ == '__main__':
    try:
        folder_name = input(f"Digite o nome da nova disciplina para o PerCurso: {TextStyles.RESET}")
        check_folder_name(folder_name)
        
        print(f'{TextStyles.HIGHLIGHT}Preparando para criar a pasta "{folder_name}"...{TextStyles.RESET}')
        
        _create_folder(folder_name)
        create_files(folder_name)

        print(f'{TextStyles.BOLD}Processo Concluído com Sucesso!{TextStyles.RESET}')

    except Exception as error:
        print(f'{TextStyles.ERROR}{str(error)}{TextStyles.RESET}')
