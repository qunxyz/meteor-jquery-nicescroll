Package.describe({
  name: "jackyqiu:meteor-jquery-nicescroll",
  summary: "Thank InuYaksa. Nicescroll is a jquery plugin, for nice customizabled scrollbars with a very similar ios/mobile style. It supports DIVs, IFrames and document page (body) scrollbars. Compatible with Firefox 4+, Chrome 5+, Safari 4+ (win/mac), Opera 10+, IE 6+ (all A-grade browsers). Compatible with iOS devices as iPad, Android, Blackberry, Windows Phone, and many many mobile and touch devices.",
  version: "3.6.0",
  git: "https://github.com/qunxyz/meteor-jquery-nicescroll.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.0");

  api.use('jquery', 'client');

  api.use("mizzao:build-fetcher@0.2.0", 'client');

  api.add_files('jquery-nicescroll.fetch.json', 'client');
});
