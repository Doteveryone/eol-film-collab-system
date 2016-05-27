$('.button').click(function() {
  $(this).find('i').toggleClass('fa-plus').toggleClass('fa-minus');
  $(this).toggleClass('active');
});
