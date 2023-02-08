## Description:
The authentication service interfaces with firebase and gives users authorization token that will be used to access other microservices and that can be validated through this microservice.
## Structure:

* The index.js file is the main file where the server is started.
* The api directory contains the api related file such as the controller that provides functions to handle differents requests depending on the route. The routes file declares the routes and connects each route with its controller.
* The Dockerfile contains the instructions to create the image of our service which will later be used to spinup our containers.
* The service-account is the file that allows access to the gcp ressources. 
