from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import Permission
from django.shortcuts import get_object_or_404

from gene.serializers import  VariantResultsSerializer
from gene.models import  Variant_Results

from rest_framework import permissions, viewsets, generics, renderers, status
from rest_framework.response import Response
from rest_framework.decorators import  detail_route, list_route


class VariantResultsViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Variant_Results.objects.none()
    serializer_class = VariantResultsSerializer

    def get_queryset(self):
        if 'gene' in self.request.query_params:
            return Variant_Results.objects.filter(gene = self.request.query_params['gene']).order_by('last_updated')
        if 'search' in self.request.query_params:
            return Variant_Results.objects.filter(gene__startswith = self.request.query_params['search']).distinct().values('gene')
        return Variant_Results.objects.none()#all().order_by('date')[:10]
                
