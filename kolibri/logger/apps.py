from __future__ import absolute_import, print_function, unicode_literals

from django.apps import AppConfig


class KolibriLoggerConfig(AppConfig):
    name = 'kolibri.logger'
    label = 'logger'
    verbose_name = 'Kolibri Logger'

    def ready(self):
        from .signals import create_user_session
        assert create_user_session
