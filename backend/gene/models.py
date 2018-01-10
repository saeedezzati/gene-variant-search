from django.db import models
from django.conf import settings
from django.utils import timezone
from django.contrib.auth.models import AbstractUser

from time import time

    
class Variant_Results(models.Model):
    gene = models.TextField(db_column='Gene', blank=True, null=True)  
    nucleotide_change = models.TextField(db_column='Nucleotide Change', blank=True, null=True)  
    protein_change = models.TextField(db_column='Protein Change', blank=True, null=True)  
    other_mappings = models.TextField(db_column='Other Mappings', blank=True, null=True)  
    alias = models.TextField(db_column='Alias', blank=True, null=True)  
    transcripts = models.TextField(db_column='Transcripts', blank=True, null=True)  
    region = models.TextField(db_column='Region', blank=True, null=True)  
    reported_classification = models.TextField(db_column='Reported Classification', blank=True, null=True)  
    inferred_classification = models.TextField(db_column='Inferred Classification', blank=True, null=True)  
    source = models.TextField(db_column='Source', blank=True, null=True)  
    last_evaluated = models.TextField(db_column='Last Evaluated', blank=True, null=True)  
    last_updated = models.TextField(db_column='Last Updated', blank=True, null=True)  
    url = models.TextField(db_column='URL', blank=True, null=True)  
    submitter_comment = models.TextField(db_column='Submitter Comment', blank=True, null=True)  
    assembly = models.TextField(db_column='Assembly', blank=True, null=True)  
    chr = models.TextField(db_column='Chr', blank=True, null=True)  
    genomic_start = models.TextField(db_column='Genomic Start', blank=True, null=True)  
    genomic_stop = models.TextField(db_column='Genomic Stop', blank=True, null=True)  
    ref = models.TextField(db_column='Ref', blank=True, null=True)  
    alt = models.TextField(db_column='Alt', blank=True, null=True)  
    accession = models.TextField(db_column='Accession', blank=True, null=True)  
    reported_ref = models.TextField(db_column='Reported Ref', blank=True, null=True)  
    reported_alt = models.TextField(db_column='Reported Alt', blank=True, null=True)  
