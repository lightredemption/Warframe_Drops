$(document).ready(function() {

  $('#keySearch').DataTable({
    "bLengthChange": false,
    "responsive": true,
    "language": {
      "search": "",
      "searchPlaceholder": "Enter key e.g. Tower 2 Survival"
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
