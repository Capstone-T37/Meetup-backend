## Description:
The socket service will create socket connections with clients and thus allow the exchange of realtime data such as location data.
## Structure:

* The index.js file is the main file where the server is started.
* The handlers directory contains the different handlers for the different events that will be emitted through the socket.
* The Dockerfile contains the instructions to create the image of our service which will later be used to spinup our containers.

