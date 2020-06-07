FROM ruby:2.5
MAINTAINER ngzm<nk.ngzm@gmail.com>
ADD ./hamcco /usr/src/app/
RUN cd /usr/src/app && bundle install
EXPOSE 8000
CMD ["unicorn", "-c", "/usr/src/app/config/unicorn.conf"]
