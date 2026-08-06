
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