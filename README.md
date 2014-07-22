turf-flip
=========
[![Build Status](https://travis-ci.org/Turfjs/turf-flip.svg)](https://travis-ci.org/Turfjs/turf-flip)

Takes a point, linestring, polygon, or featurecollection, and flips all of its coordinates from [x, y] to [y, x].

###Install

```sh
npm install turf-flip
```

###Parameters

|name|description|
|---|---|
|fc|a geojson feature or featurecollection|

###Usage

```js
flip(fc)
```

###Example

```js
var flip = require('turf-flip')
var polygon = require('turf-polygon')

var poly = polygon([[[1,0], [1,0], [1,2]], [[.2,.2], [.3,.3],[.1,.2]]])

var flipped = flip(poly)

console.log(flipped)
```