## Description:
The location service allows us to store the location of user in a MongoDB which offers Geo queries which can allow us to query data based on location data.
## Structure:

* The index.js file is the main file where the server is started.
* The api directory contains the api related file such as the controller that provides functions to handle differents requests depending on the route. The routes file declares the routes and connects each route with its controller. The model contains the schema used to represent our location objects.
* The Dockerfile contains the instructions to create the image of our service which will later be used to spinup our containers.

