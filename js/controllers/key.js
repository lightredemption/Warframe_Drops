$(document).ready(function() {

  $('#keySearch').DataTable({
    "bLengthChange": false,
    "responsive": true,
    "language": {
      "search": "",
      "searchPlaceholder": "Enter key e.g. T2 Survival"
    },
    "bSort": false,
    "info": false,
    "paging": false,
    "pageLength": 8,
    "ajax": "data/keys.json",
    "columns": [{
      "data": "name"
    }, {
      "data": "part"
    }, {
      "data": "location"
    }]
  });

});
