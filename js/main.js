$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  /* ~~~~~~~~~~~~~~~ Navigation ~~~~~~~~~~~~~~~ */
  new bootstrap.ScrollSpy(document.body, {
    target: "#fixedNavbar",
  });

  $("#fixedNavbar ul li a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
    if ($(window).width() <= 991) {
      $(".navbar").slideUp(300);
      $(".menu-btn").removeClass("active");
      $("body").removeClass("overflow");
    }
  });
  /* ~~~~~~~~~~~~~~~ Fixed Header ~~~~~~~~~~~~~~~ */
  var prevScroll = $(window).scrollTop();

  $(this).scrollTop() >= 250
    ? $("header").addClass("header-scroll")
    : $("header").removeClass("header-scroll fixsedt");
  $(window).scroll(function () {
    $(this).scrollTop() >= 250
      ? $("header").addClass("header-scroll")
      : $("header").removeClass("header-scroll fixsedt");

    var currentScroll = $(window).scrollTop();
    prevScroll + 10 < currentScroll && prevScroll > 0
      ? $("header").removeClass("fixsedt")
      : $("header").addClass("fixsedt"),
      (prevScroll = currentScroll);
  });
  /* ~~~~~~~~~~~~~~~ Mobile Menu ~~~~~~~~~~~~~~~ */
  $(".menu-btn").on("click", function (e) {
    $("body").toggleClass("overflow");
    $(".navbar").slideToggle(400);
    $(".menu-btn").toggleClass("active");
    $("header").addClass("fixsedt")
  });
  /* ~~~~~~~~~~~~~~~ App Slider ~~~~~~~~~~~~~~~ */
  var AppSwiper = new Swiper(".app-slider .swiper", {
    loop: true,
    autoplay: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".app-slider .swiper-button-next",
      prevEl: ".app-slider .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.7,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
      },
    },
  });
  /* ~~~~~~~~~~~~~~~ Partners Slider ~~~~~~~~~~~~~~~ */
  var PartnersSwiper = new Swiper(".partners-slider .swiper", {
    loop: true,
    // autoplay: true,
    navigation: {
      nextEl: ".partners-slider .swiper-button-next",
      prevEl: ".partners-slider .swiper-button-prev",
    },

    breakpoints: {
      0: {
        spaceBetween: 17,
        slidesPerView: 1,
      },
      767: {
        spaceBetween: 10,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 10,
        slidesPerView: 3,
      },
      1199: {
        spaceBetween: 17,
        slidesPerView: 3,
      },
    },
  });

  /* ~~~~~~~~~~~~~~~ FAQ ~~~~~~~~~~~~~~~ */
  $(".acc-head").click(function () {
    $(".acc-head").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("display") == "none") {
      $(this).siblings().slideDown(500);
    } else {
      $(this).siblings().slideUp(500);
    }
    $(".acc-head").not(this).siblings().slideUp(500);
  });

  /* ~~~~~~~~~~~~~~~ States Counter ~~~~~~~~~~~~~~~ */
  var a = 0;
  $(window).scroll(function () {
    if (a == 0 && $(this).scrollTop() >= $(".states-sec").offset().top - 500) {
      $(".state-num").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 1000,
              easing: "swing",
              step: function (now) {
                $(this).text(now.toFixed(1));
              },
            }
          );
      });
      a++;
    }
  });
});
