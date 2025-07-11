$(function(){
  $('#hamburger').on('click',function(){
    console.log('click');
    //$('#hamburger').toggleClass("open");
    $('#header-menu').toggleClass("open");  
    //$('#header-menu').slideToggle();
  });
});