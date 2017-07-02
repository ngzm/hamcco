# 人工無脳 ハムっこ -  Hamcco Chat Bot

## How to buid and export hamcco application for production.

Please run rake task like this.

```shell
$ rake product
```

Then, you can see "production" directory, where expoted hamcco's all production modules. 

## Deploy hamcco

Please copy "production" directory to your server.

Hamcco is required docker and docker-compose on your server.

## Build and execute hamcco application

You can build hamcco's docker images with docker-compose.

```shell
# docker-compose build
```

Will make two docker images. One of those is a nginx, and the other is a hamcco's application image that contains unicorn and sinatra based on ruby image.

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
