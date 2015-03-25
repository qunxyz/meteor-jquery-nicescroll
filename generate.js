var path = require("path");
var url = require("url");

var output = [];

var urlPrefix = "https://raw.githubusercontent.com/inuyaksa/jquery.nicescroll/master/";
var themePrefix = "./";

// Base file
output.push({
    file: "jquery.nicescroll.min.js",
    url: url.resolve(urlPrefix, "jquery.nicescroll.min.js"),
    bare: true
});

// Images - https://github.com/jquery/jquery-ui/tree/master/themes/base/images
// Must have correct relative path to CSS to work properly.
[
    "zoomico.png"
].forEach(function(img) {
    output.push({
	file: path.join("./", img),
	url: url.resolve(urlPrefix, path.join(themePrefix, "", img))
    });
});

console.log(JSON.stringify(output, null, "    "));
