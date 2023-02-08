## Description:
This repo is the home of the backend for our mobile app. It follows a micro-service based architecture, each micro-service lives in it's own directory:

* Authentication : is a node.js api that interfaces with firebase to allow the authentication of user and the validation of authorization tokens
* Location: is a node.js api that is responsible of storing the location of users during a live session, it interfaces with its own MongoDB database.
* User: is a node.js api that is responsible of storing the information of users it interfaces with a seperate MongoDB database and a filestorage service (coming soon...)
* Socket: it is an express server that leverages Socket.IO to establish socket connections with clients and exchange realtime data.
* The docker compose file allows the creating of the docker containers for each service. The reload docker compose file allows the creation of the docker container and it provides live reload for one micro-service that is still being worked on without having to rebuild all the other containers.
## Env setup:
* Install lastest docker version.
* run `docker -v` to make sure that it was correctly installed
* run `docker-compose -v` to make sure docker-compose was also installed with docker 
* In the root directory of the project run `docker-compose up --build` this will build all the images and spin up containers for each microservice
* Now you should be able to access all endpoints

