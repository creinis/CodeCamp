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





