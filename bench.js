var translate = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');
var point = require('turf-point');
var linestring = require('turf-linestring');
var polygon = require('turf-polygon');
var featurecollection = require('turf-featurecollection');

var pt = point(1,0);
var line = linestring([[1,0], [1,0]]);
var poly = polygon([[[1,0], [1,0], [1,2]], [[.2,.2], [.3,.3],[.1,.2]]]);
var pt1 = point(1,0);
var pt2 = point(1,0);
var fc = featurecollection([pt1, pt2]);

var translator = function(point) {
  return [point[0] + 1, point[1] + 1];
};

var suite = new Benchmark.Suite('turf-translate');
suite
  .add('turf-translate#Point',function () {
    translate(pt, tranlator);
  })
  .add('turf-translate#LineString',function () {
    translate(line, tranlator);
  })
  .add('turf-translate#Polygon',function () {
    translate(poly, tranlator);
  })
  .add('turf-translate#FeatureCollection',function () {
    translate(fc, tranlator);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();