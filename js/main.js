$(document).ready(function() {
  var parts;

  $.getJSON('data/parts.json', function(response) {
    parts = response;
    console.log(parts);
  });

});
