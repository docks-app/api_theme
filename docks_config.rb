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

  config.asset_folders = {
    scripts: "scripts",
    styles: "styles"
  }

  config.templates = "pattern_library_assets/templates/erb"

  config.mount_at = "pattern-library"
  config.copy_bundled_assets = false
  config.github_repo = "docks-app/docks_theme_api"

  config.pattern_id = lambda do |file|
    dir = File.basename(File.dirname(file))
    %w(vendor foundation .).include?(dir) ? File.basename(file).split(".").first : dir
  end
end
