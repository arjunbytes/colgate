$(document).ready(function () {
    // Show dropdown on hover
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

    // Prevent the dropdown from closing when clicking inside it
    $(".dropdown-menu").on("click", function (e) {
        e.stopPropagation();
    });
});