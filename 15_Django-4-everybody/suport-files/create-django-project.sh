#!/bin/bash

#Criar o Projeto Django
# Cria um novo ambiente virtual, se ainda não estiver usando um
python3 -m venv myenv
source myenv/bin/activate

# Instala Django no ambiente virtual
pip install django

# Cria um novo projeto Django chamado 'myproject'
django-admin startproject myproject

# Navega para o diretório do projeto
cd myproject

#Bibliotecas:
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












