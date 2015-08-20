require File.expand_path("../lib/docks_theme_api/helpers/ui_helper.rb", __FILE__)

Docks.configure do |config|
  config.sources = [
    "source/components/**/*.{scss,js,md}",
    "source/structures/**/*.{scss,js,md}",
    "source/behaviors/**/*.{scss,js,md}",
    "source/utilities/**/*.{scss,js,md}",
    "source/foundation/**/*.{scss,js,md}"
  ]

  config.destination = "public"

  config.compiled_assets = [
    "pattern-library.css",
    "pattern_library.js"
  ]

  config.templates = "assets/templates/erb"
  config.helpers = [Docks::Themes::API::Helpers]

  config.mount_at = "pattern-library"
  config.github_repo = "docks-app/api_theme"
  config.theme = false

  config.pattern_id = lambda do |file|
    dir = File.basename(File.dirname(file))
    %w(vendor foundation .).include?(dir) ? File.basename(file).split(".").first : dir
  end
end
