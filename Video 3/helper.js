var locations = [];

$.ajax({
    type: "GET",
    url: "map.json",
    dataType: "json",
    success: function(data){
        locations = data.locations;
    },
    error: function(msg){
        // error checking
        alert("Please Reload!");
    }
});

class Button {
    constructor(position = "20 20 20", rotation = "0 0 0", pointer = "", id) {
        this.position_ = position;
        this.rotation_ = rotation;
        this.pointer_ = pointer;
        this.id_ = id;
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
    updateId(id) {
        this.id_ = id;
    }
}

// Represent one scene
class Node {
    constructor(id, picture_address) {
        this.id_ = id;
        this.picture_ = picture_address;
        this.buttons_ = [];
    }

    addButton(button) {
        this.buttons_.push(button);
    }

    findButton(id) {
        for (var i = 0; i < this.buttons_.length; ++i) {
            if (id == this.buttons_[i].id_) return this.buttons_[i];
        }
        return null;
    }

    addButtonToDoc(button) {
        var entity = document.createElement("a-entity");
        entity.setAttribute("id", button.id_);
        entity.setAttribute("layout", "type: line; margin: 1.5");
        entity.setAttribute("position", button.position_);
        var entity2 = document.createElement("a-entity");
        entity2.setAttribute("template", "src: #link");
        entity2.setAttribute("data-src", "#1");
        entity2.setAttribute("data-thumb", "#1-thumb");
        entity.appendChild(entity2);
        document.getElementById("main").appendChild(entity);
        document.getElementById(button.id_).addEventListener("click", clickButton);
    }

    removeButtonFromDoc(button) {
        document.getElementById("main").removeChild(document.getElementById(button.id_));
    }

    addAllButton() {
        for (var i = 0; i < this.buttons_.length; ++i) {
            this.addButtonToDoc(this.buttons_[i]);
        }
    }

    removeAllButton() {
        for (var i = 0; i < this.buttons_.length; ++i) {
            this.removeButtonFromDoc(this.buttons_[i]);
        }
    }
}

var nodes = [];
var currentNode;

function findNode(id) {
    for (var i = 0; i < nodes.length; ++i) if (id == nodes[i].id_) return nodes[i];
    return null;
}

function initializeNodes() {
    for (var i = 0; i < locations.length; ++i) {
        newNode = new Node(locations[i].nodeNum, locations[i].url);
        nodes.push(newNode);
    }
}

function initializeButtons() {
    nodes[0].addButton(new Button("1 2 -4", "0 0 0", "6", "1"));
}

function clickButton(event) {
    currentNode.removeAllButton();
    var newNode = findNode(currentNode.findButton(event.path[2].id).pointer_);
    currentNode = newNode;
    document.getElementById("Current").setAttribute("src", currentNode.picture_);
    currentNode.addAllButton();
}

window.onload = function init() {
    initializeNodes();
    initializeButtons();
    currentNode = nodes[0];
    console.log(currentNode.id_);
    document.getElementById("Current").setAttribute("src", currentNode.picture_);
    currentNode.addAllButton();
};