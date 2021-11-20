function scrollSuave(seletor) {

  $(seletor).click(function(event) {

    event.preventDefault();
    var target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 300)
  })
}

scrollSuave('a[href*=sobre]')
scrollSuave('a[href*=produtos]')
scrollSuave('a[href*=avaliacoes]')