var flip = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');
var point = require('turf-point');

var pt = point(1,0);

var suite = new Benchmark.Suite('turf-flip');
suite
  .add('turf-flip',function () {
    flip(pt);
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    
  })
  .run();