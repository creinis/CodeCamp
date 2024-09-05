#!/bin/bash

#Criar o Projeto Django
# Cria um novo ambiente virtual, se ainda não estiver usando um


# Instala Django no ambiente virtual
pip install django

python --version
# This should show something like Python 3.9.5
python -m django --version
# This should show something like 4.2.7

# Cria um novo projeto Django chamado 'myproject'
django-admin startproject myproject

# Navega para o diretório do projeto
cd myproject

#Bibliotecas:

# O Conteudo do arquivo requitements.txt é uma lista de bibliotecas que o Django precisa para funcionar corretamente.
# To activate this run
#
# pip install -r requirements.txt
# python -m django --version
#
# On a Macintosh this should be python3 and pip3
#
Django==4.2.7

# If you want to use MySQL, and are not running on PythonAnywhere,
# uncomment the following line you might need to install pre-requisite
# libraries before mysqlclient will work - instructions are at
#   https://pypi.org/project/mysqlclient/

# mysqlclient==2.1.1

# Other requirments - frozen to a version to simplify tech support
asgiref==3.7.2
certifi==2023.7.22
cffi==1.15.1
charset-normalizer==3.2.0
crispy-bootstrap5==0.7
cryptography==41.0.6
defusedxml==0.7.1
django-crispy-forms==2.0
django-extensions==3.2.3
django-filter==23.2
django-taggit==4.0.0
djangorestframework==3.14.0
idna==3.4
importlib-metadata==6.8.0
Markdown==3.4.3
oauthlib==3.2.2
pycparser==2.21
PyJWT==2.7.0
python3-openid==3.2.0
pytz==2023.3
requests==2.31.0
requests-oauthlib==1.3.1
social-auth-app-django==5.2.0
social-auth-core==4.4.2
sqlparse==0.4.4
typing_extensions==4.7.1
urllib3==2.0.7
zipp==3.15.0

# To activate this run

# Instalando as bibliotecas através do arquivo requirements.txt que deve estar no mesmo diretório do projeto
pip install -r requirements.txt
python -m django --version

# Lista todas as bibliotecas instaladas no ambiente virtual
pip freeze

# Configuração Inicial do projeto: 
#
# settings.py
#
# Adicione crispy_forms, social_django, e django_extensions na lista de INSTALLED_APPS

#INSTALLED_APPS = [
#    'django.contrib.admin',
#    'django.contrib.auth',
#    'django.contrib.contenttypes',
#    'django.contrib.sessions',
#    'django.contrib.messages',
#    'django.contrib.staticfiles',
#    'crispy_forms',
#    'crispy_bootstrap5',
#    'social_django',
#    'django_extensions',
#]
#
#CRISPY_ALLOWED_TEMPLATE_PACKS = "bootstrap5"
#CRISPY_TEMPLATE_PACK = "bootstrap5"

# Configure a autenticação social para GitHub no final do settings.py:
#
# AUTHENTICATION_BACKENDS = (
#    'social_core.backends.github.GithubOAuth2',
#    'django.contrib.auth.backends.ModelBackend',
#)
#
#SOCIAL_AUTH_GITHUB_KEY = 'YOUR_GITHUB_CLIENT_ID'
#SOCIAL_AUTH_GITHUB_SECRET = 'YOUR_GITHUB_CLIENT_SECRET'
#
#LOGIN_URL = 'login'
#LOGOUT_URL = 'logout'
#LOGIN_REDIRECT_URL = '/'

# Executa as migrações para configurar o banco de dados inicial
python manage.py makemigrations
python manage.py migrate

python manage.py createsuperuser













