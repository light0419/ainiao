// JavaScript Document
$(function(){
    $('.index_nav .chacha').click(function(){
        $('.index_nav').fadeOut();
    })
    $('.header .menu1').click(function(){
        $('.index_nav').fadeIn();
    })

   $(window).scroll(function(){
    if($(window).scrollTop()>10){
        $('.header').addClass('on');
    }
    else{
        $('.header').removeClass('on');
    }
   })
   if($(window).width()>768){
    $('.ejbanner').height($(window).height());
   }
}) 
