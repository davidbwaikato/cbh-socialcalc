var fs = require('fs');
var path = require('path');

var addons = {
    //"regex": ["formula.js", "constants.js", "constants-__.js"],
    //"html": ["formula.js", "constants.js"],
    //"regex": ["constants.js"],
    //"html": ["constants.js"],
}

exports.getAddons = function(dirPath) {
    var files = [];
    for (addon in addons) {
        for (filename of addons[addon]) {
            files.push("./" + path.join(dirPath, addon, filename));
        }
    }
    return files;
}

/*
exports.loadAddons = function(dirPath) {

    //console.log();
    var results = fs.readdirSync(__dirname + "/" + dirPath)
        .map(filename => path.join(dirPath, filename))
        .filter(filename => fs.lstatSync(filename).isDirectory())

    console.log(results);
    for (var r = 0; r < results.length; r++) {
        console.log(results[r]);
    }

}*/

