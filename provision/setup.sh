#!/bin/bash

PWD=$(dirname $0)

if [ $# -eq 1 ] && [ $1 -eq "production" ]; then
  source $PWD/prod.conf
else
  source $PWD/dev.conf
fi

rm -f $PWD/src/app/default.conf
rm -f $PWD/src/docker-compose.yml

cp $PWD/src/nginx/template-default.conf $PWD/src/nginx/default.conf
cp $PWD/src/template-docker-compose.yml $PWD/src/docker-compose.yml

sed -i -e "s/{{port}}/${PROJECT_PORT}/g" $PWD/src/nginx/default.conf
sed -i -e "s/{{server_name}}/${PROJECT_URL}/g" $PWD/src/nginx/default.conf
sed -i -e "s/{{project_root}}/${PROJECT_ROOT}/g" $PWD/src/nginx/default.conf
sed -i -e "s/{{project_name}}/${PROJECT_NAME}/g" $PWD/src/docker-compose.yml
sed -i -e "s/{{mysql_database}}/${MYSQL_DATABASE}/g" $PWD/src/docker-compose.yml
sed -i -e "s/{{mysql_password}}/${MYSQL_PASSWORD}/g" $PWD/src/docker-compose.yml
sed -i -e "s/{{mysql_user}}/${MYSQL_USER}/g" $PWD/src/docker-compose.yml
sed -i -e "s/{{mysql_root_password}}/${MYSQL_ROOT_PASSWORD}/g" $PWD/src/docker-compose.yml

cd $PWD/src && docker-compose up -d


