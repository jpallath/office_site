$( document ).ready(function() {
 
    $( "a" ).click(function( event ) {
      $(".menu").css("width","0");
      $("a").css("display","none");
      $(".toggle-nav").css("display","block");
 
    });
    
    $( ".toggle-nav" ).click(function( event ) {
      $(".menu").css("width","40%");
      $("a").css("display","block");
      $(".toggle-nav").css("display","none");
 
    });
 
});
