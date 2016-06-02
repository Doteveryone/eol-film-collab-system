$('.button').click(function() {
  $(this).find('i').toggleClass('fa-plus').toggleClass('fa-minus');
  $(this).toggleClass('active');
});

$('.bottom-button').click(function() {
  var buttons = $('.button');
  buttons.each(function() {
    var buttonEl = $(this).find('h2');
    var name = buttonEl.data('accordion-button');
    if (buttonEl.attr('data-open-screen')) {
      buttonEl.removeAttr('data-open-screen');
    } else {
      buttonEl.attr('data-open-screen', name)
    }
  });
});

