$(function() {
    return $(".carousel").on("slide.bs.carousel", function(ev) {
      $("img.lazy").lazyload();
    });
  });