#!/bin/bash

echo "Changing files name using prefix" "${1}" "..."

LIST=$(ls -v)

declare -a FILES
FILES=($LIST)

if ((${#FILES[@]} == 0)); then
  echo 'No files found' 2>&1
fi

counter=1

for i in "${FILES[@]}"
do
  filename="${1}_${counter}.${i#*.}"
  mv "${i}" "${filename}"
  counter=$((counter+1))
done