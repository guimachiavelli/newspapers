#!/bin/sh

if (($# == 0)); then
	FILE="sites"
	JS="screen.js"
	FLAG="dev"
fi


while getopts ":p" opt; do
  case $opt in
    p)
		FILE="/home/ubuntu/newspapers/sites"
		JS="/home/ubuntu/newspapers/screen.js"
		FLAG="prod"
      ;;
    \?)
		echo "invalid flag – the only valid flag is -p"
		FILE="sites"
		JS="screen.js"
		FLAG="dev"
      ;;
  esac
done


OUT=$(awk '{ print $2 }' $FILE)

echo $OUT

for site in $OUT
do
	phantomjs $JS $site $FLAG
done

exit 1
