// Show dropdown on hover
$(document).ready(function () {
    $(".nav-item.dropdown").hover(
        function () {
            $(this)
                .find(".dropdown-menu")
                .first()
                .stop(true, true)
                .slideDown(150);
        },
        function () {
            $(this)
                .find(".dropdown-menu")
                .first()
                .stop(true, true)
                .slideUp(150);
        }
    );
    $(".dropdown-menu").on("click", function (e) {
        e.stopPropagation();
    });
});


/* 
$(document).ready(function () {
    $('a.nav-link').click(function (event) {
        event.preventDefault();

        $('.section').addClass('d-none');

        const target = $(this).attr('href');
        console.log('Target Section:', target); 
        $(target).removeClass('d-none');

        $('a.nav-link').removeClass('active');
        $(this).addClass('active');

        $('a.nav-link i').addClass('d-none');
        $(this).find('i').removeClass('d-none');
    });
});
 */