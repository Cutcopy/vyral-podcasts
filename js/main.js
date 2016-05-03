$(document).ready(function(){
  //caret flip 
    $('.industry-drop').click(function(){
      $('#industries').slideToggle("slow");
      $('.caret').toggleClass("rotate");
    });

});
