require 'sinatra/base'
require 'json'
require 'userlocal.rb'
require 'hamccoexception.rb'

## Debug Print Flag
DEBUG = true

# HamccoTalk Class
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
      p "BadRequestException!!! #{e}" if DEBUG
      status 400
      e.message
    rescue UserlocalApiException => e
      p "UserlocalException!!! #{e}" if DEBUG
      status 500
      e.message
    rescue => e
      p "RuntimeException!!! #{e}" if DEBUG
      status 500
      e.message
    end
  end

  private

  # Parsing the request body JSON data.
  def parse_request(request)
    body = request.body.read
    raise BadRequestException 'Bad Request' if body == ''

    args = JSON.parse(body)
    p "args = #{args}" if DEBUG

    { message: args['message'], feel: args['feel'] }
  end

  # Create response data JSON String.
  def generate_response(message, feel)
    JSON.generate('message' => message, 'feel' => feel)
  end
end
