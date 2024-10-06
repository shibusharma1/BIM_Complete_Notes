from django.urls import path

from .views import *

urlpatterns = [
    path('secret', secret, name="secret"),
    path('login', login_view, name="login"),
    path('logout', logout_view, name="logout"),
    path('', index, name="blogs")
]