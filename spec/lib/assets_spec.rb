require 'spec_helper'

describe Docks::Themes::API::Assets do
  subject { described_class }
  let(:root) { File.expand_path("../../../assets", __FILE__) }

  describe ".path_for" do
    it "returns a pathname object for the passed asset" do
      path = subject.path_for("styles/pattern-library.css")
      expect(path).to be_a Pathname
      expect(path).to eq Pathname.new(File.join(root, "styles/pattern-library.css"))
    end

    it "joins parts of the file that were passed" do
      path = subject.path_for("styles", "pattern-library.css")
      expect(path).to eq Pathname.new(File.join(root, "styles/pattern-library.css"))
    end

    it "throws when the requested file does not exist" do
      expect { subject.path_for("foo/bar.js") }.to raise_error(Docks::NoAssetError)
    end

    it "provides links to source assets" do
      expect(subject.path_for("components", "avatar", "avatar.scss")).to eq File.expand_path("../source/components/avatar/avatar.scss", root)
    end
  end

  describe ".files_for" do
    it "returns the list of files matching the path" do
      expect(subject.files_for("styles/**/*")).to eq Dir[File.join(root, "styles/**/*")]
    end
  end

  describe ".scripts" do
    it "returns all compiled scripts" do
      compiled_scripts = Dir[File.expand_path("../../../assets/scripts/*.js", __FILE__)]
      expect(compiled_scripts).not_to be_empty
      expect(subject.scripts).to eq compiled_scripts
    end
  end

  describe ".styles" do
    it "returns all compiled styles" do
      compiled_styles = Dir[File.expand_path("../../../assets/styles/*.css", __FILE__)]
      expect(compiled_styles).not_to be_empty
      expect(subject.styles).to eq compiled_styles
    end
  end
end
