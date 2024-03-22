


// $(document).ready(function($) {
// 	$('#test_click').click(function() {
// 		$('.popup-fade').fadeIn();
// 		return false;
// 	});	
	
// 	$('.popup-close').click(function() {
// 		$(this).parents('.popup-fade').fadeOut();
// 		return false;
// 	});		
 
// 	$(document).keydown(function(e) {
// 		if (e.keyCode === 27) {
// 			e.stopPropagation();
// 			$('.popup-fade').fadeOut();
// 		}
// 	});
	
// 	$('.popup-fade').click(function(e) {
// 		if ($(e.target).closest('.popup').length == 0) {
// 			$(this).fadeOut();					
// 		}
// 	});
// });

// const openFormBtn = document.getElementById('open-form-btn');
// const signupForm = document.getElementById('signup-form');

// openFormBtn.addEventListener('click', () => {
//   signupForm.style.display = 'block';
// });

// document.addEventListener('click', (event) => {
//   if (event.target !== signupForm && event.target.id !== 'open-form-btn') {
//     signupForm.style.display = 'none';
//   }
// });

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
  
    if (left < -hashtag.outerWidth() + containerWidth) {
      left = 0;
    }
  
    setTimeout(updateTicker, interval);
}
updateTicker();

// const button = document.querySelector('.up-button');
// const footer = document.querySelector('.footer');

// const stickyButton = () => {
//   const buttonTop = button.getBoundingClientRect().top + window.scrollY;
//   const footerTop = footer.getBoundingClientRect().top + window.scrollYS;

//   if (buttonTop <= footerTop - button.offsetHeight) {
//     button.style.position = 'absolute';
//     button.style.bottom = '20px';
//   } else {
//     button.style.position = 'sticky';
//     button.style.bottom = 'auto';
//   }
// };

// window.addEventListener('scroll', stickyButton);
// stickyButton();