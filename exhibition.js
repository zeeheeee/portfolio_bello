$(".menu_button").click(function(){
    if($(".menu_box").hasClass("show")){
        $(".menu_box").removeClass("show");
    }
    else{
        $(".menu_box").addClass("show");
    }
});

$(".box").click(function(event){
    event.stopPropagation();
    let num = $(".box").index(this) + 1;
    $(".review_ct").fadeOut(400);
    $("#review_ct" + num).fadeIn(400);
});

$(document).click(function(){
    $(".review_ct").fadeOut(400);
});

$(".close").click(function(){
    $(".review_ct").fadeOut(400);
})

$(".review_ct").click(function(event){
    event.stopPropagation();
});