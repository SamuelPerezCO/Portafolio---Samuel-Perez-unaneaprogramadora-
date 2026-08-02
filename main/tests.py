from django.test import TestCase
from django.urls import reverse

from .content import CONTENT, PROFILE, PROJECTS, TIMELINE, phone_href, whatsapp_url


class LanguageRoutingTests(TestCase):
    """Elsitio debe responder en los dos idiomas. / The site must serve both languages."""

    def test_spanish_home_renders(self):
        response = self.client.get(reverse("main:home"))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, CONTENT["es"]["hero"]["tagline"])
        self.assertContains(response, 'lang="es"')

    def test_english_home_renders(self):
        response = self.client.get(reverse("main:home_en"))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, CONTENT["en"]["hero"]["tagline"])
        self.assertContains(response, 'lang="en"')

    def test_each_page_links_to_the_other_language(self):
        self.assertContains(self.client.get(reverse("main:home")), reverse("main:home_en"))
        self.assertContains(self.client.get(reverse("main:home_en")), reverse("main:home"))

    def test_no_spanish_copy_leaks_into_the_english_page(self):
        response = self.client.get(reverse("main:home_en"))
        for label in ("Habilidades", "Trayectoria", "Sobre mí"):
            self.assertNotContains(response, label)


class ContentIntegrityTests(TestCase):
    """Cada entrada debe tener su texto en los dos idiomas. / Every entry needs both languages."""

    def test_every_project_is_translated(self):
        for project in PROJECTS:
            for lang in ("es", "en"):
                with self.subTest(project=project["slug"], lang=lang):
                    self.assertIn(lang, project)
                    self.assertTrue(project[lang]["title"])
                    self.assertTrue(project[lang]["summary"])

    def test_every_timeline_entry_is_translated(self):
        for entry in TIMELINE:
            for lang in ("es", "en"):
                with self.subTest(period=entry["period"], lang=lang):
                    self.assertTrue(entry[lang]["role"])
                    self.assertTrue(entry[lang]["org"])

    def test_every_project_renders_on_both_pages(self):
        for url_name in ("main:home", "main:home_en"):
            response = self.client.get(reverse(url_name))
            lang = "es" if url_name == "main:home" else "en"
            for project in PROJECTS:
                with self.subTest(url=url_name, project=project["slug"]):
                    self.assertContains(response, project[lang]["title"])
                    self.assertContains(response, project["repo"])

    def test_phone_href_strips_spaces_but_keeps_the_country_code(self):
        self.assertEqual(phone_href(), "+573167687288")

    def test_whatsapp_link_carries_a_message_in_each_language(self):
        for lang in ("es", "en"):
            with self.subTest(lang=lang):
                url = whatsapp_url(lang)
                self.assertTrue(url.startswith(PROFILE["whatsapp_link"]))
                self.assertIn("?text=", url)
                # El texto va codificado: sin espacios crudos en la URL.
                self.assertNotIn(" ", url)

    def test_whatsapp_messages_differ_between_languages(self):
        self.assertNotEqual(whatsapp_url("es"), whatsapp_url("en"))

    def test_contact_details_render_on_both_pages(self):
        for url_name in ("main:home", "main:home_en"):
            response = self.client.get(reverse(url_name))
            with self.subTest(url=url_name):
                self.assertContains(response, PROFILE["phone_number"])
                self.assertContains(response, f'href="tel:{phone_href()}"')
                self.assertContains(response, PROFILE["whatsapp_link"])

    def test_both_languages_share_the_same_ui_keys(self):
        self.assertEqual(set(CONTENT["es"]), set(CONTENT["en"]))
        for key in ("nav", "hero", "about", "skills", "projects", "timeline", "contact", "footer"):
            with self.subTest(section=key):
                self.assertEqual(set(CONTENT["es"][key]), set(CONTENT["en"][key]))
