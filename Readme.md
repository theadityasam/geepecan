# GEE and Pecan Trials

### Installation of earth engine API

To replicate the conda environment: `conda env create -f ee-shared-env.yml` 

For updating the earth engine environment: `conda update earthengine-api` 

For authentication: `earthengine authenticate`

Upon entering the authorization code, an authorization token gets saved to a credentials file which can be found below. Subsequent use of the API's `ee.Initialize()` command and the earthengine command line tool will look to this file to authenticate. If you want to revoke authorization, simply delete the credentials file located at- 
`ls $HOME/.config/earthengine/credentials`

### Familiarising with Earth engine
I had lots of fun using the Earth engine code editor(kudos to Google'e ee team for making it available to everyone). Following are some of the tasks that I performed using Earth engine(codes for which can be found in the [JS](https://github.com/theadityasam/geepecan/tree/master/JS) folder.
First, I tried GEE on the code editor: https://code.earthengine.google.co.in/?accept_repo=users/theadityasam/test 

#### Classfying landsat 8 images of Mumbai into water, land(urban) and vegetation
Creating  training data 
![mumbai_train](https://github.com/theadityasam/geepecan/blob/master/Images/mumbai_training.png)
Running the CART algorithm, the results also generalise quite well over untrained samples(can be seen after zooming out)
![mumbai_cart](https://github.com/theadityasam/geepecan/blob/master/Images/mumbai_cart.png) ![mumbai_cart_gen](https://github.com/theadityasam/geepecan/blob/master/Images/mumbai_cart_generalised.png) 
Water is depicted in green, land in red and vegetation in blue(yeah, I messed up the colour coding :/). We can see that the algorithm has been able to detect the mangrove cover of the mumbai region quite well. The code can be found [here](https://github.com/theadityasam/geepecan/blob/master/JS/landsat8_cart_classifier.js).

#### Doing the same as above but for Rio with an SVM classifier 
This time, without messing the colouring scheme 
![rio](https://github.com/theadityasam/geepecan/blob/master/Images/rio_true_image.png) ![rio_classified](https://github.com/theadityasam/geepecan/blob/master/Images/rio_svm_classified.png) 
The code can be found [here](https://github.com/theadityasam/geepecan/blob/master/JS/landsat8_svm_classification.js)

#### For a point in venezuela, over the Amazon rainforest, obtaining the NDVI plots and the time series of the NDVI collection 
Amazon rainforest region in true colour composite, (freed from clouds) 
![venezuelatcc](https://github.com/theadityasam/geepecan/blob/master/Images/Venezuela_TCC.png)
NDVI plot for the region 
![venezuelafcc](https://github.com/theadityasam/geepecan/blob/master/Images/Venezuela_NDVI.png)
In the above plot, the rivers are dark(negative NDVI values, strongly absorb infrared) 
Now, obtaining the time series for the region 
![venezuelats](https://github.com/theadityasam/geepecan/blob/master/Images/Venezuela_ndvi_ts.png)
Code can be found [here](https://github.com/theadityasam/geepecan/blob/master/JS/landsat_ndvi_timeseries.js). 

#### Using the python API to do all of the above 
I've created python notebooks that demonstrate the use of GEE API. The notebook links can be found below. Thanks to Github, you can view the notebooks without opening Jupyter.
- [Notebook 1](https://github.com/theadityasam/geepecan/blob/master/landsat8_ndvi_viz.ipynb): Visualizing a site near yosemite in true color, false colour and creating greenest pixel composite
- [Notebook 2](https://github.com/theadityasam/geepecan/blob/master/landsat8_ndvi_ts.ipynb): Creating a time series for the above site over 2013-2017

We can compare the time-series that I created in Python with the time-series that was created by Chart.image.series in the GEE code editor for the same time periods(2013-2017) and same sites(Yosemite).
![yosemite_ndvi](https://github.com/theadityasam/geepecan/blob/master/Images/gee_ndvi_yosemite.png)
We see that both the plots are almost similar. 

### Running a SIPNET model with Pecan 
Pecan is an amazing software that can be used to apply an ecosystem model over an area easily. We can "simulate" the plant growth of an area for a given time, location and atmoshperic condition(pulled from BETY). 
I faced a lot of problems during the installation. Initially I tried the local installation, but couldn't get Pecan up and running. I then tried running the docker container of Pecan, which ran Pecan successfully, however the SIPNET model example(as given in Demo01) just didn't work. I tried for various places other than Niwot ridge, but there was just no output in the execution tab. 
Logging into Ameriflux:
![Ameriflux](https://github.com/theadityasam/geepecan/blob/master/Images/pecan_logging_ameriflux.png) 
SIPNET output for Niwot Ridge:
![sipnet](https://github.com/theadityasam/geepecan/blob/master/Images/pecan_sipnet.png)

Also tried for various other models(don't really know much about them as I couldn't find many resources on these models, blindly selected them in the hopes that something would run:P) 
For ED2.2, I got some output, but the model failed 
![ed2params](https://github.com/theadityasam/geepecan/blob/master/Images/pecan_job_start.png)
![ed2](https://github.com/theadityasam/geepecan/blob/master/Images/pecan_job_fail1.png)
I also tried running the model on http://pecan.ncsa.illinois.edu/pecan/02-modelsite.php 

Even over there, SIPNET model doesn't work(infact, in many runs I wasn't able to find models in the dropdown).


### Sources
- https://pecanproject.github.io/pecan-documentation/tutorials/Demo01.html
- https://pecanproject.github.io/pecan-documentation/develop/pecan-manual-setup.html
- https://www.youtube.com/playlist?list=PLivRXhCUgrZpCR3iSByLYdd_VwFv-3mfs
- https://www.geospatialecology.com/ 
- https://developers.google.com/earth-engine/datasets/catalog/landsat-8
- https://github.com/renelikestacos/Google-Earth-Engine-Python-Examples
- https://developers.google.com/earth-engine/python_install
