$(document).ready(function() {

  $('#partSearch').DataTable({
    "bLengthChange": false,
    "responsive": true,
    "language": {
      "search": "",
      "searchPlaceholder": "Enter warframe, parts, or locations e.g. Ash Prime Chassis"
    },
    "bSort": false,
    "info": false,
    "paging": true,
    "iDisplayLength": 8,
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
