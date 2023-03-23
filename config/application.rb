require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module PoetryReactionsAndReduxions
  class Application < Rails::Application
    config.api_only = true
    config.middleware.use ApplicationDispatch::Cookies
    config.middleware.use ApplicationDispatch::Session::CookieStore, key: 666a62e377b1d0c87404d46ae7c9f7165e4afdbd0262e7986bba499ede5c709f19621773070f5ced3239b93ea58d5603afa393938efad3be5263d59c353739f8

    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
