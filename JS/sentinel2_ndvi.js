/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var geometry = /* color: #d63000 */ee.Geometry.Point([130.86850777529767, -12.371782027749568]),
    sent2 = ee.ImageCollection("COPERNICUS/S2");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var image = ee.Image(sent2
.filterDate("2015-07-01", "2017-09-30")
.filterBounds(geometry)
.sort("CLOUD_COVERAGE_ASSESSMENT")
.first());
// Print the image to the console.
print("A Sentinel-2 scene:", image);

// Bands 4,3 and 2 needed for RGB.
var trueColour = {bands: ["B4", "B3", "B2"],min: 0,max: 3000};
Map.addLayer(image, trueColour, "true-colour image");

//Define false-colour visualization parameters.
var trueColour = {bands: ["B5", "B4", "B3"],min: 0,max: 3000};
Map.addLayer(image, falseColour, "false-color composite");

//Define variable NDVI from equation
var NDVI = image.expression(
        "(NIR - RED) / (NIR + RED)",
        {
          RED: image.select("B4"),    //  RED
          NIR: image.select("B8"),    // NIR
          BLUE: image.select("B2")    // BLUE
        });
Map.addLayer(NDVI, {min: 0, max: 1}, "NDVI");