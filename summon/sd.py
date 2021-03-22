#!/usr/bin/env python3
# summon deletes
import csv
from datetime import datetime
import os
from urllib.parse import quote

import pysftp
import requests

# get date from file
with open('.lastrun', 'r') as fh:
    lastrun = fh.read().strip()

report_id = 152
report_url = 'https://library.cca.edu/cgi-bin/koha/svc/report?id={}&sql_params={}'
# retrieve JSON deleted records data from Koha
r = requests.get(report_url.format(report_id, quote(lastrun)))
rows = r.json()
print("{} records were deleted since {}".format(len(rows), lastrun))

# write deleted records to a CSV file named after the date
now = datetime.today().strftime('%Y-%m-%d-%H-%M-%S')
csvfile = os.path.join('marc', 'cca-catalog-deletes-{}.mrc'.format(now))
with open(csvfile, 'w') as fh:
    writer = csv.writer(fh)
    for row in rows:
        writer.writerow(row)

# push file to Summon FTP
hostname = 'ftp.summon.serialssolutions.com'
username = 'cca-catalog'
with open('.password', 'r') as fh:
    password = fh.read().strip()

with pysftp.Connection(hostname, username=username, password=password) as sftp:
    with sftp.cd('deletes'):
        sftp.put(csvfile)

# once we're successful write current date to file
with open('.lastrun', 'w') as fh:
    fh.write(datetime.today().strftime('%Y/%m/%d'))
