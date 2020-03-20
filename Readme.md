# Installation of earth engine API

To replicate the conda environment: conda env create -f ee-shared-env.yml 

For updating the earth engine environment: conda update earthengine-api 

For aurthentication: earthengine authenticate 
Upon entering the authorization code, an authorization token gets saved to a credentials file which can be found below. Subsequent use of the API's ee.Initialize() command and the earthengine command line tool will look to this file to authenticate. If you want to revoke authorization, simply delete the credentials file. 
ls $HOME/.config/earthengine/credentials
