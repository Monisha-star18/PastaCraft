
$(document).ready(function () {

    // to have the flow of game we use the step count so the next step cant be done before completing the previous step
    let stepCount = 1;

    // egg count is create to display image div according to the no of count 
    let eggClickCount =0 ; 

    $("#whiteFlour").click(function(){
        // step 1 
        if(stepCount ==  1)
        {
            $("#step1-div").css("display", "block");
        }
        // step count increase 
        stepCount ++ ;

        // if in case the egg is clicked multiple times before the step 1 we can see the egg carcked as it will become more than 2 
        eggClickCount =0 ;
    })

    


    $("#eggs").click(function(){

        // egg count increase on a click

        eggClickCount ++ ;
        
        // egg clicked 1st time and also step 2 
        if(eggClickCount == 1 && stepCount ==  2)
        {
            $("#step1-div").css("display", "none");
            $("#step2-div").css("display", "block");
            stepCount ++ ;
        }
        
        // egg clicked 2nd time and also step 3 
        else if(eggClickCount ==2 && stepCount ==  3)
        {
            $("#step2-div").css("display", "none");
            $("#step3-div").css("display", "block");
            stepCount ++ ;
        }

    })

    $("#spoon").click(function(){
        if(stepCount ==  4)
        {
            $("#step3-div").css("display", "none");
            $("#step4-div").css("display", "block");
            setTimeout(function(){ $("#arrow").css("display", "block"); },400)
            stepCount ++ ;
        }
        
    })

    $("#arrow").click(function(){
        if(stepCount ==  5)
        {
            $("#step5-div").css("display", "block");
            $("#step4-div").css("display", "none");
            $("#arrow").css("display", "none");
            stepCount ++ ;
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

            stepCount ++ ;
        }
    })

    $("#wisker").click(function(){
        if(stepCount ==  8)
        {
            $("#step7-div").css("display", "none");
            $("#step8-div").css("display", "block");     
            setTimeout(function(){ $("#arrow").css("display", "block"); },400)
            stepCount ++ ;
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
        }
    })

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

            stepCount ++ ;
        }
    })

    $("#rollingPin").click(function()
    {
        if (stepCount == 11)
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
            stepCount ++ ;

        }
        
    })


    $("#kinfe").click(function () {
        if (stepCount == 12) {
            $("#step12-roll7-div").css("display","none")
            $("#step13-cut1-div").fadeOut(1000,function()
            {
                $("#step13-cut2-div").fadeOut(1000,function()
                {
                    $("#step13-cut3-div").fadeOut(1000,function()
                    {
                        $("#step13-cut4-div").fadeOut(1000,function()
                        {
                            $("#step14-div").fadeIn(1000)
                        })
                    })
                })
            })
        }
    });




})
