Dir[File.expand_path("../helpers/*.rb", __FILE__)].each do |helper|
  require helper
end

require_relative "assets.rb"

module Docks
  module Themes
    class API < Base
      def styles; Assets.styles end
      def scripts; Assets.scripts end

      def setup(builder)
        builder.add_assets(:styles, Assets.files_for("styles/#{builder.options.style_language}/**/*"))
        builder.add_assets(:scripts, Assets.files_for("scripts/#{builder.options.script_language}/**/*"))
        builder.add_assets(:templates, Assets.files_for("templates/#{builder.options.template_language}/**/*"))
      end

      def configure(config)
        config.paginate = :pattern
        config.helpers += [Helpers]
      end
    end
  end
end
