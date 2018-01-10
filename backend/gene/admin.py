from django import forms
from django.contrib import admin
from gene.models import  Variant_Results


class VariantResultsAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Variant', {'fields': ['gene','nucleotide_change','protein_change','other_mappings','alias','transcripts','region','reported_classification','inferred_classification','source','last_evaluated','last_updated','url','submitter_comment','assembly','chr','genomic_start','genomic_stop','ref','alt','accession','reported_ref','reported_alt']}),
        
    ]
    list_display = ('gene','nucleotide_change','protein_change','other_mappings','alias','transcripts','region','reported_classification','inferred_classification','source','last_evaluated','last_updated','url','submitter_comment','assembly','chr','genomic_start','genomic_stop','ref','alt','accession','reported_ref','reported_alt' )
    list_filter = ['source',]
    search_fields = ['gene']

admin.site.register(Variant_Results, VariantResultsAdmin)