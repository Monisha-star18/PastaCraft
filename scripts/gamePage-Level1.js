
$(document).ready(function () {

    $("#whiteFlour").click(function(){
        $("#step1-div").css("display", "block");
    })

    let eggClickCount =0 ; 


    $("#eggs").click(function(){

        eggClickCount ++ ;
        
        if(eggClickCount == 1)
        {
            $("#step1-div").css("display", "none");
            $("#step2-div").css("display", "block");
        }

        else if(eggClickCount ==2)
        {
            $("#step2-div").css("display", "none");
            $("#step3-div").css("display", "block");
        }

    })

})
