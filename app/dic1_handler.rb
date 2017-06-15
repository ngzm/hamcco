require 'yaml'
require 'dic_helper'

# Handler for Hamcco Dictionary1 (Vocabrary Dic)
class Dic1Handler
  # mixin helper module
  include DicHelper

  attr_reader :dic

  # initializer
  def initialize
    super
    @dicbase = load_dicbase
    @dic = load_dic
  end

  private

  # generate dictionary1 base
  def load_dicbase
    YAML.load_file(File.expand_path('../dic/dic1.yml', __FILE__))
  end

  # generate dictionary1 data
  def load_dic
    odic = Marshal.load(Marshal.dump(@dicbase))
    2.times { odic = generate_dic_data(odic) }
    odic
  end

  # generate dictionary1 data
  # dictionary1 is a vocabrary dictionary
  def generate_dic_data(odic)
    ndic = []
    odic.each do |data|
      dk, dv = data.each.first
      expand_vocab!(dv, @dicbase) if expand_vocab?(dv)
      ndic << { dk => dv }
    end
    ndic
  end
end
