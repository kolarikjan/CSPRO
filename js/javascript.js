$(document).ready(function () {

    Fancybox.bind("[data-fancybox]", {});

    $('.owl-banner-technologies').owlCarousel({
        items:1,
        loop:false,
        rewind:true,
        navText:['<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 10 8" width="10" height="8"><g id="Technology"><path id="-e-icon-arrow-banner" class="s0" d="m0 4l4.1 3.8q0.2 0.2 0.6 0.2 0.4 0 0.6-0.2v-0.1q0.3-0.2 0.3-0.5 0-0.4-0.3-0.6l-1.8-1.8h5.6c0.5 0 0.9-0.3 0.9-0.8 0-0.5-0.4-0.8-0.9-0.8h-5.6l1.8-1.8q0.3-0.2 0.3-0.6 0-0.3-0.3-0.5v-0.1q-0.2-0.2-0.6-0.2-0.4 0-0.6 0.2l-4.1 3.8z"/></g></svg>','<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 10 8" width="10" height="8"><g id="Technology"><path id="-e-icon-arrow-banner" class="s0" d="m0 4l4.1 3.8q0.2 0.2 0.6 0.2 0.4 0 0.6-0.2v-0.1q0.3-0.2 0.3-0.5 0-0.4-0.3-0.6l-1.8-1.8h5.6c0.5 0 0.9-0.3 0.9-0.8 0-0.5-0.4-0.8-0.9-0.8h-5.6l1.8-1.8q0.3-0.2 0.3-0.6 0-0.3-0.3-0.5v-0.1q-0.2-0.2-0.6-0.2-0.4 0-0.6 0.2l-4.1 3.8z"/></g></svg>'],
        margin:40,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2,
            }
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
    
    scrollAnimationSet();

});