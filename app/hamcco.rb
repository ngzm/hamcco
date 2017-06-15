require 'singleton'

require 'dic1_handler'
require 'dic2_handler'
require 'dic3_handler'

#
# Hamcco chat dictionary generator
#
class Hamcco
  # Initializer
  def initialize
    super
    @dic1_handler = Dic1Handler.new
    @dic2_handler = Dic2Handler.new(@dic1_handler.dic)
    @dic3_handler = Dic3Handler.new(@dic1_handler.dic)
  end

  # set myname
  def myname=(myname)
    @dic2_handler.myname = myname
    @dic3_handler.myname = myname
  end

  # set username
  def usrname=(usrname)
    @dic2_handler.usrname = usrname
    @dic3_handler.usrname = usrname
  end

  # chat with hamcco
  def chat(lev, message)
    reply = @dic2_handler.reply(lev, message)
    unless reply
      reply = rand(1..10).odd? ? @dic3_handler.reply(lev) : nil
    end
    reply
  end
end

#
# Factory singleton hamcco instance
#
class HamccoFactory
  include Singleton

  attr_accessor :hamcco

  def initialize
    super
    @hamcco = Hamcco.new

    ## こっからはデバッグ用
    return unless DEBUG
    puts '---------------------------'
    puts 'Initialize Hamcco Instance'
    puts '---------------------------'
  end
end
