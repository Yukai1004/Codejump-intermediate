$(function(){
  $('#hamburger').on('click',function(){
    console.log('click');
    //$('#hamburger').toggleClass("open");
    $('.close').toggleClass("open");
    //$('#header-menu').slideToggle();
  });
});