
### Passo 1: Criar o App "Home"

1. **Criar o app**:
   ```bash
   pipenv run python manage.py startapp home
   ```

2. **Adicionar o app ao `INSTALLED_APPS`** no arquivo `settings.py`:
   ```python
   INSTALLED_APPS = [
       ...
       'home',
   ]
   ```

### Passo 2: Configurar URLs

1. **Criar um arquivo `urls.py`** dentro do diretório do app `home`:
   ```python
   from django.urls import path
   from . import views

   urlpatterns = [
       path('', views.index, name='index'),
   ]
   ```

2. **Adicionar a URL do app `home` ao arquivo `urls.py` do projeto**:
   ```python
   from django.contrib import admin
   from django.urls import path, include

   urlpatterns = [
       path('admin/', admin.site.urls),
       path('', include('home.urls')),
   ]
   ```

### Passo 3: Criar a View

1. **Criar a view `index`** no arquivo `views.py` do app `home`:
   ```python
   from django.shortcuts import render

   def index(request):
       return render(request, 'home/index.html')
   ```

### Passo 4: Criar o Template

1. **Criar o diretório `templates/home`** dentro do diretório do app `home`.

2. **Criar o arquivo `index.html`** dentro do diretório `templates/home`:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Home Page</title>
   </head>
   <body>
       <h1>Bem-vindo à Home Page</h1>
       <ul>
           <li><a href="{% url 'app1:index' %}">App 1</a></li>
           <li><a href="{% url 'app2:index' %}">App 2</a></li>
           <!-- Adicione mais links conforme necessário -->
       </ul>
   </body>
   </html>
   ```

### Passo 5: Configurar URLs dos Outros Apps

1. **Criar URLs e views para os outros apps** de forma similar ao que fizemos para o app `home`.

2. **Adicionar os links para esses apps no template `index.html`** da home page.

### Passo 6: Testar

1. **Executar o servidor**:
   ```bash
   pipenv run python manage.py runserver
   ```

2. **Acessar a home page** no navegador: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)


### Passo 7: Adicionar Context Processor

1. **Criar um arquivo `context_processors.py`** dentro do diretório do app `home`:
   ```python
   from django.conf import settings

   def settings_context_processor(request):
       return {
           'settings': settings,
       }
   ```

2. **Adicionar o context processor ao `TEMPLATES` no arquivo `settings.py`**:
   ```python
   TEMPLATES = [
       {
           'BACKEND': 'django.template.backends.django.DjangoTemplates',
           'DIRS': [],
           'APP_DIRS': True,
           'OPTIONS': {
               'context_processors': [
                   'django.template.context_processors.debug',
                   'django.template.context_processors.request',
                   'django.contrib.auth.context_processors.auth',
                   'django.contrib.messages.context_processors.messages',
                   'home.context_processors.settings_context_processor',  # Adicione esta linha
               ],
           },
       },
   ]
   ```

