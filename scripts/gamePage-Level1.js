
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
        console.log("click")
        console.log(stepCount)
        if(stepCount ==  4)
        {
            $("#step3-div").css("display", "none");
            $("#step4-div").css("display", "block");
            setTimeout(function(){ $("#arrow").css("display", "block"); },300)
            stepCount ++ ;
        }
        
    })

    $("#")



})
