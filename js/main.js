$(document).ready(function() {
  $('#parts').load('views/partSearch.html');

  $('#logo').click(function() {
    $(this).toggleClass('rotate');
    $('#parts').load('views/keySearch.html');
  });

});
