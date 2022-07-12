// window.onresize = screen;
// window.onload = screen;

// function screen() {
//   myWidth = window.innerWidth;
// }

// document.getElementById("size").innerHTML = "Width: " + mywidth + "px";
(function ($) {
  "use strict";
  $('.slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      // Enable Next/Prev arrows
      arrows: true,
    // prev arrow
    prevArrow: '<button type="button" data-role="none" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',

    // next arrow
    nextArrow: '<button type="button" data-role="none" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

})(jQuery);

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 1 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 1 : value;
  value < 2 ? value = 2 : '';
  value--;
  document.getElementById('number').value = value;
}