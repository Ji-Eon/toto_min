#!/bin/bash

echo
echo "********************************"
echo "개발서버를 시작합니다."
echo "********************************"
echo
docker-compose -f docker-compose.dev.yaml up --build