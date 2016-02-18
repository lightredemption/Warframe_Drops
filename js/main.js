$(document).ready(function() {

  $('#partSearch').DataTable({
    "bLengthChange": false,
    "responsive": true,
    "oLanguage": { "sSearch": "" },
    "bSort": false,
    "info": false,
    "paging": false,
    "pageLength": 8,
    "ajax": "data/parts.json",
    "language": {
        "searchPlaceholder": "Search records"
    },
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
