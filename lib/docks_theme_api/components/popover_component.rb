require_relative "base_component.rb"

module Docks::Themes
  class API < Base
    module Components
      class Popover < Base
      def pane(options = {}, &block)
        klass = "popover__pane"
        klass << " popover__pane--fixed" if options.fetch(:fixed?, false)
        concat "<div class='#{klass}'>#{capture(&block)}</div>"
      end
    end
    end
  end
end
