# Balena Lights

A web application for balena home automation controlling system. Using the application, you can turn the lights (connected balena devices) on/off and change their brightness. The application has been developed using [React](https://reactjs.org/), [MobX](https://mobx.js.org), [Emotion](https://emotion.sh), and Balena [Rendition](https://github.com/balena-io-modules/rendition) components. 

### Using the Application

You can use the application both on your computer or using a mobile device. 
* Logging into the application, you will see a table with the names of the devices, their state and their brightness. 
* By clicking any of the devices, you can change the brightness and the name of the device. 
<b> If you are using a computer, after setting the brightness or the name, please make sure to click the "make changes" button, for the changes to take place. On the mobile, you just click 'OK' to leave the device edit panel.</b>
* If you set the brightness to zero, the device state will automatically turn to off
* You can always change the device state by clicking on the device toggle you see in the table

Notice: The changes take place after the communication with the device. If you have a slow internet connection, you might see some delay between the time you set the changes and the time you see the changes displayed in the table.

### Prerequisites

You need to specify the backend endpoint url in the .env file you will find in the root folder of the project. 
Example of the .env file
```
REACT_APP_LIGHTS_API_ENDPOINT=http://my.balenaserver.test.com/api
```
For more information about the backend scroll bellow to the backend section.

### Run on a Docker container

To run the application in a docker container at port 8000 use the following steps:

- Make sure you have [Docker](https://www.docker.com) installed in your computer

- Go to the project's folder in console

- Build the docker image using the following command
```
docker build -t balena.lights .
```
- Run the container using the following command
```
docker run -it -p 8000:8000 balena.lights
```
 
### Run using npm / yarn

Alternatively, you can run the application using [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com). 

Once you have node and npm or yarn installed, you can install the projects' required dependencies using the following command:
<br/><i>*the commands following will use npm. If you prefer using yarn, you can just replace the npm command with yarn</i>
```
npm install
```
You can now run the project in development mode using 
```
npm start
```
Or you can build the project for production using
```
npm build
```
And serve it using the server you want. For example you can install serve using
```
npm install -g serve
```
```
yarn add global serve
```
and serve on port 3000 using the command
```
serve -s -p 3000 build
```
### Running the tests

You can run automated test using the command
```
npm test
```
### Backend
The application requires a backend endpoint to communicate with the devices. If you have the address of the backend API, please write it in the .env file of the project. If you just want to test the project, you can use [this example API](https://github.com/balena-io/light-api), running it using npm or putting it to the Docker machine (if you run the application using Docker).
## Authors

**Timos Lanitis** 
