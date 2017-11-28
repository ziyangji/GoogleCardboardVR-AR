class Button {
	constructor(position = "20 20 20", rotation = "0 0 0", pointer = "") {
		this.position_ = position;
		this.rotation_ = rotation;
		this.pointer_ = pointer;
	}

	updatePointer(pointer) {
		this.pointer_ = pointer;
	}
	updatePosition(position) {
		this.position_ = position;
	}
	updateRotation(rotation) {
		this.rotation_ = rotation;
	}
}

class Node {
	constructor(id, picture_address) {
		this.id_ = id;
		this.picture_ = picture_address;
		this.button1_ = new Button();
		this.button2_ = new Button();
		this.button3_ = new Button();
		this.button4_ = new Button();
		this.button5_ = new Button();
		this.button6_ = new Button();
	}	
}

var nodes = [];

function findNode(id) {
	for (var i = 0; i < nodes.length; ++i) if (id == nodes[i].id_) return nodes[i];
	return null;
}

function initializeNodes() {
	nodes.push(new Node("Sage", "pictures/test1.JPG"));
	nodes[0].button1_.updatePosition("1 2 -4");
	nodes[0].button1_.updatePointer("Lally");
	nodes.push(new Node("Lally", "pictures/test2.JPG"));
	nodes[1].button1_.updatePosition("1 2 -4");
	nodes[1].button1_.updatePointer("Sage");
}

function updatePage(node) {
	var button1 = document.getElementById("1");
	button1.src = findNode(node.button1_.pointer_).picture_;
	var button1position = document.getElementById("1-position");
	console.log(button1position);
	button1position.setAttribute("position", node.button1_.position_);
}

window.onload = function init() {
	initializeNodes();
	updatePage(nodes[0]);
};