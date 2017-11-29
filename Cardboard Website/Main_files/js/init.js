(function($){
  $(function(){

    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    var pano = $("#myPano").pano({
        img: "/path/to/image.jpg",
        interval: 100,
        speed: 50
    });

    pano.moveLeft();
    pano.stopMoving();
    pano.moveRight();
    pano.stopMoving();

})