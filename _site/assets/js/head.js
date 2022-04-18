$(document).ready(function() {
    $( "#nav-ul .nav-li" ).removeClass("active");
    var path = window.location.pathname
    if (path === '/') {
        $('#nav-home').addClass('active');
    } else if (path == '/about.html') {
        $('#nav-about').addClass('active');
    }
});
