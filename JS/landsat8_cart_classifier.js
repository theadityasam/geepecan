/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var roi = /* color: #98ff00 */ee.Geometry.Point([72.95254822183207, 19.110420167678374]),
    urban = /* color: #0b4a8b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.92944221013802, 19.119681811500605]),
            {
              "landcover": 0,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9284122418763, 19.114815982086114]),
            {
              "landcover": 0,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92154578679818, 19.110274412084735]),
            {
              "landcover": 0,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91502265447396, 19.11643794113884]),
            {
              "landcover": 0,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9191566327415, 19.123594563323692]),
            {
              "landcover": 0,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.92155989201885, 19.11945871536584]),
            {
              "landcover": 0,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91949995549541, 19.115403861994146]),
            {
              "landcover": 0,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91108854802471, 19.116944717992634]),
            {
              "landcover": 0,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91057356389385, 19.122540337399105]),
            {
              "landcover": 0,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9089427808128, 19.123351281014983]),
            {
              "landcover": 0,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90791281255107, 19.120675151980166]),
            {
              "landcover": 0,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90439375432354, 19.119296523140825]),
            {
              "landcover": 0,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89838560613018, 19.118891041881913]),
            {
              "landcover": 0,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89632566960674, 19.121080628861986]),
            {
              "landcover": 0,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89143332036357, 19.112970902229595]),
            {
              "landcover": 0,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89598234685283, 19.106969448414212]),
            {
              "landcover": 0,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90336378606182, 19.104049743487977]),
            {
              "landcover": 0,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89039742376731, 19.122928658302854]),
            {
              "landcover": 0,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88876664068626, 19.126172401264004]),
            {
              "landcover": 0,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87898194219993, 19.12649677205763]),
            {
              "landcover": 0,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87134301092551, 19.12649677205763]),
            {
              "landcover": 0,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86653649237083, 19.12519928506209]),
            {
              "landcover": 0,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86378991033958, 19.12090128661657]),
            {
              "landcover": 0,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86233078863548, 19.11408913558966]),
            {
              "landcover": 0,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8611291589968, 19.106060168669586]),
            {
              "landcover": 0,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.85958420660423, 19.118387311185217]),
            {
              "landcover": 0,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86344658758567, 19.11011525119109]),
            {
              "landcover": 0,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.86859642889426, 19.103464863680173]),
            {
              "landcover": 0,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.8801835718386, 19.107438907882482]),
            {
              "landcover": 0,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87400376226829, 19.1199281393729]),
            {
              "landcover": 0,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87014138128684, 19.11352144366589]),
            {
              "landcover": 0,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88284432318137, 19.101518358217408]),
            {
              "landcover": 0,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89477478887962, 19.101842777384956]),
            {
              "landcover": 0,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88893830206321, 19.108655432937415]),
            {
              "landcover": 0,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88499009039329, 19.115954395328636]),
            {
              "landcover": 0,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([72.87597786810325, 19.112953749792894]),
            {
              "landcover": 0,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([72.88044106390403, 19.122523185955373]),
            {
              "landcover": 0,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89494645025657, 19.11717085773294]),
            {
              "landcover": 0,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([72.907992714905, 19.108331027131058]),
            {
              "landcover": 0,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91511666204856, 19.105735757772777]),
            {
              "landcover": 0,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9241288843386, 19.105086934070368]),
            {
              "landcover": 0,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93339859869407, 19.102653822520615]),
            {
              "landcover": 0,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93966423895286, 19.116440981364562]),
            {
              "landcover": 0,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93648850347923, 19.109628646538358]),
            {
              "landcover": 0,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([72.93348442938255, 19.115305611719457]),
            {
              "landcover": 0,
              "system:index": "44"
            })]),
    forest = /* color: #ffc82d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.94532906439231, 19.10930424264107]),
            {
              "landcover": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94678818609641, 19.113845839289585]),
            {
              "landcover": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9461015405886, 19.116522078897965]),
            {
              "landcover": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94979226019309, 19.118873890059454]),
            {
              "landcover": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95683037664817, 19.119360467501266]),
            {
              "landcover": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96069275762962, 19.121793333222755]),
            {
              "landcover": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96292435553, 19.12519928506209]),
            {
              "landcover": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9596627893679, 19.129091715479323]),
            {
              "landcover": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95528542425559, 19.128524075088848]),
            {
              "landcover": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95065056707786, 19.130226990408477]),
            {
              "landcover": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9640401544802, 19.129740444965677]),
            {
              "landcover": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96532761480735, 19.12746988061741]),
            {
              "landcover": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96283852484153, 19.120090330978105]),
            {
              "landcover": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96077858831809, 19.116927565968226]),
            {
              "landcover": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95734536077903, 19.110926255763662]),
            {
              "landcover": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95734536077903, 19.106060168669586]),
            {
              "landcover": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95786034490989, 19.103464863680173]),
            {
              "landcover": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95528542425559, 19.102167195916344]),
            {
              "landcover": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94893395330833, 19.101923882077443]),
            {
              "landcover": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94807564642356, 19.106790090861015]),
            {
              "landcover": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94361245062278, 19.10881763560196]),
            {
              "landcover": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94155251409934, 19.106060168669586]),
            {
              "landcover": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94052254583762, 19.102410509397405]),
            {
              "landcover": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.94275414373801, 19.11287265050907]),
            {
              "landcover": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.951938027405, 19.104113693744914]),
            {
              "landcover": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95202385809348, 19.109223141567316]),
            {
              "landcover": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95545708563255, 19.116765371259483]),
            {
              "landcover": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95828949835227, 19.115143415419322]),
            {
              "landcover": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.95485627081321, 19.11546780786045]),
            {
              "landcover": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96584259893821, 19.124145069375707]),
            {
              "landcover": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98129212286399, 19.118630600801392]),
            {
              "landcover": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98232209112571, 19.116116590833087]),
            {
              "landcover": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98386704351829, 19.11352144366589]),
            {
              "landcover": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98618447210715, 19.10914204045379]),
            {
              "landcover": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98961769964622, 19.110926255763662]),
            {
              "landcover": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98901688482688, 19.107276703865722]),
            {
              "landcover": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97966133978294, 19.11157505655787]),
            {
              "landcover": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97983300115989, 19.10597906600503]),
            {
              "landcover": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([72.98378121282981, 19.103383759743142]),
            {
              "landcover": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97863137152122, 19.10322155174981]),
            {
              "landcover": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91013848211692, 19.12649677205763]),
            {
              "landcover": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91254174139426, 19.127145511734355]),
            {
              "landcover": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([72.91134011175559, 19.12592912275085]),
            {
              "landcover": 1,
              "system:index": "42"
            })]),
    water = /* color: #00ffff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([72.96343933966087, 19.104843624525827]),
            {
              "landcover": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96541344549583, 19.111899456000334]),
            {
              "landcover": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96867501165794, 19.118711697260533]),
            {
              "landcover": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96970497991965, 19.123415223806536]),
            {
              "landcover": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9724515619509, 19.12682114221444]),
            {
              "landcover": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97742974188255, 19.12592912275085]),
            {
              "landcover": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97811638739036, 19.122928658302854]),
            {
              "landcover": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97416817572044, 19.124550537743385]),
            {
              "landcover": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97279488470481, 19.1194415636023]),
            {
              "landcover": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97485482122825, 19.116116590833087]),
            {
              "landcover": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97545563604758, 19.119279371360438]),
            {
              "landcover": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97202240850852, 19.1162787861784]),
            {
              "landcover": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96876084234641, 19.11141285659797]),
            {
              "landcover": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97142159368919, 19.107114499689892]),
            {
              "landcover": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96790253546165, 19.10824992558004]),
            {
              "landcover": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96901833441184, 19.106871193127887]),
            {
              "landcover": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97348153021262, 19.104762521264778]),
            {
              "landcover": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96687256719993, 19.1046003146234]),
            {
              "landcover": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([72.973910683655, 19.112953749792894]),
            {
              "landcover": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89803635504173, 19.126334586740434]),
            {
              "landcover": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90035378363059, 19.12511819178656]),
            {
              "landcover": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90352951910423, 19.126415679418937]),
            {
              "landcover": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90644776251243, 19.128199708275684]),
            {
              "landcover": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90378701116965, 19.124388350515705]),
            {
              "landcover": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90395867254661, 19.12260428050446]),
            {
              "landcover": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97030579473899, 19.11125065647898]),
            {
              "landcover": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97382485296653, 19.112548252975945]),
            {
              "landcover": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96687256719993, 19.10451921124307]),
            {
              "landcover": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([72.96455513861106, 19.10378927903065]),
            {
              "landcover": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([72.97236573126243, 19.103140447693498]),
            {
              "landcover": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([72.9669583978884, 19.10881763560196]),
            {
              "landcover": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90018212225364, 19.124388350515705]),
            {
              "landcover": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90207039740012, 19.12260428050446]),
            {
              "landcover": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90438782598899, 19.12203661782513]),
            {
              "landcover": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([72.90773522283958, 19.128848441265113]),
            {
              "landcover": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([72.89906632330344, 19.125523657766227]),
            {
              "landcover": 2,
              "system:index": "35"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var image = ee.Image(ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
    .filterBounds(roi)
    .filterDate('2016-05-01', '2016-06-30')
    .sort('CLOUD_COVER')
    .first());
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'],min:0, max: 3000}, 'True colour image');

// Build training data
var classNames = urban.merge(water).merge(forest);
print(classNames)

// Create training data
var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];
var training = image.select(bands).sampleRegions({
  collection: classNames,
  properties: ['landcover'],
  scale: 30
});
print(training);

// Train classifier and run classification
var classifier = ee.Classifier.cart().train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});

//Run the classification
var classified = image.select(bands).classify(classifier);

//Display classification
Map.centerObject(classNames, 11);
Map.addLayer(classified,
{min: 0, max: 3, palette: ['red', 'blue', 'green','yellow']},
'classification');
