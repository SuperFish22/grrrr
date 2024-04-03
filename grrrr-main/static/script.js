// пролайдер
$(window).on('load', function () {
  $('.preloader').addClass("preloader-remove");  
});

$(document).ready(function () {
    $('.btn-5').on('click', function () {
      $('html, body').animate({
        scrollTop: $('#models-homes').offset().top
      }, 1000);
    });
});

$(document).ready(function () {
    $('.up-button').on('click', function () {
      $('html, body').animate({
        scrollTop: $('#name').offset().top
      }, 1000);
    });
});

$(document).ready(function () {
  $('.btn-4').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#questions').offset().top
    }, 1000);
  });
});


const hashtag = $("#hashtag");
let left = 0;
const speed = 50;
const interval = 0;
const pixelsPerUpdate = speed * (interval / 1000);

function updateTicker() {
    left -= pixelsPerUpdate;
  
    hashtag.css("left", left + "px");
  
    if (left < -hashtag.outerWidth()) {
      const tickerText = hashtag.text();
      hashtag.text(tickerText + " " + tickerText);
      left = 0;
    }
  
    if (left < -hashtag.outerWidth() ) {
      left = 0;
    }
  
    setTimeout(updateTicker, interval);
}

updateTicker();

