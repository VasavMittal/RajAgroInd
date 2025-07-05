$(document).ready(function() {
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });

    $('.back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });

    // Smooth scrolling for nav links
    $('a.nav-link').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
            
            // Close mobile menu when clicking a link
            if ($('.navbar-toggler').is(':visible')) {
                $('.offcanvas').offcanvas('hide');
            }
        }
    });

    // Active nav item on scroll
    $(window).scroll(function() {
        const scrollDistance = $(window).scrollTop();
        
        $('section').each(function(i) {
            if ($(this).position().top - 100 <= scrollDistance) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    });

    // Certificate image click handler
    $('.certificate-img').click(function() {
        // This is handled by Bootstrap's modal data attributes, but we can add custom behavior here if needed
    });

    // Prevent carousel from sliding when clicking on certificate images in mobile view
    $('.carousel .certificate-img').on('click', function(e) {
        e.stopPropagation();
    });

    // Gallery image click handler
    $('.gallery-img').click(function(e) {
        // This is handled by Bootstrap's modal data attributes
        e.stopPropagation();
    });

    // Prevent carousel from sliding when clicking on gallery images in mobile view
    $('.carousel .gallery-img').on('click', function(e) {
        e.stopPropagation();
    });
});

