var hp = {};

hp.init = function ()
{
    $(".books-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: 
        {
            0: { items: 1 },
            450: { items: 2 },
            600: { items: 3 }
        }
    });
};