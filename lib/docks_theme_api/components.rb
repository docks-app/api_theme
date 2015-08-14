require "pathname"
require_relative "assets"

Dir[File.expand_path("../components/*.rb", __FILE__)].each do |component|
  require component
end

module Docks::Themes
  class API
    module Components
      def self.component_for(name)
        const = name.to_s.split(/[^a-z]/i).map(&:capitalize).join("").to_sym
        const_defined?(const) ? const_get(const) : Base
      end

      def self.template_path(name)
        name = name.to_s.split(":")
        Assets.path_for(File.join(name.first, "#{name.join("_")}.erb"), source: true)
      end
    end
  end
end
