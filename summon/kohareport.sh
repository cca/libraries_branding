#!/usr/bin/env bash
# we store last run date in required, asinine MM/DD/YYYY format in a text file
# strip new line & URI-encode forward slashes
lastrun=$(cat .lastrun | tr -d '\n' | sed -e 's|/|%2F|g')
url="https://library-staff.cca.edu/cgi-bin/koha/reports/guided_reports.pl?reports=152&phase=Run+this+report&param_name=deleted+after%7Cdate&sql_params=${lastrun}"
# `open` is a Mac CLI utility
open ${url}
# update lastrun with today's date
echo $(date "+%m/%d/%Y") > .lastrun
