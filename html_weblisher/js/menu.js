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
