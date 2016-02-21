FROM php:5.6-fpm
ADD . /opt/web
WORKDIR /opt/web
MAINTAINER Igor Zupet <izupet@gmail.com>
ENV TERM xterm

RUN apt-get update && apt-get install -y libmcrypt-dev

# Install packages.
RUN apt-get -y install \
  libmcrypt-dev \
  libmemcached-dev \
  libsodium-dev \
  libpng-dev \
  mysql-client \
  nano \
  rsync \
  wget

#Install mbstring php extension
RUN docker-php-ext-install mbstring

#Install mcrypt php extension
RUN docker-php-ext-install mcrypt

#Install pdo php extension
RUN docker-php-ext-install pdo pdo_mysql

# Install php memcached extension
ADD https://pecl.php.net/get/memcached-2.2.0.tgz /usr/src/php/ext/memcached.tgz
RUN \
  tar -xf /usr/src/php/ext/memcached.tgz -C /usr/src/php/ext/ && \
  rm /usr/src/php/ext/memcached.tgz && \
  docker-php-ext-install memcached-2.2.0

RUN apt-get update
RUN apt-get install -y software-properties-common
RUN apt-get install -y curl
RUN apt-get install -y git
RUN apt-get install -y wget
RUN apt-get install -y nano

#Install composer globally
RUN curl -sS https://getcomposer.org/installer | php 
RUN mv composer.phar /usr/local/bin/composer

#Install node
RUN apt-get install nodejs -y
RUN ln -s /usr/bin/nodejs /usr/bin/node

#Install npm
RUN apt-get install npm -y

#Install bower globaly
RUN npm install -g bower

#Install gulp globaly
RUN npm install -g gulp


