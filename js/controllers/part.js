$(document).ready(function() {

  $('#logo').click(function() {
    console.log('hello');
    $(this).toggleClass('rotate');
  });

  $('#partSearch').DataTable({
    "bLengthChange": false,
    "responsive": true,
    "language": {
      "search": "",
      "searchPlaceholder": "Enter warframe, parts, or locations e.g. Tower 3 Survival"
    },
    "bSort": false,
    "info": false,
    "paging": false,
    "pageLength": 8,
    "ajax": "data/parts.json",
    "columns": [{
      "data": "type"
    }, {
      "data": "name"
    }, {
      "data": "part"
    }, {
      "data": "mission"
    }, {
      "data": "location"
    }, {
      "data": "rotation",
      "bSearchable": false
    }]
  });

});
