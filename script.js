$(document).ready(function(){
    let count = 0;
    $("#quokatalk").hide;
    $("#biebertalk").hide;
    $("#bieber").click(function(){
        $("#biebertalk").fadeIn(1000);
        $("#biebertalk").css('display','inline-block');
        $("#biebertalk").fadeOut(1000);
        $("#biebertalk").click(() => { count++; opening(count);})
    })

    $("#quoka").click(function(){
        $("#quokatalk").fadeIn(1000);
        $("#quokatalk").css('display','inline-block');
        $("#quokatalk").fadeOut(1000);
        $("#quokatalk").click(() => { count++; opening(count);});
    })
    
    $("#dino").click(function(){
        $("#dino").attr("src","dinofire.png");
        setTimeout(()=>$("#dino").attr("src", "dino.png"), 2000);
    })
})

function opening(count){
    if(count == 2){ window.open(window.open("meungzziDay/1stDay.html"));};
}