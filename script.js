$(document).ready(function(){
    $("#quokatalk").hide;
    $("#biebertalk").hide;
    $("#bieber").click(function(){
        $("#biebertalk").fadeIn(1000);
        $("#biebertalk").css('display','inline-block');
        $("#biebertalk").fadeOut(1000);
    })

    $("#quoka").click(function(){
        $("#quokatalk").fadeIn(1000);
        $("#quokatalk").css('display','inline-block');
        $("#quokatalk").fadeOut(1000);
    })
})