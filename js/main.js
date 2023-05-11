function headerChange() {
  $(window).scroll(function () {
    var cambio = $(window).scrollTop() > 0 ? true : false;

    if (cambio) {
      $(".wrapper_header").addClass("up");
    } else {
      $(".wrapper_header").removeClass("up");
    }
  });
}

function menu() {
  $(".btn_menu").click(function () {
    $(this).toggleClass("visible_menu");
    $(".content_nav").toggleClass("show_menu");
  });
}
