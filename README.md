turf-translate
=========
[![Build Status](https://travis-ci.org/klokoy/turf-translate.svg?branch=master)](https://travis-ci.org/klokoy/turf-translate.svg?branch=master)

Takes a point, linestring, polygon, or featurecollection, and translates all of its coordinates with the given translator function. The
translator function is called with each coord in the argument and should return a new translated point.

###Install

```sh
npm install turf-translate
```

###Parameters

|name|description|
|---|---|
|fc|a geojson feature or featurecollection|

###Usage

```js
translate(fc, translator)
```

###Example

```js
var translate = require('turf-translate')
var polygon = require('turf-polygon')

var poly = polygon([[[1,0], [1,0], [1,2]], [[.2,.2], [.3,.3],[.1,.2]]])

//move the polygon 1, 1
var translator = function(point) {
	return [point[0] + 1, point[1] + 1];
}

var translated = translate(poly, translator);

console.log(translated)
```
