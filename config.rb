###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

projects = ["reveal-ck",
            "hipchat-hotline",
            "getting-started-with-slate",
            "dot-org-files",
            "mac-config"]

projects.each do |name|
  external_url = "/project/#{name}/index.html"
  template = "coming_soon.html"
  proxy external_url, template, :locals => { :project => name }
end

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
