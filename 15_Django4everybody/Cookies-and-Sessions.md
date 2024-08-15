## Cookies and Sessions

### Multi-User / Multi-Browser
- Whena server is interacting with many different browsers at the same time, the server needs to know which browser a particular request came from
- Request / Response initially was stateless - all browsers lokked identical. This was really bad and didi not last very long at all.

## Web Cookie to the Rescue

Technically, cookies are arbtrary pieces of data chosen by the Web server and sento to the browser. The browser returns them unchanged to the server, introducing a state (memory of previous events) into otrerwise stateless HTTP transactions. Without cookies, each retrival of a Web page or component of aWeb page is an isolated event, mostly unreveled to all other views of the pages of the same site.

## Cookies in the Browser
- Cookies are marked as to the web addresses they come from. The browser only sends back cookies that were originally set by the same web server.
- Cookies have an expiration date. Some last for years, others are short-term and go away as soon as the browser is closed.

```python
def cookie(request):
    print(request.COOKIES)
    resp = HttpResponse('C is for cookie and that is good enough for me..')
    resp.set_cookie('zap', 42) # No expider date = until browser close
    resp.set_cookie('sakaicar', 42, max_age=1000 ) # seconds until expire
    return resp
```
## Django Sessions

### In the Server - Sessions
- In most servers applications, as soon as we start a session for a new (unmarked) browser we create a session
- We set a session cookie to be stored in the browser, which indicates the session id in use = gives this browser a unique 'mark'
- The creation and destruction of sessions is handled by a Django middleware that we use in our applications

### Session Identifier
- A large, random number that we place in a browser cookie the first time we encounter a browser
- This number is used to pick from the many sessions that the server has active at any one time
- Server software stores data in the sessions that it wants to have from one request to another from the same browser
- Shopping cart or login information is stored in the session in the server

#### Enabling Sessions in Django
 - Activated by default in `settings.py` when we run `python3 manage.py migrate`

```python
    MIDDLEWARE = [
        ...
        'django.contrib.sessions.middleware.SessionMiddleware',
        ...
    ]
```
### Django Sessions
it's basically a dictionary, key value pairs

 - The incoming request object has a request.session attribute that we can treat like a dictionary that persists from  one request to the next request
 - As long we have the session middleware enabled in settings.py and the database table, and the browser allows cookies, we just store and read request.session inour views and pretend it is 'magic'


























