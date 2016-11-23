var app = {};

app.init = function ()
{
    $(".toggle-menu").on("click", function ()
    {
        $(".menu").slideToggle();
    });
    
    $(".menu .more").on("click", function ()
    {
        $(this).parent("li").find(".dropdown-menu").slideToggle();
    });
    
    
    $(".carousel").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: 
        {
            0: { items: 1 },
            450: { items: 2 },
            600: { items: 3 }
        }
    });
    
};

$(document).ready(app.init);