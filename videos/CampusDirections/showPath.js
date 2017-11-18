// Possible idea: 
// Can we link the directions.html file to this file
// By doing this, I mean to have the directions.html file write to a json file 
// we can get the data from the json file instead of doing this
var imagePath = ["../../pictures/nearempacequirectangular.jpg", "../../pictures/86field.jpg", "../../pictures/quadequirectangular.jpg", "../../pictures/empacequirectangular.jpg"];

var locations = [];

window.onload = function() {
	var imageCounter = 1;

	pushToAssets();
	addButton();

	function pushToAssets() {
		var assets = document.querySelector('a-assets');
		console.log(assets);
		for (var i = 0; i < imagePath.length; ++i) {
			var image = document.createElement('a-image');
			image.setAttribute('src', imagePath[i]);
			image.setAttribute('id', "image" + i);
			assets.appendChild(image);
			console.log(image);
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
		// var link = document.getElementById('links');
		var link = document.querySelector('a-entity');
		var button = document.createElement('a-entity');
		button.setAttribute('template', 'src: #button');
		button.setAttribute('data-src', imagePath[1]);
		link.appendChild(button);
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
					data.target.setAttribute('material', 'src', data.src);
					// var button = document.querySelector('a-entity').querySelector('a-entity');
					// button.setAttribute('data-src', imagePath[++counter]);
					data.src = imagePath[++imageCounter]; // deal with case where end is reached
					if (counter >= imagePath.length) {
						// end somehow. Bring back to page where you pick directions?
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