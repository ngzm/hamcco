require 'sinatra/base'
require 'sinatra/reloader'

#
# Test Class
#
class TestClass < Sinatra::Base
  get '/test' do
    'hello world'
  end
end
