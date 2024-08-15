## Loggin & Authentication

### Summary - Setting up login
 - Add `django.contrib.auth` entries to `INSTALLED_APPS` and `urlpatterns`
 - Create a template named 'registration/login.html'
 - Get urls for login and logout using reverse, reverse_lazy, or the url template tag
 - Add the "next=" parameter to those URLs to bring the user back to a page after succesful login or logout
 - Add `LoginRequiredMixin` to views that can only be accessed by a logged in user






