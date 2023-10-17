 $(function(){
  $(".choosing").click(function(){
    $(this).next(".language-list").stop(true, true).slideToggle();
    return false;
  });
});

$(function () {
  $('.popup-link').magnificPopup({
      removalDelay: 300,
      mainClass: 'mfp-fade',
    });
});

$(function(){
  $('p.scroll').click(function(){ $('html,body').animate({scrollTop:$('#go-datatech').offset().top - 71 }, 800); });
                
});

// $(function(){
//   $('.pant-go').click(function(){ $('html,body').animate({scrollTop:$('#goThe01').offset().top}, 800); });
//   return false;
// });

// // animate
// $(function(){
//   new WOW().init();
// });