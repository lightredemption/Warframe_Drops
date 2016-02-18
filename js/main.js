$(document).ready(function() {
  $('#main').load('views/partSearch.html');

  $('#logo').click(function() {
    console.log('hello');
    $(this).toggleClass('rotate');
  });

});
