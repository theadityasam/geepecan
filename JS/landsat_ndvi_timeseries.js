/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var l8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA"),
    roi = /* color: #99ff99 */ee.Geometry.Point([-68.02049272386903, 5.501922938178258]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Have chosen some point in venezuela on the amazon rainforest with thick vegetation

// // Filter to date range(for a year)
// var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
// var filter = l8.filterDate('2016-01-01','2017-01-01');
// Map.addLayer(filter, vis_params, 'True colour composite');
// Map.addLayer(filter.median(), vis_params, 'True colour composite~median');

// var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
// var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
// Map.addLayer(filter, vis_params, 'True colour composite');

// // Extract single image
// var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
// var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
// var image = ee.Image(filter.first())
// Map.addLayer(image, vis_params, 'True colour composite first');

// // Compute NDVI
// var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
// var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
// var image = ee.Image(filter.first())
// Map.addLayer(image, vis_params, 'True colour composite first');
// var red = image.select('B4');
// var nir = image.select('B5');
// var ndvi = nir.subtract(red).divide(nir.add(red));
// Map.addLayer(image, vis_params, 'True colour composite');
// Map.addLayer(ndvi, {min:0,max:1}, 'NDVI');

// // Function for NDVI
// var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
// var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
// function addNDVI(image){
//   var ndvi = image.normalizedDifference(['B5','B4']);
//   return image.addBands(ndvi);
// }
// var image = ee.Image(filter.first());
// var ndvi = addNDVI(image);
// Map.addLayer(image, vis_params, 'True colour composite');
// Map.addLayer(ndvi, {min:0,max:1}, 'NDVI - with inbuilt function');

// // In the above code, band 1 is being shown as ndvi as default instead of the nd band(check inspector), adding nd parameter in addLayer
// var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
// var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
// function addNDVI(image){
//   var ndvi = image.normalizedDifference(['B5','B4']);
//   return image.addBands(ndvi);
// }
// var image = ee.Image(filter.first());
// var ndvi = addNDVI(image);
// Map.addLayer(image, vis_params, 'True colour composite');
// Map.addLayer(ndvi, {bands:'nd',min:0,max:1}, 'NDVI better looking(adding 'nd' band)');//A better looking image


// // Mapping the function over a collection
// var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
// var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
// function addNDVI(image){
//   var ndvi = image.normalizedDifference(['B5','B4']);
//   return image.addBands(ndvi);
// }
// var with_ndvi = filter.map(addNDVI);
// Map.addLayer(filter, vis_params, 'True colour composite');
// Map.addLayer(ndvi, {bands:'nd',min:0,max:1}, 'NDVI over a collection');//A better looking image


// // Removing clouds with median reducer (doesn't work for the venezuela pin, maybe location is cloudy most of the times)
// var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
// var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
// function addNDVI(image){
//   var ndvi = image.normalizedDifference(['B5','B4']);
//   return image.addBands(ndvi);
// }
// var with_ndvi = filter.map(addNDVI);
// Map.addLayer(filter.median(), vis_params, 'True colour composite');
// Map.addLayer(ndvi.median(), {bands:'nd',min:0,max:1}, 'NDVI - after median reducer');


// A better way than above to make cloud free mosaics. 
// Usually use median to clear clouds, not using median for this pin
var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
var filter = l8.filterDate('2016-01-01','2019-01-01').filterBounds(roi);
function addNDVI(image){
  var ndvi = image.normalizedDifference(['B5','B4']);
  return image.addBands(ndvi);
}
var with_ndvi = filter.map(addNDVI);
Map.addLayer(filter, vis_params, 'True colour composite');
var greenest = with_ndvi.qualityMosaic('nd');
Map.addLayer(greenest, {bands:'nd',min:0,max:1}, 'Greenest pixel composite(with NDVI)');//A better looking image

// Print NDVI timeseries
print(Chart.image.series(with_ndvi.select('nd'), roi));


// Create RGB object
// A better way than above to make cloud free mosaics. 
// Usually use median to clear clouds, not using median for this pin
var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
var filter = l8.filterDate('2016-01-01','2019-01-01').filterBounds(roi);
function addNDVI(image){
  var ndvi = image.normalizedDifference(['B5','B4']);
  return image.addBands(ndvi);
}
var with_ndvi = filter.map(addNDVI);
var greenest = with_ndvi.qualityMosaic('nd');
var rgb = greenest.visualize(vis_params);
Map.addLayer(rgb,{},'RGB');

// Export to google drive
// A better way than above to make cloud free mosaics. 
// Usually use median to clear clouds, not using median for this pin
var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
var filter = l8.filterDate('2016-01-01','2019-01-01').filterBounds(roi);
function addNDVI(image){
  var ndvi = image.normalizedDifference(['B5','B4']);
  return image.addBands(ndvi);
}
var with_ndvi = filter.map(addNDVI);
var greenest = with_ndvi.qualityMosaic('nd');
var rgb = greenest.visualize(vis_params);
Map.addLayer(rgb,{},'RGB');
Export.image(rgb,'GreenestPixel');

