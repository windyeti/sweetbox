// ---- первая версия Меню с простым затуханием --------
// $(function() {
//   $('.burger').on('click', function() {
//     if ( $(this).hasClass('burger_close') ) {
//       $(this).removeClass('burger_close');
//       $('.menuMobile').removeClass('menuMobile_show');
//     } else {
//       $(this).addClass('burger_close');
//       $('.menuMobile').addClass('menuMobile_show');
//     }
//   })
//       $('.menuMobile__link').on('click', function() {
//         $('.menuMobile').removeClass('menuMobile_show');
//         $('.burger').removeClass('burger_close');
//   })
// })
$(function() {

  $('.burger').on('click', function() {
    if ( $(this).hasClass('burger_close') ) {
      $(this).removeClass('burger_close');
      $('.menuMobile').fadeOut(1000);
    } else {
      $(this).addClass('burger_close');
      $('.menuMobile').fadeIn(1000);
    }
  })
  //после клика прячем мобильное меню и крестик заменяем на бургер
  $('.menuMobile__link').on('click', function() {
    $('.menuMobile').fadeOut(1000);
    $('.burger').removeClass('burger_close');
  })
    //убираем моб меню, если изменился размер окна, а моб меню открыто
  $(window).on('resize', function() {
    if ($(this).width() >= 764) {
      $('.menuMobile').fadeOut(200);
      $('.burger').removeClass('burger_close');
    }
  })
});
// --------------
//   простое переключение пунктов меню
// --------------
// $(function() {
//   $(".menu__link").on('click', function (e) {
//     e.preventDefault();
//     $(document).off("scroll");
//     $(".menu" + " .menu__link.active").removeClass("active");
//     $(".active").removeClass("active");
//     $(this).addClass("active");
//   })
// })
// -------------- end

// ---- просмотр номера версии jQuery
// $(function() {
//   console.log('версия:', $.fn.jquery)
// })
// ---- end

// --- проба
// $(function() {
//   function getMinimum() {
//     return Math.min($('#main'), $('#prisez'), $('#steps'));
//   }
//   $(window).on('scroll', function() {
//     var minimum = Math.min(
//       $('#main').position.top - $(this).scrollTo(),
//       $('#prisez').position.top,
//       $('#steps').position.top
//      );
//   })
// })
//  ----- end проба
