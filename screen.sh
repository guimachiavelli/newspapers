#!/bin/sh

if [ $1 == "prod" ] ; then
	FILE="/home/ubuntu/newspapers/sites"
else
	FILE="sites"
fi


OUT=$(awk '{ print $2 }' $FILE)

for site in $OUT
do
	#python webkit2png -F -W 1280 -H 1024 -D screenshots -d $site
	phantomjs screen.js $site $1
	echo $site
done

exit 1
