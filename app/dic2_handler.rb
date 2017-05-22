require 'yaml'
require 'dic_helper'

# Handler for Hamcco Dictionary2
# Dictionary2 is for taking with hamcco
class Dic2Handler
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
  def reply(lev, message)
    match = find_matches(lev, message).sample
    return nil unless match

    match[:reply] = split_and_replace_match_reply(match)
    expand_and_select_vocab!(match[:reply], @dictionary1)
    expand_name!(match[:reply], @context[:myname], @context[:usname])
    { reply: match[:reply], level: match[:level] }
  end

  private

  def load_dic
    odic = YAML.load_file(File.expand_path('../dic/dic2.yml', __FILE__))
    generate_dic_data(odic)
  end

  def generate_dic_data(odic)
    ndic = []
    odic.each do |minlv, maxlv, chatd, newlv|
      dkfz, dv = chatd.each.first
      dk = dkfz.dup

      # dic1（語彙辞書）でキーワード展開
      expand_vocab!(dk, @dictionary1) if expand_vocab?(dk)

      # 連続した長音文字（- や ー − 〜 ~）を〜一文字に変換
      trans_choon!(dk) if trans_choon?(dk)

      ndic << [minlv, maxlv, { dk => dv }, newlv]
    end
    ndic
  end

  def find_matches(lev, message)
    usmes = message

    # 連続した長音文字（- や ー − 〜 ~）を〜一文字に変換
    trans_choon!(usmes) if trans_choon?(usmes)

    # 返答辞書マッチング
    matches = []

    # 最初はひらがな統一変換をせずにマッチング
    matches.concat(find_matches_with_no_trans(lev, usmes))

    # 半角カナや全角カナをひらがなに統一してマッチング
    matches.concat(find_matches_with_trans_kana(lev, usmes)) if matches.length <= 0

    matches
  end

  def find_matches_with_no_trans(lev, message)
    matches = []
    @dic.each do |minlv, maxlv, chatd, newlv|
      next if minlv > lev || lev > maxlv
      dk, dv = chatd.each.first
      kreg = Regexp.new(dk, Regexp::IGNORECASE)
      next unless (md = message.match(kreg))
      matches << { reply: dv, level: newlv, md: md }
    end
    matches
  end

  # このメソッドはキーワードを全部ひらがなにして検索するやつです
  # TODO:
  # find_matches_no_trans とコードが重複しているのが気に入らないが
  # 後日再検討して整理する
  def find_matches_with_trans_kana(lev, message)
    matches = []

    # ここがちがう
    # 半角カナや全角カナをひらがなに統一する変換
    trans_kana!(message) if trans_kana?(message)

    @dic.each do |minlv, maxlv, chatd, newlv|
      next if minlv > lev || lev > maxlv

      ## ここがちがう
      dkfz, dv = chatd.each.first
      dk = dkfz.dup
      # 半角カナや全角カナをひらがなに統一する変換
      trans_kana!(dk) if trans_kana?(dk)

      kreg = Regexp.new(dk, Regexp::IGNORECASE)
      next unless (md = message.match(kreg))
      matches << { reply: dv, level: newlv, md: md }
    end
    matches
  end

  def split_and_replace_match_reply(match)
    reply = match[:reply].split('|').sample

    match[:md].to_a.each_with_index do |md, idx|
      next if idx.zero?
      reg = Regexp.new("<#{idx}>")
      reply.gsub!(reg, md)
    end
    reply
  end
end
