require 'faraday'
require 'json'
require 'hamccoexception'

#
# use UserLocal chatbot
#
class UserLocal
  APP_KEY  = 'your-app-key'.freeze
  CHAT_URL = 'https://chatbot-api.userlocal.jp/api/chat'.freeze
  CHAR_URL = 'https://chatbot-api.userlocal.jp/api/character'.freeze
  SUCCESS  = 'success'.freeze

  def chat(message)
    generate_reply(post_chat(message))
  end

  def character(message)
    generate_reply(post_character(message))
  end

  private

  def post_chat(message)
    res = Faraday.post CHAT_URL, 'key' => APP_KEY, 'message' => message

    p "UserLocal CHAT: res.status = #{res.status}, res.body #{res.body}" \
      if DEBUG

    raise UserlocalApiException 'ERROR occured at UserLocal API' \
      unless res.status == 200

    res
  end

  def post_character(message)
    char = %w[cat dog roujin].sample
    post = { 'key' => APP_KEY, 'message' => message, 'character_type' => char }
    res  = Faraday.post CHAR_URL, post

    p "UserLocal CHARACTER: res.status = #{res.status}, res.body #{res.body}" \
      if DEBUG

    raise UserlocalApiException 'ERROR occured at UserLocal API' \
      unless res.status == 200

    res
  end

  def generate_reply(res)
    body = JSON.parse(res.body)
    body_status = body['status']
    raise UserlocalApiException 'Something wrong at UserLocal API' \
      unless body_status == SUCCESS

    body_result = body['result']
    raise UserlocalApiException 'Something wrong at UserLocal API' \
      if body_result.length <= 0

    body_result
  end
end
