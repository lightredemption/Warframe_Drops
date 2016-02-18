$(document).ready(function() {
  $('#parts').load('views/partSearch.html');

  var part = true;

  $('#logo').click(function() {
    $(this).toggleClass('rotate');
    if (part) {
      $('#parts').load('views/keySearch.html');
    } else {
      $('#parts').load('views/partSearch.html');
    }
    part = !part;
  });

});
