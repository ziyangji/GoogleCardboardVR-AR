This is meant to be the new website for Google Cardboard VR-AR at RPI.

It is very much under construction.

### Installation and Build Instructions

After cloning this repository, install dependencies:

```
npm install
```

Whenever you make changes to vue.js files, recompile by running the following line. which updates build/build.js:
```
webpack
```

Use the following commands to stop and start MongoDB:
```
sudo service mongod start
sudo service mongod stop
```

To run the code:
```
node server.js
```
and head to localhost:3000 in a browser to view the website.
