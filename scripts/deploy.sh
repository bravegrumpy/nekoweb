#!/bin/bash

source .env

curl -X POST \
--header "Authorization: $NEKOWEB_API_KEY" \
--header 'content-type: application/x-www-form-urlencoded' \
--data isFolder=true \
--data pathname=test \
https://nekoweb.org/api/files/create