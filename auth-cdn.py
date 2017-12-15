from gcloud import storage
from oauth2client.service_account import ServiceAccountCredentials
import sys
import os
from os import listdir
from os.path import isfile, join
mypath = './app/static/dist'
#files = filter(path.isfile, os.listdir("./app/static/dist"))
#onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
#print(onlyfiles)

import gzip
import shutil

# usage - python3 console-cdn.py v4 staging
try:
    release_version = sys.argv[1]
    release_type = sys.argv[2]
    catalog_version = release_version + '-stg'
    if (release_type == 'production'):
        catalog_version = release_version
except:
    print("Missing arguments. Usage example - python3 auth-cdn.py v4 staging")
    sys.exit(1)

gcloud_project = 'hasura-test'
bucket_name = 'auth-ui-kit'
static_file_path = './build/'

credentials = ServiceAccountCredentials.from_json_keyfile_name('hasura-auth.json')
client = storage.Client(credentials=credentials, project=gcloud_project)
bucket = client.get_bucket(bucket_name)

# BUILD BEFORE DEPLOYING
os.system('npm run build')
os.system('npm run build:clean') # this renames main.hash.js to main.js and main.hash.css to main.css

# GZIP BUNDLE FILES
with open(static_file_path + 'main.js', 'rb') as f_in, gzip.open(static_file_path + 'main.js.gz', 'wb') as f_out:
    shutil.copyfileobj(f_in, f_out)

with open(static_file_path + 'main.css', 'rb') as f_in, gzip.open(static_file_path + 'main.css.gz', 'wb') as f_out:
    shutil.copyfileobj(f_in, f_out)

# COPY GZIPPED FILE WITHOUT .gz EXTENSION
os.system('gsutil cp ' + static_file_path + 'main.js.gz' + '* gs://' + bucket_name + '/' + catalog_version + '/main.js')
os.system('gsutil cp ' + static_file_path + 'main.css.gz' + '* gs://' + bucket_name + '/' + catalog_version + '/main.css')

# SET CONTENT TYPE and ENCODING GZIP
os.system('gsutil setmeta -h "Content-Type: application/javascript" -h "Cache-Control: public, max-age=6" gs://auth-ui-kit/' + catalog_version + '/*.js')
os.system('gsutil setmeta -h "Content-Type: text/css" gs://auth-ui-kit/' + catalog_version + '/*.css')
os.system('gsutil setmeta -h "Content-Encoding: gzip" gs://auth-ui-kit/' + catalog_version + '/*')
