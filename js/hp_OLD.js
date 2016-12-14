var hp = {};

hp.init = function ()
{
//    $(window).scroll(function() 
//    {
//        var scrolledY = $(window).scrollTop();
//        $("body").css("background-position", "center " + (scrolledY) + "px");
//    });
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