$(document).ready(function(){
    let count = 0;
    $("#quokatalk").hide;
    $("#biebertalk").hide;
    $("#bieber").click(function(){
        count++;
        $("#biebertalk").fadeIn(1000);
        $("#biebertalk").css('display','inline-block');
        $("#biebertalk").fadeOut(1000);
        if(count == 2){
            window.open("meungzziDay/1stDay.html");
        }
    })

    $("#quoka").click(function(){
        count++;
        $("#quokatalk").fadeIn(1000);
        $("#quokatalk").css('display','inline-block');
        $("#quokatalk").fadeOut(1000);
        if(count == 2){
            window.open("meungzziDay/1stDay.html");
        }
    })

    
})