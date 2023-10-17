var sections = $('bg-datatech'),
  circles = $('circles-wrapper'),
  c_height = sections.outerHeight();

$(window).on('scroll', function () {
  // var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    circles.removeClass('reset');
    // var top = $(this).offset().top - nav_height,
    //     bottom = top + $(this).outerHeight();
    
    // if (cur_pos >= top && cur_pos <= bottom) {
    //   circles.removeClass('reset');
    // }
  });
});


// $(window).on('load', function () {
//   $('.bg-datatech').fine(".circles-wrapper").removeClass('reset');
// });

$(window).on(scroll('bg-datatech'), function () {
  $(this).fine(".circles-wrapper").removeClass('reset');
});


// old -------
// var sections = $('section')
//   , nav = $('nav')
//   , nav_height = nav.outerHeight();

// $(window).on('scroll', function () {
//   var cur_pos = $(this).scrollTop();
  
//   sections.each(function() {
//     var top = $(this).offset().top - nav_height,
//         bottom = top + $(this).outerHeight();
    
//     if (cur_pos >= top && cur_pos <= bottom) {
//       nav.find('a').removeClass('active');
//       sections.removeClass('active');
      
//       $(this).addClass('active');
//       nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
//     }
//   });
// });

// nav.find('a').on('click', function () {
//   var $el = $(this)
//     , id = $el.attr('href');
  
//   $('html, body').animate({
//     scrollTop: $(id).offset().top - nav_height
//   }, 500);
  
//   return false;
// });