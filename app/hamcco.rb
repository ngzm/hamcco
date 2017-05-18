require 'sinatra/base'
require 'json'
require 'faraday'

#
# HamccoTalk Class
#
class HamccoTalk < Sinatra::Base
  APPKEY = 'your-app-key'.freeze
  URL = 'https://your-url'.freeze

  post '/hamcco/talk' do
    body = request.body.read

    if body == ''
      status 400
      return 'Bad Request'
    end

    req = JSON.parse(body)
    message = req['message']
    feel = req['feel']
    puts "mes  = #{message}"
    puts "feel = #{feel}"

    rbody = request_user_local(message)
    if rbody == ''
      status 500
      return 'Woops!! Something BAD!'
    end
    res = JSON.parse(rbody)
    rmes = res['result']
    puts "rmes = #{rmes}"

    JSON.generate('message' => rmes, 'feel' => feel)
  end

  def request_user_local(message)
    res = Faraday.post URL, 'key' => APPKEY, 'message' => message
    puts 'res.status = ' + res.status.to_s
    puts 'res.body = ' + res.body.to_s

    res.body
  end
end
