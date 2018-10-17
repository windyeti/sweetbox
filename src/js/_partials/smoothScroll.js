// smoothScrolling
$(document).ready(function () {
  $(".menu__link__smoothScroll").click(function(e){
    e.preventDefault();
    $(document).off("scroll");

    var hash = $(this).attr("href");
    var target = $(hash);

    if ($(window).width() > 764) {
      $(".active").removeClass("active");
      $(this).addClass("active");

    }
    else {
      $(".activeMobile").removeClass("activeMobile");
      $(this).addClass("activeMobile");
    }
    $("html, body").animate({
      scrollTop: target.offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  });
});

$(function() {
  var sections = {};
  var i = 0;

  function getSections() {
    $('.section').each(function(ind, item) {
      var hash = $(item).attr('id');
      sections[hash] = item.offsetTop - 80;
      })
  }
  getSections();
  $(window).on('resize', getSections);
  $(window).on('scroll', function() {
    var scrollPosition = $(window).scrollTop();
    $.each(sections, function(key, item) {
      if (item <= scrollPosition) {
        $('.active').attr('class', 'menu__link menu__link__smoothScroll');
        $('.menu a[href*=' + key + ']').attr('class', 'menu__link menu__link__smoothScroll active');
      }
    })
  })
})