from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from rest_framework import renderers

from gene import views as gene_views


# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'variant', gene_views.VariantResultsViewSet)

# The API URLs are now determined automatically by the router.
# Additionally, we include the login URLs for the browsable API.
# app_name = 'team'
urlpatterns = [
    url(r'^', include(router.urls)),
]

