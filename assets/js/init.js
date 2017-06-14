$( document ).ready(function(){
    $(".button-collapse").sideNav();
     $('.slider').slider();
    $('.slider').slider('pause');
// Start slider
$('.slider').slider('start');
// Next slide
$('.slider').slider('next');
// Previous slide
$('.slider').slider('prev');
$('select').material_select();
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 1980 // Creates a dropdown of 15 years to control year
  });
$('.modal').modal();
 $('#modal1').modal('open');
     $('#modal1').modal('close'); 
    $(".dropdown-button").dropdown();
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
     $('.carousel.carousel-slider').carousel({fullWidth: true});
  });
        
