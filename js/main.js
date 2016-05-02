$(document).ready(function(){
    $('.industry-drop').click(function(){
      $('#industries').slideToggle("slow");
      $('.caret').toggleClass("rotate");
    });

});

$(document).ready(function(){
 $("#jquery_jplayer_1").jPlayer({
   ready: function () {
     $(this).jPlayer("setMedia", {
       title: "Bubble",
       m4a: "https://s3.amazonaws.com/vyralmarketing/vyral-marketing/12+Love.mp3",
       oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
     });
   },
   cssSelectorAncestor: "#jp_container_1",
   swfPath: "/js",
   supplied: "m4a, oga",
   useStateClassSkin: true,
   autoBlur: false,
   smoothPlayBar: true,
   keyEnabled: true,
   remainingDuration: true,
   toggleDuration: true
 });
});
