# 人工無脳 ハムっこ

## Hamcco Chat Bot

### Requirements on your server.

Hamcco is require docker and docker-compose on your server.

#### How to buid and export hamcco app.

please run rake task like this.

```shell
$ rake product
```

Then, you can see "production" directory, where expoted hamcco's all release files. 

#### Deploy hamcco

Please copy "production" directory to your server where must be installed docker and docker-compose.

#### Build and execute hamcco application

you can build the hamcco docker containers by using docker-compose, like this.

```shell
# docker-compose build
```

It will make two docker images. One of those is a nginx, and the other is a hamcco's application image that contains unicorn and sinatra based on the ruby image.

Then, you can execute nginx and hamcco docker containers.

```shell
# docker-compose up -d 
```

The -d option is meant that containers runs background.

#### Stop and Restart hamcco application

Stop hamcco and nginx containers.

```shell
# docker-compose stop
```

Start hamcco and nginx containers.

```shell
# docker-compose start
```

That's it.
