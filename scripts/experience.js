



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
    localStorage.removeItem("level");
})

let level = localStorage.getItem("level")

if (level == 2)
{
    $("#level-cover-2").css("display","none")
}

// const query = "Ratatouille Pasta"
// async function testAPIKey() {
//     const apiKey = '5d680de750cd428bbd866e20f5bf0d85';
//     // Simple test - just get 1 recipe
//     const testUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=3&apiKey=${apiKey}`;
    
//     try {
//         const response = await fetch(testUrl);
//         console.log('Status:', response.status);
//         console.log('Status Text:', response.statusText);
        
//         if (!response.ok) {
//             const errorData = await response.text();
//             console.log('Error Response:', errorData);
//             throw new Error(`Status ${response.status}: ${errorData}`);
//         }
        
//         const data = await response.json();
//         console.log('Success!', data);
//         return data;
//     } catch (error) {
//         console.error('Test failed:', error);
//     }
// }

// // Run this in your browser console
// testAPIKey();