require 'sinatra/base'

require 'ham_helper'
require 'ham_exception'

## Debug Print Flag
DEBUG = true

# HamccoControll Class
class HamController < Sinatra::Base
  # Helper module
  helpers Sinatra::HttpHelper, Sinatra::ChatHelper

  # Initialize something ..
  configure do
    # Error Handler のためのおまじない フッフッフ
    set :show_exceptions, :after_handler
  end

  # Filters before Handlers
  before do
    # TODO: Authorize user, JWT should be used.
  end

  before '/hamcco/chat' do
    content_type :json
  end

  # Request Handlers
  post '/hamcco/chat' do
    input = parse_request_body(request.body)
    puts "[input] usrname: #{input[:usrname]} feel: #{input[:feel]} message: #{input[:message]}"

    set_names('ハムっこ', input[:usrname])

    output = chat_with_hamcco(input) || chat_with_userlocal(input)
    puts "[output] feel: #{output[:feel]}, ham_message: #{output[:message]}"

    generate_response(output)
  end

  # For Hamcco Client App
  ['/', '/chat'].each do |route|
    get route do
      send_file File.join(settings.public_folder, 'index.html')
    end
  end

  # Error handlers
  error BadRequestException do
    e = env['sinatra.error']
    p "BadRequestException!!! #{e}" if DEBUG
    status 400
    e.message
  end

  error UserlocalApiException do
    e = env['sinatra.error']
    p "UserlocalApiException!!! #{e}" if DEBUG
    status 502
    e.message
  end

  error do
    e = env['sinatra.error']
    p "RuntimeException!!! #{e}" if DEBUG
    status 500
    e.message
  end
end
