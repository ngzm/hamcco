require 'yaml'
require 'dic_helper'

# Handler for Hamcco Dictionary3 (Random Chat Dic)
class Dic3Handler
  # mixin helper module
  include DicHelper

  attr_reader :dic

  # initializer
  def initialize(dictionary1)
    super()
    @dictionary1 = dictionary1
    @dic = load_dic
    @context = { myname: 'ハムっこ', usname: 'たろう' }
  end

  # Set the Myname that is precisely Hamcconame
  def myname=(myname)
    @context[:myname] = myname
  end

  # Set the Username and Hamcconame
  def usrname=(usrname)
    @context[:usname] = usrname
  end

  # Find reply message data
  def reply(lev)
    match = find_matches(lev).sample
    return nil unless match

    expand_and_select_vocab!(match[:reply], @dictionary1)
    expand_name!(match[:reply], @context[:myname], @context[:usname])
    { reply: match[:reply], level: match[:level] }
  end

  private

  # generate dictionary1 data
  def load_dic
    YAML.load_file(File.expand_path('../dic/dic3.yml', __FILE__))
  end

  # find match data
  def find_matches(lev)
    matches = []
    dic.each do |minlv, maxlv, chatd, newlv|
      next if minlv > lev || lev > maxlv
      matches << { reply: chatd, level: newlv }
    end
    matches
  end
end
