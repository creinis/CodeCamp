
# Guia para Criar um Projeto Django com Pipenv

## 1. Instalar Pipenv

```bash
pip install pipenv
```

## 2. Criar Diretório do Projeto e Navegar até Ele

```bash
mkdir myproject
cd myproject
```

## 3. Criar Ambiente Virtual e Instalar Django

```bash
pipenv install django
```

## 4. Ativar o Ambiente Virtual

```bash
pipenv shell
```

## 5. Verificar Versão do Python e Django

```bash
python --version
python -m django --version
```

## 6. Criar Novo Projeto Django

```bash
django-admin startproject myproject .
```

## 7. Navegar para o Diretório do Projeto

```bash
cd myproject
```

## 8. Criar Arquivo `requirements.txt` com Bibliotecas Necessárias

```bash
echo "Django==4.2.7" > requirements.txt
echo "asgiref==3.7.2" >> requirements.txt
echo "certifi==2023.7.22" >> requirements.txt
echo "cffi==1.15.1" >> requirements.txt
echo "charset-normalizer==3.2.0" >> requirements.txt
echo "crispy-bootstrap5==0.7" >> requirements.txt
echo "cryptography==41.0.6" >> requirements.txt
echo "defusedxml==0.7.1" >> requirements.txt
echo "django-crispy-forms==2.0" >> requirements.txt
echo "django-extensions==3.2.3" >> requirements.txt
echo "django-filter==23.2" >> requirements.txt
echo "django-taggit==4.0.0" >> requirements.txt
echo "djangorestframework==3.14.0" >> requirements.txt
echo "idna==3.4" >> requirements.txt
echo "importlib-metadata==6.8.0" >> requirements.txt
echo "Markdown==3.4.3" >> requirements.txt
echo "oauthlib==3.2.2" >> requirements.txt
echo "pycparser==2.21" >> requirements.txt
echo "PyJWT==2.7.0" >> requirements.txt
echo "python3-openid==3.2.0" >> requirements.txt
echo "pytz==2023.3" >> requirements.txt
echo "requests==2.31.0" >> requirements.txt
echo "requests-oauthlib==1.3.1" >> requirements.txt
echo "social-auth-app-django==5.2.0" >> requirements.txt
echo "social-auth-core==4.4.2" >> requirements.txt
echo "sqlparse==0.4.4" >> requirements.txt
echo "typing_extensions==4.7.1" >> requirements.txt
echo "urllib3==2.0.7" >> requirements.txt
echo "zipp==3.15.0" >> requirements.txt
```

## 9. Instalar Bibliotecas Listadas no `requirements.txt`

```bash
pip install -r requirements.txt
```

## 10. Configurar Arquivo `settings.py`

### Adicionar `INSTALLED_APPS`

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'crispy_forms',
    'crispy_bootstrap5',
    'social_django',
    'django_extensions',
]
```

### Configurar `CRISPY_ALLOWED_TEMPLATE_PACKS` e `CRISPY_TEMPLATE_PACK`

```python
CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
CRISPY_TEMPLATE_PACK = "bootstrap5"
```

### Configurar Autenticação Social para GitHub

```python
AUTHENTICATION_BACKENDS = (
    'social_core.backends.github.GithubOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)

SOCIAL_AUTH_GITHUB_KEY = 'YOUR_GITHUB_CLIENT_ID'
SOCIAL_AUTH_GITHUB_SECRET = 'YOUR_GITHUB_CLIENT_SECRET'

LOGIN_URL = 'login'
LOGOUT_URL = 'logout'
LOGIN_REDIRECT_URL = '/'
```

## 11. Executar Migrações para Configurar Banco de Dados Inicial

```bash
python manage.py makemigrations
python manage.py migrate
```

## 12. Criar Superusuário

```bash
python manage.py createsuperuser
```

## 13. Criar Arquivo `.gitignore`

### Criar Arquivo `.gitignore`

```bash
touch .gitignore
```

### Adicionar Conteúdo ao `.gitignore`

```plaintext
# Python
__pycache__/
*.py[cod]
*.pyo
.env

# Django
*.log
*.pot
*.pyc
*.pyo
*.pyd
*.sqlite3
db.sqlite3
media
staticfiles

# Virtualenv
.venv/
venv/
ENV/
env/
.env/
pip-log.txt
pip-delete-this-directory.txt

# VS Code
.vscode/

# macOS
.DS_Store

# Windows
Thumbs.db
ehthumbs.db
```

## 14. Configurar `settings.py` para Diferentes Bancos de Dados

### MySQL

#### Instalar Biblioteca Necessária

```bash
pip install mysqlclient
```

#### Configurar MySQL no `settings.py`

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
        'PORT': config('DB_PORT'),
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
        },
    }
}
```

### MongoDB

#### Instalar Biblioteca Necessária

```bash
pip install djongo
```

#### Configurar MongoDB no `settings.py`

```python
DATABASES = {
    'default': {
        'ENGINE': 'djongo',
        'NAME': 'mydatabase',
        'ENFORCE_SCHEMA': False,
        'CLIENT': {
            'host': 'mongodb://localhost:27017',
        }
    }
}
```

### PostgreSQL

#### Instalar Biblioteca Necessária

```bash
pip install psycopg2-binary
```

#### Configurar PostgreSQL no `settings.py`

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
        'PORT': config('DB_PORT', default='5432'),
    }
}
```

## 15. Criar Arquivo `.env` e Carregar Variáveis no `settings.py`

### Instalar Biblioteca Necessária

```bash
pip install python-decouple
```

### Criar Arquivo `.env`

```bash
touch .env
```

### Adicionar Conteúdo ao `.env`

```plaintext
SECRET_KEY=your_secret_key
DEBUG=True
DB_NAME=mydatabase
DB_USER=mydatabaseuser
DB_PASSWORD=mypassword
DB_HOST=localhost
DB_PORT=5432
```

### Carregar Variáveis do `.env` no `settings.py`

```python
from decouple import config

SECRET_KEY = config('SECRET_KEY')
DEBUG = config('DEBUG', default=False, cast=bool)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
        'PORT': config('DB_PORT', default='5432'),
    }
}
```

## 16. Configurações de Arquivos Estáticos

### Criar Diretórios para Arquivos Estáticos e Mídia

```bash
mkdir -p static/css static/js static/images media
```

### Configurar `settings.py`

```python
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
STATIC_ROOT = BASE_DIR / 'staticfiles'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
```

### Padrão de Nomenclatura para Arquivos

- CSS: `styles.css`
- JavaScript: `scripts.js`
- HTML: `index.html`
- Imagens: `logo.png`, `background.jpg`

### Comandos para Coletar Arquivos Estáticos

```bash
python manage.py collectstatic
```

## 17. Diferença entre `BASE_DIR`

### Usando `Path`

```python
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
```

### Usando `os.path`

```python
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
```

Recomendo usar `Path` se você estiver usando Python 3.6 ou superior, pois é mais moderno e oferece uma interface mais intuitiva para manipulação de caminhos de arquivos.

---
