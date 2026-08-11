



$(".music-img").click(function() {
    
    // 1. Remove the glow 
    $(".music-img").not(this).removeClass("music-click");
    
    // 2. Toggle the glow on the clicked button
    $(this).toggleClass("music-click");
});

$("#level1-frame").click(function(){
    window.location.href = "../pages/gamePage-Level1.html"
})

$("#level2-frame").click(function(){
    window.location.href = "../pages/gamePage-Level2.html"
})

$(".exit").click(function(){
    window.location.href = "../index.html"
    localStorage.removeItem("level");
})

let level = Number(localStorage.getItem("level"))


switch(level)
{
    case 2 :
        $("#level-cover-2").css("display","none");
        break;

    case 3 :
        $("#level-cover-3").css("display","none");
        break;

    case 4 :
        $("#level-cover-4").css("display","none");
        break;
}
