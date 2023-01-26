## Env setup:
* install lastest docker version.
* `docker pull mongo` to get the mongo image
* `docker run --name my-mongo -p 27017:27017 -d mongo` spins up a container named my-mongo and mappes the port 27017 on the container to the local one

## User micro-service
* `cd user-microservice/`
* `npm i`
*  `npm run start:dev`

Now you can use postman or insomnia to send HTTP requests

