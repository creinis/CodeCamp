## Django Views and Templates

views are the CORE of the application

Django looks at the incomming request URL and uses urls.py to select a view

`HttpRequest`

```python
from django.http import HttpResponse
from django.http import HttpResponseRedirect

def func(request):
    response = 
    <html>
    </html>

    return HttpResponse(request)
```

## Secure Applications:

### XXS - Cross-Site Scripting

```python
from django.http import HttpResponse
from django.utils.html import escape # to xxs
from django.views import View

class RestMainView (View):
    def get(self, request, guess):
        response = 
        """<html>
            <body>
                <p> Your guess was""" +escape(guess)+ """</p>
            </body>
        </html>""""

        return HttpResponse (response)
```

Para controlar e mitigar ataques de Cross-Site Scripting (XSS) em um projeto Django, você pode seguir várias práticas recomendadas, incluindo o uso de mecanismos de segurança integrados no Django. A seguir estão algumas das configurações e práticas que ajudam a prevenir XSS em um projeto Django:

### 1. **Escapamento Automático de Templates**
Django, por padrão, escapa automaticamente o conteúdo inserido nos templates para prevenir XSS. Isso significa que, quando você renderiza variáveis em seus templates, Django automaticamente converte caracteres especiais em entidades HTML.

Exemplo:

```html
<!-- Dentro do template Django -->
<p>{{ user_input }}</p>
```

Neste exemplo, qualquer dado que o usuário inserir será automaticamente escapado. Se o usuário inserir `<script>alert('XSS')</script>`, ele será mostrado como texto e não será executado.

### 2. **Uso de Filtros de Template**
Django oferece filtros de template que ajudam a manipular e formatar dados antes de renderizá-los. Porém, evite desabilitar o escapamento automático usando o filtro `safe`, a menos que você tenha certeza de que os dados são seguros.

Exemplo a ser evitado:

```html
<p>{{ user_input|safe }}</p>  <!-- Não recomendado -->
```

### 3. **Proteção Contra XSS em Formulários**
Django inclui proteção contra XSS ao renderizar formulários com campos de texto. Os valores inseridos pelos usuários em campos de formulário são automaticamente escapados ao serem renderizados novamente na página.

### 4. **Uso de Content Security Policy (CSP)**
Content Security Policy (CSP) é uma camada de segurança que ajuda a prevenir ataques XSS controlando as fontes de recursos que o navegador pode carregar. Isso pode ser configurado em conjunto com o Django através de middleware ou cabeçalhos personalizados.

Exemplo de configuração CSP usando middleware em Django:

1. **Instalar o pacote `django-csp`:**
   ```bash
   pip install django-csp
   ```

2. **Adicionar `django-csp` ao `INSTALLED_APPS` no `settings.py`:**
   ```python
   INSTALLED_APPS = [
       # outros apps...
       'csp',
   ]
   ```

3. **Configurar as políticas CSP no `settings.py`:**
   ```python
   CSP_DEFAULT_SRC = ("'self'",)
   CSP_SCRIPT_SRC = ("'self'", 'https://trustedscripts.example.com')
   CSP_STYLE_SRC = ("'self'", 'https://trustedstyles.example.com')
   ```

### 5. **Sanitização de Entrada do Usuário**
Para dados que você não deseja escapar (por exemplo, quando você precisa renderizar HTML enviado pelo usuário), é importante sanitizar esses dados antes de armazená-los ou renderizá-los. Para isso, você pode utilizar bibliotecas como `bleach` para limpar e filtrar entradas.

Exemplo com `bleach`:

```python
import bleach

safe_input = bleach.clean(user_input)
```

### 6. **Headers de Segurança Adicionais**
Além do CSP, você pode usar middleware para adicionar outros cabeçalhos de segurança, como `X-XSS-Protection`, que ativa o modo de proteção contra XSS no navegador.

### 7. **Verificação Regular e Testes**
Por último, é essencial realizar revisões regulares de segurança e testar seus aplicativos com ferramentas de segurança automatizadas e manuais para garantir que não há brechas de XSS.

### Resumo
Django já oferece uma proteção significativa contra XSS através do escapamento automático de templates e outras funcionalidades padrão. No entanto, adicionar cabeçalhos de segurança como CSP, evitar o uso indiscriminado do filtro `safe`, e sanitizar entradas de usuários são práticas adicionais que ajudam a reforçar a segurança do seu aplicativo.

## Front End Template Process

URL => View => Template

rules for organize the templates.
Use a Technique called "namespace" so that each application can load its own templates.
`favs/templates/favs/details.html`
`pics/templates/pics/details.html`
For the namespace to work, we need to put templates in a path that includes the application name twice.

## DTL - Django Template Language

Substitution:
{{ zap }}
{{ zap|safe }}

Calling Code:
{% url 'cat-detail' cat.id %}
{% author.get_absolute_url %}

Logic:
{% if zap > 100 %}
{% endif %}

Blocks:
{% block content %}
{% endblock %}

## Inheritance
The art of not repeting yourself
 - when we make a new template - we can extend an existing template and then add our own little bit to make our new class
 - annother form of store and reuse
 - don't repeat yourself (DRY)

## URL Mapping / Reversing
A common need when working on a Django project is the possibility to obtain URLs in their final forms either for embedding in generated content or for hndling of the navigation flow on the server side (redirections, tc..)

It is strongly desirable to avoid hard-coding these URLs. Equally dangerous is devising ad-hoc mechanisms to generate URLs that are parallel to the design described by the URLconf, which can result in the production of URLs that become stale over time.

In other words, what's needed is a DRY mechanism. Among other advantages it would allow evolution of the URL design without having to go over all the project source code to search and replace outdated URLs.

The primary piece of information we have available to get URL is an identification (the name) of the view in charge of handling it. Other pieces of information that necessarily must participate in the lookup of the right URL are the types (positional, keyword) and values of the view arguments.


## Generic Views:

```python
class CatListView(View):
    def get(self, request):
        stuff = Cat.objects.all()
        cntx = { 'cat_list': stuff }
        return render(request, 'gview/cat_list.html', cntx)

class DogListView(View):
    model = Dog
    def get(self, request):
        modelname = self.model._meta.verbose_name.title().lower()
        stuff = self.model.objects.all()
        cntx = { modelname+'_list' : stuff}
        return render(request, 'gview/'+modelname+'_list.html', cntx)
```
An exemple of appling inheritance

```python
from django.views import generic

class HorseListView(generic.ListView):
    model = Horse
```























