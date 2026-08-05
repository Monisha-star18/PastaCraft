
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

//book flip

const pageFlip = new St.PageFlip(document.getElementById('book') , {
    width :350 , height:450,
    size : "fixed" , 
    showCover :true,
    useProtrait : false,
    useMouseEvents : false,
    drawShadow :true,
})

pageFlip.loadFromHTML(document.querySelectorAll('#book .page'))

document.getElementById('preBtn').addEventListener('click',()=> { pageFlip.flipPrev()})
document.getElementById('nextBtn').addEventListener('click',()=> { pageFlip.flipNext()})
