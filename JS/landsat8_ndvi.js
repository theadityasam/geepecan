/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var l8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA"),
    roi = /* color: #99ff99 */ee.Geometry.Point([-68.02049272386903, 5.501922938178258]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Compute NDVI
var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
var image = ee.Image(filter.first())
Map.addLayer(image, vis_params, 'True colour composite first');
var red = image.select('B4');
var nir = image.select('B5');
var ndvi = nir.subtract(red).divide(nir.add(red));
Map.addLayer(image, vis_params, 'True colour composite');
Map.addLayer(ndvi, {min:0,max:1}, 'NDVI');

// Function for NDVI
var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
function addNDVI(image){
  var ndvi = image.normalizedDifference(['B5','B4']);
  return image.addBands(ndvi);
}
var image = ee.Image(filter.first());
var ndvi = addNDVI(image);
Map.addLayer(image, vis_params, 'True colour composite');
Map.addLayer(ndvi, {min:0,max:1}, 'NDVI');

// In the above code, band 1 is being shown as ndvi as default instead of the nd band(check inspector), adding nd parameter in addLayer
var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
function addNDVI(image){
  var ndvi = image.normalizedDifference(['B5','B4']);
  return image.addBands(ndvi);
}
var image = ee.Image(filter.first());
var ndvi = addNDVI(image);
Map.addLayer(image, vis_params, 'True colour composite');
Map.addLayer(ndvi, {bands:'nd',min:0,max:1}, 'NDVI');//A better looking image


// Mapping the function over a collection
var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
function addNDVI(image){
  var ndvi = image.normalizedDifference(['B5','B4']);
  return image.addBands(ndvi);
}
var with_ndvi = filter.map(addNDVI);
Map.addLayer(filter, vis_params, 'True colour composite');
Map.addLayer(ndvi, {bands:'nd',min:0,max:1}, 'NDVI');//A better looking image



