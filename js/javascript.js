$(document).ready(function () {

    Fancybox.bind("[data-fancybox]", {});

    $('.banner-owl').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        margin:0,
        nav:false,
        dots:false
    });

    $('.references-owl').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        margin:24,
        nav:true,
        navText: ['<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><g id="References"><path id="-e-arrow-banner" class="s0" d="m1.6 15.5l-1.1-1 6.7-6.4-6.7-6.4 1.1-0.9 6.7 6.3 1.1 1-1.1 1z"/></g></svg>','<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16" width="10" height="16"><g id="References"><path id="-e-arrow-banner" class="s0" d="m1.6 15.5l-1.1-1 6.7-6.4-6.7-6.4 1.1-0.9 6.7 6.3 1.1 1-1.1 1z"/></g></svg>'],
        dots:false,
        responsive: {
            0: {
                items:1,
            },
            576: {
                items:2,
            },
            993: {
                items:3,
            },
        }
    });

    document.querySelector('.navbar-toggler').addEventListener('click', function () {

        document.querySelector('.animated-icon').classList.toggle('open');

    });

    if($(window).width() < 768) {
        $(".nav-item.dropdown-hover > a").click(function (e) { 
            e.preventDefault();
        });
    }

});