$(window).load(function(){
  $('.modal__linktowinners').click(function(e){
    e.preventDefault();
    $('.menu__link__smoothScroll[href=\'#winners\']').trigger('click')
  })
})