# Classified Ads #1:


home/templatetags/app_tags.py

```python
from hashlib import md5
from django import template

# this code is for a gravatar
# gravatar is a globally recognized avatar that is based on email address
# people must register their email address and then upload a gravatar
# if na email address has no gravatar a generic image is put in the place

# to use the gravatar filter in a template include {% load app_tags %}

register = template.Library()

@register.filter(name='gravatar')
def gravatar(user, size=35):
    email = str(user.mail.strip().lower()).encode('utf-8')
    email_hash = md5(email).hexdigest()
    url = "//www.gravatar.com/avatar/{0}?s={1}&d=identicon&r=PG"
    return url.format(email_hash, size)

```






















