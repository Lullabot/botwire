$(document).ready(function(){
  
  // Make sticky elements get stuck when you scroll to them
  $('.my-sticky-element').waypoint('sticky', {
    wrapper: '<div class="sticky-wrapper" />',
    stuckClass: 'stuck',
  });
  
  // reveal anchor menus
  $('.show-menu').click(function(){
    
    event.preventDefault();
    if (!$('.anchor-menu.hidden').is(":visible"))
        $('.show-menu').addClass("open");

    $('.anchor-menu.hidden').slideToggle(function() { 
        if (!$('.anchor-menu.hidden').is(":visible"))
            $('.show-menu').removeClass("open");
    });
    
    $(this).text($(this).text() == 'Show the Quick Menu' ? 'Hide the Quick Menu' : 'Show the Quick Menu');
    
  });
  
  // Add smooth scrolling for all anchors that have the .scroll class
  $(".scroll").click(function(event){
       event.preventDefault();
       //calculate destination place
       var dest=0;
       if($(this.hash).offset().top > $(document).height()-$(window).height()){
            dest=$(document).height()-$(window).height();
       }else{
            dest=$(this.hash).offset().top;
       }
       //go to destination
       $('html,body').animate({scrollTop:dest}, 750,'swing');
   });
   
   //Sub navigation toggle 
   $('.sub-nav-toggle').click(function() {
     $container = $('.sub-nav-links');
     
     if (!$container.hasClass('open')){
       $container.addClass('open');
         }
     else {
       $container.removeClass('open');
     }
   }); 
});