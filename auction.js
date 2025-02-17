// 마이메뉴 토글 메뉴
$(".toggle_button").click(function(){
    let x = $(".toggle_menu");

    if(x.hasClass("show")){
        x.removeClass("show");
    }
    else{
        x.addClass("show");
    }
});

$(document).ready(function() {
    let currentIndex = 0;
    const itemsPerPage = 8;

    function showArtBoxes(startIndex, count) {
        $('.art_box').slice(startIndex, startIndex + count).css("display", "block");
        currentIndex += count;

        if (currentIndex >= $('.art_box').length) {
            $('.more').hide();
        }
    }

    $('.more').click(function() {
        const additionalItems = 4;
        showArtBoxes(currentIndex, additionalItems);
    });

    showArtBoxes(currentIndex, itemsPerPage);
});

$(document).ready(function() {
    $(".search_text").keyup(function() {
        var k = $(this).val().toLowerCase();
        $(".arts > .art_box").hide();

        $(".arts > .art_box").filter(function() {
            return $(this).find(".art_name").text().toLowerCase().includes(k);
        }).show();
    });
});