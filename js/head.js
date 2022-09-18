 $(document).ready(function() {    
     // menu ao rolar
$(window).bind('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $(".ha-header").addClass('ha-header-small');
        } else if ($(window).scrollTop() < 50) {
        $(".ha-header").removeClass('ha-header-small');
        }
      if ($(window).scrollTop() > 150) {
        $(".ha-header").addClass('ha-header-hide');
        } else if ($(window).scrollTop() < 150) {
        $(".ha-header").removeClass('ha-header-hide');
        }
      if ($(window).scrollTop() > 800) {
        $(".ha-header").addClass('ha-header-show');
        } 
        else if ($(window).scrollTop() < 800) {
        $(".ha-header").removeClass('ha-header-show');
        }
});
});