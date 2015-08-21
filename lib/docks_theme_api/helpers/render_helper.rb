module Docks
  module Themes
    class API < Base
      module Helpers
        def render_description_with_theme(description, options = {})
          @example_count = 0

          description.gsub(/<fenced_code_block[^>]*>(.*?)<\/fenced_code_block>/m) do |match|
            @example_count += 1
            code = $1.dup
            has_demo = match.include?("data-has-demo")
            language = match.match(/data\-language=["']([^'"]*)/).captures.first

            code_details = []
            code_details << { code: code, language: language, label: "Helper" }

            if has_demo
              code_details << { code: render(inline: code, layout: false), language: "html", label: "Markup" }
            end

            docks_code_block code: code_details,
                             hideable?: has_demo,
                             id: "code-block--example-#{@example_count}",
                             demo?: has_demo
          end
        end
      end
    end
  end
end
