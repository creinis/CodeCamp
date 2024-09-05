
# Instalar pipenv:

pip install pipenv

# Criar um diretório para o projeto e navegar até ele:

mkdir myproject
cd myproject

# Criar um ambiente virtual e instalar Django:

pipenv install django

# Ativar o ambiente virtual:

pipenv shell

# Verificar a versão do Python e do Django:

python --version
python -m django --version

# Criar um novo projeto Django:

django-admin startproject myproject .

# Navegar para o diretório do projeto:

cd myproject

# Criar um arquivo requirements.txt com as bibliotecas necessárias:

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

# Instalar as bibliotecas:

pip install -r requirements.txt

# Verificar as bibliotecas instaladas:

pip freeze

# Configurar o arquivo settings.py

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

CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
CRISPY_TEMPLATE_PACK = "bootstrap5"

# Configure a autenticação social para GitHub no final do settings.py:

AUTHENTICATION_BACKENDS = [
    'social_core.backends.github.GithubOAuth2',
    'django.contrib.auth.backends.ModelBackend',
]

LOGIN_URL = 'login'
LOGIN_REDIRECT_URL = 'home'
LOGOUT_URL = 'logout'
LOGOUT_REDIRECT_URL = 'login'

# Configurar database para mysql:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_database_name',
        'USER': 'your_database_user',
        'PASSWORD': 'your_database_password',
        'HOST': 'your_database_host',
        'PORT': 'your_database_port',
    }
}

# Configurar a autenticação social para GitHub:

SOCIAL_AUTH_GITHUB_KEY = 'YOUR_GITHUB_CLIENT_ID'
SOCIAL_AUTH_GITHUB_SECRET = 'YOUR_GITHUB_CLIENT_SECRET'

# Verificar as configurações:

python manage.py check


# Executar as migrações para configurar o banco de dados inicial:

python manage.py makemigrations
python manage.py migrate

# Verificar as migrações:

python manage.py showmigrations

# Executar os testes:

python manage.py test

# Criar o superuser:

python manage.py createsuperuser

# Verificar o superuser:

python manage.py shell


















