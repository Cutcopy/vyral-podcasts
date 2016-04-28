$(document).ready(function(){
    $('.industry-drop').click(function(){
      $('#industries').slideToggle("slow");
      $('.caret').toggleClass("rotate");
    });

});
