
$(document).ready(function () {

     let level = 1;
    // to have the flow of game we use the step count so the next step cant be done before completing the previous step
    let stepCount = 1;
    updateShadow();

    // egg count is create to display image div according to the no of count 
    let eggClickCount =0 ; 

    $("#whiteFlour").click(function(){
        // step 1 
        if(stepCount ==  1)
        {
            $("#step1-div").css("display", "block");

            $("#step-1-completed").addClass("showcompleted");
            // step count increase 
            stepCount ++ ;

            // if in case the egg is clicked multiple times before the step 1 we can see the egg carcked as it will become more than 2 
            eggClickCount =0 ;
            updateShadow();
        }
        
    })

    


    $(".eggs-div").click(function(){

        // egg count increase on a click

        eggClickCount ++ ;
        
        // egg clicked 1st time and also step 2 
        if(eggClickCount == 1 && stepCount ==  2)
        {
            $("#step1-div").css("display", "none");
            $("#step2-div").css("display", "block");
            $("#eggs-div").css("display","none")
            $("#eggs2-div").css("display","block")
            stepCount ++ ;
            updateShadow();
        }
        
        // egg clicked 2nd time and also step 3 
        else if(eggClickCount ==2 && stepCount ==  3)
        {
            $("#step2-div").css("display", "none");
            $("#step3-div").css("display", "block");
            $("#eggs2-div").css("display","none")
            $("#eggs1-div").css("display","block")

            $("#step-2-completed").addClass("showcompleted");

            stepCount ++ ;
            updateShadow();
        }

    })

    $("#spoon").click(function(){
        if(stepCount ==  4)
        {
            $("#step3-div").css("display", "none");
            $("#step4-div").css("display", "block");
            setTimeout(function(){ $("#arrow").css("display", "block"); },400)
            stepCount ++ ;
            updateShadow();
        }
        
    })

    $("#arrow").click(function(){
        if(stepCount ==  5)
        {
            $("#step5-div").css("display", "block");
            $("#step4-div").css("display", "none");
            $("#arrow").css("display", "none");
            stepCount ++ ;
            updateShadow();
        }
    })

    $("#arrow").click(function(){
        if(stepCount ==  6)
        {
            $("#step5-div").css("display", "block");
            setTimeout(function(){ $("#arrow-2").css("display", "block"); },400)
            $("#step4-div").css("display", "none");
            $("#arrow").css("display", "none");
            
            stepCount ++ ;
            updateShadow();
        }
    })

    $("#arrow-2").click(function(){
        if(stepCount ==  7)
        {
            $("#step5-div").css("display", "none");
            $("#arrow-2").css("display", "none");
            $("#step6-div").css("display", "block");     
            
            $("#step6-div").fadeOut(200,function()
            {
                
                $("#step7-div").fadeIn(1000)

            })

            $("#step-3-completed").addClass("showcompleted");
            
            stepCount ++ ;

            updateShadow();
        }
    })

    $("#wisker").click(function(){
        if(stepCount ==  8)
        {
            $("#step7-div").css("display", "none");
            $("#step8-div").css("display", "block");     
            setTimeout(function(){ $("#arrow").css("display", "block"); },400)
            stepCount ++ ;
            updateShadow();
        }
    })

    $("#arrow").click(function(){
        if(stepCount ==  9)
        {
            $("#step9-div").css("display", "block");
            setTimeout(function(){ $("#arrow-2").css("display", "block"); },400)
            $("#step8-div").css("display", "none");
            $("#arrow").css("display", "none");

            stepCount ++ ;
            updateShadow();
            
        }
    })

    let rollCilckCount =0
    $("#arrow-2").click(function(){
        if(stepCount ==  10)
        {
            $("#step9-div").css("display", "none");
            $("#arrow-2").css("display", "none");
            $("#step10-div").css("display", "block");     
            
            $("#step10-div").fadeOut(1000,function()
            {
                
                $("#step11-div").fadeIn(1000)

            })

             $("#step-4-completed").addClass("showcompleted");

            setTimeout(function(){
                stepCount ++ ;
            updateShadow();
            rollCilckCount =0;
            },2100)
        }
    })

    
    $("#rollingPin").click(function()
    {
        rollCilckCount ++
        if (stepCount == 11 && rollCilckCount ==1 )
        {
            $("#step11-div").css("display", "none");
            $("#step12-roll1-div").css("display","block");

            $("#step12-roll1-div").fadeOut(1000,function()
            {
                $("#step12-roll2-div").fadeIn(1000).fadeOut(1000,function()
                {
                    $("#step12-roll3-div").fadeIn(1000).fadeOut(1000,function()
                    {
                        $("#step12-roll4-div").fadeIn(1000).fadeOut(1000,function()
                        {
                            $("#step12-roll5-div").fadeIn(1000).fadeOut(1000,function()
                            {
                                $("#step12-roll6-div").fadeIn(1000).fadeOut(1000,function()
                                {
                                     $("#step12-roll7-div").fadeIn(1000)
                                 })
                            })
                        })
                    })
                })
                
            })
            
            

            setTimeout(function(){
                $("#step-5-completed").addClass("showcompleted");
                stepCount ++ ;
                updateShadow();

            },13000)

        }
        
    })


    $("#kinfe").click(function () {
        if (stepCount == 12) {
            $("#step12-roll7-div").css("display","none")
            $("#step13-cut1-div").css("display","block")
            $("#step13-cut1-div").fadeOut(1000,function()
            {
                $("#step13-cut2-div").fadeIn(1000).fadeOut(1000,function()
                {
                    $("#step13-cut3-div").fadeIn(1000).fadeOut(1000,function()
                    {
                        $("#step13-cut4-div").fadeIn(1000).fadeOut(1000,function()
                        {
                            $("#step14-div").fadeIn(1000)
                        })
                    })
                })
            })

            $("#step-6-completed").addClass("showcompleted");

            setTimeout (function(){$("#step-7-completed").addClass("showcompleted");},8200)
            stepCount ++ ;
            updateShadow();
            showCompleted();
        }
    });

    
    function updateShadow() 
    {

        $("#whiteFlour").removeClass("shadowClass");
        $("#eggs").removeClass("shadowClass");
        $("#spoon").removeClass("shadowClass");
        $("#wisker").removeClass("shadowClass");
        $("#rollingPin").removeClass("shadowClass");
        $("#kinfe").removeClass("shadowClass");

        switch (stepCount) {

            case 1:
                $("#whiteFlour").addClass("shadowClass");
                
                break;

            case 2:
                $("#eggs").addClass("shadowClass");
                break;

            case 3:
                $("#eggs-2").addClass("shadowClass");
                break;

            case 4:
                $("#spoon").addClass("shadowClass");
                break;

            case 8:
                $("#wisker").addClass("shadowClass");
                break;

            case 11:
                $("#rollingPin").addClass("shadowClass");
                break;

            case 12:
                $("#kinfe").addClass("shadowClass");
                break;

            case 13:
                $("#kinfe").removeClass("shadowClass");
                break;

            default:
                $("#whiteFlour").removeClass("shadowClass");
                $("#eggs").removeClass("shadowClass");
                $("#spoon").removeClass("shadowClass");
                $("#wisker").removeClass("shadowClass");
                $("#rollingPin").removeClass("shadowClass");
                $("#kinfe").removeClass("shadowClass");
                break;

        }
    }


    function showCompleted()
    {
        if(stepCount == 13)
            {
                setTimeout(function(){
                    $(".completedSign").css("display","block")
                    confetti({
                        particleCount: 500,   // number of pieces
                        spread: 90,           // how wide it fans out
                        origin: { y: 0.6 },  // where it fires from (0=top, 1=bottom)
                        colors: ["#360ae8", "#c70874", "#ffffff"] // your brand colors
                    });
                },10000)
                
                
                level ++;
                localStorage.setItem("level", level);


               setTimeout(function(){
                window.location.href = "../pages/experience.html"
               },13000)


               
            }
    }

    




})
