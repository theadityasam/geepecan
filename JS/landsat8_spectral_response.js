/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = /* color: #bf04c2 */ee.Geometry.Point([-119.8528412425459, 34.41661494597769]),
    water = 
    /* color: #ff0000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-119.96133123278028, 34.42369524569444],
          [-119.96133123278028, 34.38942102443737],
          [-119.91704259752638, 34.38942102443737],
          [-119.91704259752638, 34.42369524569444]]], null, false),
    urban = /* color: #00ff00 */ee.Geometry.Polygon(
        [[[-119.87790380358106, 34.427943137735475],
          [-119.8693207347334, 34.42256243802925],
          [-119.87035070299513, 34.41973035171617],
          [-119.85730443834669, 34.411799999726284],
          [-119.84563146471388, 34.40443542812167],
          [-119.83876500963575, 34.41633172151882],
          [-119.82125554918653, 34.42312884378045],
          [-119.80786596178419, 34.425677622174994],
          [-119.80923925279981, 34.44297916332733],
          [-119.87069402574903, 34.43420152783322]]]),
    forest = /* color: #0000ff */ee.Geometry.Polygon(
        [[[-119.96579442858106, 34.4545868778157],
          [-119.87172399401075, 34.44779231387957],
          [-119.83945165514356, 34.483457606846166],
          [-119.96854101061231, 34.47694841259172]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//Filter image collection for time window, spatial location, and cloud cover
var image = ee.Image(ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
    .filterBounds(roi)
    .filterDate('2016-05-01', '2017-06-30')
    .sort('CLOUD_COVER')
    .first());

//Add true-clour composite to map
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'],min:0, max: 3000}, 'True colour image');
//Choose bands to include and define feature collection to use
var subset = image.select('B[1-7]')
var samples = ee.FeatureCollection([water,forest,urban]);

// Create the scatter chart
var Chart1 = ui.Chart.image.regions(
    subset, samples, ee.Reducer.mean(), 10, 'label')
        .setChartType('ScatterChart');
print(Chart1);

// Define customization options.
var plotOptions = {
  title: 'Landsat-8  Surface reflectance spectra',
  hAxis: {title: 'Wavelength (nanometers)'},
  vAxis: {title: 'Reflectance'},
  lineWidth: 1,
  pointSize: 4,
  series: {
    0: {color: 'blue'}, // Water
    1: {color: 'green'}, // Forest
    2: {color: 'red'}, // City
}};

// Define a list of Landsat-8 wavelengths for X-axis labels.
var wavelengths = [443, 482, 562, 655, 865, 1609, 2201];