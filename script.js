(function ($) {
  $(window).on('load hashchange', function(){
    
    // Hide everything
    $('.content-region').hide();
    $('.main-menu a').removeClass('active');

    // Pick region from hash or default to first link
    var region = location.hash || $('.main-menu a:first').attr('href');

    // Show selected section
    $(region).show();

    // Highlight menu link
    $('.main-menu a[href="'+ region +'"]').addClass('active'); 
    
  });
})(jQuery);
