require 'sinatra/base'
require 'json'

require 'hamcco'
require 'userlocal'
require 'ham_exception'

# HamHelper Module
module Sinatra
  #
  # Helper for Handling HTTP Request and Response
  #
  module HttpHelper
    # Parsing the request body JSON data.
    def parse_request_body(request_body)
      request_body.rewind
      payload_string = request_body.read

      # リクエストボディに何にも入っていないときは BAD Request にする
      raise BadRequestException, 'Bad Request' if payload_string == ''

      payload = JSON.parse(payload_string)
      { usrname: payload['usrname'], message: payload['message'], feel: payload['feel'] }
    end

    # Create response data JSON String.
    def generate_response(output)
      JSON.generate('message' => output[:message], 'feel' => output[:feel])
    end
  end

  #
  # Helper for Chat
  #
  module ChatHelper
    # Initializing hamcco instance and loading chat dictionaries
    def set_names(hamname = 'ハムっこ', usrname = 'たろう')
      @hamcco = HamccoFactory.instance.hamcco
      @hamcco.myname = hamname
      @hamcco.usrname = usrname
    end

    # Chat with Hamcco Chat API
    def chat_with_hamcco(input)
      reply = @hamcco.chat(input[:feel], input[:message])
      reply ? { message: reply[:reply], feel: reply[:level] } : nil
    end

    # Chat with UserLocal Chat API
    def chat_with_userlocal(input)
      reply = UserLocal.new.chat(input[:message])
      feel  = input[:feel] + rand(-20..20)
      feel  = 1 if feel < 1
      feel  = 100 if feel > 100
      { message: reply, feel: feel }
    end
  end

  helpers HttpHelper, ChatHelper
end
