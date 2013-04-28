#!/bin/sh

FILE="sites"
OUT=$(awk '{ print $2 }' $FILE)

for site in $OUT
do
	#python webkit2png -F -W 1280 -H 1024 -D screenshots -d $site
	phantomjs screen.js $site 
done

exit 1
