Package.describe({
  summary: "Telescope static pages package",
  version: '0.1.0',
  name: "telescope-static-pages"
});

Package.onUse(function (api) {

  api.use([
    'telescope-lib', 
    'telescope-base',
    'iron:router'
  ], ['client', 'server']);

  api.use([
    'templating'
  ], ['client']);

  api.add_files([
    'lib/client/templates/about_page.html',
    'lib/client/templates/about_link.html',
    'lib/client/about.js'
  ], ['client']);

  api.add_files([
    'lib/client/templates/contact_page.html',
    'lib/client/templates/contact_link.html',
    'lib/client/contact.js'
  ], ['client']);

  api.add_files([
    'lib/client/templates/suggest_page.html',
    'lib/client/templates/suggest_link.html',
    'lib/client/suggest.js'
  ], ['client']);

});