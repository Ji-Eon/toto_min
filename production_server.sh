#!/bin/bash

echo
echo "********************************"
echo "Production 서버를 시작합니다."
echo "********************************"
echo


echo
echo "********************************"
echo "패키지 파일 업데이트를 시작합니다."
echo "********************************"
echo
apt update

echo
echo "********************************"
echo "Node.js를 설치합니다."
echo "********************************"
echo
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install v16.10.0;
nvm use v16.10.0;
# apt install nodejs -y;

echo
echo "********************************"
echo "node package manager를 설치합니다."
echo "********************************"
echo
# apt install npm -y;
npm install -g npm;
echo nodejs -v;

# 클라이언트 빌드
# 현재 폴더위치
current_dir=$PWD;

echo $current_dir;

cd frontend/;

echo
echo "********************************"
echo "Client package 를 설치합니다."
echo "********************************"
echo
npm install

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
npm install @material-ui/core

npm update 


npm run build

cd $current_dir;
cp -avr ./frontend/build nginx/;

docker-compose -f docker-compose.yaml up --build -d
