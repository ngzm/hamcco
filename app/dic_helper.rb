# Helpers for Hamcco dictionaries
module DicHelper
  # Check need to expand dic1 vocabrary?
  def expand_vocab?(vstring)
    /&<\S+>/ =~ vstring
  end

  # Expand dic1 vocabrary
  def expand_vocab!(vstring, dicbase)
    dicbase.each do |base|
      bk, bv = base.each.first
      bkreg = Regexp.new(bk, Regexp::IGNORECASE)
      vstring.gsub!(bkreg, bv)
    end
  end

  # Check need to transform Japanese kana?
  def trans_kana?(vstring)
    /[ア-ンヴヵヶ]/ =~ vstring || /[ｱ-ﾝ]/ =~ vstring
  end

  # Transform Japanese kana (to Hiragana)
  def trans_kana!(vstring)
    vstring.tr!('ｱ-ﾝ', 'ア-ン')
    vstring.tr!('ア-ンヴヵヶ', 'あ-んぶかが')
  end

  # Check need to transform 長音?
  def trans_choon?(vstring)
    /[\-ー－~～]/ =~ vstring
  end

  # Expand vocabrary
  def trans_choon!(vstring)
    vstring.gsub!(/[\-ー－~～]+/, '〜')
  end

  # Expand and Select one vocabrary
  def expand_and_select_vocab!(vstring, dicbase)
    dicbase.each do |base|
      bk, bv = base.each.first
      bkreg = Regexp.new(bk, Regexp::IGNORECASE)
      selected = bv.split('|')
      vstring.sub!(bkreg, selected.sample) while bkreg =~ vstring
    end
  end

  # Check need to expand name
  def expand_name?(vstring)
    /%<\S+>/ =~ vstring
  end

  # Expand name
  def expand_name!(vstring, myname, usname)
    vstring.gsub!(/%<myname>/, myname)
    vstring.gsub!(/%<usname>/, usname)
  end

  # calculate level no for reply
  def calc_reply_level(lev, newlv)
      feel = lev + (newlv - 50) / rand(1..3)
      feel = 1 if feel < 1
      feel = 100 if feel > 100
      feel
  end
end
