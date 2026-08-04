
// change the bg of nav on scroll

$(window).on("scroll",function ()
    {
        if ($(window).scrollTop() >50)
        {
            $("nav").addClass("change-bg");
        }
        else
        {
            $("nav").removeClass("change-bg");
        }
    })