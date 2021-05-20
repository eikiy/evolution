
$(function(){
  $('.go01').click(function(){ $('html,body').animate({scrollTop:$('#goThe01').offset().top-40}, 800); });
  $('.go02').click(function(){ $('html,body').animate({scrollTop:$('#goThe02').offset().top-40}, 800); });
  $('.go03').click(function(){ $('html,body').animate({scrollTop:$('#goThe03').offset().top-40}, 800); });
  $('.go04').click(function(){ $('html,body').animate({scrollTop:$('#goThe04').offset().top-40}, 800); });
  $('.go05').click(function(){ $('html,body').animate({scrollTop:$('#goThe05').offset().top-40}, 800); });
  $('.go06').click(function(){ $('html,body').animate({scrollTop:$('#goThe06').offset().top-40}, 800); });
  $('.go07').click(function(){ $('html,body').animate({scrollTop:$('#goThe07').offset().top-40}, 800); });
});


//點右邊top
 $(function(){
  $(window).scroll(function(){
    if( $(window).scrollTop() > 400 ){
      $("a.gotop").stop(true,false).animate({opacity:1},);
    }else{
      $("a.gotop").stop(true,false).animate({opacity:0},);
    }
  });
  $("a.gotop").click(function goTop(){
    $("html,body").stop(true,false).animate({scrollTop:0},900);
  });
  return false;
 });