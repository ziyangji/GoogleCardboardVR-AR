// Possible idea: 
// Can we link the directions.html file to this file
// By doing this, I mean to have the directions.html file write to a json file 
// we can get the data from the json file instead of doing this
var imagePath = [];

var locs = [];

window.onload = function() {
	// it might be better to write to JSON file, which would be easier w/ node.js
	var imageData = window.localStorage.getItem('images');
	var imagePath = JSON.parse(imageData);

	var imageCounter = 1;

	pushToAssets();
	addButton();

	function pushToAssets() {
		var assets = document.querySelector('a-assets');
		console.log(assets);
		for (var i = 0; i < imagePath.length; ++i) {
			var image = document.createElement('img');
			image.setAttribute('src', imagePath[i]);
			image.setAttribute('id', "image" + i);
			image.setAttribute('crossorigin', 'anonymous');
			assets.appendChild(image);
		}

		var sky = document.createElement('a-sky');
		sky.setAttribute('id', 'loc');
		sky.setAttribute('src', '#image0');
		sky.setAttribute('data-set-image-fade-setup', 'true');
		// ideally rotation would depend on direction of next location
		// or maybe the cursor should depend on direction of next location
		// current rotation is the same as the last rotation since that's where you walked from
		sky.setAttribute('rotation', '0 -90 0'); // will need to change to new rotation for each image
		var world = document.querySelector('a-scene');
		world.appendChild(sky);
	}

	function addButton() {
		var link = document.querySelector('a-entity');
		var button = document.createElement('a-entity');
		button.setAttribute('template', 'src: #button');
		button.setAttribute('data-src', imagePath[1]);
		link.appendChild(button);
	}

	function reachedEnd() {
		var scene = document.querySelector('a-scene');
		var destinationText = document.createElement('a-text');
		destinationText.setAttribute('value', 'You have reached the end!');
		destinationText.setAttribute('position', '-1.3 2 -3');
		destinationText.setAttribute('color', '#CC1122');
		scene.appendChild(destinationText);

		var destinationButton = document.createElement('a-entity');
		destinationButton.setAttribute('template', 'src: #textButton');
		destinationButton.setAttribute('id', 'home');
		destinationButton.setAttribute('data-src', '#thumbnail');
		destinationButton.setAttribute('position', '0 1 -4');
		scene.appendChild(destinationButton);
	}

	// based on aframe tutorial
	AFRAME.registerComponent('set-image', {
		schema: {
			on: {type: 'string'},
			target: {type: 'selector'},
			src: {type: 'string'},
			dur: {type: 'number', default: 300}
		},
		init: function() {
			var data = this.data;
			var el = this.el;
			this.setupFadeAnimation();
			el.addEventListener(data.on, function() {
				data.target.emit('set-image-fade');
				setTimeout(function() {
					if (imageCounter >= imagePath.length) {
						reachedEnd();
					} else {
						data.target.setAttribute('material', 'src', data.src);

						// I can get this working when I have this connected to directions.html
						// I need information from JSON file and don't want to reload it here
						// var text = document.querySelector('a-text');
						// if (locations[imageCounter].building != "") {
						// 	text.setAttribute('value', locations[imageCounter].building);
						// } else if (text.value != ""){
						// 	text.value = "";
						// }

						data.src = imagePath[++imageCounter]; // deal with case where end is reached
						
						// var button = document.querySelector('a-entity').querySelector('a-entity');
						// button.setAttribute('data-src', imagePath[imageCounter]);
					}
				}, data.dur);
			});
		},
		setupFadeAnimation: function() {
			var data = this.data;
		    var targetEl = this.data.target;

		    // Only set up once.
		    if (targetEl.dataset.setImageFadeSetup) { return; }
		    targetEl.dataset.setImageFadeSetup = true;

		    // Create animation.
		    targetEl.setAttribute('animation__fade', {
		      property: 'material.color',
		      startEvents: 'set-image-fade',
		      dir: 'alternate',
		      dur: data.dur,
		      from: '#FFF',
		      to: '#000'
		    });
		}
	});

	AFRAME.registerComponent('set-page', {
		schema: {
			on: {type: 'string'},
			target: {type: 'selector'},
			src: {type: 'string'},
			dur: {type: 'number', default: 300}
		},
		init: function() {
			var data = this.data;
			var el = this.el;
			el.addEventListener(data.on, function() {
				setTimeout(function() {
					location.href = 'index.html';
				}, data.dur);
			});
		}
	});

	// I don't think this will work since not all images are facing the same direction
	// I would need another attribute to say where north is on the image, or something
	function calculateRotation(loc1, loc2) {
		var x1 = 0; // will be extracted from json
		var y1 = 0; // ^
		var x2 = 0; // ^
		var y2 = 0; // ^
		// use inverse tangent?
		var angle = Math.atan((y2-y1)/(x2-x1)) * 180 / Math.PI;
		return angle; // plus whatever I need to make it right in aframe
	}
}