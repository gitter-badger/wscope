Package.describe({
  summary: "Telescope buildbox theme",
  version: '0.1.0',
  name: "telescope-theme-buildbox"
});

Package.onUse(function (api) {

  api.use(['telescope-theme-hubblebox'], ['client']);

  api.add_files([
    'lib/client/stylesheets/screen.css',
    ], ['client']);

});