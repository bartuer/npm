#!/usr/local/bin/node

var fs = require("fs"),
  version = process.env["npm.package.version"],
  bin = "/usr/local/bin/npm";

fs.lstat(bin, function (er, st) {
  if (er) return;
  fs.unlink(bin, function (er) {
    if (er) throw er;
  });
});