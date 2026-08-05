
// change the bg of nav on scroll

$(window).on("scroll",function ()
    {
        if ($(window).scrollTop() >10)
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
    width :450 , height:550,
    size : "stretch" , 
    showCover :true,
    useProtrait : false,
    useMouseEvents : true,
    drawShadow :true,
})

pageFlip.loadFromHTML(document.querySelectorAll('#book .page'))

document.getElementById('preBtn').addEventListener('click',()=> { pageFlip.flipPrev()})
document.getElementById('nextBtn').addEventListener('click',()=> { pageFlip.flipNext()})
