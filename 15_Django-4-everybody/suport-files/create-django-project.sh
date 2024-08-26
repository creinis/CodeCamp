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



