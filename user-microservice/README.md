## Description:
The User service allows us to store user data in a MongoDB database.
## Structure:

* The index.js file is the main file where the server is started.
* The api directory contains the api related file such as the controller that provides functions to handle differents requests depending on the route. The routes file declares the routes and connects each route with its controller. The model contains the schema used to represent our user objects.
* The Dockerfile contains the instructions to create the image of our service which will later be used to spinup our containers.

