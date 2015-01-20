var test = require('tape');
var translate = require('./');
var point = require('turf-point');
var linestring = require('turf-linestring');
var polygon = require('turf-polygon');
var featurecollection = require('turf-featurecollection');

test('translate', function(t) {
  // Point Geometry
  var pt = point(1,0);

  //create a translator function to move 2, 1
  var translator = function(point) {
    return [point[0] + 2, point[1] + 1]
  };
  var translatedPt = translate(pt.geometry, translator);

  t.equal(translatedPt.coordinates[0], 3);
  t.equal(translatedPt.coordinates[1], 1);

  t.equal(pt.geometry.coordinates[0], 1, 'does not mutate original');
  t.equal(pt.geometry.coordinates[1], 0, 'does not mutate original');

  // Point
  var pt2 = point(1,0);
  var translatedPt2 = translate(pt2, translator);

  t.ok(translatedPt2, 'should translate a point coordinate');
  t.equal(translatedPt2.geometry.coordinates[0], 3);
  t.equal(translatedPt2.geometry.coordinates[1], 1);

  // Line
  var line = linestring([[1,0], [3,4]]);
  var translatedLine = translate(line, translator);

  t.ok(translatedLine, 'should translate the x and ys of a linestring');
  t.equal(translatedLine.geometry.coordinates[0][0], 3);
  t.equal(translatedLine.geometry.coordinates[0][1], 1);
  t.equal(translatedLine.geometry.coordinates[1][0], 5);
  t.equal(translatedLine.geometry.coordinates[1][1], 5);

  // Polygon
  var poly = polygon([[[1,0], [1,0], [1,2]], [[.2,.2], [.3,.3],[.1,.2]]]);
  var translatedPoly = translate(poly, translator);

  t.ok(translatedPoly, 'should translate the x and ys of a polygon');
  t.equal(translatedPoly.geometry.coordinates[0][0][0], 3);
  t.equal(translatedPoly.geometry.coordinates[0][0][1], 1);
  t.equal(translatedPoly.geometry.coordinates[0][1][0], 3);
  t.equal(translatedPoly.geometry.coordinates[0][1][1], 1);
  t.equal(translatedPoly.geometry.coordinates[0][2][0], 3);
  t.equal(translatedPoly.geometry.coordinates[0][2][1], 3);
  t.equal(translatedPoly.geometry.coordinates[1][2][0], 2.1);
  t.equal(translatedPoly.geometry.coordinates[1][2][1], 1.2);

  // FeatureCollection
  var pt1 = point(1,0);
  var pt2 = point(2,1);
  var fc = featurecollection([pt1, pt2]);
  var translatedFC = translate(fc, translator);

  t.ok(translatedFC, 'should translate the x and ys of a featurecollection');
  t.equal(translatedFC.features[0].geometry.coordinates[0], 3);
  t.equal(translatedFC.features[0].geometry.coordinates[1], 1);
  t.equal(translatedFC.features[1].geometry.coordinates[0], 4);
  t.equal(translatedFC.features[1].geometry.coordinates[1], 2);

  t.end();
});
