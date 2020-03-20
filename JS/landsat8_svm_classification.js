/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = /* color: #999900 */ee.Geometry.Point([-43.18882968555402, -22.94893295527479]),
    Water = /* color: #009999 */ee.FeatureCollection([]),
    Urban = /* color: #d69749 */ee.FeatureCollection([]),
    Forest = /* color: #0eaa0c */ee.FeatureCollection([]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var image = ee.Image(ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
    .filterBounds(roi)
    .filterDate('2016-05-01', '2017-06-30')
    .sort('CLOUD_COVER')
    .first());
//True colour composite
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'],min:0, max: 3000}, 'True colour image');

// Merge training data
//Merge into one FeatureCollection and print details to consloe
var classNames = Water.merge(Urban).merge(Forest);
print(classNames);

//Extract training data from select bands of the image, print to console
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];
var training = image.select(bands).sampleRegions({
  collection: classNames,
  properties: ['landcover'],
  scale: 30
});
print(training);

//Train classifier - e.g. cart, randomForest, svm
var classifier = ee.Classifier.svm().train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});

//Run the classification
var classified = image.select(bands).classify(classifier);

//Centre the map on your training data coverage
Map.centerObject(classNames, 11);
//Add the classification to the map view, specify colours for classes
Map.addLayer(classified,
{min: 0, max: 3, palette: ['blue', 'red', 'green','yellow']},
'classification');

// For validation - collect images but with different labels - same code as above and then compute error matrix
//Merge into one FeatureCollection
// var valNames = vWater.merge(vCity).merge(vForest).merge(vOther);
// var validation = classified.sampleRegions({
//   collection: valNames,
//   properties: ['landcover'],
//   scale: 30,
// });
// print(validation);
// //Compare the landcover of your validation data against the classification result
// var testAccuracy = validation.errorMatrix('landcover', 'classification');
// //Print the error matrix to the console
// print('Validation error matrix: ', testAccuracy);
// //Print the overall accuracy to the console
// print('Validation overall accuracy: ', testAccuracy.accuracy());