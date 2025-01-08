// 상단 햄버거 버튼 누르면 메뉴 노출
$(".menu_button").click(function(){
    if($(".menu_box").hasClass("show")){
        $(".menu_box").removeClass("show");
    }
    else{
        $(".menu_box").addClass("show");
    }
});


// '후원' 버튼 클릭하면 팝업테이블 노출
$('.button > .pop').click(function() {
    $('.popup_table, .overlay').stop().fadeIn();

    // 팝업 외의 body 스크롤 정지
    $('body').css('overflow', 'hidden');
});

$('.close').click(function() {
    $('.popup_table, .overlay').stop().fadeOut(function() {
        // 팝업 외의 body 스크롤 복원
        $('body').css('overflow', '');
    });
});

$(document).click(function(event) {
    if (!$(event.target).closest('.popup_table, .button > .pop').length) {
        $('.popup_table, .overlay').stop().fadeOut(function() {
            // 팝업 외의 body 스크롤 복원
            $('body').css('overflow', '');
        });
    }
});