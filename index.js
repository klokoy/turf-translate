module.exports = function(fc) {
  if(fc.type === 'Feature'){
    switch(fc.geometry.type){
      case 'Point':
        fc.geometry.coordinates = flipCoordinate(fc.geometry.coordinates);
        return fc;
        break;
      case 'LineString':
        fc.geometry.coordinates.forEach(function(coordinates, i){
          coordinates = flipCoordinate(coordinates);
          fc.geometry.coordinates[i] = coordinates;
        });
        return fc;
        break;
      case 'Polygon':
        fc.geometry.coordinates.forEach(function(ring, i){
          ring.forEach(function(coordinates, k){
            coordinates = flipCoordinate(coordinates);
            fc.geometry.coordinates[i][k] = coordinates;
          });
        });
        return fc;
        break;
    }
  }
  else if(fc.type === 'FeatureCollection'){
    fc.features.forEach(function(feature){
      switch(feature.geometry.type){
        case 'Point':
          feature.geometry.coordinates = flipCoordinate(feature.geometry.coordinates);
          break;
        case 'LineString':
          feature.geometry.coordinates.forEach(function(coordinates, i){
            coordinates = flipCoordinate(coordinates);
            feature.geometry.coordinates[i] = coordinates;
          });
          break;
        case 'Polygon':
          feature.geometry.coordinates.forEach(function(ring, i){
            ring.forEach(function(coordinates, k){
              coordinates = flipCoordinate(coordinates);
              feature.geometry.coordinates[i][k] = coordinates;
            });
          });
          break;
      }
    });
    return fc;
  }
  else {
    var err = new Error('Unknown geometry type');
    return err;
  }
}

function flipCoordinate (coordinates) {
  return([coordinates[1], coordinates[0]]);
}
