
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
let bookWidth = 450;
let bookHeight = 450;
// Mobile
if (window.innerWidth <= 576) {
    
    bookWidth = 350;
    bookHeight = 350;

} 

const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: bookWidth,
    height: bookHeight,
    size: "fixed",
    showCover: true,
    usePortrait: true,
    useMouseEvents: true,
    drawShadow: true
});

pageFlip.loadFromHTML(document.querySelectorAll('#book .page'))

document.getElementById('preBtn').addEventListener('click',()=> { pageFlip.flipPrev()})
document.getElementById('nextBtn').addEventListener('click',()=> { pageFlip.flipNext()})
