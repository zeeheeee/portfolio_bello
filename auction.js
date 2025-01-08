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

// nav바 메뉴 마우스오버 효과
$(".nav_menu").mouseover(
    function(){
        let i = $(this).index()+1;
        $(".menu"+i).stop().slideDown(200);
    }).mouseout(
    function(){
        let i = $(this).index()+1;
        $(".menu"+i).stop().slideUp(200);
});

$(document).ready(function() {
    let currentIndex = 0;
    const itemsPerPage = 10;

    function showArtBoxes(startIndex, count) {
        $('.art_box').slice(startIndex, startIndex + count).css("display", "block");
        currentIndex += count;

        if (currentIndex >= $('.art_box').length) {
            $('.more').hide();
        }
    }

    $('.more').click(function() {
        const additionalItems = 5;
        showArtBoxes(currentIndex, additionalItems);
    });

    showArtBoxes(currentIndex, itemsPerPage); // 초기 로드시 10개의 art_box를 표시합니다.
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