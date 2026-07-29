from django.shortcuts import render
from django.urls import reverse

from .content import DEFAULT_LANGUAGE, get_context

# Nombre de la URL para cada idioma / URL name per language.
URL_NAMES = {"es": "main:home", "en": "main:home_en"}


def home(request, lang=DEFAULT_LANGUAGE):
    context = get_context(lang)
    other = context["t"]["other_lang"]
    context["other_lang_url"] = reverse(URL_NAMES[other])
    return render(request, "main/index.html", context)


def not_found(request, exception=None):
    """404 en el idioma por defecto. / 404 page in the default language."""
    context = get_context(DEFAULT_LANGUAGE)
    context["other_lang_url"] = reverse(URL_NAMES["en"])
    return render(request, "main/404.html", context, status=404)
