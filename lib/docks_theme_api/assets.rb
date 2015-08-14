module Docks::Themes
  class API
    module Assets
      def self.path_for(*asset_path)
        asset_path = File.join(*asset_path)
        path = root_path + asset_path

        if path.exist? || (path = source_root_path + asset_path).exist?
          path
        else
          raise Docks::NoAssetError, "No asset matching '#{asset_path}' was found in the asset folders."
        end
      end

      def self.files_for(*asset_path)
        Dir[root_path + File.join(asset_path)]
      end

      def self.scripts
        files_for("scripts/*.js")
      end

      def self.styles
        files_for("styles/*.css")
      end

      private

      def self.root_path
        @root_path ||= Pathname.new(File.expand_path("../../../assets", __FILE__))
      end

      def self.source_root_path
        @source_root_path ||= root_path + "../source"
      end
    end
  end
end
