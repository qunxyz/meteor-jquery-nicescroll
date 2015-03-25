Package.describe({
  name: "jackyqiu:meteor-jquery-nicescroll",
  summary: "Nicescroll is a jquery plugin, nice customizabled scrollbars with a very similar ios/mobile style.",
  version: "3.6.0",
  git: "https://github.com/qunxyz/meteor-jquery-nicescroll.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");

  api.use('jquery', 'client');

  api.use("mizzao:build-fetcher@0.2.0", 'client');

  api.add_files('jquery-nicescroll.fetch.json', 'client');
});
