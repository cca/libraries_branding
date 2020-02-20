#!/usr/bin/env bash
# open Koha report, user downloads results to "deletes.csv", we create sftp
# command and put it on their clipboard, they run it to complete the process

# we store last run date in required, asinine MM/DD/YYYY format in a text file
# strip new line & URI-encode forward slashes
type=deletes
lastrun=$(cat .lastrun | tr -d '\n' | sed -e 's|/|%2F|g')
echo "Last run date: ${lastrun}"
url="https://library-staff.cca.edu/cgi-bin/koha/reports/guided_reports.pl?reports=152&phase=Run+this+report&param_name=deleted+after%7Cdate&sql_params=${lastrun}"
# `open` is a Mac CLI utility
open ${url}
# update lastrun with today's date
echo $(date "+%m/%d/%Y") > .lastrun

curdate=$(date "+%F-%H-%M-%S")
newfilename="marc/cca-catalog-${type}-${curdate}.mrc"
echo "Download the 'Summon Deletes' report CSV, name it '${type}.csv', then hit return."
read -p 'Hit return when finished (or type out full file path).' path
path=${path:-$(pwd)/${type}.csv}
mv -v ${path} ${newfilename} || exit 1

echo "put ${newfilename} ${type}" | pbcopy
echo "run the command below to upload to Summon (the SFTP cmd is on your clipboard)"
echo "pbpaste | sftp summon"
