var test = require('tape')
var flip = require('./')
var point = require('turf-point')
var point = require('turf-linestring')
var point = require('turf-polygon')
var point = require('turf-featurecollection')

test('flip', function(t){
  // Point
  var pt = t.point(1,0)
  var flippedPt = t.flip(pt)

  t.ok(flippedPt, 'should flip a point coordinate')  
  t.equal(flippedPt.geometry.coordinates[0], 0)
  t.equal(flippedPt.geometry.coordinates[1], 1)

  // Line
  var line = t.linestring([[1,0], [1,0]])
  var flippedLine = t.flip(line)
  
  t.ok(flippedLine, 'should flip the x and ys of a linestring')
  t.equal(flippedLine.geometry.coordinates[0][0], 0)
  t.equal(flippedLine.geometry.coordinates[0][1], 1)
  t.equal(flippedLine.geometry.coordinates[1][0], 0)
  t.equal(flippedLine.geometry.coordinates[1][1], 1)


  // Polygon
  var poly = t.polygon([[[1,0], [1,0], [1,2]], [[.2,.2], [.3,.3],[.1,.2]]])
  var flippedPoly = t.flip(poly)

  t.ok(flippedPoly, 'should flip the x and ys of a polygon')
  t.equal(flippedPoly.geometry.coordinates[0][0][0], 0)
  t.equal(flippedPoly.geometry.coordinates[0][0][1], 1)
  t.equal(flippedPoly.geometry.coordinates[0][1][0], 0)
  t.equal(flippedPoly.geometry.coordinates[0][1][1], 1)
  t.equal(flippedPoly.geometry.coordinates[0][2][0], 2)
  t.equal(flippedPoly.geometry.coordinates[0][2][1], 1)
  t.equal(flippedPoly.geometry.coordinates[1][2][0], .2)
  t.equal(flippedPoly.geometry.coordinates[1][2][1], .1)


  // FeatureCollection
  var pt1 = t.point(1,0)
  var pt2 = t.point(1,0)
  var fc = t.featurecollection([pt1, pt2])
  var flippedFC = t.flip(fc, function(err, flipped){
  
  t.ok(flippedFC, 'should flip the x and ys of a featurecollection')
  t.equal(flippedFC.features[0].geometry.coordinates[0], 0)
  t.equal(flippedFC.features[0].geometry.coordinates[1], 1)
  t.equal(flippedFC.features[1].geometry.coordinates[0], 0)
  t.equal(flippedFC.features[1].geometry.coordinates[1], 1)

  t.end()
})