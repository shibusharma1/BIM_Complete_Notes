from django.urls import path
from . import views
urlpatterns = [
    path('', views.hello),
    path('<name>/<address>/', views.hello_name),
]
