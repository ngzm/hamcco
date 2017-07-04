# 人工無脳 ハムっこ -  Hamcco Chat Bot

## How to buid and export hamcco application for production.

Please run rake task as follows.

```shell
$ rake product
```

Then, you can see "production" directory, where exported hamcco's all production modules. 

## Deploy hamcco

Please copy "production" directory to your server.

Note. Docker and docker-compose must be installed on your server.

## Build and execute hamcco application

You can build docker images of hamcco by using docker-compose.

```shell
# docker-compose build
```

It will build two docker images. One of those is a nginx, and the other is a hamcco's application image that contains unicorn and sinatra based on ruby image.

Next, you can execute nginx and hamcco docker containers, like this.

```shell
# docker-compose up -d 
```

The -d option means containers run background.

## Stop and Restart hamcco application

Stop hamcco and nginx containers.

```shell
# docker-compose stop
```

Start hamcco and nginx containers.

```shell
# docker-compose start
```

That's it.
