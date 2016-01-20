# Helpers that provide common short cuts around looking up Resources
# and information about them.
module ResourceHelpers
  # Resources for all of the projects
  def all_projects
    sitemap.resources.select do |r|
      is_in_projects = r.path.start_with?('projects')
      is_not_project_index = r.path != 'projects/index.html'
      is_in_projects && is_not_project_index
    end
  end

  # all_projects filtered to just those that include name
  def projects_with_category(name)
    all_projects.select do |r|
      r.data['categories'].include?(name)
    end
  end

  # String names for all of the categories of all of the projects
  def all_categories
    require 'set'
    all_projects.reduce(Set.new) do |set, project|
      set.merge(project.data['categories'])
    end.to_a
  end
end
