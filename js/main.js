$(document).ready(function(){

  var interval = window.setInterval(rotateSlides, 3000)

  

  function rotateSlides(){
    var $firstSlide = $('#lumenus_project_carousel').find('div:first');
    var width = $firstSlide.width();

    $firstSlide.animate({marginLeft: -width}, 1000, function(){
      var $lastSlide = $('lumenus_project_carousel').find('div:last')
      $lastSlide.after($firstSlide);
      $firstSlide.css({marginLeft: 0})
    })



  }

})


