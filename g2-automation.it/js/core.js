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
};

$(document).ready(app.init);