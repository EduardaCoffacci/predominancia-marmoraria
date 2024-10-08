function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }else{
        menuMobile.classList.add('open')
    }
}

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle("rolagem", window.scrollY > 0)
})

$(document).ready(function () {
    $(".buttons").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
      let filter = $(this).attr("data-filter");
      if (filter == "todas") {
        $(".image").show(400);
      } else {
        $(".image")
          .not("." + filter)
          .hide(200);
        $(".image")
          .filter("." + filter)
          .show(400);
      }
    });
    $(".gallery").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  });

  window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.scrollY > 50) { // Define o ponto de ativação do scroll
      header.classList.add("scroll-active");
    } else {
      header.classList.remove("scroll-active");
    }
  });

  