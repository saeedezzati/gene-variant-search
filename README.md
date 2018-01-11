
![Alt Text](https://media.giphy.com/media/3o752k7C9wPhNUsjmw/giphy.gif)


BACKEND:
- cd invitae/backend
- run 'pip3 install -r requirements.txt' [If you don't have Python ^3.0 you need to install it first]
- python manage.py makemigrations
- python manage.py migrate
- python manage.py createsuperuser [create a super user account]
- run 'python manage.py runserver'
- go to http://127.0.0.1:8000/admin and login with the created account

DATABASE:
- cd invitae/backend
- sqlite3 db.sqlite3
- Create a table from the TSV file:
   - .import /path/to/variant_results.tsv tmp_table
- To create another table with with auto increment id: 
    - CREATE TABLE gene_variant_results("id" integer primary key autoincrement, "Gene" TEXT, "Nucleotide Change" TEXT, "Protein Change" TEXT, "Other Mappings" TEXT, "Alias" TEXT, "Transcripts" TEXT, "Region" TEXT, "Reported Classification" TEXT, "Inferred Classification" TEXT, "Source" TEXT, "Last Evaluated" TEXT, "Last Updated" TEXT, "URL" TEXT, "Submitter Comment" TEXT, "Assembly" TEXT, "Chr" TEXT, "Genomic Start" TEXT, "Genomic Stop" TEXT, "Ref" TEXT, "Alt" TEXT, "Accession" TEXT, "Reported Ref" TEXT, "Reported Alt" TEXT ); 
- Copy data from first table to second table:[to add the id column to your data]:
    - insert into gene_variant_results("Gene" , "Nucleotide Change" , "Protein Change" , "Other Mappings" , "Alias" , "Transcripts" , "Region" , "Reported Classification" , "Inferred Classification" , "Source" , "Last Evaluated" , "Last Updated" , "URL" , "Submitter Comment" , "Assembly" , "Chr" , "Genomic Start" , "Genomic Stop" , "Ref" , "Alt" , "Accession" , "Reported Ref" , "Reported Alt"  ) select * from tmp_table;
- Drop the tmp_table:
    drop table tmp_table;
- ** In the provided TSV file there was a character on row 452380th that was breaking the process. I had to remove that character from that row in table.
    update gene_variant_results set alias = '5547 G>A (E1773E)' where id='452380';
- DB setup is over.
   - To check the DB tables go to http://127.0.0.1:8000/admin
- You can access the API endpoint at
    - http://127.0.0.1:8000/api/genes/variant/?search=MNDA   [To get list of matching gene names]
    - http://127.0.0.1:8000/api/genes/variant/?gene=MNDA     [To get list of variants]


FRONTEND:
- cd invitae/frontend
- npm install
- npm run dev
- go to http://127.0.0.1:8080/