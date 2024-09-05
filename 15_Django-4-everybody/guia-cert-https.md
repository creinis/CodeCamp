# Gerar Certificado HTTPS para localhost

### Gerar Certificado Globalmente

**Vantagens**:
- **Reutilização**: Um único certificado pode ser usado em vários projetos.
- **Facilidade de Gerenciamento**: Menos arquivos para gerenciar.

**Passos**:
1. **Gerar o Certificado Globalmente**:
   - Abra o terminal do seu Mac (não o terminal integrado do VS Code).
   - Navegue até a pasta raiz onde você deseja armazenar o certificado (por exemplo, `~/certificados`):
     ```bash
     mkdir -p ~/certificados
     cd ~/certificados
     ```
   - Gere o certificado:
     ```bash
     openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
     ```

2. **Configurar o Projeto Django para Usar o Certificado**:
   - No seu arquivo `settings.py` do projeto Django, adicione o caminho para os arquivos de certificado e chave:
     ```python
     SSL_CERTIFICATE = os.path.expanduser('~/certificados/cert.pem')
     SSL_KEY = os.path.expanduser('~/certificados/key.pem')
     ```

3. **Executar o Servidor Django com HTTPS**:
   - No terminal integrado do VS Code (ou qualquer terminal), navegue até a pasta do seu projeto Django e execute:
     ```bash
     python manage.py runserver_plus --cert-file ~/certificados/cert.pem --key-file ~/certificados/key.pem
     ```

### Gerar Certificado Localmente no Pipenv

**Vantagens**:
- **Isolamento**: Cada projeto tem seu próprio certificado, evitando conflitos.
- **Segurança**: Certificados não são compartilhados entre projetos.

**Passos**:
1. **Gerar o Certificado Localmente**:
   - Abra o terminal integrado do VS Code.
   - Navegue até a pasta do seu projeto Django.
   - Gere o certificado:
     ```bash
     openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365
     ```

2. **Configurar o Projeto Django para Usar o Certificado**:
   - No seu arquivo `settings.py`, adicione o caminho para os arquivos de certificado e chave:
     ```python
     import os
     BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
     SSL_CERTIFICATE = os.path.join(BASE_DIR, 'cert.pem')
     SSL_KEY = os.path.join(BASE_DIR, 'key.pem')
     ```

3. **Executar o Servidor Django com HTTPS**:
   - No terminal integrado do VS Code, execute:
     ```bash
     python manage.py runserver_plus --cert-file cert.pem --key-file key.pem
     ```

### Conclusão

Se você prefere reutilizar o certificado em vários projetos, gerar o certificado globalmente é a melhor opção. Caso contrário, se você deseja manter os certificados isolados para cada projeto, gerar localmente no Pipenv é mais adequado.
