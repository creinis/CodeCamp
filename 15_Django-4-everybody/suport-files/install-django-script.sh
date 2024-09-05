#!/bin/bash

# Configs and Setup do work within PythonAnywhere
# https://www.pythonanywhere.com


mkvirtualenv django42 --python=/usr/bin/python3.9
pip install django==4.2.7

workon django42 #to start and step in virtual environment

python --version
# This should show something like Python 3.9.5
python -m django --version
# This should show something like 4.2.7

##Automatically Enabling Your Virtual Environment

# Each time you start a new shell, you will need to activate your virtual environment. It is a lot simpler to do this automatically every time you login by editing the .bashrc file in your home directory.
#/home/(your-account)/.bashrc
# Look for lines near the end of the file that look like:
# Load virtualenvwrapper
#source virtualenvwrapper.sh &> /dev/null
#Add the following lines to the file and save the file.
# Auto switch into django42 virtual environment
workon django42

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


#Installing the Sample Code for DJ4E

#Lets also get a copy of the sample code for DJ4E checked out so you can look at sample code as the course progresses and install some important additional Django software libraries using pip.

cd ~
git clone https://github.com/csev/dj4e-samples
cd ~/dj4e-samples
pip install -r requirements42.txt

#The pip command can also take a few minutes to complete. Once it finishes and you get the $ prompt again, check for a good instlal by running:

cd ~/dj4e-samples
python manage.py check

#When running 'check' works
#Once the check works do:

python manage.py makemigrations

#This is the normal output of the makemigrations:
#When you want to use social login, please see dj4e-samples/github_settings-dist.py
#Using registration/login.html as the login template
#No changes detected

#Then run:

python manage.py migrate

#Building Your Application
#Now that we have your Django set up and you have retrieved the sample code for DJ4E, lets build your first application in the PYAW shell:

cd ~
mkdir django_projects

#Once you have made a folder in your home directory, lets go into that folder and make a Django project.

cd ~/django_projects
django-admin startproject mysite

#At this point, keep your shell open in one tab and open the PythonAnywhere Files application in another browser tab and navigate to the ~/django_projects/mysite/mysite/settings.py and change the allowed hosts line (around line 28) to be:
#this make accept connections all over the world

 ALLOWED_HOSTS = [ '*' ]









