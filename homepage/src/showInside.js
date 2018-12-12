//start from a given point 
//use a structure  
var imagePath = [];

var locs = [];

window.onload = function() {
	// it might be better to write to JSON file, which would be easier w/ node.js
	var imageData = window.localStorage.getItem('images');
	var imagePath = JSON.parse(imageData);


	var imageCounter = 0;

	pushToAssets();
	addButton();
	addBuildingName();

	function pushToAssets() {
		var assets = document.querySelector('a-assets');
		console.log(assets);
		for (var i = 0; i < imagePath.length; ++i) {
			var image = document.createElement('img');
			image.setAttribute('src', imagePath[i].url);
			image.setAttribute('id', "image" + i);
			image.setAttribute('crossorigin', 'anonymous');
			assets.appendChild(image);
		}

		var sky = document.createElement('a-sky');
		sky.setAttribute('id', 'loc');
		sky.setAttribute('src', "Access-Control-Allow-Origin: https://cardboard.cs.rpi.edu/2018_03_18/1.jpg");
		sky.setAttribute('data-set-image-fade-setup', 'true');
		// ideally rotation would depend on direction of next location
		// or maybe the cursor should depend on direction of next location
		// current rotation is the same as the last rotation since that's where you walked from
		sky.setAttribute('rotation', '0 -90 0'); // will need to change to new rotation for each image
		sky.setAttribute('data-set-image-fade-setup', 'true');
		var world = document.querySelector('a-scene');
		world.appendChild(sky);
	}

	function addButton() {
		var link = document.querySelector('a-entity');
		var button = document.createElement('a-entity');
		button.setAttribute('template', 'src: #button');
		button.setAttribute('data-src', imagePath[1].url);
		link.appendChild(button);
	}

	function addBuildingName() {
		var scene = document.querySelector('a-scene');
		var buildingText = document.createElement('a-text');
		buildingText.setAttribute('id', 'building');
		buildingText.setAttribute('value', imagePath[0].building.toUpperCase());
		buildingText.setAttribute('position', '-1.3 2.8 -3');
		buildingText.setAttribute('color', '#CC1122');
		// buildingText.setAttribute('align', 'center');
		// buildingText.setAttribute('width', '10');
		scene.appendChild(buildingText);
	}

	function reachedEnd() {
		var scene = document.querySelector('a-scene');
		var destinationText = document.createElement('a-text');
		destinationText.setAttribute('value', 'YOU HAVE REACHED THE END!');
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
					data.target.emit('new-building');
					if (imageCounter == imagePath.length) {
						reachedEnd();
					} else {
						document.getElementById('loc').setAttribute('src', imagePath[imageCounter].url);
						console.log(imagePath[imageCounter].url);
						imageCounter+=1;
						}
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
}