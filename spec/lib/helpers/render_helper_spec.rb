require "spec_helper"
require "redcarpet"
require "docks/renderers/erb_renderer"
require "docks/markdown"

describe Docks::Themes::API::Helpers do
  subject do
    renderer = Docks::Renderers::ERB.new
    renderer.helpers(Docks::Themes::API::Helpers)
    renderer
  end

  describe "#render_description_with_theme" do
    before(:each) do
      allow(subject).to receive(:render) { |opts| opts[:inline] }
    end

    let(:code_block) { "<div>\n  Foo\n</div>" }
    let(:language) { "html" }
    let(:markdown) { Redcarpet::Markdown.new(Docks::Markdown::Renderer, fenced_code_blocks: true) }

    it "renders a code block" do
      description = markdown.render(markdown_code_block)

      expect(subject).to receive(:docks_code_block) do |options|
        expect(options[:hideable?]).to be false
        expect(options[:demo?]).to be false

        code = options[:code]
        expect(code.length).to be 1
        expect(code.first[:code].strip).to eq code_block
        expect(code.first[:language]).to eq language
      end

      subject.render_description_with_theme(description)
    end

    it "renders a code block with the a demo" do
      description = markdown.render(markdown_code_block(with_demo: true))

      expect(subject).to receive(:docks_code_block) do |options|
        expect(options[:hideable?]).to be true
        expect(options[:demo?]).to be true
      end

      subject.render_description_with_theme(description)
    end

    it "adds a unique ID to each demo" do
      description = markdown.render(markdown_code_block * 2)

      ids = []
      expect(subject).to receive(:docks_code_block).twice do |options|
        ids.push(options[:id])
      end

      subject.render_description_with_theme(description)
      expect(ids).to eq ids.uniq
    end

    private

    def markdown_code_block(options = {})
      options.fetch(:with_demo, false) ? "```#{language}_demo\n#{code_block}\n```" : "```#{language}\n#{code_block}\n```\n"
    end
  end
end
