document.addEventListener('DOMContentLoaded', function() {
    //  sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker initiallization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy", 
      i18n: {done: "Select"}
    });

    // select initiallization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // collapsible initiallization
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});

