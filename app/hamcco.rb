require 'sinatra/base'
require 'json'

#
# HamccoTalk Class
#
class HamccoTalk < Sinatra::Base
  post '/hamcco/talk' do
    body = request.body.read

    if body == ''
      status 400
      return 'Bad Request'
    end

    req = JSON.parse(body)
    message = req[:message]
    STDERR.puts "mes = #{message}"
    JSON.generate(req)
  end

  get '/hamcco/talk' do
    message = params[:message]
    message
  end
end
