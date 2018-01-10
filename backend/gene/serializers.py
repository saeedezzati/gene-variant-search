from django.contrib.auth.models import Permission
from rest_framework import serializers
from gene.models import  Variant_Results
# from  import UserSocialAuth


class VariantResultsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variant_Results
        fields = ('gene','nucleotide_change','protein_change','other_mappings','alias','transcripts','region','reported_classification','inferred_classification','source','last_evaluated','last_updated','url','submitter_comment','assembly','chr','genomic_start','genomic_stop','ref','alt','accession','reported_ref','reported_alt')

