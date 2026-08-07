
$(document).ready(function () {

    let stepCount = 1;
    let eggClickCount =0 ; 

    $("#whiteFlour").click(function(){
        if(stepCount ==  1)
        {
            $("#step1-div").css("display", "block");
        }
        stepCount ++ ;
        eggClickCount =0 ;
    })

    


    $("#eggs").click(function(){

        eggClickCount ++ ;
        console.log(eggClickCount)
        
        if(eggClickCount == 1 && stepCount ==  2)
        {
            $("#step1-div").css("display", "none");
            $("#step2-div").css("display", "block");
            stepCount ++ ;
        }

        else if(eggClickCount ==2 && stepCount ==  3)
        {
            $("#step2-div").css("display", "none");
            $("#step3-div").css("display", "block");
            stepCount ++ ;
        }

    })

})
