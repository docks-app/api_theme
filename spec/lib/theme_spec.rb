require "spec_helper"

describe Docks::Themes::API do
  subject { described_class.instance }

  describe "#configure" do
    let(:config) { OpenStruct.new(paginate: false, helpers: [:foo]) }

    it "updates pagination to be by pattern" do
      subject.configure(config)
      expect(config.paginate).to be :pattern
    end

    it "adds the helper module to helpers" do
      original_helpers = config.helpers.dup
      subject.configure(config)

      expect(config.helpers.length).to be original_helpers.length + 1
      expect(config.helpers).to include described_class::Helpers
      original_helpers.each do |helper|
        expect(config.helpers).to include helper
      end
    end
  end
end
