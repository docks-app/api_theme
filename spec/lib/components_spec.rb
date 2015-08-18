require "spec_helper"

describe Docks::Themes::API::Components do
  subject { described_class }

  describe ".component_for" do
    it "returns the base component when no custom component class exists" do
      expect(subject.component_for(:foo)).to be subject::Base
    end

    it "returns the custom component class if one exists" do
      expect(subject.component_for(:code_block)).to be subject::CodeBlock
      expect(subject.component_for("code_block")).to be subject::CodeBlock
    end
  end

  describe ".template_path" do
    let(:expected_path) {  }

    it "returns the path to the component's template" do
      path = subject.template_path(:code_block)
      expect(path).to eq Docks::Themes::API.instance.assets.path_for("components/code_block/code_block.erb")
      expect(File.exists?(path)).to be true
    end

    it "returns the path to a nested template" do
      expect(subject.template_path("tablist:tab")).to eq Docks::Themes::API.instance.assets.path_for("components/tablist/tablist_tab.erb")
    end
  end
end
