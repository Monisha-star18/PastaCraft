
$(".music-img").click(function() {
    
    // 1. Remove the glow 
    $(".music-img").not(this).removeClass("music-click");
    
    // 2. Toggle the glow on the clicked button
    $(this).toggleClass("music-click");
});

$("#level1-frame").click(function(){
    window.location.href = "../pages/gamePage-Level1.html"
})

$(".exit").click(function(){
    window.location.href = "../index.html"
})