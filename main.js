function SliderBox1__init() {
    $(".slick").slick({
        Infinite: true,
        dots: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".slider_box > .arrows > .button_left",
        nextArrow: ".slider_box > .arrows > .button_right",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}

SliderBox1__init();

const calendarDates = document.getElementById("calendarDates");
const currentMonthElement = document.getElementById("currentMonth");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const todayBtn = document.getElementById("todayBtn"); // 새로 추가된 버튼

const today = new Date(); // 현재 날짜를 나타내는 Date 객체를 저장한다.
let currentMonth = today.getMonth();
let currentYear = today.getFullYear(); // 변수에 현재 연도를 나타내는 값을 저장한다.

function renderCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDayOfWeek = firstDayOfMonth.getDay();

    currentMonthElement.textContent = `${currentYear}년 ${currentMonth + 1}월`; // 월을 나타내는 요소에 현재 월과 연도를 설정하여 표시한다.

    calendarDates.innerHTML = "";

    // 빈 날짜(이전 달)
    for (let i = 0; i < startDayOfWeek; i++) {
        const emptyDate = document.createElement("div");
        emptyDate.classList.add("date", "empty");
        calendarDates.appendChild(emptyDate);
    }

    // 현재 달의 날짜
    for (let i = 1; i <= daysInMonth; i++) {
        const dateElement = document.createElement("div");
        dateElement.classList.add("date");

        // 오늘 날짜와 일치하는지 확인하고 클래스 추가
        if (
            currentYear === today.getFullYear() &&
            currentMonth === today.getMonth() &&
            i === today.getDate()
        ) {
            dateElement.classList.add("today");
        }

        dateElement.textContent = i;
        calendarDates.appendChild(dateElement);
    }
}

prevBtn.addEventListener("click", () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    renderCalendar();
});

nextBtn.addEventListener("click", () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    renderCalendar();
});

todayBtn.addEventListener("click", () => {
    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    renderCalendar();
});

renderCalendar();

function SliderBox2__init() {
    $(".artist-slider > .art-wrapper").slick({
        Infinite: true,
        dots: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
}

SliderBox2__init();

// 마이메뉴 토글 메뉴
$(".toggle_button").click(function () {
    let x = $(".toggle_menu");

    if (x.hasClass("show")) {
        x.removeClass("show");
    }
    else {
        x.addClass("show");
    }
});

//메인 배너 사진 변경
$(document).ready(function () {
    const images = [
        'url("img/banner1.png")',
        'url("img/banner2.png")',
        'url("img/banner3.png")'
    ];

    let currentIndex = 0;
    const $mainBgElement = $('.main_bg');

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        $mainBgElement.css('background-image', images[currentIndex]);
    }

    $mainBgElement.css('background-image', images[currentIndex]);

    setInterval(changeBackgroundImage, 5000);



    // 메뉴를 클릭했을 때 show 클래스를 토글하는 이벤트
    $("header > .tablet > .menu").click(function (event) {
        event.stopPropagation(); // 이벤트 버블링을 막아줍니다.
        $("header > .tablet > .menu > ul").toggleClass("show");
    });

    // 문서의 다른 부분을 클릭했을 때 show 클래스를 제거하는 이벤트
    $(document).click(function () {
        $("header > .tablet > .menu > ul").removeClass("show");
    });
});

$(".exhi_card").click(function () {
    if ($(this).hasClass("show")) {
        $(this).removeClass("show");
    }
    else {
        $(this).addClass("show");
    }
});