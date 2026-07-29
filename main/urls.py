from django.urls import path

from . import views

app_name = "main"

urlpatterns = [
    path("", views.home, {"lang": "es"}, name="home"),
    path("en/", views.home, {"lang": "en"}, name="home_en"),
]
