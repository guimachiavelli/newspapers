#!/bin/sh

while getopts ":p" opt; do
  case $opt in
    p)
		FILE="/home/ubuntu/newspapers/sites"
		FLAG="prod"
      ;;
    \?)
		echo "invalid flag – the only valid flag is -p"
		FILE="sites"
		FLAG="dev"
      ;;
  esac
done

if (($# == 0)); then
	FILE="sites"
	FLAG="dev"
fi

OUT=$(awk '{ print $2 }' $FILE)

echo $OUT

for site in $OUT
do
	phantomjs screen.js $site $FLAG
done

exit 1
