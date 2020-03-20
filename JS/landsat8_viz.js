/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var l8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA"),
    roi = 
    /* color: #99ff99 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-120.3066492132134, 37.68165381501888],
          [-120.3066492132134, 37.528794431827464],
          [-119.9331140569634, 37.528794431827464],
          [-119.9331140569634, 37.68165381501888]]], null, false);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// Filter to date range(for a year)
var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
var filter = l8.filterDate('2016-01-01','2017-01-01');
Map.addLayer(filter, vis_params, 'True colour composite');
Map.addLayer(filter.median(), vis_params, 'True colour composite~median');

// Extract single image
var vis_params = {bands:['B4','B3','B2'], max:0.3, min:0}
var filter = l8.filterDate('2016-01-01','2017-01-01').filterBounds(roi);
var image = ee.Image(filter.first())
Map.addLayer(image, vis_params, 'True colour composite first');

