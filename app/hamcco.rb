require 'sinatra/base'
require 'json'
require 'userlocal.rb'
require 'hamccoexception.rb'

## Debug Print Flag
DEBUG = true

#
# HamccoTalk Class
#
class HamccoTalk < Sinatra::Base
  post '/hamcco/talk' do
    begin
      # Parse request parameters
      parms = parse_request(request)

      # Use UserLocal API
      userlocal = UserLocal.new
      reply = userlocal.chat(parms[:message])

      ## not so useful character
      ## reply = userlocal.character(reply) if rand(10) > 7

      # Reply message
      generate_response(reply, parms[:feel])
    rescue BadRequestException => e
      puts 'BadRequestException!!!' if DEBUG
      p e if DEBUG
      status 400
      e.message
    rescue UserlocalApiException => e
      puts 'RuntimeExcetption!!!' if DEBUG
      p e if DEBUG
      status 500
      e.message
    rescue => e
      puts 'RuntimeExcetption!!!' if DEBUG
      p e if DEBUG
      status 500
      e.message
    end
  end

  def parse_request(request)
    body = request.body.read
    raise BadRequestException 'Bad Request' if body == ''

    args = JSON.parse(body)
    p "args = #{args}" if DEBUG

    { message: args['message'], feel: args['feel'] }
  end

  def generate_response(message, feel)
    JSON.generate('message' => message, 'feel' => feel)
  end
end
