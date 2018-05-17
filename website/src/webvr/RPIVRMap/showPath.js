var imagePath = [];
var imageCounter;
var imageData = 'http://localhost:3000/imageData';
var homePath = '/vr-map';
var nextAngle;

window.onload = function() {
	imageCounter = 1;
	$.getJSON(imageData, function(data) {
		imagePath = data;
		console.log(imagePath);

		pushToAssets();
		addButton();
		addBuildingName();
	})

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
		sky.setAttribute('src', '#image0');
		sky.setAttribute('data-set-image-fade-setup', 'true');
		// ideally rotation would depend on direction of next location
		// or maybe the cursor should depend on direction of next location
		// current rotation is the same as the last rotation since that's where you walked from
		setAngle(imageCounter);
		console.log("nextAngle: " +  nextAngle);
		sky.setAttribute('rotation', '0 ' + nextAngle + ' 0'); // will need to change to new rotation for each image
		sky.setAttribute('data-set-image-fade-setup', 'true');
		var world = document.querySelector('a-scene');
		world.appendChild(sky);
	}

	function addButton() {
		var link = document.querySelector('a-entity');
		var button = document.createElement('a-entity');
		button.setAttribute('template', 'src: #button');
		button.setAttribute('data-src', imagePath[1].url);
		// button.setAttribute('color', 'red');
		button.setAttribute('position', '0 20 0');
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
					if (imageCounter >= imagePath.length) {
						reachedEnd();
					} else {
						setAngle(imageCounter+1);
						data.target.setAttribute('rotation', '0 ' + nextAngle + ' 0'); // how do I make this rotate
						data.target.setAttribute('material', 'src', data.src);

						data.src = imagePath[++imageCounter].url;

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
					location.href = homePath;
				}, data.dur);
			});
		}
	});

	// I think there's an issue with this being called at the same time as set-image
	AFRAME.registerComponent('set-building', {
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
					// how can I check this only runs when first event is over?
					console.log('set-building');
					console.log(data.target.value);
					if (imagePath[imageCounter-1].building != "") {
						data.target.setAttribute('value', imagePath[imageCounter-1].building.toUpperCase());
					} else {
						data.target.setAttribute('value', '');
					}
					console.log(data.target.value);
				}, data.dur);
			});
		}
	});

	// I don't think this will work since not all images are facing the same direction
	// I would need another attribute to say where north is on the image, or something
	// function calculateRotation(loc1, loc2) {
	// 	var x1 = 0; // will be extracted from json
	// 	var y1 = 0; // ^
	// 	var x2 = 0; // ^
	// 	var y2 = 0; // ^
	// 	// use inverse tangent?
	// 	var angle = Math.atan((y2-y1)/(x2-x1)) * 180 / Math.PI;
	// 	return angle; // plus whatever I need to make it right in aframe
	// }
	function setAngle(counter) { // I think I need to combine this with the above function
		if (imageCounter <= imagePath.length) {
			nextAngle = imagePath[counter].direction - 90;
		}
		else {
			nextAngle = -90;
		}
	}
}