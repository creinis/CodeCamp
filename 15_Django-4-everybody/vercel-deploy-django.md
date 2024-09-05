
# create a shell script file to run

```shell
#create a requirements txt file
pip install -r requirements.txt 
python3.9 manage.py collectstatic
```

# create a `vercel.json` file in the projects root
```json
{
  "version": 2,
  "builds": [
    {
      "src": "mysite/wsgi.py",
      "use": "@vercel/python",
      "config": { "maxLambdaSize": "15mb", "runtime": "python3.9" }
    },
    {
      "src": "build_files.sh",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "staticfiles_build"
      }
    }
  ],
  "routes": [
    {
      "src": "/static/(.*)",
      "dest": "/static/$1"
    },
    {
      "src": "/(.*)",
      "dest": "mysite/wsgi.py"
    }
  ]
}
```

# Edit Project Configuration

## wsgi.py

add the code line in the end of this file

`app = application`

## settings.py

add: 
```python
import os

ALLOWED_HOST = ['.vercel.app', '127.0.0.1', 'localhost']
# you can also use ['*'] to allow everyone

STATIC_URL = 'static/' # if this line doesn't existi add it
STATICFILES_DIR = os.path.join(BASE_DIR, 'static'), # replace the existing line with this one
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles_build', 'static') # add this new line

```

## urls.py

```python
 urlspatterns = [
    ...
 ]
 #add the lines bellow
 urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
 urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
 ```






