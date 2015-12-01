$( document ).ready(function() {
 
    $( "a" ).click(function( event ) {
      $(".menu").css("width","0");
      $("a").css("display","none");
      $(".toggle-nav").css("display","inline-block")
                      .css("position","fixed")
                      .css("top","0");
 
    });
    
    $( ".toggle-nav" ).click(function( event ) {
      $(".menu").css("width","40%");
      $("a").css("display","block");
      $(".toggle-nav").css("display","none");
 
    });
    
    $("main").click(function(event){
      $(".menu").css("width","0");
      $("a").css("display","none");
      $(".toggle-nav").css("display","inline-block")
                      .css("position","fixed")
                      .css("top","0");
    });
 
});
