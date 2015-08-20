require "spec_helper"

describe Docks::Themes::API do
  subject { described_class.instance }

  describe "#helpers" do
    it "has the helpers module" do
      expect(subject.helpers).to eq [described_class::Helpers]
    end
  end

  describe "#configure" do
    let(:config) { OpenStruct.new(paginate: false, helpers: [:foo]) }

    it "updates pagination to be by pattern" do
      subject.configure(config)
      expect(config.paginate).to eq "pattern"
    end
  end
end
