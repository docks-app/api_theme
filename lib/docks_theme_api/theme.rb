require "docks_theme_base"

Dir[File.expand_path("../helpers/*.rb", __FILE__)].each do |helper|
  require helper
end

module Docks
  module Themes
    class API < Base
      def initialize
        project_root = Pathname.new(File.expand_path("../../../", __FILE__))
        @assets = Assets.new(root: project_root + "assets", source_root: project_root + "source")
        @helpers = [Helpers]
      end

      def configure(config)
        config.paginate = "pattern"
      end
    end
  end
end
