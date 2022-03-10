$(function(){

  $('.burger, .menu a').on('click', function(){
    $('.mobile-nav').toggleClass('mobile-nav--active');
    $('.burger').toggleClass('burger--active');
  });

  $('.footer-top__title').on('click', function(){
    $(this).siblings().slideToggle();
    $(this).toggleClass('footer-top__title--active');
  });

});