$(function() {
  $('.modal__overlay, .modal__close').click(function() {
    $('.modal__overlay, .modal').hide();
  //  снять запрет прокрутки
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  //   $(window).off('scroll');
  })
  // запрет скроллинга пока открыто модальное окно
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });
  // var current = $(window).scrollTop();
  // $(window).scroll(function() {
  //   $(window).scrollTop(current);
  // });

  $('.modal__overlay').fadeTo(1000, 0.7);

  var modal_height = $('.modal').outerHeight();
  // console.log('modal_height', modal_height);
  $('.modal').css({
    "display" : "block",
    "top": -(modal_height) + "px",
    "left" : "50%",
    "margin-left" : -($('.modal').outerWidth()/2) + "px",
    "margin-top" : -($('.modal').outerHeight()/2) + "px",
    "opacity" : "0"
  });
  $('.modal').animate({
    "top" : $(window).height()/2 + "px",
    "opacity" : "1"

  }, 1000)
})