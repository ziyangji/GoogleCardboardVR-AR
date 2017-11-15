// Possible idea: 
// Can we link the directions.html file to this file
// By doing this, I mean to have the directions.html file write to a json file 
// we can get the data from the json file instead of doing this
var imagePath = ["../../pictures/nearempacequirectangular.jpg", "../../pictures/86field.jpg", "../../pictures/quadequirectangular.jpg"];

var locations = [];

window.onload = function() {
	pushToAssets();

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
		sky.setAttribute('src', '#image0');
		var world = document.querySelector('a-scene');
		world.appendChild(sky);

		// test
		var test = document.querySelector('a-assets');
		console.log(test.querySelector('#image0'));
	}
}