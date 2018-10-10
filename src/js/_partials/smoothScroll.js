$(document).ready(function () {
  // $(document).on("scroll", onScroll);
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
      // $(document).on("scroll", onScroll);
    });
  });
});

$(function() {

  // var section = document.querySelectorAll(".section");
  var sections = {};
  var i = 0;

  function getSections() {
    var section = document.querySelectorAll(".section");
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop-80;
    });
    console.log('sections - resize:', sections);
  }

  getSections();

  // console.log(sections);
  // при ресайзе окна пересчитываем sections (начальные точки секций, по которым переключаются пункты меню при скроллинге)
  window.onresize = getSections;

  window.onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sections) {
      if (sections[i] <= scrollPosition) {

        console.log(i, ':', sections[i], 'scrollPosition:', scrollPosition);
        console.log(sections);
        console.log('---------------------------------------------');

        document.querySelector('.active').setAttribute('class', 'menu__link ');
        document.querySelector('.menu a[href*=' + i + ']').setAttribute('class', 'menu__link active');
      }
    }
  };
});