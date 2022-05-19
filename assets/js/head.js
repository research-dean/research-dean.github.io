$(document).ready(function() {
    $( "#nav-ul .nav-li" ).removeClass("active");
    var path = window.location.pathname
    if (path === '/') {
        $('#nav-home').addClass('active');
    } else if (path == '/about.html') {
        var hash = window.location.hash
        if (hash === '') {
            $('#nav-about').addClass('active');
        } else if (hash === '#sw') {
            $('#nav-sw').addClass('active');
        } else if (hash === '#contact') {
            $('#nav-contact').addClass('active');
        }
        
    } else if (path === '/blog.html') {
        $('#nav-blog').addClass('active');
    } else if (path === '/team.html') {
        $('#nav-team').addClass('active');
    }

    $(".nav-li").on("click", function() {
        $( "#nav-ul .nav-li" ).removeClass("active");
        $(this).addClass('active');
    })
});
