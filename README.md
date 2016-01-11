
# [https://jedcn.github.io][jedcn-github]

This is the source for [https://jedcn.github.io][jedcn-github].

[jedcn-github]: https://jedcn.github.io

It is built with [Ruby][ruby-version] and middleman, and hosted on
Github Pages.

[ruby-version]: .ruby-version

## Branches

Unlike some other projects, the generated HTML lives on the [master]
branch while the code that generates the source lives on the [source]
branch.

[source]: https://github.com/jedcn/jedcn.github.io/tree/source
[master]: https://github.com/jedcn/jedcn.github.io/tree/master

## Development

This is predominately ruby, so you get going with:

* `bundle install`

And you can see `rake` commands with `rake -T`

However, npm has a great thing going with its `"scripts"` and so a
[package.json] file was created to ease development and deployment:

* See a local, live-reloaded development server with: `npm start` and
  `open http://localhost:4567`
* After making changes, commit them, and then do a deploy with `npm
  run build-and-deploy`.

[package.json]: package.json
