$(function() {

  $('.burger').on('click', function() {
    if ( $(this).hasClass('burger_close') ) {
      $(this).removeClass('burger_close');
      $('.menuMobile').fadeOut(1000);
    } else {

      $(this).addClass('burger_close');
      $('.menuMobile').fadeIn(1000);

      //+++
      // получаем хеш активного пункта в основ меню
      var hash = $('.menu .active').attr('href');

      // при нажатии на бургер мы сбрасываем на моб пункте activeMobile и устанавливаем activeMobile на пункте,
      // который определяем из основного меню, так как именно он отслеживает скроллинг и внутри себя присваивает active
      // нужному пункту. нужный пункт основ меню находим и передаем его хеш в селектор
      $('.activeMobile').removeClass('activeMobile');
      $('.menuMobile a[href="' + hash + '"]').addClass('activeMobile');
      //+++

    }
  })
  //после клика прячем мобильное меню и крестик заменяем на бургер
  $('.menuMobile__link').on('click', function() {
    $('.menuMobile').fadeOut(1000);
    $('.burger').removeClass('burger_close');
  //+++

  //+++
  })
    //убираем моб меню, если изменился размер окна, а моб меню открыто
  $(window).on('resize', function() {
    if ($(this).width() >= 764) {
      $('.menuMobile').fadeOut(200);
      $('.burger').removeClass('burger_close');
    }
  })
});

