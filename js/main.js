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



// Main Navigation System 
$(document).ready(function() {
    $('a.nav-link').click(function(event) {
      event.preventDefault();

      // Hide all sections
      $('.section').addClass('d-none');

      // Show the selected section
      const target = $(this).attr('href');
      $(target).removeClass('d-none');

      // Update active link
      $('a.nav-link').removeClass('active');
      $(this).addClass('active');

      // Toggle the visibility of the <i> tags
      $('a.nav-link i').addClass('d-none'); // Hide all <i> tags
      $(this).find('i').removeClass('d-none'); // Show the <i> tag of the active link
    });
  });